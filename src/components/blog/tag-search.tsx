// @/components/TagSearch.tsx
"use client";

import { useState } from "react";
import { Tag } from "@/components/blog/tag";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

interface TagSearchProps {
  tags: Record<string, number>;
  sortedTags: string[];
}

export const TagSearch = ({ tags, sortedTags }: TagSearchProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTags = sortedTags.filter((tag) =>
    tag.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="sticky top-[120px] z-10 w-full">
      <Card className="bg-white/90 h-[400px] overflow-y-auto border-2 border-black shadow-[4px_4px]">
        <CardHeader>
          <CardTitle>Search Tags</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 p-4">
          <Input
            placeholder="Search tags..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border-2 border-black"
          />
          <div className="flex flex-wrap gap-3">
            {filteredTags.map((tag) => (
              <Tag key={tag} tag={tag} count={tags[tag]} />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
