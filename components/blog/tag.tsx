import Link from "next/link";
import { slug } from "github-slugger";
import { badgeVariants } from "@components/ui/badge";

interface TagProps {
  tag: string;
  current?: boolean;
  count?: number;
}
export function Tag({ tag, current, count }: TagProps) {
  return (
    <Link
      className="bg-white dark:bg-black text-black dark:text-white px-2 py-1 rounded-xl shadow-[4px_4px] border-2 border-black"
      href={`/tags/${slug(tag)}`}
    >
      {tag} {count ? `(${count})` : null}
    </Link>
  );
}