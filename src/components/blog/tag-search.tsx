// @/components/TagSearch.tsx
"use client";

import { useState } from "react";
import { Tag } from "@/components/blog/tag";
import { Input } from "@/components/ui/input";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";

interface TagSearchProps {
  tags: Record<string, number>;
  sortedTags: string[];
}

export const TagSearch = ({ tags, sortedTags }: TagSearchProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const pathname = usePathname();
  const isPolish = pathname.startsWith("/pl");

  const filteredTags = sortedTags.filter((tag) =>
    tag.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full flex flex-col gap-5 not-prose mb-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between  gap-4 bg-white/90 p-4 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <div className="relative flex-1 max-w-md w-full">
          <Input
            placeholder={isPolish ? "Szukaj tagów..." : "Search tags..."}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border-2 border-black bg-white py-2 pl-10 pr-4 rounded-lg text-sm w-full focus-visible:ring-main focus-visible:border-main focus:outline-none"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 size-4 pointer-events-none" />
        </div>
        <div className="text-sm font-bold text-slate-600 sm:text-right shrink-0">
          {isPolish ? `${filteredTags.length} tagów` : `${filteredTags.length} tags`}
        </div>
      </div>
      
      {filteredTags.length > 0 && (
        <div className="flex bg-white/30 rounded-xl flex-wrap gap-2 px-1 max-h-[140px] overflow-y-scroll py-1">
          {filteredTags.map((tag) => (
            <Tag key={tag} tag={tag} count={tags[tag]} />
          ))}
        </div>
      )}
    </div>
  );
};
