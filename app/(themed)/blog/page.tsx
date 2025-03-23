import { posts } from "#site/content";
import { PostItem } from "@components/blog/post-item";
import { Tag } from "@components/blog/tag";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllTags, sortPosts, sortTagsByCount } from "@/lib/utils";
import { Metadata } from "next";
import { BackgroundBeamsWithCollision } from "@/components/blog/background-beams-with-collision";
import Image from "next/image";
import coolGuy from "@/assets/coolguy2.webp";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, design, and more.",
};

export default async function BlogPage() {
  const sortedPosts = sortPosts(posts.filter((post) => post.published));

  const tags = getAllTags(posts);
  const sortedTags = sortTagsByCount(tags);

  return (
    <div className="relative z-10">
      <div className="relative h-64">
        <BackgroundBeamsWithCollision>
          <h2 className="flex flex-col relative z-20 text-3xl md:text-5xl lg:text-7xl font-bold text-center text-black font-sans tracking-tight">
            Read my thoughts on
            <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-blue-300 via-blue-500 to-blue-800 py-4">
                <span>Software Development.</span>
              </div>
            </div>
          </h2>
        </BackgroundBeamsWithCollision>
        <Image
          src={coolGuy}
          alt="Sitting figure"
          width={150}
          height={150}
          className="absolute bottom-[-55px] right-20 z-[120]"
        />
      </div>
      <div className="md:pl-[150px] xl:pl-10 container flex flex-col-reverse md:flex-row max-w-5xl px-6 py-6 gap-10 lg:py-10">
        {sortedPosts?.length > 0 ? (
          <ul className="flex flex-col">
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
        <Card className="bg-white/90 row-start-3 h-fit border-2 border-black shadow-[4px_4px]">
          <CardHeader>
            <CardTitle>Tags</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-3">
            {sortedTags?.map((tag) => (
              <Tag tag={tag} key={tag} count={tags[tag]} />
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
