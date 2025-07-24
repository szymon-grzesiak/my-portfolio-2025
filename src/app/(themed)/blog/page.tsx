import { posts } from "#site/content";
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
    title: "Vocablaze",
    description: "Boost your language skills with Vocablaze, an interactive learning platform. Master new vocabulary effectively with smart flashcards and personalized quizzes.",
    url: `${siteConfig.url}/vocablaze`,
  },
};

export default async function BlogPage() {
  const sortedPosts = sortPosts(posts.filter((post) => post.published));

  const tags = getAllTags(posts);
  const sortedTags = sortTagsByCount(tags);

  return (
    <div className="relative z-10">
      <div className="relative h-64">
        <BackgroundBeamsWithCollision>
          <h1 className="flex flex-col lg:pl-20 xl:pl-0 relative z-20 text-3xl md:text-5xl lg:text-7xl font-bold text-center text-black font-sans tracking-tight">
            Read my thoughts on
            <div className="relative mx-auto inline-block w-max filter-[drop-shadow(0px_1px_3px_rgba(27,37,80,0.14))]">
              <div className="relative bg-clip-text text-transparent bg-no-repeat bg-linear-to-r from-blue-300 via-blue-500 to-blue-800 py-4">
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
      <div className="md:pl-[150px] xl:pl-10 container flex flex-col-reverse md:flex-row max-w-5xl px-6 py-6 gap-10 lg:py-10">
        {sortedPosts?.length > 0 ? (
          <ul className="flex flex-col gap-4">
            {sortedPosts.map((post) => {
              const { slug, date, title, description, tags } = post;
              return (
                <li key={slug}>
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
        <div className="w-full">
          <TagSearch tags={tags} sortedTags={sortedTags} />
        </div>
      </div>
    </div>
  );
}
