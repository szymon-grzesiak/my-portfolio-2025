import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(
  process.env.RESEND_API_KEY || "re_placeholder_for_build"
);

const contactSchema = z.object({
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
  website: z.string().optional(), // Honeypot field
});

// Simple in-memory rate limiting (resets on server restart)
// For production, consider using Redis or a database
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function getRateLimitKey(ip: string): string {
  return `contact_${ip}`;
}

function isRateLimited(ip: string): boolean {
  const key = getRateLimitKey(ip);
  const now = Date.now();
  const windowMs = 60 * 60 * 1000; // 1 hour
  const maxRequests = 3; // 3 requests per hour

  const record = rateLimitMap.get(key);

  if (!record) {
    rateLimitMap.set(key, { count: 1, resetTime: now + windowMs });
    return false;
  }

  if (now > record.resetTime) {
    // Reset the window
    rateLimitMap.set(key, { count: 1, resetTime: now + windowMs });
    return false;
  }

  if (record.count >= maxRequests) {
    return true;
  }

  record.count++;
  return false;
}

function getClientIP(request: NextRequest): string {
  // Try to get real IP from various headers
  const forwarded = request.headers.get("x-forwarded-for");
  const realIP = request.headers.get("x-real-ip");
  const cfIP = request.headers.get("cf-connecting-ip"); // Cloudflare

  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }

  if (realIP) {
    return realIP;
  }

  if (cfIP) {
    return cfIP;
  }

  return "unknown";
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const clientIP = getClientIP(request);

    // Check rate limit
    if (isRateLimited(clientIP)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Validate request body
    const validatedData = contactSchema.parse(body);

    // Bot protection: check honeypot field
    if (validatedData.website && validatedData.website.trim() !== "") {
      console.log("Bot detected - honeypot field filled");
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <me@szymongrzesiak.dev>",
      to: ["szymongrzesiak.pl@gmail.com"], // Your email
      subject: "New message from portfolio",
      html: `
        <h2>New message from portfolio</h2>
        <p><strong>From:</strong> ${validatedData.email}</p>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message.replace(/\n/g, "<br>")}</p>
      `,
      text: `
        New message from portfolio
        
        From: ${validatedData.email}
        
        Message:
        ${validatedData.message}
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Error sending message" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Message sent successfully", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in contact API:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid data", details: error.issues },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
