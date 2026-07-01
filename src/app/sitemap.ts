import { MetadataRoute } from "next";
import { posts } from "@/lib/posts";
import { siteConfig } from "@/config/site";
import { projectCaseStudies } from "@/lib/data";

interface Post {
  slug: string;
  title: string;
  description?: string;
  date: string;
  published: boolean;
  tags?: string[];
  body: string;
  slugAsParams: string;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url;

  const publishedPosts = posts.filter((post: Post) => post.published);

  const blogPostEntries = publishedPosts.map((post: Post) => ({
    url: `${baseUrl}/${post.slug}`,
    lastModified: new Date(post.date),
    priority: 0.8,
    changeFrequency: "weekly" as const,
  }));

  const staticRoutes = [
    {
      url: baseUrl,
      priority: 1.0,
      changeFrequency: "daily" as const,
    },
    {
      url: `${baseUrl}/pl`,
      priority: 1.0,
      changeFrequency: "daily" as const,
    },
    {
      url: `${baseUrl}/blog`,
      priority: 0.9,
      changeFrequency: "daily" as const,
    },
    {
      url: `${baseUrl}/pl/blog`,
      priority: 0.9,
      changeFrequency: "daily" as const,
    },
    {
      url: `${baseUrl}/projects`,
      priority: 0.8,
      changeFrequency: "weekly" as const,
    },
    {
      url: `${baseUrl}/pl/projects`,
      priority: 0.8,
      changeFrequency: "weekly" as const,
    },
    {
      url: `${baseUrl}/contact`,
      priority: 0.8,
      changeFrequency: "weekly" as const,
    },
    {
      url: `${baseUrl}/pl/contact`,
      priority: 0.8,
      changeFrequency: "weekly" as const,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      priority: 0.5,
      changeFrequency: "monthly" as const,
    },
    {
      url: `${baseUrl}/pl/privacy-policy`,
      priority: 0.5,
      changeFrequency: "monthly" as const,
    },
  ];

  const projectEntries = projectCaseStudies.flatMap((project) => [
    {
      url: `${baseUrl}/projects/${project.slug}`,
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    {
      url: `${baseUrl}/pl/projects/${project.slug}`,
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
  ]);

  return [
    ...staticRoutes,
    ...blogPostEntries,
    ...projectEntries,
  ];
}
