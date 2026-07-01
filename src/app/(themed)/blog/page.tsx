import { posts } from "@/lib/posts";
import { PostItem } from "@/components/blog/post-item";
import { getAllTags, sortPosts, sortTagsByCount } from "@/lib/utils";
import { Metadata } from "next";
import { BackgroundBeamsWithCollision } from "@/components/blog/background-beams-with-collision";
import Image from "next/image";
import coolGuy from "@/assets/coolguy2.webp";
import { TagSearch } from "@/components/blog/tag-search";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read my thoughts on software development, design, and more. I share insights, tutorials, and experiences in web development.",
  keywords: [
    "Blog",
    "Software Development",
    "Web Development",
    "Next.js",
    "React",
    "TypeScript",
  ],
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
  openGraph: {
    title: "Blog | Szymon Grzesiak",
    description:
      "Read my thoughts on software development, design, and more. I share insights, tutorials, and experiences in web development.",
    url: `${siteConfig.url}/blog`,
    type: "website",
    images: [
      {
        url: "https://szymongrzesiak.dev/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Szymon Grzesiak Portfolio",
      },
    ],
  },
};
export default async function BlogPage() {
  const englishPosts = posts.filter((post) => post.published && post.locale === "en");
  const sortedPosts = sortPosts(englishPosts);

  const tags = getAllTags(englishPosts);
  const sortedTags = sortTagsByCount(tags);

  return (
    <div className="relative z-10">
      <div className="relative h-64">
        <BackgroundBeamsWithCollision>
          <h1 className="flex flex-col lg:pl-20 xl:pl-0 relative z-20 text-3xl md:text-5xl lg:text-7xl font-bold text-center text-black font-sans tracking-tight">
            Read my thoughts on
            <div className="relative mx-auto inline-block w-max filter-[drop-shadow(0px_1px_3px_rgba(27,37,80,0.14))]">
              <div className="relative bg-clip-text text-transparent bg-no-repeat bg-linear-to-r from-indigo-300 via-main to-indigo-800 py-4">
                <span>Software Development.</span>
              </div>
            </div>
          </h1>
        </BackgroundBeamsWithCollision>
        <Image
          src={coolGuy}
          alt="Sitting figure"
          width={150}
          height={150}
          className="absolute bottom-[-55px] right-20 z-120"
        />
      </div>
      <div className="md:pl-[130px] xl:pl-10 container flex flex-col max-w-5xl px-6 py-6 gap-6 lg:py-10 mx-auto">
        <TagSearch tags={tags} sortedTags={sortedTags} />
        {sortedPosts?.length > 0 ? (
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {sortedPosts.map((post) => {
              const { slug, date, title, description, tags } = post;
              return (
                <li key={slug} className="w-full">
                  <PostItem
                    slug={slug}
                    date={date}
                    title={title}
                    description={description}
                    tags={tags}
                  />
                </li>
              );
            })}
          </ul>
        ) : (
          <p>Nothing to see here yet</p>
        )}
      </div>
    </div>
  );
}
