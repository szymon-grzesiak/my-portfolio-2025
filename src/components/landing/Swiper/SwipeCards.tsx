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
import { ArrowRight } from "lucide-react";

interface Props {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
    link?: string;
    githubLink?: string | null;
    new?: boolean;
  }[];
}

const SwipeCards = ({ content }: Props) => {
  return (
    <div className="py-6 px-2 w-full flex justify-center items-center bg-white/70 min-h-[600px] relative">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        navigation={true}
        className="mySwiper"
      >
        {content.map((item, index) => (
          <SwiperSlide key={index} className="border-2 border-black !h-auto">
            <div className="flex flex-col w-full min-h-[520px]">
              <div className="relative w-full aspect-video group border-b-2 flex-shrink-0">
                {content[index].new && (
                  <div className="absolute top-2 left-2 font-bold bg-red-500 text-white px-4 py-2 rounded-full text-xs animate-bounce z-30">
                    NEW
                  </div>
                )}
                <Image
                  src={content[index].content ?? null}
                  alt={content[index].title}
                  className="w-full h-full object-cover rounded-t-[40px]"
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
                          Live Site <HiExternalLink className="text-white" />
                        </Link>
                      </p>
                    </div>

                    <p className="text-base md:text-lg font-bold hover:text-[#00E5FF] cursor-pointer">
                      <Link href={`/${slug(content[index].title)}`}>
                        See Case Study
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-1 gap-4 flex flex-col justify-center items-start px-4 py-6 text-start">
                <p className="text-white font-bold text-lg">{item.title}</p>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Link href={"/projects"} className="swiper-more-projects">
        More projects <ArrowRight className="inline-block size-5" />
      </Link>
    </div>
  );
};

export default SwipeCards;
