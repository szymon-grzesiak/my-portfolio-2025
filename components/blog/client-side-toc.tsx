"use client";

import { DashboardTableOfContents } from "./toc";
import { useEffect, useState } from "react";

export function ClientSideTableOfContents() {
  const [toc, setToc] = useState<{ title: string; url: string }[]>([]);

  useEffect(() => {
    const tocElements = Array.from(
      document.querySelectorAll(".subheading-anchor"),
    );

    const items = tocElements.map((item) => ({
      title: item.textContent,
      url: item.getAttribute("href"),
    }));

    setToc(items as { title: string; url: string }[]);
  }, []);

  const tableOfItems = toc.map((item) => ({
    title: item.title,
    url: item.url,
  }));

  const items = { items: tableOfItems };

  return <DashboardTableOfContents toc={items} />;
}