import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://szymongrzesiak.dev/sitemap.xml",
    host: 'https://szymongrzesiak.dev',
  };
}
