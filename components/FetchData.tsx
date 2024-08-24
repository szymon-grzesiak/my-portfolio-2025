"use client";
import Image from "next/image";
import niceBg from "../assets/nicebg.png";
import cover5 from "../assets/cover5.jpg";
import keanu from "../assets/keanu.webp";
import { useState } from "react";
import { fetchCuriosity } from "@lib/utils";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export const content = [
  {
    title: "Project 1",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: niceBg,
  },
  {
    title: "Project 2",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: keanu,
  },
  {
    title: "Project 3",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: cover5,
  },
  {
    title: "Project 4",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: niceBg
  },
];

const FetchData = () => {
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
    <div className="mx-auto w-full pt-20 flex flex-col justify-start items-center font-bold text-[32px]">
      Cool facts about me 🎲
      {/* <div className="w-full h-2 bg-indigo-500 rounded-full " />
      <div className="w-full h-2 bg-black rounded-full translate-x-2" /> */}
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
          <p className="z-10">Click</p>
        )}
      </button>
      <div className="mt-5 w-2/3 sm:w-1/2">
        <TextGenerateEffect key={fetchCount} words={fact} />
      </div>
    </div>
  );
};

export default FetchData;
