import { MetadataRoute } from "next";
import { posts } from "#site/content";
import { slug } from "github-slugger";
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
      url: `${baseUrl}/blog`,
      priority: 0.9,
      changeFrequency: "daily" as const,
    },
    {
      url: `${baseUrl}/tags`,
      priority: 0.6,
      changeFrequency: "weekly" as const,
    },
    {
      url: `${baseUrl}/projects`,
      priority: 0.8,
      changeFrequency: "weekly" as const,
    },
  ];

  const allTags = new Set(
    publishedPosts.flatMap((post: Post) => post.tags || [])
  );
  const tagEntries = Array.from(allTags).map((tag) => {
    return {
      url: `${baseUrl}/tags/${slug(tag)}`,
      priority: 0.5,
      changeFrequency: "weekly" as const,
    };
  });

  const projectEntries = projectCaseStudies.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  return [
    ...staticRoutes,
    ...blogPostEntries,
    ...tagEntries,
    ...projectEntries,
  ];
}
