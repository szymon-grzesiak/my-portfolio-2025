import ProjectHero from "@components/landing/sections/ProjectHero";
import ProjectTechStack from "@components/landing/sections/ProjectTechStack";
import React from "react";
import { technologies } from "./data";
import Typography from "@components/shared/Typography";
import ProjectProcess from "@components/landing/sections/ProjectProcess";
import { challenges, learnings } from "./data";
import ProjectOtherCaseStudies from "@components/landing/sections/ProjectOtherCaseStudies";
import DoubleColumn from "./double-column";
import { ChallengeArrow, TickIcon } from "@components/icons";

function Page() {
  return (
    <main className="relative bgCool">
      <ProjectHero
        title="Blackfyre"
        titleDescription="Your comfort learning platform"
      />
      <DoubleColumn
        leftSide={<h2>Overwiew</h2>}
        rightSide={
          <>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
            eligendi, sint voluptatum quaerat culpa deserunt ipsam cum
            consequuntur repellat in excepturi perferendis. Autem fuga aliquam
            nulla illum quia aspernatur facere? Explicabo iusto odio vel maxime
            quod quae alias autem doloribus quam eveniet. Iusto, cumque modi
            culpa alias totam id officiis vel suscipit mollitia laboreventore,
            consequatur non numquam ullam! Provident, ipsa assumenda. Sapiente
            mollitia placeat possimus praesentium eligendi repudiandae impedit
            possimus accusamus blanditiis velit consequuntur maxime tempore cum,
            aspernatur ex molestias recusandae perferendis! Tempore quis
            expedita commodi aliquid ex! Animi, vel? Molestiae saepe voluptas
          </>
        }
      />
      <DoubleColumn
        leftSide={<h2>Problem</h2>}
        rightSide={
          <>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            ut commodi nostrum dolores sapiente, repellendus fugit! Voluptate
            fugit odit illo deserunt nobis, delectus neque tempora eveniet
            praesentium modi rerum non? Ex molestiae vero, eos atque suscipit
            laboriosam ipsam in quasi mollitia fuga tenetur illum incidunt
            delectus consectetur dolorem eveniet quisquam, quo sint possimus
            consequatur sed? Ex aspernatur saepe impedit repellat! Itaque ipsa
            perspiciatis nesciunt, aperiam pariatur aliquam ab nam at quis
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
        leftSide={<h2>Reflection</h2>}
        rightSide={
          <>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            ut commodi nostrum dolores sapiente, repellendus fugit! Voluptate
            fugit odit illo deserunt nobis, delectus neque tempora eveniet
            praesentium modi rerum non? Ex molestiae vero, eos atque suscipit
            laboriosam ipsam in quasi mollitia fuga tenetur illum incidunt
            delectus consectetur dolorem eveniet quisquam, quo sint possimus
            consequatur sed? Ex aspernatur saepe impedit repellat! Itaque ipsa
            perspiciatis nesciunt, aperiam pariatur aliquam ab nam at quis
          </>
        }
      />
      <DoubleColumn
        leftSide={<h2>Features</h2>}
        rightSide={
          <>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            ut commodi nostrum dolores sapiente, repellendus fugit! Voluptate
            fugit odit illo deserunt nobis, delectus neque tempora eveniet
            praesentium modi rerum non? Ex molestiae vero, eos atque suscipit
            laboriosam ipsam in quasi mollitia fuga tenetur illum incidunt
            delectus consectetur dolorem eveniet quisquam, quo sint possimus
            consequatur sed? Ex aspernatur saepe impedit repellat! Itaque ipsa
            perspiciatis nesciunt, aperiam pariatur aliquam ab nam at quis
          </>
        }
      />
      <DoubleColumn
        leftSide={<h2>Features</h2>}
        rightSide={
          <>
            <ProjectProcess />
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
                  <ChallengeArrow className="mt-[6px] shrink-0" />
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
                  <TickIcon className="mt-[6px] shrink-0" />
                  <span>{learning}</span>
                </p>
              ))}
            </div>
          </>
        }
      />

      <ProjectOtherCaseStudies />
    </main>
  );
}

export default Page;
