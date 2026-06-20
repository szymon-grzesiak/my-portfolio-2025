import Clouds from "@/components/landing/Clouds";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ProjectsSection } from "@/components/landing/ProjectsSection";
import { projects } from "@/lib/data";
import { projectsDataPl as projectsData, timelineDataPl as timelineData } from "@/lib/data-pl";
import port from "@/assets/boy_with_telescope.png";
import Marquee from "@/components/landing/marquee";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Timeline } from "@/components/landing/timeline";
import coolGuy from "@/assets/coolguy2.webp";
import DotPattern from "@/components/ui/dotpattern";
import SwipeCards from "@/components/landing/Swiper/SwipeCards";
import AnglerSection from "@/components/landing/sections/AnglerSection";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { StarIcon } from "lucide-react";
import ContactDrawer from "@/components/ui/ContactDrawer";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Szymon Grzesiak | Programista & Full Stack Developer",
  description:
    "Projektuję i wdrażam szybkie, nowoczesne aplikacje internetowe w Next.js, React i TypeScript. Zobacz moje projekty i doświadczenie.",
  alternates: {
    canonical: `${siteConfig.url}/pl`,
  },
  openGraph: {
    title: "Szymon Grzesiak | Portfolio Programisty",
    description:
      "Studia przypadków projektów, tworzenie produktów oraz inżynieria oprogramowania z użyciem Next.js i TypeScript.",
    url: `${siteConfig.url}/pl`,
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="relative mx-auto landing">
      <Clouds color="white" rotate position="top" />
      <section className="lg:h-[90vh] px-6 pt-40 lg:pt-0 md:flex-row gap-10 lg:gap-5 w-full flex items-center md:items-end justify-around md:px-10 flex-col-reverse md:pl-[130px]">
        <Image
          src={port}
          quality={75}
          priority={true}
          fetchPriority="high"
          alt="Chłopak z teleskopem"
          className="lg:w-[414px] md:w-[304px] md:block hidden pl-12"
        />
        <div className="flex justify-center h-full">
          <div className="flex flex-col items-center md:items-start justify-center gap-y-6 md:pb-10 lg:pb-0">
            <div
              id="home"
              className="flex flex-col items-center gap-4 text-center md:items-start md:text-left md:gap-5"
            >
              <p className="font-display font-medium tracking-widest text-5xl xs:text-5xl sm:text-6xl md:text-5xl lg:text-7xl">
                <span className="block md:hidden">Cześć, jestem</span>
                <span className="hidden md:block">Cześć, co tam!🤞</span>
              </p>

              <h1 className="text-6xl sm:text-6xl md:text-5xl lg:text-7xl font-display font-medium tracking-widest">
                <span className="hidden md:inline">Jestem </span>
                <span className="inline-block bg-indigo-400 w-fit rounded-3xl px-4 pt-1 pb-3 md:pb-4 border-2 border-black shadow-[4px_4px] mt-1 md:mt-0">
                  Szymon<span className="sr-only"> Grzesiak</span>
                </span>
              </h1>
            </div>

            <h2 className="md:w-full md:max-w-[440px] text-lg text-black">
              Nazywam się Szymon Grzesiak, jestem Full Stack Developerem z Polski. Projektuję i tworzę produkty webowe, które działają szybko, są przejrzyste i pomagają użytkownikom realizować ich cele.
            </h2>

            <p className="md:w-full md:max-w-[500px] text-base leading-relaxed text-black/80">
              Jeśli chcesz zobaczyć jak pracuję, zacznij od{" "}
              <Link href="/pl/projects" className="underline underline-offset-4">
                analizy moich projektów
              </Link>{" "}
              a potem przeczytaj kilka praktycznych notatek na{" "}
              <Link href="/pl/blog" className="underline underline-offset-4">
                blogu
              </Link>
              .
            </p>

            <ContactDrawer />
          </div>
        </div>
      </section>
      <section className="relative w-full">
        <div className="absolute w-full flex justify-center items-start -translate-y-4 z-10">
          <h2 className="text-center bg-indigo-400 font-bold rounded-xl px-2 md:px-4 z-100 border-2 border-black shadow-[4px_4px] font-display text-2xl tracking-widest">
            UMIEJĘTNOŚCI
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
                        aria-label={`Ikona dla ${project.title}`}
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
                      aria-label={`Ikona dla ${project.title}`}
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
          alt="Siedząca postać"
          width={120}
          height={120}
          className="size-30 md:size-[150px] absolute bottom-[-55px] right-0 z-40"
        />
        <div className="w-full flex justify-center items-start translate-y-4 z-20">
          <h2
            id="projects"
            className="text-center bg-indigo-400 font-bold rounded-xl px-4 border-2 border-black shadow-black shadow-[4px_4px] font-display text-xl md:text-2xl tracking-widest"
          >
            <StarIcon className="inline-block mr-2 text-yellow-400 fill-amber-300" />
            OSTATNIE PROJEKTY
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
