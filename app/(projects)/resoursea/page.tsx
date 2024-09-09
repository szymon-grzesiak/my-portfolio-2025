import ProjectHero from "@components/landing/sections/ProjectHero";
import ProjectTechStack from "@components/landing/sections/ProjectTechStack";
import React from "react";
import { features, technologies } from "./data";
import Typography from "@components/shared/Typography";
import ProjectProcess from "@components/landing/sections/ProjectProcess";
import { challenges, learnings } from "./data";
import ProjectOtherCaseStudies from "@components/landing/sections/ProjectOtherCaseStudies";
import DoubleColumn from "./double-column";
import { ChallengeArrow, TickIcon } from "@components/icons";
import { ArrowRight } from "lucide-react";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import { HiExternalLink } from "react-icons/hi";
import Image from "next/image";
import resoursea from "../../../assets/resoursea.png";

function Page() {
  return (
    <main className="relative bgCool md:pl-[130px] flex flex-col items-center">
      <ProjectHero title="Resoursea" titleDescription="Share your knowledge" />
      <DoubleColumn
        leftSide={<h2>Overview</h2>}
        rightSide={
          <>
            The objective of the Resoursea app is to create a versatile platform
            for knowledge sharing, allowing users to post content, engage in
            discussions, and exchange ideas. The platform offers features such
            as customizable profiles, interactive forums, and the ability to
            earn badges for active participation. Additionally, Resoursea
            includes a job search function, enabling users to discover
            employment opportunities nearby. The scope of the project
            encompasses interface design, feature implementation, and the
            creation of an engaging user experience that encourages continuous
            learning and community involvement.
          </>
        }
      />
      <DoubleColumn
        leftSide={<h2>Problem</h2>}
        rightSide={
          <>
            While numerous platforms facilitate online discussions and knowledge
            sharing, there is a lack of a unified, community-driven platform
            that combines these features with personalized user engagement and
            career opportunities. Existing forums often lack customization, and
            social networks do not adequately incentivize educational
            interactions. The proposed Resoursea platform addresses this gap by
            offering a customizable forum where users can share knowledge,
            engage in discussions, and earn recognition through badges.
            Additionally, unlike traditional forums, Resoursea integrates a
            job-finding feature, enabling users to discover employment
            opportunities related to their expertise. This combination of
            features fosters a more engaging, purpose-driven community
            experience.
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
            Resoursea is designed to empower users to share knowledge and
            connect with a community of learners through a comprehensive set of
            tools. The platform combines advanced login mechanisms, a robust
            global search function, and an intuitive interface that supports the
            sharing and discovery of information. Users can engage with the
            community through various sections, each tailored to different
            aspects of the knowledge-sharing process.
            <h3 className="font-semibold my-5">Key Features:</h3>
            <div className="flex flex-col gap-6 rounded-[10px] bg-white-800 dark:bg-black-300 md:gap-[30px]">
              {features.map((feature) => (
                <p key={feature.title} className="flex gap-[11px]">
                  <FaStar className="mt-[6px] shrink-0 text-indigo-400" />
                  <span>
                    {" "}
                    <strong>{feature.title}:</strong> {feature.content}
                  </span>
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
                href="https://resoursea.vercel.app/"
                target="_blank"
              >
                resoursea.vercel.app{" "}
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
                  src={resoursea}
                  className="w-full h-full object-cover border-[3px] rounded-3xl border-black shadow-black shadow-[4px_4px]"
                  alt="Resoursea app."
                />
                <div className="absolute inset-0 hover:bg-black hover:bg-opacity-50 rounded-3xl">
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
