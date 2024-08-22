import Clouds from "@components/Clouds";
import Image from "next/image";
import { StickyScroll } from "@components/sticky-scroll-reveal";

import angler from "../assets/angler.svg";

import { HoverEffect } from "@components/ui/card-hover-effect";
import { projects } from "@lib/data";
import FetchData, { content } from "@components/FetchData";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import port from "../assets/boy_with_telescope.png";
import { VelocityScroll } from "@components/scrollbasedtext";
import Marquee from "@components/marquee";

export default function Home() {
  return (
    <main className="relative mx-auto">
      <section className="relative lg:h-[80vh] pt-40 lg:pt-0 flex-col gap-10 lg:gap-0 lg:flex-row w-full flex items-end justify-around px-10">
        <Image src={port} alt="Guy with a telescope" className="" />
        <div className="flex flex-col items-start justify-center h-full gap-y-6">
          <h1
            id="home"
            className="text-4xl lg:text-7xl font-[900] flex flex-col font-jersey tracking-widest gap-5"
          >
            Hey, what&apos;s up! 🤞
            <div>
              I&apos;m{" "}
              <span className="bg-indigo-400 rounded-3xl px-4">Szymon</span>
            </div>
          </h1>
          <p className="md:w-[440px] text-lg text-black">
            Full Stack Developer with a focus on Web Development. My expertise
            lies in building Responsive Web Designs using modern technologies
            like Next.js. 🚀
          </p>
          <div className="flex gap-6">
            <a
              className="inline-block group"
              href="mailto:szymongrzesiak.pl@gmail.com"
            >
              <div>
                <h2 className="text-3xl font-bold group-hover:text-indigo-500 transition-all">
                  Contact Me 📨
                </h2>
                <div className="w-40 h-2 bg-indigo-500 rounded-full " />
                <div className="w-40 h-2 bg-black rounded-full translate-x-2" />
              </div>
            </a>
          </div>
        </div>
      </section>
      <Marquee pauseOnHover className="[--duration:10s] border-t-2 border-t-black">
        {projects.map((project, index) => (
          <Image key={index} src={project.icon} alt={project.title} width={40} height={40} className="mx-6 aspect-auto"/>
        ))}
      </Marquee>
      <StickyScroll content={content} contentClassName="pr-2 xl:pr-0" />
      <section
        className="h-screen w-full flex"
        style={{
          zIndex: -1,
        }}
      >
        <Image
          src={angler}
          className="aspect-square hidden sm:block w-full max-w-[424px] translate-x-[-20px] lg:max-w-[600px] xl:max-w-none"
          width={1000}
          alt={"angler"}
        />
        {/* // TODO zrobic pozniej siedzaca postac ktora sie patrzy na tej sekcji z projektami */}
        <FetchData />
      </section>
      <Clouds color="white" rotate position="top" />
      <Clouds color="blue" position="bottom" />
    </main>
  );
}
