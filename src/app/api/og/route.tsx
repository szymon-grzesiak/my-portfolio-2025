import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  try {
    // Definiujemy baseUrl wewnątrz funkcji, tuż przed użyciem
    const baseUrl = process.env.NODE_ENV === 'production'
      ? `https://szymongrzesiak.dev`
      : 'http://localhost:3000';

    const { searchParams } = req.nextUrl;
    const postTitle = searchParams.get("title");

    if (!postTitle) {
      return new Response("Title parameter is missing", { status: 400 });
    }
    
    // Używamy baseUrl do pobrania czcionki
    const fontData = await fetch(
      new URL('/fonts/kaisei-tokumin-bold.ttf', baseUrl)
    ).then((res) => res.arrayBuffer());

    const heading =
      postTitle.length > 140 ? `${postTitle.substring(0, 140)}...` : postTitle;
    
    const fontSize = postTitle.length > 100 ? 100 : 130;

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            // Używamy baseUrl do pobrania tła
            backgroundImage: `url(${baseUrl}/og-bg.jpg)`,
          }}
        >
          <div
            style={{
              marginLeft: 190,
              marginRight: 190,
              display: "flex",
              fontSize: fontSize,
              fontFamily: "Kaisei Tokumin",
              letterSpacing: "-0.05em",
              fontStyle: "normal",
              color: "white",
              lineHeight: "120px",
              whiteSpace: "pre-wrap",
            }}
          >
            {heading}
          </div>
        </div>
      ),
      {
        width: 1920,
        height: 1080,
        fonts: [
          {
            name: "Kaisei Tokumin",
            data: fontData,
            style: "normal",
          },
        ],
        headers: {
          'Cache-Control': 'public, max-age=86400, stale-while-revalidate=3600',
        },
      }
    );
  } catch (error) {
    console.error("OG Image generation error:", error);
    return new Response("Failed to generate image", { status: 500 });
  }
}