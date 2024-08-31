"use client";

import React from "react";

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

interface Props {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
    link?: string;
  }[];
}

const SwipeCards = ({ content }: Props) => {
  return (
    <div className="h-[40rem] p-6 w-full flex justify-center items-center border-y-2 border-black bg-white/70">
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
          <SwiperSlide key={index} className="border-2 border-black">
            <div className="flex flex-col h-full w-full justify-start">
              <div className="relative w-full h-2/5 group border-b-2">
                <Image
                  src={content[index].content ?? null}
                  alt={content[index].title}
                  className="w-full h-full object-cover rounded-t-[40px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-100 flex items-end p-4 z-20 w-full">
                  <div className="text-white w-full flex justify-between">
                    <h3 className="text-lg font-bold flex justify-center items-center gap-2 lineThroughEffect">
                      <Link
                        className="flex gap-2 justify-center items-center"
                        href={content[index].link as string}
                        target="_blank"
                      >
                        Live Site <HiExternalLink className="text-white" />
                      </Link>
                    </h3>
                    <h3 className="text-lg font-bold hover:text-[#00E5FF] cursor-pointer">
                      <Link href={`/${slug(content[index].title)}`}>
                        See Case Study
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="h-[calc(100%-300px)] gap-6 flex flex-col justify-center items-start px-4 text-start pt-3">
                <p className="text-white font-bold">{item.title}</p>
                <p className="text-gray-300">{item.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwipeCards;
