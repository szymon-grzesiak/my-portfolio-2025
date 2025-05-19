import ProjectHero from "@components/landing/sections/ProjectHero";
import ProjectTechStack from "@components/landing/sections/ProjectTechStack";
import React from "react";
import { features, technologies } from "./data";
import ProjectProcess from "@components/landing/sections/ProjectProcess";
import { challenges, learnings } from "./data";
import DoubleColumn from "./double-column";
import { ChallengeArrow, TickIcon } from "@components/icons";
import { FaStar } from "react-icons/fa";
import { siteConfig } from "@config/site";
import { Metadata } from "next";
import Typography from "@components/shared/Typography";
import Link from "next/link";
import { HiExternalLink } from "react-icons/hi";
import Image from "next/image";
import blackfyre from "../../../assets/main_screen_blackfyre.png"
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Vocablaze",
  description: "Project - A language learning platform",
  keywords: [
    "Vocablaze",
    "Language Learning",
    "Web Development",
    "Next.js",
    "React",
    "TypeScript",
  ],
  alternates: {
    canonical: `${siteConfig.url}/vocablaze`,
  }
};

function Page() {
  
  return (
    <main className="relative bgCool md:pl-[130px] flex flex-col items-center">
      <ProjectHero
        title="Vocablaze"
        titleDescription="Your comfort learning platform"
      />
      <DoubleColumn
        leftSide={<h2>Overview</h2>}
        rightSide={
          <>
            The objective of the project is to create a web platform for
            language learning that allows users to create personalized sets of
            vocabulary with translations, learn using the flashcard method,
            solve quizzes, and engage with language games. Users will also be
            able to track their progress and customize the app&apos;s
            appearance. The scope of the project includes interface design,
            functionality implementation, and evaluation of the learning
            method&apos;s effectiveness.
          </>
        }
      />
      <DoubleColumn
        leftSide={<h2>Problem</h2>}
        rightSide={
          <>
            Current technologies offer countless possibilities to facilitate
            learning and acquiring new skills. However, the proposed language
            vocabulary learning platform meets the needs of individuals seeking
            modern educational methods. Unlike other available solutions such as
            Duolingo and Anki, this platform focuses on interactive vocabulary
            learning through flashcards, quizzes, and language games like
            Hangman, while also allowing users to share materials with others.
            In contrast to Duolingo, which offers a language learning process
            through a series of lessons and tasks, the created platform allows
            for greater content personalization and direct involvement in
            creating educational material. Meanwhile, Anki, a tool focused on
            repetition and efficient memorization using a card system, does not
            offer as wide a range of interactive learning forms as the proposed
            application.
          </>
        }
      />
      <DoubleColumn
        leftSide={<h2>Tech Stack</h2>}
        rightSide={
          <>
            <ProjectTechStack technologies={technologies} />
          </>
        }
      />
      <DoubleColumn
        leftSide={<h2>Features</h2>}
        rightSide={
          <>
            Features Overview My platform offers a comprehensive suite of tools
            designed to facilitate personalized and interactive language
            learning. Users can create custom vocabulary sets and engage with
            them through three dynamic games: Flashcards, Matching Tiles, and
            Hangman. To enhance the learning experience, I provide
            Google/GitHub authentication for easy access and secure login.
            <h3 className="font-semibold my-5">Key Features:</h3>
            <div className="flex flex-col gap-6 rounded-[10px] bg-white-800 dark:bg-black-300 md:gap-[30px]">
              {features.map((feature) => (
                <p key={feature} className="flex gap-[11px]">
                  <FaStar className="mt-[6px] shrink-0 text-indigo-400" />
                  <span>{feature}</span>
                </p>
              ))}
            </div>
          </>
        }
      />
      <DoubleColumn
        leftSide={<h2>Process</h2>}
        rightSide={
          <>
            <ProjectProcess />
          </>
        }
      />
        <DoubleColumn
        leftSide={
          <div>
            <h2>Final Site</h2>
            <Typography className="font-thin text-xl">
              <Link
                className="flex justify-center items-center gap-1 hover:underline underline-offset-4"
                href="https://www.hgfhkmfgklmdslkr665464fdsf.space/"
                target="_blank"
              >
                vocablaze.com{" "}
                <HiExternalLink className="text-blue-600" />
              </Link>
            </Typography>
          </div>
        }
        rightSide={
          <>
            <Link
              className="flex justify-center items-center gap-1 hover:underline underline-offset-4"
              href="https://resoursea.vercel.app/"
              target="_blank"
            >
              <div className="relative w-full md:max-w-[1025px] md:h-[488px] h-[280px]">
                <Image
                  src={blackfyre}
                  className="w-full h-full object-cover border-[3px] rounded-3xl border-black shadow-black shadow-[4px_4px]"
                  alt="Resoursea app."
                />
                <div className="absolute inset-0 hover:bg-black/30 rounded-3xl">
                  <div className="flex justify-center items-center h-full text-6xl text-white">
                    Visit website{" "}
                    <ArrowRight className="text-white w-[50px] h-[50px] animate-bounce" />
                  </div>
                </div>
              </div>
            </Link>
          </>
        }
      />

      <DoubleColumn
        className="pb-0 md:pb-0"
        leftSide={<h2>Learnings</h2>}
        rightSide={
          <>
            <div className="flex flex-col gap-6 rounded-[10px] bg-white-800 dark:bg-black-300 md:gap-[30px]">
              {challenges.map((challenge) => (
                <p key={challenge} className="flex gap-[11px]">
                <TickIcon className="mt-[6px] shrink-0" />
                  <span>{challenge}</span>
                </p>
              ))}
            </div>
          </>
        }
      />
      <DoubleColumn
        leftSide={<h2>Challenges</h2>}
        rightSide={
          <>
            <div className="flex flex-col gap-6 rounded-[10px] bg-white-800 6 dark:bg-black-300 md:gap-[30px]">
              {learnings.map((learning) => (
                <p key={learning} className="flex gap-[11px]">
                   <ChallengeArrow className="mt-[6px] shrink-0" />
                  <span>{learning}</span>
                </p>
              ))}
            </div>
          </>
        }
      />
      {/* <ProjectOtherCaseStudies /> */}
    </main>
  );
}

export default Page;
