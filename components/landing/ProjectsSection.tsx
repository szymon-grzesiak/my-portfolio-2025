"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { HiExternalLink } from "react-icons/hi";
import Link from "next/link";
import { slug } from "github-slugger";

const DotsIndicator = ({
  count,
  activeIndex,
}: {
  count: number;
  activeIndex: number;
}) => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center">
        {Array.from({ length: count }, (_, index) => (
          <span
            key={index}
            className={`w-[10px] h-[10px] my-[5px] rounded-full ${
              index === activeIndex ? "active bg-[#3FBEF5]" : "bg-gray-500"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export const ProjectsSection = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
    link?: string;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<any>(null);
  const [activeDot, setActiveDot] = useState(0);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref,
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;
  const dots = Array.from(
    { length: cardLength },
    (_, index) => index / cardLength
  );

  useEffect(() => {
    return scrollYProgress.onChange((v) => {
      const closestDotIndex = dots.reduce((closestIndex, dot, index) => {
        return Math.abs(v - dot) < Math.abs(v - dots[closestIndex])
          ? index
          : closestIndex;
      }, 0);
      setActiveDot(closestDotIndex);
    });
  }, [scrollYProgress, dots]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "var(--slate-900)",
    "var(--black)",
    "var(--neutral-900)",
  ];
  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-[30rem] customScrollContainer flex md:flex-row justify-center lg:gap-20 border-y-2 border-black flex-col"
      ref={ref}
    >
      <div className="div relative flex items-start pl-[155px]">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h3
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-white"
              >
                {item.title}
              </motion.h3>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-md text-slate-300 max-w-sm mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        className={cn(
          "sticky flex items-center gap-10 justify-center top-0 rounded-[22px]",
          contentClassName
        )}
      >
        <div className="relative w-full max-w-[525px] h-[250px] group">
          <Image
            src={content[activeCard].content ?? null}
            alt={content[activeCard].title}
            className="w-full h-full object-cover rounded-md z-10 border-2 border-white shadow-white shadow-[6px_6px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-100 flex items-end p-4 rounded-md z-20 w-full">
            <div className="text-white w-full flex justify-between">
              <h3 className="text-lg font-bold flex justify-center items-center gap-2 lineThroughEffect">
                <Link className="flex gap-2 justify-center items-center" href={content[activeCard].link as string} target="_blank">
                Live Site <HiExternalLink className="text-white" />
                </Link>
              </h3>
              <h3 className="text-lg font-bold hover:text-[#00E5FF] cursor-pointer">
                <Link href={`/${slug(content[activeCard].title)}`}>See Case Study</Link>
              </h3>
            </div>
          </div>
        </div>

        <DotsIndicator count={cardLength} activeIndex={activeDot} />
      </div>
    </motion.div>
  );
};
