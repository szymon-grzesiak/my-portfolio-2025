import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { getProjectCaseStudy, projectCaseStudies } from "@/lib/data";
import ProjectCaseStudyTemplate from "@/components/landing/ProjectCaseStudyTemplate";

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
      type: "article",
      images: [
        {
          url: `/api/og?title=${encodeURIComponent(project.title)}`,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
}

export default async function ProjectCaseStudyPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  return <ProjectCaseStudyTemplate slug={slug} isPolish={false} />;
}
