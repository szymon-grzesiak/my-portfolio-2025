"use client";

import { useState } from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { curiosities } from "@lib/data";

const FetchData = () => {
  const [fact, setFact] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [fetchCount, setFetchCount] = useState(0);

  const handleFetchCuriosity = () => {
    setIsLoading(true); // Rozpocznij ładowanie
    setFact(""); // Wyczyść poprzednią ciekawostkę

    const randomIndex = Math.floor(Math.random() * curiosities.length);
    setFact(curiosities[randomIndex]); // Ustaw wylosowaną ciekawostkę
    setIsLoading(false); // Zakończ ładowanie
    setFetchCount((c) => c + 1); // Zaktualizuj licznik fetchy
  };

  return (
    <div className="mx-auto w-full pt-20 flex flex-col justify-start items-center font-bold text-[32px]">
      Some facts about me 🎲
      <button
        onClick={handleFetchCuriosity}
        className="button flex h-[50px] justify-center items-center mt-5 w-[200px] cursor-pointer"
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
              strokeWidth="4"
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
