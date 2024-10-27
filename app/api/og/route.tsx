import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

const font = fetch(
  new URL("../../../public/fonts/kaisei-tokumin-bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export async function GET(req: NextRequest) {
  try {
    const fontData = await font;
    const { searchParams } = req.nextUrl;
    const postTitle = searchParams.get("title");

    if (!postTitle) {
      return new Response("No title provided", { status: 500 });
    }

    const heading =
      postTitle.length > 140 ? `${postTitle.substring(0, 140)}...` : postTitle;

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
              fontSize: 130,
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
      }
    );
  } catch (error) {
    return new Response("Failed to generate image", { status: 500 });
  }
}
