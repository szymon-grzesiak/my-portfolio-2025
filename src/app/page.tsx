import Clouds from "@/components/landing/Clouds";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ProjectsSection } from "@/components/landing/ProjectsSection";
import { projects, projectsData, timelineData } from "@/lib/data";
import port from "@/assets/boy_with_telescope.png";
import Marquee from "@/components/landing/marquee";
import { WordRotate } from "@/components/ui/word-rotate";
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
import { TbMailShare } from "react-icons/tb";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Szymon Grzesiak | Full Stack Developer Portfolio",
  description:
    "I build fast, conversion-focused web apps in Next.js, React, and TypeScript. Explore recent case studies, practical engineering notes, and the process behind my work.",
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: "Szymon Grzesiak | Full Stack Developer Portfolio",
    description:
      "Case studies, product-focused development, and practical frontend/backend engineering with Next.js and TypeScript.",
    url: siteConfig.url,
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="relative mx-auto landing">
      <Clouds color="white" rotate position="top" />
      <section className="lg:h-[90vh] px-6 pt-40 lg:pt-0 md:flex-row w-full flex items-center md:items-end justify-center gap-8 lg:gap-16 xl:gap-24 md:px-10 flex-col-reverse md:pl-[130px]">
        <Image
          src={port}
          quality={75}
          priority={true}
          fetchPriority="high"
          alt="Guy with a telescope"
          className="xl:w-[414px] lg:w-[320px] md:w-[280px] md:block hidden flex-shrink-0"
        />
        <div className="flex justify-center md:justify-start items-center h-full w-full flex-1 min-w-0 max-w-[600px] lg:max-w-[750px] xl:max-w-[850px]">
          <div className="flex flex-col items-center md:items-start justify-center gap-y-6 md:pb-10 lg:pb-0 lg:pt-16 w-full">
            <div
              id="home"
              className="flex flex-col items-center gap-4 text-center md:items-start md:text-left md:gap-5"
            >
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                <span className="inline-block bg-amber-300 text-black text-xs md:text-sm font-bold uppercase tracking-wider px-3 py-1 rounded-full border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                  Szymon Grzesiak
                </span>
                <span className="inline-block bg-green-400 text-black text-xs md:text-sm font-bold uppercase tracking-wider px-3 py-1 rounded-full border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                  Available for projects
                </span>
              </div>

              <h1 className="font-display font-bold text-[2.2rem] min-[380px]:text-[2.8rem] sm:text-5xl md:text-4xl lg:text-5xl xl:text-7xl leading-[1.2] uppercase tracking-wider text-black">
                I design & build.<br />
                <span className="text-zinc-500">Focused on</span><br />
                <WordRotate
                  words={[
                    "stunning websites.",
                    "custom AI tools.",
                    "optimized SEO.",
                    "blazing fast speed.",
                    "responsive design.",
                  ]}
                  duration={3000}
                />
              </h1>
            </div>

            <h2 className="md:w-full md:max-w-[500px] text-lg text-black leading-relaxed">
              I build modern, conversion-focused, and SEO-optimized web applications using Next.js and TypeScript. I combine clean code with stunning design to help businesses grow.
            </h2>

            <p className="md:w-full md:max-w-[500px] text-base leading-relaxed text-black/80">
              If you want to see how I work, start with{" "}
              <Link href="/projects" className="underline underline-offset-4">
                project case studies
              </Link>{" "}
              and then read a few practical notes on the{" "}
              <Link href="/blog" className="underline underline-offset-4">
                blog
              </Link>
              .
            </p>

            <Link
              href="/contact"
              className="mb-10 md:mb-0 flex justify-center items-center gap-3 rounded-2xl border-2 border-black bg-indigo-400 hover:bg-indigo-300 text-black px-6 py-3 font-display font-base text-xl md:text-2xl shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all group cursor-pointer"
            >
              <span>Estimate Project & Process</span>
              <TbMailShare className="text-2xl shrink-0 text-black transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:pl-[130px] w-full bg-indigo-50 border-t-2 border-black">
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          
          {/* Header block with button on the right */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-end w-full gap-6">
            <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
              <span className="bg-amber-300 text-black text-xs md:text-sm font-bold uppercase tracking-wider px-3 py-1 rounded-full border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                Workflow
              </span>
              <h2 className="font-display font-bold text-3xl md:text-5xl uppercase tracking-wider text-black">
                Simple 4-Step Process
              </h2>
              <p className="text-gray-700 max-w-xl text-base leading-relaxed">
                I follow a clear, transparent roadmap to ensure your project is built to the highest standards, on time, and on budget.
              </p>
            </div>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 rounded-xl border-2 border-black bg-indigo-400 hover:bg-indigo-300 text-black px-5 py-3 font-bold text-sm shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all cursor-pointer shrink-0 w-fit self-center md:self-auto"
            >
              <span>See process & pricing</span>
              <TbMailShare className="text-lg text-black" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            <div className="border-2 border-black rounded-2xl p-5 bg-white shadow-[4px_4px_0px_rgba(0,0,0,1)] relative overflow-hidden">
              <span className="absolute right-4 top-2 text-6xl font-black text-indigo-100 select-none">1</span>
              <h3 className="font-bold text-lg mb-2 relative z-10">Brief & Estimate</h3>
              <p className="text-gray-600 text-sm leading-relaxed relative z-10">We discuss needs, content structure, and establish fixed scope and price.</p>
            </div>
            <div className="border-2 border-black rounded-2xl p-5 bg-white shadow-[4px_4px_0px_rgba(0,0,0,1)] relative overflow-hidden">
              <span className="absolute right-4 top-2 text-6xl font-black text-indigo-100 select-none">2</span>
              <h3 className="font-bold text-lg mb-2 relative z-10">Design by me</h3>
              <p className="text-gray-600 text-sm leading-relaxed relative z-10">Custom UI/UX designs crafted fully by me, tailored to your brand goals.</p>
            </div>
            <div className="border-2 border-black rounded-2xl p-5 bg-white shadow-[4px_4px_0px_rgba(0,0,0,1)] relative overflow-hidden">
              <span className="absolute right-4 top-2 text-6xl font-black text-indigo-100 select-none">3</span>
              <h3 className="font-bold text-lg mb-2 relative z-10">Clean Code</h3>
              <p className="text-gray-600 text-sm leading-relaxed relative z-10">Optimized Next.js & React development, speed tuning, and Core Web Vitals audit.</p>
            </div>
            <div className="border-2 border-black rounded-2xl p-5 bg-white shadow-[4px_4px_0px_rgba(0,0,0,1)] relative overflow-hidden">
              <span className="absolute right-4 top-2 text-6xl font-black text-indigo-100 select-none">4</span>
              <h3 className="font-bold text-lg mb-2 relative z-10">Launch & Care</h3>
              <p className="text-gray-600 text-sm leading-relaxed relative z-10">Domain connection, testing, deployment to Vercel/VPS, and post-launch support.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full">
        <div className="absolute w-full flex justify-center items-start -translate-y-4 z-10">
          <h2 className="text-center bg-indigo-400 font-base rounded-xl px-2 md:px-4 z-100 border-2 border-black shadow-[4px_4px] font-display text-2xl tracking-widest">
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
      <section className="relative flex flex-col justify-center items-center md:pl-[130px] w-full bg-white">
        <div>
          <Timeline data={timelineData} />
          <DotPattern />
        </div>
        <Image
          src={coolGuy}
          alt="Sitting figure"
          width={120}
          height={120}
          className="size-30 md:size-[150px] absolute bottom-[-55px] right-0 z-40"
        />
        <div className="w-full flex justify-center items-start translate-y-4 z-20">
          <h2
            id="projects"
            className="text-center bg-indigo-400 font-base rounded-xl px-4 border-2 border-black shadow-black shadow-[4px_4px] font-display text-xl md:text-2xl tracking-widest"
          >
            <StarIcon className="inline-block mr-2 text-yellow-400 fill-amber-300" />
            LATEST WORK
          </h2>
        </div>
      </section>
      <section>
        <div className="hidden md:block">
          <ProjectsSection
            content={projectsData.slice(0, 3)}
            contentClassName="px-6 xl:pr-0"
          />
        </div>
        <div className="block md:hidden">
          <SwipeCards content={projectsData.slice(0, 3)} />
        </div>
      </section>
      <AnglerSection />
      <Clouds color="blue" position="bottom" />
    </main>
  );
}
