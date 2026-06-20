"use client";
import { useState } from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { curiosities } from "@/lib/data";
import { curiositiesPl } from "@/lib/data-pl";
import angler from "@/assets/angler.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

const AnglerSection = () => {
  const pathname = usePathname();
  const isPolish = pathname.startsWith("/pl");

  const [fact, setFact] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [fetchCount, setFetchCount] = useState(0);

  const activeCuriosities = isPolish ? curiositiesPl : curiosities;

  const handleFetchCuriosity = () => {
    setIsLoading(true);
    setFact("");

    const randomIndex = Math.floor(Math.random() * activeCuriosities.length);
    setFact(activeCuriosities[randomIndex]);
    setIsLoading(false);
    setFetchCount((c) => c + 1);
  };

  return (
    <section className="h-auto w-full flex md:px-6 justify-between md:justify-normal flex-col-reverse md:flex-row pt-6 md:pt-0">
      <div className="shrink-0 w-2/3 md:w-auto md:h-full md:max-w-2/3 pb-14 md:pb-0 md:pl-0 lg:pl-15">
        <Image
          src={angler}
          className="w-full h-auto md:w-auto md:h-full object-contain object-bottom"
          alt={isPolish ? "Ilustracja uroczej żabnicy" : "A cute angler fish illustration"}
        />
      </div>
      <div className="md:pt-4 lg:pt-10 flex flex-col justify-start items-center font-bold text-[32px] xl:px-6 w-full max-w-[650px] md:mx-auto text-center">
        <h2 className="font-display text-3xl md:text-4xl text-black">
          {isPolish ? "WIĘCEJ O MNIE" : "MORE ABOUT ME"}{" "}
          <span className="inline-block">🎲</span>
        </h2>
        <button
          onClick={handleFetchCuriosity}
          className="button flex h-[50px] justify-center items-center mt-6 w-[200px] cursor-pointer rounded-3xl border-2 border-black shadow-[4px_4px] shadow-black overflow-hidden font-bold text-lg"
          disabled={isLoading}
        >
          {isLoading ? (
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
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
            <span className="z-10 text-current select-none font-bold text-lg">
              {isPolish ? "Losuj" : "Click"}
            </span>
          )}
        </button>
        <div className="relative px-4 mt-6 min-h-[140px] md:min-h-[160px] w-full flex items-start justify-center">
          {fact ? (
            <TextGenerateEffect key={fetchCount} words={fact} />
          ) : (
            <p className="text-neutral-500 font-normal text-lg italic mt-4">
              {isPolish
                ? "Kliknij przycisk, aby wylosować ciekawostkę!"
                : "Click the button to reveal a fact!"}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default AnglerSection;
