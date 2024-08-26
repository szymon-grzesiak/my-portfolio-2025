import Clouds from "@components/Clouds";
import Image from "next/image";
import { StickyScroll } from "@components/sticky-scroll-reveal";

import angler from "../assets/angler.svg";

import { projects, projectsData, timelineData } from "@lib/data";
import FetchData from "@components/FetchData";
import port from "../assets/boy_with_telescope.png";
import { TbMailShare } from "react-icons/tb";
import Marquee from "@components/marquee";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@components/ui/tooltip";
import { Timeline } from "@components/timeline";
import coolGuy from "../assets/coolguy2.webp";
import DotPattern from "@components/dotpattern";
import { cn } from "@lib/utils";

export default function Home() {
  return (
    <main className="relative mx-auto">
      <section className="lg:h-[90vh] pt-40 lg:pt-0 flex-col gap-10 lg:gap-0 lg:flex-row w-full flex items-end justify-around px-10">
        <Image src={port} alt="Guy with a telescope" className="" />
        <div className="flex flex-col items-start justify-center h-full gap-y-6">
          <h1
            id="home"
            className="text-4xl lg:text-7xl font-[900] flex flex-col font-jersey tracking-widest gap-5"
          >
            Hey, what&apos;s up! 🤞
            <div>
              I&apos;m{" "}
              <span className="bg-indigo-400 rounded-3xl px-4 border-2 border-black shadow-[4px_4px]">
                Szymon
              </span>
            </div>
          </h1>
          <p className="md:w-[440px] text-lg text-black">
            Full Stack Developer with a focus on Web Development. My expertise
            lies in building Responsive Web Designs using modern technologies
            like Next.js. 🚀
          </p>
          <a
            className="flex justify-center items-end gap-3"
            href="mailto:szymongrzesiak.pl@gmail.com"
          >
            <h2 className="text-3xl font-bold lineThroughEffect">Contact Me</h2>
            <TbMailShare className="text-3xl" />
          </a>
        </div>
      </section>
      <section className="relative w-full">
        <div className="absolute w-full flex justify-center items-start -translate-y-4 z-[10]">
          <h2 className="text-center bg-indigo-400 font-bold rounded-xl px-4 z-[100] border-2 border-black shadow-[4px_4px] font-jersey text-2xl tracking-widest">
            SKILLS
          </h2>
        </div>
        <Marquee
          pauseOnHover
          className="[--duration:15s] border-y-2 border-y-black"
        >
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <TooltipProvider key={index} delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="cursor-default">
                    <Icon className="w-16 h-16 mr-6" />
                  </TooltipTrigger>
                  <TooltipContent className="mr-6">
                    {project.title}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            );
          })}
        </Marquee>
      </section>
      <section className="relative pl-[132px] w-full bg-white">
        <div className="p-4">
          <Timeline data={timelineData} />
          <DotPattern />
        </div>
        <Image
          src={coolGuy}
          alt="Sitting figure"
          width={150}
          height={150}
          className="absolute bottom-[-55px] right-0 z-40"
        />
         <div className="w-full flex justify-center items-start translate-y-4 z-20">
          <h2 id="projects" className="text-center bg-indigo-400 font-bold rounded-xl px-4 border-2 border-black shadow-black shadow-[4px_4px] font-jersey text-2xl tracking-widest">
            PROJECTS
          </h2>
        </div>
      </section>
      <StickyScroll content={projectsData} contentClassName="pr-2 xl:pr-0" />
      <section
        className="h-screen w-full flex"
        id="cool"
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
