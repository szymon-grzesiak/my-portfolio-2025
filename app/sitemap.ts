import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: "https://szymongrzesiak.com",
      lastModified: new Date(),
    },
  ];
}


// import { getBlogPosts } from 'app/db/blog';

// export default async function sitemap() {
//   let blogs = getBlogPosts().map((post) => ({
//     url: `https://leerob.io/blog/${post.slug}`,
//     lastModified: post.metadata.publishedAt,
//   }));

//   let routes = ['', '/blog', '/guestbook', '/uses', '/work'].map((route) => ({
//     url: `https://leerob.io${route}`,
//     lastModified: new Date().toISOString().split('T')[0],
//   }));

//   return [...routes, ...blogs];
// }