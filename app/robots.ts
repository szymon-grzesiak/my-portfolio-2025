import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/_next/", 
          "/api/", 
          "/static/",
        ],
      },
    ],
    sitemap: "https://szymongrzesiak.dev/sitemap.xml",
  };
}
