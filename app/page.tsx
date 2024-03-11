"use client";
import { useState } from "react";
import "./mainpage.css";
import Clouds from "@components/Clouds";
import Image from "next/image";
import { StickyScroll } from "@components/sticky-scroll-reveal";
import niceBg from "../assets/nicebg.png";
import cover5 from "../assets/cover5.jpg";
import keanu from "../assets/keanu.webp";
import angler from "../assets/angler.webp";

import { HoverEffect } from "@components/ui/card-hover-effect";
import { projects } from "@lib/data";
import { fetchCuriosity } from "@lib/utils";
import { TextGenerateEffect } from "@components/ui/text-generate-effect";

export default function Home() {
  const content = [
    {
      title: "Project 1",
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
      title: "Project 2",
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
      title: "Project 3",
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
      title: "Project 4",
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

  const [fact, setFact] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [fetchCount, setFetchCount] = useState(0);

  const handleFetchCuriosity = async () => {
    try {
      setIsLoading(true); // Start loading
      setFact("");
      const fetchedFact = await fetchCuriosity();
      setFact(fetchedFact);
      setFetchCount((c) => c + 1); // Increment the fetch count
    } catch (error) {
      console.error("Error fetching fact:", error);
      setFact("An error occurred while fetching the fact.");
    } finally {
      setIsLoading(false); // Stop loading
    }
  };
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

        <StickyScroll content={content} contentClassName="pr-2 xl:pr-0"/>

      <section className="h-screen w-full flex">
        <Image
          src={angler}
          className="aspect-square hidden sm:block w-full max-w-[425px] lg:max-w-[600px] xl:max-w-none"
          width={1000}
          alt={"angler"}
        />
        {/* // TODO zrobic pozniej siedzaca postac ktora sie patrzy na tej sekcji z projektami */}
        <h2 className="mx-auto w-full pt-20 flex flex-col justify-start items-center font-bold text-[32px]">
          Cool facts 🎲
          <div className="w-48 h-2 bg-indigo-500 rounded-full " />
          <div className="w-48 h-2 bg-black rounded-full translate-x-2" />
          <button
            onClick={handleFetchCuriosity}
            className="button flex h-[50px] justify-center items-center mt-5 w-[200px]"
            disabled={isLoading}
          >
            {isLoading ? (
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              "Click"
            )}
          </button>
          <div className="mt-5 w-2/3 sm:w-1/2">
            <TextGenerateEffect key={fetchCount} words={fact} />
          </div>
        </h2>
      </section>
      <Clouds color="white" rotate position="top" />
      <Clouds color="blue" position="bottom" />
    </main>
  );
}
