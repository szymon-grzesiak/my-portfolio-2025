import Clouds from "@/components/landing/Clouds";
import Image from "next/image";
import { ProjectsSection } from "@/components/landing/ProjectsSection";
import { projects, projectsData, timelineData } from "@/lib/data";
import port from "../assets/boy_with_telescope.png";
import { TbMailShare } from "react-icons/tb";
import Marquee from "@/components/landing/marquee";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Timeline } from "@/components/landing/timeline";
import coolGuy from "../assets/coolguy2.webp";
import DotPattern from "@/components/ui/dotpattern";
import SwipeCards from "@/components/landing/Swiper/SwipeCards";
import AnglerSection from "@/components/landing/sections/AnglerSection";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { StarIcon } from "lucide-react";

export default function Home() {
  return (
    <main className="relative mx-auto landing">
      <Clouds color="white" rotate position="top" />
      <section className="lg:h-[90vh] px-6 pt-40 lg:pt-0 md:flex-row gap-10 lg:gap-5 w-full flex items-center md:items-end justify-around md:px-10 flex-col-reverse">
        <Image
          src={port}
          quality={75}
          priority={true}
          alt="Guy with a telescope"
          className="lg:w-[414px] md:w-[304px] md:block hidden pl-12"
        />
        <div className="flex justify-center h-full">
          <div className="flex flex-col items-center md:items-start justify-center gap-y-6 md:pb-10 lg:pb-0">
            <h1 className="sr-only">
              Szymon Grzesiak – Full Stack Web Developer using Next.js
            </h1>
            <div
              id="home"
              className="flex flex-col items-center gap-4 text-center md:items-start md:text-left md:gap-5"
            >
              {/* Główny nagłówek - responsywny rozmiar i treść */}
              <h1 className="font-bagel font-medium tracking-widest text-5xl xs:text-5xl sm:text-6xl md:text-5xl lg:text-7xl">
                {/* Wersja dla małych ekranów (do md) */}
                <span className="block md:hidden">Hi, I&apos;m</span>
                {/* Wersja dla średnich i większych ekranów */}
                <span className="hidden md:block">Hey, what&apos;s up!🤞</span>
              </h1>

              {/* "Pigułka" z imieniem - może być pod głównym nagłówkiem lub zintegrowana */}
              <div className="text-6xl sm:text-6xl md:text-5xl lg:text-7xl font-bagel font-medium tracking-widest">
                {/* "I'm" widoczne tylko na średnich i większych ekranach, jeśli "Szymon" jest osobną linią */}
                <span className="hidden md:inline">I&apos;m </span>
                <p className="inline-block bg-indigo-400 w-fit rounded-3xl px-4 pt-1 pb-3 md:pb-4 border-2 border-black shadow-[4px_4px] mt-1 md:mt-0">
                  Szymon
                </p>
              </div>
            </div>
            <h2 className="md:w-full md:max-w-[440px] text-lg text-black">
              My full name is Szymon Grzesiak, I&apos;m from Poland and I&apos;m
              Full Stack Developer with a focus on Web Development. My expertise
              lies in building Responsive Web Designs using modern technologies
              like Next.js. 🚀
            </h2>
            <a
              className="mb-10 md:mb-0 flex justify-center items-end gap-3 rounded-2xl p-2 bg-white/20 md:border md:border-gray-300 hover:bg-white/40"
              href="mailto:szymongrzesiak.pl@/gmail.com"
            >
              <h2 className="text-3xl font-bold lineThroughEffect">
                Contact Me
              </h2>
              <TbMailShare className="text-3xl shrink-0 mb-1 text-indigo-400" />
            </a>
          </div>
        </div>
      </section>
      <section className="relative w-full">
        <div className="absolute w-full flex justify-center items-start -translate-y-4 z-10">
          <h2 className="text-center bg-indigo-400 font-bold rounded-xl px-2 md:px-4 z-100 border-2 border-black shadow-[4px_4px] font-bagel text-2xl tracking-widest">
            SKILLS
          </h2>
        </div>
        <Marquee
          pauseOnHover
          className="md:[--duration:15s] [--duration:10s] border-y-2 border-y-black"
        >
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div key={index}>
                <div className="hidden md:block">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger
                        className="cursor-default"
                        aria-label={`Icon for ${project.title}`}
                      >
                        <Icon className="w-16 h-16 mr-6" />
                      </TooltipTrigger>
                      <TooltipContent className="mr-6">
                        {project.title}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <div className="block md:hidden">
                  <Popover>
                    <PopoverTrigger
                      className="cursor-default"
                      aria-label={`Icon for ${project.title}`}
                    >
                      <Icon className="w-16 h-16 mr-6" />
                    </PopoverTrigger>
                    <PopoverContent className="w-fit bg-white">
                      {project.title}
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            );
          })}
        </Marquee>
      </section>
      <section className="relative flex flex-col justify-center items-center md:pl-[132px] w-full bg-white">
        <div>
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
          <h2
            id="projects"
            className="text-center bg-indigo-400 font-bold rounded-xl px-4 border-2 border-black shadow-black shadow-[4px_4px] font-bagel text-xl md:text-2xl tracking-widest"
          >
            <StarIcon className="inline-block mr-2 text-yellow-400 fill-amber-300" />
            PROJECTS
          </h2>
        </div>
      </section>
      <section>
        <div className="hidden md:block">
          <ProjectsSection
            content={projectsData}
            contentClassName="px-6 xl:pr-0"
          />
        </div>
        <div className="block md:hidden">
          <SwipeCards content={projectsData} />
        </div>
      </section>
      <AnglerSection />
      <Clouds color="blue" position="bottom" />
    </main>
  );
}
