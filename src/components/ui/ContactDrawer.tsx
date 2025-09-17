"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { TbMailShare } from "react-icons/tb";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const contactSchema = z.object({
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
  website: z.string().optional(), // Honeypot field - should be empty
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactDrawer = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error" | "rate-limited"
  >("idle");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Bot protection: if honeypot field is filled, it's likely a bot
    if (data.website && data.website.trim() !== "") {
      console.log("Bot detected - honeypot field filled");
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          message: data.message,
          website: data.website || "", // Include honeypot for server-side validation
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
        setTimeout(() => {
          setIsOpen(false);
          setSubmitStatus("idle");
        }, 2000);
      } else {
        if (response.status === 429) {
          setSubmitStatus("rate-limited");
        } else {
          setSubmitStatus("error");
        }
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Drawer
      open={isOpen}
      onOpenChange={setIsOpen}
      direction={isMobile ? "bottom" : "right"}
    >
      <DrawerTrigger asChild>
        <button className="mb-10 md:mb-0 flex justify-center items-end gap-3 rounded-2xl p-2 bg-white/20 md:border md:border-gray-300 hover:bg-white/40 transition-all duration-300">
          <span className="text-3xl font-bold lineThroughEffect">
            Contact Me
          </span>
          <TbMailShare className="text-3xl shrink-0 mb-1 text-indigo-400" />
        </button>
      </DrawerTrigger>
      <DrawerContent
        className={`
        ${
          isMobile
            ? "h-[80vh] inset-x-0 bottom-0 rounded-t-[20px]"
            : "h-full w-[400px] inset-y-0 right-0 rounded-l-[20px] rounded-r-none"
        }
        backdrop-blur-xl bg-white/30 border border-white/20 shadow-2xl
        before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:to-transparent before:rounded-inherit before:pointer-events-none
      `}
      >
        <DrawerHeader className="relative z-10">
          <DrawerTitle className="text-black text-xl font-semibold">
            Get in touch
          </DrawerTitle>
          <DrawerDescription className="text-black/80">
            Send me a message - I&apos;ll get back to you as soon as possible!
          </DrawerDescription>
        </DrawerHeader>

        <div className="p-6 flex-1 relative z-10">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2 text-black"
              >
                Your email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                {...register("email")}
                className={`bg-white/10 backdrop-blur-sm border-white/20 text-black placeholder:text-black/60 focus:border-white/40 focus:ring-white/20 ${
                  errors.email ? "border-red-400" : ""
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2 text-black"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                placeholder="Write your message here..."
                {...register("message")}
                className={`w-full px-3 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-md 
                  focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/40 resize-none 
                  text-black placeholder:text-black/60 ${
                    errors.message ? "border-red-400" : ""
                  }`}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Honeypot field - hidden from users but visible to bots */}
            <div
              className="absolute left-[-9999px] opacity-0 pointer-events-none"
              aria-hidden="true"
            >
              <label htmlFor="website">Leave this field empty</label>
              <input
                id="website"
                type="text"
                {...register("website")}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {submitStatus === "success" && (
              <div className="text-green-600 text-sm font-medium bg-green-500/20 p-3 rounded-lg backdrop-blur-sm">
                ✅ Message sent successfully!
              </div>
            )}

            {submitStatus === "error" && (
              <div className="text-red-300 text-sm font-medium bg-red-500/20 p-3 rounded-lg backdrop-blur-sm">
                ❌ Error sending message. Please try again.
              </div>
            )}

            {submitStatus === "rate-limited" && (
              <div className="text-yellow-600 text-sm font-medium bg-yellow-500/20 p-3 rounded-lg backdrop-blur-sm">
                ⏱️ Too many requests. Please wait before sending another
                message.
              </div>
            )}
          </form>
        </div>

        <DrawerFooter className={`relative z-10`}>
          <Button
            onClick={handleSubmit(onSubmit)}
            disabled={isSubmitting}
            className="w-full bg-indigo-400 hover:bg-indigo-400/80 text-black border-white/20 backdrop-blur-sm transition-all duration-300 cursor-pointer"
          >
            {isSubmitting ? "Sending..." : "Send message"}
          </Button>
          <DrawerClose asChild>
            <Button
              variant="outline"
              className="w-full bg-black/10 hover:bg-black/20 text-black border-white/20 backdrop-blur-sm cursor-pointer"
            >
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default ContactDrawer;
