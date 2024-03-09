"use client";
import { useEffect } from "react";
import "./mainpage.css";
import Clouds from "@components/Clouds";
import Image from "next/image";
import background from "../assets/nicebg.png";
import { StickyScroll } from "@components/sticky-scroll-reveal";
import { ScrollArea } from "@components/ui/scroll-area";
import niceBg from "../assets/nicebg.png";
import countryside from "../assets/countryside.jpg";
import cover5 from "../assets/cover5.jpg";
import keanu from "../assets/keanu.webp";
import angler from "../assets/angler.webp";
import { DicesIcon } from 'lucide-react';


import {
  TextRevealCard,
  TextRevealCardTitle,
  TextRevealCardDescription,
} from "@components/ui/text-reveal-card";
import { Boxes } from "@components/ui/background-boxes";
import { HoverEffect } from "@components/ui/card-hover-effect";
import { projects } from "@lib/data";

export default function Home() {
  const content = [
    {
      title: "Collaborative Editing",
      description:
        "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
      content: (
        <div className="flex items-center justify-center text-white">
          <Image
            src={niceBg}
            width={500}
            height={500}
            className="rounded-[22px]"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Real time changes",
      description:
        "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
      content: (
        <div className="flex items-center justify-center text-white">
          <Image
            src={keanu}
            width={500}
            height={500}
            className="rounded-[22px]"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Version control",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="flex items-center justify-center text-white">
          <Image
            src={cover5}
            width={500}
            height={500}
            className="rounded-[22px]"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Running out of content",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="flex items-center justify-center text-white">
          <Image
            src={keanu}
            width={500}
            height={500}
            className="rounded-[22px]"
            alt="linear board demo"
          />
        </div>
      ),
    },
  ];
  return (
    <main className="relative mx-auto">
      <section className="h-screen w-full flex items-center justify-around px-10">
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

      <StickyScroll content={content} />

      <section className="h-screen w-full flex justify-between">
        <Image
          src={angler}
          className="aspect-square"
          width={1000}
          alt={"angler"}
        />
        {/* // TODO zrobic pozniej siedzaca postac ktora sie patrzy na tej sekcji z projektami */}
        <h2 className="mr-[300px] mt-[80px] font-bold text-[32px]">
          Dev curiosity 🎲
          <div className="w-48 h-2 bg-indigo-500 rounded-full " />
          <div className="w-48 h-2 bg-black rounded-full translate-x-2" />
          <button className="button mt-5">
            Click
          </button>
        </h2>
      </section>
      <Clouds color='white' rotate position="top" />
      <Clouds position="bottom" />
    </main>
  );
}
