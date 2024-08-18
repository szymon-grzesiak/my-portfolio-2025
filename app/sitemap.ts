import { MetadataRoute } from "next";
import { posts } from "#site/content";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let blogs = posts.map((post) => ({
    url: `https://szymongrzesiak.dev/blog/${post.slug}`,
    lastModified: post.date,
  }));

  let routes = ['', '/blog'].map((route) => ({
    url: `https://szymongrzesiak.dev${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...blogs];
}