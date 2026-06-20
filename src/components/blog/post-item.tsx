import { Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn, formatDate } from "@/lib/utils";
import { Tag } from "./tag";
import coolGuy from "@/assets/coolguy2.webp";

interface PostItemProps {
  slug: string;
  title: string;
  description?: string;
  date: string;
  tags?: Array<string>;
}

export function PostItem({
  slug,
  title,
  description,
  date,
  tags,
}: PostItemProps) {
  const isPolish = /[ąęćłńóśźżĄĘĆŁŃÓŚŹŻ]/.test(title);

  return (
    <article className="flex flex-col h-full overflow-hidden rounded-xl bg-white/90 border-2 border-black shadow-[4px_4px] shadow-black group">
      <Link href={"/" + slug} className="block relative w-full aspect-video border-b-2 border-black overflow-hidden bg-slate-100 shrink-0">
        <Image
          src={coolGuy}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </Link>
      <div className="flex flex-col flex-1 p-5 gap-3">
        <div className="flex-1 flex flex-col gap-2">
          <div className="flex flex-wrap gap-2">
            {tags?.slice(0, 3).map((tag) => (
              <Tag tag={tag} key={tag} />
            ))}
          </div>
          <h2 className="text-xl md:text-2xl font-bold group-hover:text-main transition-colors duration-200 line-clamp-2">
            <Link href={"/" + slug}>{title}</Link>
          </h2>
          <p className="text-sm text-slate-600 line-clamp-3 mt-1 leading-relaxed">
            {description}
          </p>
        </div>
        <div className="flex justify-between items-center border-t border-black/10 pt-4 mt-2">
          <div className="flex items-center gap-1.5 text-slate-500 text-sm font-medium">
            <Calendar className="h-4 w-4" />
            <time dateTime={date}>{formatDate(date)}</time>
          </div>
          <Link
            href={"/" + slug}
            className="text-sm font-bold text-main hover:underline flex items-center gap-1"
          >
            {isPolish ? "Czytaj więcej" : "Read more"} →
          </Link>
        </div>
      </div>
    </article>
  );
}
