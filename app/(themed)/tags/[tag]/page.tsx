import { posts } from "#site/content";
import { PostItem } from "@/components/blog/post-item";
import { Card, CardContent  } from "@/components/ui/card";
import { getAllTags, getPostsByTagSlug, sortTagsByCount } from "@/lib/utils";
import { BackgroundBeamsWithCollision } from "@/components/blog/background-beams-with-collision";
import { siteConfig } from "@/config/site";
import { slug } from "github-slugger";
import { Metadata } from "next";
import Image from "next/image";
import coolGuy from "@/assets/coolguy2.webp";
import { TagSearch } from "@/components/blog/tag-search";

interface TagPageProps {
  params: Promise<{
    tag: string;
  }>;
}

export async function generateMetadata({
  params,
}: TagPageProps): Promise<Metadata> {
  const { tag } = await params;
  const formattedTag = tag
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `Explore Posts About ${formattedTag} | Szymon Grzesiak`,
    description: `Discover insightful articles and thoughts on ${formattedTag}. Stay updated with the latest posts and ideas.`,
    authors: { name: siteConfig.author },
    openGraph: {
      title: `Explore Posts About ${formattedTag}`,
      description: `Discover insightful articles and thoughts on ${formattedTag}. Stay updated with the latest posts and ideas.`,
      type: "website",
      url: `https://szymongrzesiak.dev/tags/${tag}`,
      images: [
        {
          url: `/api/og?title=${formattedTag}`,
          width: 1200,
          height: 630,
          alt: formattedTag,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Explore Posts About ${formattedTag}`,
      description: `Discover insightful articles and thoughts on ${formattedTag}. Stay updated with the latest posts and ideas.`,
      images: [`https://szymongrzesiak.dev/api/og?title=${formattedTag}`],
    },
    alternates: {
      canonical: `https://szymongrzesiak.dev/tags/${tag}`,
    },
  };
}

export const generateStaticParams = () => {
  const tags = getAllTags(posts);
  const paths = Object.keys(tags).map((tag) => ({ tag: slug(tag) }));
  return paths;
};

export default async function TagPage({ params }: TagPageProps) {
  const { tag } = await params;
  const title = tag.split("-").join(" ");

  const allPosts = getPostsByTagSlug(posts, tag);
  const displayPosts = allPosts.filter((post) => post.published);
  const tags = getAllTags(posts);
  const sortedTags = sortTagsByCount(tags);

  return (
    <div className="relative z-10">
      <div className="relative h-64">
        <BackgroundBeamsWithCollision>
          <h2 className="flex flex-col relative z-20 text-3xl lg:text-7xl font-bold text-center text-black font-sans tracking-tight">
            Read my thoughts on
            <div className="relative mx-auto inline-block w-max filter-[drop-shadow(0px_1px_3px_rgba(27,37,80,0.14))]">
              <div className="relative bg-clip-text text-transparent bg-no-repeat bg-linear-to-r from-blue-300 via-blue-500 to-blue-800 py-4">
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
          className="absolute bottom-[-55px] right-20 z-120"
        />
      </div>
      <div className="px-6 md:pl-[160px] xl:pl-10 relative container max-w-5xl py-6 lg:py-10">
        <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
          <div className="flex-1 space-y-4">
            <h1 className="inline-block font-black text-4xl lg:text-5xl capitalize">
              {title}
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6 mt-8">
          <Card className="w-full col-span-12 border-none row-start-1 h-fit sm:col-span-4 sm:col-start-9 sm:row-start-1 bg-transparent">
            <CardContent className="flex p-0 flex-wrap gap-2 w-full">
              <div className="w-full">
                <TagSearch tags={tags} sortedTags={sortedTags} />
              </div>
            </CardContent>
          </Card>

          <div className="col-span-12 col-start-1 row-start-2 sm:col-span-8 sm:row-start-1">
            {displayPosts?.length > 0 ? (
              <ul className="flex flex-col gap-4">
                {displayPosts.map((post) => {
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
          </div>
        </div>
      </div>
    </div>
  );
}
