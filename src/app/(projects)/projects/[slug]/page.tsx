import { notFound } from "next/navigation";
import type { Metadata } from "next";
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
import { siteConfig } from "@/config/site";
import { getProjectCaseStudy, projectCaseStudies } from "@/lib/data";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectCaseStudies.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectCaseStudy(slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: project.metadata.title,
    description: project.metadata.description,
    keywords: project.metadata.keywords,
    alternates: {
      canonical: `${siteConfig.url}/projects/${project.slug}`,
    },
    openGraph: {
      title: project.metadata.title,
      description: project.metadata.description,
      url: `${siteConfig.url}/projects/${project.slug}`,
    },
  };
}

export default async function ProjectCaseStudyPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectCaseStudy(slug);

  if (!project) {
    notFound();
  }

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
  ];

  return (
    <main className="relative bgCool md:pl-[130px] flex flex-col items-center">
      <ProjectHero
        title={project.title}
        titleDescription={project.heroTagline}
      />
      <StickyBreadcrumb items={breadcrumbItems} currentPage={project.title} />

      <DoubleColumn
        leftSide={<h2>Overview</h2>}
        rightSide={
          <div className="flex flex-col gap-6">
            {project.overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        }
      />

      <DoubleColumn
        leftSide={<h2>Problem</h2>}
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
          leftSide={<h2>Tech Stack</h2>}
          rightSide={<ProjectTechStack technologies={project.technologies} />}
        />
      )}

      {project.features.length > 0 && (
        <DoubleColumn
          leftSide={<h2>Features</h2>}
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
          leftSide={<h2>Process</h2>}
          rightSide={<ProjectProcess />}
        />
      )}

      <DoubleColumn
        leftSide={
          <div>
            <h2>Final Site</h2>
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
            <div className="relative w-full md:max-w-[1025px] md:h-[488px] h-[280px]">
              <Image
                src={project.finalSite.image}
                className="w-full h-full object-cover border-[3px] rounded-3xl border-black shadow-black shadow-[4px_4px]"
                alt={`${project.title} preview`}
              />
              <div className="absolute inset-0 hover:bg-black/30 rounded-3xl">
                <div className="flex justify-center items-center h-full text-6xl text-white">
                  {project.finalSite.ctaText ?? "Visit website"}
                  <ArrowRight className="ml-3 text-white w-[50px] h-[50px] animate-bounce" />
                </div>
              </div>
            </div>
          </Link>
        }
      />

      {project.learnings.length > 0 && (
        <DoubleColumn
          className="pb-0 md:pb-0"
          leftSide={<h2>Learnings</h2>}
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
          leftSide={<h2>Challenges</h2>}
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
