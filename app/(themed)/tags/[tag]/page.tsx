import { posts } from "#site/content";
import { PostItem } from "@/components/blog/post-item";
import { Tag } from "@/components/blog/tag";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllTags, getPostsByTagSlug, sortTagsByCount } from "@/lib/utils";
import { BackgroundBeamsWithCollision } from "@components/blog/background-beams-with-collision";
import { siteConfig } from "@config/site";
import { slug } from "github-slugger";
import { Metadata } from "next";
import Image from "next/image";
import coolGuy from "@/assets/coolguy2.webp";

interface TagPageProps {
  params: {
    tag: string;
  };
}

export async function generateMetadata({
  params,
}: TagPageProps): Promise<Metadata> {
  const { tag } = params;
  return {
    title: tag,
    description: `Posts on the topic of ${tag}`,
    authors: { name: siteConfig.author },
    openGraph: {
      title: tag,
      description: `Posts on the topic of ${tag}`,
      type: "website",
      url: `https://szymongrzesiak.dev/tags/${tag}`,
      images: [
        {
          url: '/api/og',
          width: 1200,
          height: 630,
          alt: tag,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: tag,
      description: `Posts on the topic of ${tag}`,
      images: ['/api/og'],
    },
  };
}

export const generateStaticParams = () => {
  const tags = getAllTags(posts);
  const paths = Object.keys(tags).map((tag) => ({ tag: slug(tag) }));
  return paths;
};

export default function TagPage({ params }: TagPageProps) {
  const { tag } = params;
  const title = tag.split("-").join(" ");

  const allPosts = getPostsByTagSlug(posts, tag);
  const displayPosts = allPosts.filter(post => post.published);
  const tags = getAllTags(posts);
  const sortedTags = sortTagsByCount(tags);

  return (
    <div className="relative z-10">
    <div className="relative h-64">
      <BackgroundBeamsWithCollision>
        <h2 className="flex flex-col relative z-20 text-4xl lg:text-7xl font-bold text-center text-black font-sans tracking-tight">
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
    <div className="px-6 md:pl-[160px] xl:pl-10 relative container max-w-5xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl capitalize">
            {title}
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-8">
        <div className="col-span-12 col-start-1 sm:col-span-8">
          {displayPosts?.length > 0 ? (
            <ul className="flex flex-col">
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
        <Card className="bg-white/90 border-2 border-black shadow-[4px_4px] col-span-12 row-start-3 h-fit sm:col-span-4 sm:col-start-9 sm:row-start-1">
          <CardHeader>
            <CardTitle>Tags</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {sortedTags?.map((t) => (
              <Tag tag={t} key={t} count={tags[t]} current={slug(t) === tag} />
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
  );
}