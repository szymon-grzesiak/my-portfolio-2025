import { MetadataRoute } from "next";
import { posts } from "#site/content";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://szymongrzesiak.dev";

  // ZMIANA: Filtrujemy posty, aby uwzględnić tylko te opublikowane.
  // To kluczowe, aby nie umieszczać w sitemapie wersji roboczych.
  const publishedPosts = posts.filter((post) => post.published);

  const blogPostEntries = publishedPosts.map((post) => ({
    url: `${baseUrl}/${post.slug}`,
    // DOBRZE: Używasz faktycznej daty publikacji lub ostatniej modyfikacji posta.
    lastModified: new Date(post.date),
    priority: 0.8,
    changeFrequency: 'weekly' as const,
  }));

  const staticRoutes = [
    {
      url: baseUrl,
      // ŹLE: lastModified: new Date()
      // ZMIANA: Usuwamy 'lastModified'. Lepiej nie podawać tej daty,
      // niż podawać codziennie fałszywą. Google sam ustali, kiedy przeskanować stronę.
      priority: 1.0,
      changeFrequency: 'daily' as const,
    },
    {
      url: `${baseUrl}/blog`,
      priority: 0.9,
      changeFrequency: 'daily' as const,
    },
    {
      url: `${baseUrl}/resoursea`,
      priority: 0.7,
      changeFrequency: 'monthly' as const,
    },
    {
      url: `${baseUrl}/vocablaze`,
      priority: 0.7,
      changeFrequency: 'monthly' as const,
    },
    {
      url: `${baseUrl}/tags`,
      priority: 0.6,
      changeFrequency: 'weekly' as const,
    },
  ];

  // Generowanie stron tagów
  const allTags = new Set(publishedPosts.flatMap((post) => post.tags || []));
  const tagEntries = Array.from(allTags).map((tag) => {
    const slugifiedTag = tag.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
    return {
      url: `${baseUrl}/tags/${slugifiedTag}`,
      priority: 0.5, // Tagi mają niższy priorytet
      changeFrequency: 'weekly' as const,
    };
  });

  return [...staticRoutes, ...blogPostEntries, ...tagEntries];
}