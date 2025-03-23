import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

// Edge Runtime jest odpowiednie dla API generowania obrazów
export const runtime = "edge";

// Ładowanie czcionki - asynchronicznie pobieramy dane przed użyciem
const font = fetch(
  new URL("../../../public/fonts/kaisei-tokumin-bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export async function GET(req: NextRequest) {
  try {
    const fontData = await font;
    const { searchParams } = req.nextUrl;
    const postTitle = searchParams.get("title");

    // Sprawdzenie czy tytuł istnieje
    if (!postTitle) {
      return new Response("No title provided", { status: 500 });
    }

    // Przycinanie długiego tytułu
    const heading =
      postTitle.length > 140 ? `${postTitle.substring(0, 140)}...` : postTitle;
    
    // Dynamiczny rozmiar czcionki zależny od długości tytułu
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
            backgroundImage: "url(https://szymongrzesiak.dev/og-bg.jpg)",
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
        // Dodanie nagłówków cache dla optymalizacji wydajności
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
