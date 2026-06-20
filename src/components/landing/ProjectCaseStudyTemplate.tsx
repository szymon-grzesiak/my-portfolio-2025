import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaStar } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";

import ProjectHero from "@/components/landing/sections/ProjectHero";
import ProjectTechStack from "@/components/landing/sections/ProjectTechStack";
import ProjectProcess from "@/components/landing/sections/ProjectProcess";
import DoubleColumn from "@/components/landing/sections/DoubleColumn";
import StickyBreadcrumb from "@/components/shared/sticky-breadcrumb";
import Typography from "@/components/shared/Typography";
import { ChallengeArrow, TickIcon } from "@/components/icons";
import { getProjectCaseStudy } from "@/lib/data";
import { getProjectCaseStudyPl } from "@/lib/data-pl";

interface Props {
  slug: string;
  isPolish?: boolean;
}

export default function ProjectCaseStudyTemplate({ slug, isPolish = false }: Props) {
  const project = isPolish ? getProjectCaseStudyPl(slug) : getProjectCaseStudy(slug);

  if (!project) {
    notFound();
  }

  const breadcrumbItems = isPolish
    ? [
        { label: "Główna", href: "/pl" },
        { label: "Projekty", href: "/pl/projects" },
      ]
    : [
        { label: "Home", href: "/" },
        { label: "Projects", href: "/projects" },
      ];

  const labels = {
    overview: isPolish ? "Przegląd" : "Overview",
    problem: isPolish ? "Problem" : "Problem",
    techStack: isPolish ? "Stack Technologiczny" : "Tech Stack",
    features: isPolish ? "Funkcje" : "Features",
    process: isPolish ? "Proces" : "Process",
    finalSite: isPolish ? "Finalna Strona" : "Final Site",
    learnings: isPolish ? "Czego się nauczyłem" : "Learnings",
    challenges: isPolish ? "Wyzwania" : "Challenges",
    ctaText: isPolish ? "Odwiedź stronę" : "Visit website",
  };

  return (
    <main className="relative bgCool md:pl-[130px] flex flex-col items-center">
      <ProjectHero
        title={project.title}
        titleDescription={project.heroTagline}
      />
      <StickyBreadcrumb items={breadcrumbItems} currentPage={project.title} />

      <DoubleColumn
        leftSide={<h2>{labels.overview}</h2>}
        rightSide={
          <div className="flex flex-col gap-6">
            {project.overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        }
      />

      <DoubleColumn
        leftSide={<h2>{labels.problem}</h2>}
        rightSide={
          <div className="flex flex-col gap-6">
            {project.problem.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        }
      />

      {project.technologies.length > 0 && (
        <DoubleColumn
          leftSide={<h2>{labels.techStack}</h2>}
          rightSide={<ProjectTechStack technologies={project.technologies} />}
        />
      )}

      {project.features.length > 0 && (
        <DoubleColumn
          leftSide={<h2>{labels.features}</h2>}
          rightSide={
            <div className="flex flex-col gap-6 rounded-[10px] bg-white-800 dark:bg-black-300 md:gap-[30px]">
              {project.features.map((feature) => (
                <p
                  key={`${feature.title ?? feature.description}`}
                  className="flex gap-[11px]"
                >
                  <FaStar className="mt-[6px] shrink-0 text-indigo-400" />
                  <span>
                    {feature.title ? (
                      <>
                        <strong>{feature.title}: </strong>
                        {feature.description}
                      </>
                    ) : (
                      feature.description
                    )}
                  </span>
                </p>
              ))}
            </div>
          }
        />
      )}

      {project.includeProcess && (
        <DoubleColumn
          leftSide={<h2>{labels.process}</h2>}
          rightSide={<ProjectProcess />}
        />
      )}

      <DoubleColumn
        leftSide={
          <div>
            <h2>{labels.finalSite}</h2>
            <Typography className="font-thin text-xl">
              <Link
                className="flex justify-center items-center gap-1 hover:underline underline-offset-4"
                href={project.finalSite.url}
                target="_blank"
              >
                {project.finalSite.label}{" "}
                <HiExternalLink className="text-blue-600" />
              </Link>
            </Typography>
          </div>
        }
        rightSide={
          <Link
            className="flex justify-center items-center gap-1 hover:underline underline-offset-4"
            href={project.finalSite.url}
            target="_blank"
          >
            <div className="group relative w-full md:max-w-[1025px] md:h-[488px] h-[280px] overflow-hidden border-[3px] rounded-3xl border-black shadow-black shadow-[4px_4px]">
              <Image
                src={project.finalSite.image}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                alt={`${project.title} preview`}
              />
              <div className="absolute inset-0 bg-black/55 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
                <div className="flex items-center gap-3 bg-white text-black px-8 py-4 border-[3px] border-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-bold text-2xl md:text-3xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <span>{project.finalSite.ctaText ?? labels.ctaText}</span>
                  <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </Link>
        }
      />

      {project.learnings.length > 0 && (
        <DoubleColumn
          className="pb-0 md:pb-0"
          leftSide={<h2>{labels.learnings}</h2>}
          rightSide={
            <div className="flex flex-col gap-6 rounded-[10px] bg-white-800 dark:bg-black-300 md:gap-[30px]">
              {project.learnings.map((learning) => (
                <p key={learning} className="flex gap-[11px]">
                  <TickIcon className="mt-[6px] shrink-0" />
                  <span>{learning}</span>
                </p>
              ))}
            </div>
          }
        />
      )}

      {project.challenges.length > 0 && (
        <DoubleColumn
          leftSide={<h2>{labels.challenges}</h2>}
          rightSide={
            <div className="flex flex-col gap-6 rounded-[10px] bg-white-800 dark:bg-black-300 md:gap-[30px]">
              {project.challenges.map((challenge) => (
                <p key={challenge} className="flex gap-[11px]">
                  <ChallengeArrow className="mt-[6px] shrink-0" />
                  <span>{challenge}</span>
                </p>
              ))}
            </div>
          }
        />
      )}
    </main>
  );
}
