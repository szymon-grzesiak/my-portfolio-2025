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
    "Artykuły i przemyślenia na temat programowania, technologii webowych i moich doświadczeń.",
  alternates: {
    canonical: `${siteConfig.url}/pl/blog`,
  },
  openGraph: {
    title: "Blog | Szymon Grzesiak",
    description:
      "Artykuły i przemyślenia na temat programowania, technologii webowych i moich doświadczeń.",
    url: `${siteConfig.url}/pl/blog`,
  },
};
export default async function BlogPage() {
  const polishPosts = posts.filter((post) => post.published && post.locale === "pl");
  const sortedPosts = sortPosts(polishPosts);

  const tags = getAllTags(polishPosts);
  const sortedTags = sortTagsByCount(tags);

  return (
    <div className="relative purple-haze z-10">
      <div className="relative h-64">
        <BackgroundBeamsWithCollision>
          <h1 className="flex flex-col lg:pl-20 xl:pl-0 relative z-20 text-3xl md:text-5xl lg:text-7xl font-bold text-center text-black font-sans tracking-tight">
            Przemyślenia na temat
            <div className="relative mx-auto inline-block w-max filter-[drop-shadow(0px_1px_3px_rgba(27,37,80,0.14))]">
              <div className="relative bg-clip-text text-transparent bg-no-repeat bg-linear-to-r from-indigo-300 via-main to-indigo-800 py-4">
                <span>programowania.</span>
              </div>
            </div>
          </h1>
        </BackgroundBeamsWithCollision>
        <Image
          src={coolGuy}
          alt="Siedząca postać"
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
          <p>Nic tu jeszcze nie ma</p>
        )}
      </div>
    </div>
  );
}
