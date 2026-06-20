"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface WordRotateProps {
  words: string[];
  duration?: number;
  motionProps?: HTMLMotionProps<"span">;
  className?: string;
}

export function WordRotate({
  words,
  duration = 2500,
  motionProps = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
    transition: { type: "spring", stiffness: 200, damping: 20 },
  },
  className,
}: WordRotateProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [words, duration]);

  return (
    <motion.span
      layout
      transition={{ type: "spring", stiffness: 180, damping: 20 }}
      className="inline-block bg-indigo-400 text-black px-3 py-0.5 md:py-1 rounded-2xl border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] transform -rotate-1 mt-2 md:mt-3 relative overflow-hidden whitespace-nowrap"
    >
      <AnimatePresence mode="popLayout">
        <motion.span
          layout
          key={words[index]}
          className={cn("inline-block", className)}
          {...motionProps}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
}
