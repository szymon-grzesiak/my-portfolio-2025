import { posts } from "@/lib/posts";
import Image from "next/image";
import { Callout } from "@/components/blog/callout";

const components = {
  Image,
  Callout,
};
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Tag } from "@/components/blog/tag";
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
  const post = posts.find((post) => post.locale === "pl" && post.slugAsParams === `pl/${slug}`);
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
    title: `${post.title}` || "Blog | Szymon Grzesiak",
    description: post.description || "Przeczytaj ten artykuł na moim blogu.",
    authors: { name: siteConfig.author },
    keywords: post.tags,
    openGraph: {
      title: post.title || "Blog | Szymon Grzesiak",
      description:
        post.description || "Przeczytaj ten artykuł na moim blogu.",
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
  return posts
    .filter((post) => post.locale === "pl")
    .map((post) => ({
      slug: post.slugAsParams.replace(/^pl\//, "").split("/"),
    }));
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPostFromParams({ slug });
  if (!post || !post.published) {
    notFound();
  }
  const fileSlug = post.slugAsParams;
  const MDXContent = (await import(`@/content/blog/${fileSlug}.mdx`)).default;
  const isPolish = true;

  return (
    <main className="px-6 md:pl-[130px] container relative mx-auto w-full flex-1 justify-center gap-[50px] py-6 md:flex lg:gap-10 lg:pb-10 pr-5 z-10">
      <article className="relative container px-6 py-10 prose max-w-5xl mx-auto bg-white/90 rounded-xl shadow-[4px_4px] border-2 border-black">
        {/* Sticky Breadcrumbs inside the container */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md z-20 py-3 -mx-6 px-6 -mt-10 mb-8 border-b-2 border-black rounded-t-xl not-prose">
          <Breadcrumb className="relative">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink
                  className="hover:text-indigo-500 hover:bg-indigo-50 px-2 py-1 rounded-lg duration-300 text-slate-700 text-sm font-semibold"
                  href="/pl"
                >
                  Główna
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink
                  className="hover:text-indigo-500 hover:bg-indigo-50 px-2 py-1 rounded-lg duration-300 text-slate-700 text-sm font-semibold"
                  href="/pl/blog"
                >
                  Blog
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-indigo-500 text-sm font-bold">
                  {post.title.length > 30 ? post.title.slice(0, 30) + "..." : post.title}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <h1 className="mb-10">{post.title}</h1>
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
        <MDXContent components={components} />
      </article>
    </main>
  );
}
