import Clouds from "@components/Clouds";
import Image from "next/image";
import { StickyScroll } from "@components/sticky-scroll-reveal";

import angler from "../assets/angler.svg";

import { HoverEffect } from "@components/ui/card-hover-effect";
import { projects } from "@lib/data";
import FetchData, { content } from "@components/FetchData";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative mx-auto">
      <section className="lg:h-screen pt-40 lg:pt-0 flex-col gap-10 lg:gap-0 lg:flex-row w-full flex items-center justify-around px-10">
        <div className="space-y-10 text-center lg:text-left">
          <h1
            id="home"
            className="text-4xl lg:text-7xl font-bold flex flex-col gap-5"
          >
            Hey, what&apos;s up! 🤞
            <br />
            <span className="underline underline-offset-8 decoration-indigo-500">
              I&apos;m Szymon
            </span>
          </h1>
          <p className="md:w-[440px] text-lg text-black">
            I&apos;m a web developer and I will showcase here some of my cool
            projects. I hope you will like it! 🚀
          </p>
          <div className="flex gap-6">
            <a
              className="inline-block group"
              href="mailto:szymongrzesiak.pl@gmail.com"
            >
              <div>
                <h1 className="text-3xl font-bold group-hover:text-indigo-500 transition-all">
                  Contact Me 📨
                </h1>
                <div className="w-40 h-2 bg-indigo-500 rounded-full " />
                <div className="w-40 h-2 bg-black rounded-full translate-x-2" />
              </div>
            </a>

            <div className="flex gap-4 justify-center items-center">
              <Link href="https://www.linkedin.com/in/szymon-grzesiak-296873200/">
                <FaLinkedin className="text-3xl hover:text-indigo-600" />
              </Link>
              <Link href="https://github.com/itsJasberry">
                <FaGithub className="text-3xl hover:text-indigo-600" />
              </Link>
              <Link href="https://x.com/jasberry_x">
                <FaTwitter className="text-3xl hover:text-indigo-600" />
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center -rotate-6">
            <h1 className="text-3xl font-bold group-hover:text-green-400 transition-all">
              Skills
              <div className="w-40 h-2 bg-indigo-500 rounded-full " />
              <div className="w-40 h-2 bg-black rounded-full translate-x-2" />
            </h1>
          </div>
          <div className="max-w-5xl mx-auto px-8">
            <HoverEffect items={projects} />
          </div>
        </div>
      </section>

      <StickyScroll content={content} contentClassName="pr-2 xl:pr-0" />

      <section className="h-screen w-full flex" style={{
        zIndex: -1
      }}>
        <Image
          src={angler}
          className="aspect-square hidden sm:block w-full max-w-[425px] translate-x-[-20px] lg:max-w-[600px] xl:max-w-none"
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
