"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { HiExternalLink } from "react-icons/hi";
import Link from "next/link";
import { slug } from "github-slugger";
import { ArrowRight, ChevronRight } from "lucide-react";

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
    githubLink?: string | null;
    slug?: string;
    new?: boolean;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<any>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardLength = content.length;

  const updateActiveCard = useCallback(() => {
    const container = ref.current;
    if (!container || cardLength === 0) {
      return;
    }

    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.top + containerRect.height / 2;

    let closestIndex = 0;
    let smallestDistance = Number.POSITIVE_INFINITY;

    cardRefs.current.slice(0, cardLength).forEach((card, index) => {
      if (!card) {
        return;
      }

      const cardRect = card.getBoundingClientRect();
      const cardCenter = cardRect.top + cardRect.height / 2;
      const distance = Math.abs(cardCenter - containerCenter);

      if (distance < smallestDistance) {
        smallestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveCard((current) =>
      current === closestIndex ? current : closestIndex
    );
  }, [cardLength]);

  useEffect(() => {
    const container = ref.current;
    if (!container || cardLength === 0) {
      return;
    }

    let frameId: number | null = null;

    const onScroll = () => {
      if (frameId !== null) {
        return;
      }
      frameId = window.requestAnimationFrame(() => {
        frameId = null;
        updateActiveCard();
      });
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateActiveCard);
    updateActiveCard();

    return () => {
      container.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateActiveCard);
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [cardLength, updateActiveCard]);

  if (cardLength === 0) {
    return null;
  }

  const backgroundColors = [
    "var(--color-slate-900)",
    "var(--color-black)",
    "var(--color-neutral-900)",
  ];
  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-120 customScrollContainer flex md:flex-row justify-center lg:gap-20 border-y-2 border-black flex-col"
      ref={ref}
    >
      <div className="div relative flex items-start pl-[155px]">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div
              key={item.title + index}
              ref={(node) => {
                cardRefs.current[index] = node;
              }}
              className="my-20 h-[260px] flex flex-col justify-center"
            >
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
          {content[activeCard].new && (
            <div className="absolute top-2 left-2 font-bold bg-red-500 text-white px-4 py-2 rounded-full text-xs animate-bounce z-30">
              NEW
            </div>
          )}
          <Image
            src={content[activeCard].content ?? null}
            alt={content[activeCard].title}
            className="w-full h-full object-cover rounded-md z-10 border-2 border-white shadow-white shadow-[6px_6px]"
          />
          <Link
            href={"/projects"}
            className="bg-white w-fit font-semibold px-4 py-2 hover:text-indigo-500 rounded-md shadow-md border-2"
          >
            See more projects <ArrowRight className="inline-block size-5" />
          </Link>
          <div className="absolute inset-0 bg-linear-to-t from-black to-transparent opacity-100 flex items-end p-4 rounded-md z-20 w-full">
            <div className="text-white w-full flex justify-between items-end">
              <div className="flex flex-col items-start">
                {content[activeCard]?.githubLink && (
                  <p className="text-base lg:text-lg font-bold flex justify-center items-center gap-2 lineThroughEffect">
                    <Link
                      className="flex gap-2 justify-center items-center"
                      href={content[activeCard]?.githubLink as string}
                      target="_blank"
                    >
                      Github Code <HiExternalLink className="text-white" />
                    </Link>
                  </p>
                )}

                <p className="text-base lg:text-lg font-bold flex justify-center items-center gap-2 lineThroughEffect">
                  <Link
                    className="flex gap-2 justify-center items-center"
                    href={content[activeCard].link as string}
                    target="_blank"
                  >
                    Live Site <HiExternalLink className="text-white" />
                  </Link>
                </p>
              </div>

              <p className="text-base lg:text-lg font-bold hover:text-[#00E5FF] cursor-pointer">
                <Link
                  href={`/projects/${
                    content[activeCard].slug ?? slug(content[activeCard].title)
                  }`}
                >
                  See Case Study
                </Link>
              </p>
            </div>
          </div>
        </div>

        <DotsIndicator count={cardLength} activeIndex={activeCard} />
      </div>
    </motion.div>
  );
};
