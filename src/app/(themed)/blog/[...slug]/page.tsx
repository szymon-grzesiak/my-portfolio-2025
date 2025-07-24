import { posts } from "#site/content";
import { MDXContent } from "@/components/blog/mdx-components";
import { notFound } from "next/navigation";

import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Tag } from "@/components/blog/tag";
// import { cache } from "react";
// import { increment } from "@/db/actions";
// import { getViewsCount } from "@db/queries";
// import ViewCounter from "../view-counter";
import { ClientSideTableOfContents } from "@/components/blog/client-side-toc";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface PostPageProps {
  params: Promise<{
    slug: string[];
  }>;
}

async function getPostFromParams(params: { slug: string[] }) {
  const slug = params?.slug?.join("/");
  const post = posts.find((post) => post.slugAsParams === slug);
  return post;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostFromParams({ slug });

  if (!post) {
    return {};
  }

  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set("title", post.title);

  return {
    title: `${post.title}` || "Blog by Szymon Grzesiak",
    description: post.description || "Read this insightful article on my blog.",
    authors: { name: siteConfig.author },
    keywords: post.tags,
    openGraph: {
      title: post.title || "Blog by Szymon Grzesiak",
      description:
        post.description || "Read this insightful article on my blog.",
      type: "article",
      publishedTime: post.date,
      url: `https://szymongrzesiak.dev/${post.slug}`,
      images: [
        {
          url: `/api/og?${ogSearchParams.toString()}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`/api/og?${ogSearchParams.toString()}`],
    },
    alternates: {
      canonical: `https://szymongrzesiak.dev/${post.slug}`,
    },
  };
}

export async function generateStaticParams(): Promise<
  {
    slug: string[];
  }[]
> {
  return posts.map((post) => ({ slug: post.slugAsParams.split("/") }));
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPostFromParams({ slug });

  if (!post || !post.published) {
    notFound();
  }

  return (
    <main className="px-6 md:pl-[160px] container relative mx-auto w-full flex-1 justify-center gap-[50px] py-6 md:flex lg:gap-10 lg:pb-10 pr-5 z-10">
      <article className="relative container px-6 py-10 prose max-w-4xl mx-auto bg-white/90 rounded-xl shadow-[4px_4px] border-2 border-black">
        <h1 className="mb-10">{post.title}</h1>
        {/* <Views slug={post.slug} /> */}
        <div className="flex gap-4 mb-6 flex-wrap">
          {post.tags?.map((tag) => (
            <Tag tag={tag} key={tag} />
          ))}
        </div>
        {post.description ? (
          <p className="text-xl mt-0 text-muted-foreground">
            {post.description}
          </p>
        ) : null}
        <hr className="my-4" />
        <MDXContent code={post.body} />
      </article>
      <aside className="sticky">
        <div className="sticky top-16 hidden pb-6 text-sm xl:block">
          <div className="sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto bg-white/90 px-6 py-6 pt-2 rounded-xl shadow-[4px_4px] border-2 border-black">
            <Breadcrumb className="relative left-[-8px] pb-4">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    className="hover:text-blue-500 hover:bg-sky-100 px-2 py-1 rounded-lg duration-300 text-gray-600 text-sm"
                    href="/"
                  >
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink
                    className="hover:text-blue-500 hover:bg-sky-100 px-2 py-1 rounded-lg duration-300 text-gray-600 text-sm"
                    href="/blog"
                  >
                    Blog
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-blue-500 text-sm">
                    {post.title.length > 15 ? post.title.slice(0, 15) + "..." : post.title}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <ClientSideTableOfContents />
          </div>
        </div>
      </aside>
    </main>
  );
}

// let incrementViews = cache(increment);

// async function Views({ slug }: { slug: string }) {
//   let views = await getViewsCount();
//   incrementViews(slug);
//   return <ViewCounter allViews={views} slug={slug} />;
// }
