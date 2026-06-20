import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Post {
  slug: string;
  slugAsParams: string;
  title: string;
  description?: string;
  date: string;
  published: boolean;
  tags?: string[];
  body: string;
  isMdx: boolean;
  locale: "en" | "pl";
}

const contentDirectory = path.join(process.cwd(), "src/content/blog");

function getPostFiles(dir: string): string[] {
  let results: string[] = [];
  if (!fs.existsSync(dir)) {
    return [];
  }
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getPostFiles(filePath));
    } else {
      if (file.endsWith(".mdx") || file.endsWith(".md")) {
        results.push(filePath);
      }
    }
  });
  return results;
}

export function getAllPosts(): Post[] {
  const filePaths = getPostFiles(contentDirectory);

  const posts = filePaths.map((filePath) => {
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);

    // Compute slug relative to src/content/
    // e.g. /Users/.../src/content/blog/en/my-post.mdx -> blog/en/my-post
    const relativePath = path.relative(path.join(process.cwd(), "src/content"), filePath);
    const rawSlug = relativePath.replace(/\.mdx?$/, "");
    
    // Compute slugAsParams (e.g. blog/en/my-post -> en/my-post)
    const slugAsParams = rawSlug.split("/").slice(1).join("/");
    
    const isPl = filePath.includes("/pl/") || filePath.endsWith("/pl") || relativePath.startsWith("blog/pl/");
    const locale: "en" | "pl" = isPl ? "pl" : "en";
    
    const slugWithoutLocale = slugAsParams.replace(/^(en|pl)\//, "");
    const slug = locale === "pl" ? `pl/blog/${slugWithoutLocale}` : `blog/${slugWithoutLocale}`;

    return {
      slug,
      slugAsParams,
      title: data.title || "",
      description: data.description || "",
      date: data.date instanceof Date ? data.date.toISOString() : data.date || "",
      published: data.published !== false,
      tags: data.tags || [],
      body: content,
      isMdx: filePath.endsWith(".mdx"),
      locale,
    };
  });

  return posts;
}

export const posts = getAllPosts();
