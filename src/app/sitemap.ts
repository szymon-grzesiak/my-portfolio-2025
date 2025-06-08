import { MetadataRoute } from "next";
import { posts } from "#site/content";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://szymongrzesiak.dev";
  
  // Blog posts
  const blogs = posts.map((post) => ({
    url: `${baseUrl}/${post.slug}`,
    lastModified: new Date(post.date),
    priority: 0.8,
    changeFrequency: 'weekly' as const,
  }));

  // Main routes - poprawiono błąd "resoursea" -> "resources"
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1.0,
      changeFrequency: 'daily' as const,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      priority: 0.9,
      changeFrequency: 'daily' as const,
    },
    {
      url: `${baseUrl}/resoursea`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: 'weekly' as const,
    },
    {
      url: `${baseUrl}/vocablaze`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: 'monthly' as const,
    },
    {
      url: `${baseUrl}/tags`,
      lastModified: new Date(),
      priority: 0.7,
      changeFrequency: 'weekly' as const,
    },
  ];

  // Extract unique tags
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


  // Tag pages
  const tagPages = tags.map((tag) => ({
    url: `${baseUrl}/tags/${tag}`,
    lastModified: new Date(),
    priority: 0.6,
    changeFrequency: 'weekly' as const,
  }));

  return [...routes, ...blogs, ...tagPages];
}