// @ts-nocheck

import { MetadataRoute } from "next";
import { posts } from "#site/content";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let blogs = posts.map((post) => ({
    url: `https://szymongrzesiak.dev/${post.slug}`,
    lastModified: post.date,
  }));

  let routes = ["", "/blog"].map((route) => ({
    url: `https://szymongrzesiak.dev${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  let tags = posts.reduce((acc, post) => {
    if (!post.tags) return acc;
    post.tags.forEach((tag) => {
      const slugifiedTag = tag
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-") // Zamienia wszystkie nie-alfanumeryczne znaki na myślniki
        .replace(/^-+|-+$/g, ""); // Usuwa myślniki z początku i końca

      if (!acc.includes(slugifiedTag)) {
        acc.push(slugifiedTag);
      }
    });
    return acc;
  }, [] as string[]);

  return [
    ...routes,
    ...blogs,
    ...tags.map((tag) => ({
      url: `https://szymongrzesiak.dev/tags/${tag}`,
      lastModified: new Date().toISOString().split("T")[0],
    })),
  ];
}
