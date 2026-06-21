"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import { HiExternalLink } from "react-icons/hi";
import { slug } from "github-slugger";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";

interface Props {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
    link?: string;
    githubLink?: string | null;
    new?: boolean;
    slug?: string;
    noCaseStudy?: boolean;
  }[];
}

const SwipeCards = ({ content }: Props) => {
  const pathname = usePathname();
  const isPolish = pathname.startsWith("/pl");
  return (
    <div className="w-full flex flex-col justify-center items-center bg-slate-900 border-b-2 border-black py-10 pb-12 relative overflow-hidden">
      <Swiper
        spaceBetween={0}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
        }}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper w-full"
      >
        {content.map((item, index) => (
          <SwiperSlide key={index} className="bg-slate-900 !h-auto">
            <div className="flex flex-col w-full min-h-[520px]">
              <div className="relative w-full aspect-video group border-b-2 border-black flex-shrink-0">
                {content[index].new && (
                  <div className="absolute top-2 left-2 font-bold bg-red-500 text-white px-4 py-2 rounded-full text-xs animate-bounce z-30">
                    NEW
                  </div>
                )}
                <Image
                  src={content[index].content ?? null}
                  alt={content[index].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-100 flex items-end p-4 z-20 w-full">
                  <div className="text-white w-full flex justify-between">
                    <div className="flex flex-col items-start">
                      {content[index]?.githubLink && (
                        <p className="text-base md:text-lg font-bold flex justify-center items-center gap-2 lineThroughEffect">
                          <Link
                            className="flex gap-2 justify-center items-center"
                            href={content[index].githubLink as string}
                            target="_blank"
                          >
                            Github Code{" "}
                            <HiExternalLink className="text-white" />
                          </Link>
                        </p>
                      )}

                      <p className="text-base lg:text-lg font-bold flex justify-center items-center gap-2 lineThroughEffect">
                        <Link
                          className="flex gap-2 justify-center items-center"
                          href={content[index].link as string}
                          target="_blank"
                        >
                          {isPolish ? "Strona na żywo" : "Live Site"} <HiExternalLink className="text-white" />
                        </Link>
                      </p>
                    </div>

                    {!content[index].noCaseStudy && (
                      <p className="text-base md:text-lg font-bold hover:text-main cursor-pointer">
                        <Link href={`${isPolish ? "/pl" : ""}/projects/${content[index].slug ?? slug(content[index].title)}`}>
                          {isPolish ? "Zobacz studium" : "See Case Study"}
                        </Link>
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex-1 gap-4 flex flex-col justify-center items-start px-6 py-8 text-start">
                <p className="text-white font-bold text-xl">{item.title}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Clean controls centered below Swiper: [Prev Arrow] [Pagination Dots] [Next Arrow] */}
      <div className="flex items-center justify-center gap-6 mt-4 z-20">
        <button className="custom-prev text-zinc-400 hover:text-white transition-colors cursor-pointer focus:outline-hidden">
          <ChevronLeft className="size-6" />
        </button>
        <div className="custom-pagination flex gap-2 items-center"></div>
        <button className="custom-next text-zinc-400 hover:text-white transition-colors cursor-pointer focus:outline-hidden">
          <ChevronRight className="size-6" />
        </button>
      </div>

      <div className="mt-8 z-10">
        <Link
          href={isPolish ? "/pl/projects" : "/projects"}
          className="flex items-center justify-center gap-2 border border-zinc-700 hover:border-zinc-500 rounded-full text-zinc-300 hover:text-white px-5 py-2 text-sm transition-all duration-200 cursor-pointer"
        >
          <span>{isPolish ? "Zobacz więcej projektów" : "More projects"}</span>
          <ArrowRight className="inline-block size-4" />
        </Link>
      </div>
    </div>
  );
};

export default SwipeCards;
