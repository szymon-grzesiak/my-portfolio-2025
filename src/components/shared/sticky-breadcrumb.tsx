"use client";

import { useEffect, useState } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface StickyBreadcrumbProps {
  items: BreadcrumbItem[];
  currentPage: string;
  sentinelTopPosition?: number; // opcjonalny prop dla pozycji sentinel elementu
}

export default function StickyBreadcrumb({ 
  items, 
  currentPage, 
  sentinelTopPosition = 453 
}: StickyBreadcrumbProps) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const breadcrumbElement = document.getElementById('sticky-breadcrumb');
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      { threshold: 1 }
    );

    if (breadcrumbElement) {
      observer.observe(breadcrumbElement);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Sentinel element */}
      <div 
        id="sticky-breadcrumb" 
        className="absolute h-1" 
        style={{ top: `${sentinelTopPosition}px` }}
      />
      
      <div className={`sticky top-[10px] rounded-xl px-4 py-2 z-50 duration-100 ease-in ${
        isSticky 
          ? 'bg-white/50 backdrop-blur-3xl shadow-md border-b border-gray-200' 
          : 'bg-transparent'
      }`}>
        <Breadcrumb>
          <BreadcrumbList>
            {items.map((item, index) => (
              <div key={item.href} className="flex items-center">
                <BreadcrumbItem>
                  <BreadcrumbLink
                    className="hover:text-blue-500 hover:bg-sky-100 px-2 py-1 rounded-lg duration-300 text-gray-600 font-semibold text-lg"
                    href={item.href}
                  >
                    {item.label}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {index < items.length - 1 && <BreadcrumbSeparator />}
              </div>
            ))}
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-blue-500 font-semibold text-lg">
                {currentPage}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </>
  );
}