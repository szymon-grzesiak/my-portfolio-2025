import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { getProjectCaseStudyPl, projectCaseStudiesPl } from "@/lib/data-pl";
import ProjectCaseStudyTemplate from "@/components/landing/ProjectCaseStudyTemplate";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectCaseStudiesPl.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectCaseStudyPl(slug);

  if (!project) {
    return {
      title: "Nie znaleziono projektu",
    };
  }

  return {
    title: project.metadata.title,
    description: project.metadata.description,
    keywords: project.metadata.keywords,
    alternates: {
      canonical: `${siteConfig.url}/pl/projects/${project.slug}`,
    },
    openGraph: {
      title: project.metadata.title,
      description: project.metadata.description,
      url: `${siteConfig.url}/pl/projects/${project.slug}`,
    },
  };
}

export default async function ProjectCaseStudyPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  return <ProjectCaseStudyTemplate slug={slug} isPolish={true} />;
}
