import ProjectHero from "@components/landing/sections/ProjectHero";
import ProjectTechStack from "@components/landing/sections/ProjectTechStack";
import React from "react";
import { features, technologies } from "./data";
import ProjectProcess from "@components/landing/sections/ProjectProcess";
import { challenges, learnings } from "./data";
import DoubleColumn from "./double-column";
import { ChallengeArrow, TickIcon } from "@components/icons";
import { FaStar } from "react-icons/fa";
import { redirect } from "next/navigation";

function Page() {
  redirect("/")
  // return (
    // <main className="relative bgCool md:pl-[130px] flex flex-col items-center">
    //   <ProjectHero
    //     title="Blackfyre"
    //     titleDescription="Your comfort learning platform"
    //   />
    //   <div className="text-center p-3 mx-5 mt-4 rounded-full border-2 bg-white border-black shadow-[4px_4px] shadow-black w-fit font-bold text-red-500">*This is my final year engineer project and I can&apos;t show live site yet, because this could be against rules of my University.</div>
    //   <DoubleColumn
    //     leftSide={<h2>Overview</h2>}
    //     rightSide={
    //       <>
    //         The objective of the project is to create a web platform for
    //         language learning that allows users to create personalized sets of
    //         vocabulary with translations, learn using the flashcard method,
    //         solve quizzes, and engage with language games. Users will also be
    //         able to track their progress and customize the app&apos;s
    //         appearance. The scope of the project includes interface design,
    //         functionality implementation, and evaluation of the learning
    //         method&apos;s effectiveness.
    //       </>
    //     }
    //   />
    //   <DoubleColumn
    //     leftSide={<h2>Problem</h2>}
    //     rightSide={
    //       <>
    //         Current technologies offer countless possibilities to facilitate
    //         learning and acquiring new skills. However, the proposed language
    //         vocabulary learning platform meets the needs of individuals seeking
    //         modern educational methods. Unlike other available solutions such as
    //         Duolingo and Anki, this platform focuses on interactive vocabulary
    //         learning through flashcards, quizzes, and language games like
    //         Hangman, while also allowing users to share materials with others.
    //         In contrast to Duolingo, which offers a language learning process
    //         through a series of lessons and tasks, the created platform allows
    //         for greater content personalization and direct involvement in
    //         creating educational material. Meanwhile, Anki, a tool focused on
    //         repetition and efficient memorization using a card system, does not
    //         offer as wide a range of interactive learning forms as the proposed
    //         application.
    //       </>
    //     }
    //   />
    //   <DoubleColumn
    //     leftSide={<h2>Tech Stack</h2>}
    //     rightSide={
    //       <>
    //         <ProjectTechStack technologies={technologies} />
    //       </>
    //     }
    //   />
    //   <DoubleColumn
    //     leftSide={<h2>Features</h2>}
    //     rightSide={
    //       <>
    //         Features Overview My platform offers a comprehensive suite of tools
    //         designed to facilitate personalized and interactive language
    //         learning. Users can create custom vocabulary sets and engage with
    //         them through three dynamic games: Flashcards, Matching Tiles, and
    //         Hangman. To enhance the learning experience, I provide
    //         Google/GitHub authentication for easy access and secure login.
    //         <h3 className="font-semibold my-5">Key Features:</h3>
    //         <div className="flex flex-col gap-6 rounded-[10px] bg-white-800 dark:bg-black-300 md:gap-[30px]">
    //           {features.map((feature) => (
    //             <p key={feature} className="flex gap-[11px]">
    //               <FaStar className="mt-[6px] shrink-0 text-indigo-400" />
    //               <span>{feature}</span>
    //             </p>
    //           ))}
    //         </div>
    //       </>
    //     }
    //   />
    //   <DoubleColumn
    //     leftSide={<h2>Process</h2>}
    //     rightSide={
    //       <>
    //         <ProjectProcess />
    //       </>
    //     }
    //   />

    //   <DoubleColumn
    //     className="pb-0 md:pb-0"
    //     leftSide={<h2>Learnings</h2>}
    //     rightSide={
    //       <>
    //         <div className="flex flex-col gap-6 rounded-[10px] bg-white-800 dark:bg-black-300 md:gap-[30px]">
    //           {challenges.map((challenge) => (
    //             <p key={challenge} className="flex gap-[11px]">
    //             <TickIcon className="mt-[6px] shrink-0" />
    //               <span>{challenge}</span>
    //             </p>
    //           ))}
    //         </div>
    //       </>
    //     }
    //   />
    //   <DoubleColumn
    //     leftSide={<h2>Challenges</h2>}
    //     rightSide={
    //       <>
    //         <div className="flex flex-col gap-6 rounded-[10px] bg-white-800 6 dark:bg-black-300 md:gap-[30px]">
    //           {learnings.map((learning) => (
    //             <p key={learning} className="flex gap-[11px]">
    //                <ChallengeArrow className="mt-[6px] shrink-0" />
    //               <span>{learning}</span>
    //             </p>
    //           ))}
    //         </div>
    //       </>
    //     }
    //   />
    //   {/* <ProjectOtherCaseStudies /> */}
    // </main>
  // );
}

export default Page;
