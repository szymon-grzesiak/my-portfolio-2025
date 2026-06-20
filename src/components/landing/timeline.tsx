"use client";

import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { usePathname } from "next/navigation";

interface TimelineEntry {
  occupation: string;
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const pathname = usePathname();
  const isPolish = pathname.startsWith("/pl");

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-white pt-10 relative" ref={containerRef}>
      <div className="flex justify-center flex-col items-center max-w-7xl mx-auto">
        <h2
          id="about"
          className="text-3xl mb-10 text-black font-bold font-display tracking-wide"
        >
          {isPolish ? "O MNIE" : "ABOUT ME"}
        </h2>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20 px-6 md:px-12">
        {data.map((item, index) => (
          <div key={`${item.title}-${index}`} className="flex items-center justify-center pt-8 md:gap-10 pl-16 md:pl-0">
            <div className="flex flex-col md:flex-row z-40 items-center max-w-xs lg:max-w-sm md:w-full">
              <div className="hidden" />
              <h3 className="hidden md:block text-sm md:text-4xl font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
            </div>

            <div className="z-20 relative pl-4 mr-4 w-full bg-white/10 border backdrop-blur-xl rounded-xl p-5 dark:text-black">
              <h3 className="font-bold text-xl">{item.occupation}</h3>
              <h4 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h4>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:hidden left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-0% via-neutral-200 dark:via-neutral-700 to-transparent to-99%  mask-[linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-linear-to-t from-purple-500 via-blue-500 to-transparent from-0% via-10% rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
