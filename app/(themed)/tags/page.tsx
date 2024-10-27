import { getAllTags, sortTagsByCount } from "@/lib/utils";
import { Metadata } from "next";
import { posts } from "#site/content";
import { Tag } from "@/components/blog/tag";
import { BackgroundBeamsWithCollision } from "@components/blog/background-beams-with-collision";
import coolGuy from "@/assets/coolguy2.webp";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Tags",
  description: "Topic I've written about",
};

export default async function TagsPage() {
  const tags = getAllTags(posts);
  const sortedTags = sortTagsByCount(tags);

  return (
    <div className="relative flex flex-col justify-center z-10">
    <div className="relative h-64">
      <BackgroundBeamsWithCollision>
        <h2 className="pl-12 flex flex-col relative z-20 text-4xl lg:text-7xl font-bold text-center text-black font-sans tracking-tight">
          Read my thoughts on
          <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-blue-300 via-blue-500 to-blue-800 py-4">
              <span className="">Software Development.</span>
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
    <div className="w-full flex justify-center">
    <div className="ml-[140px] relative p-10 w-fit max-w-4xl mt-14 bg-white/90 rounded-xl border-2 border-black shadow-[4px_4px]">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">Tags</h1>
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {sortedTags?.map((tag) => (
          <Tag tag={tag} count={tags[tag]} key={tag} />
        ))}
      </div>
    </div>
    </div>
  </div>
  );
}