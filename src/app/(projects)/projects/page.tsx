import { Metadata } from "next";
import { BackgroundBeamsWithCollision } from "@/components/blog/background-beams-with-collision";
import Image from "next/image";
import coolGuy from "@/assets/coolguy2.webp";
import { siteConfig } from "@/config/site";
import { projectsData } from "@/lib/data";
import Link from "next/link";
import { HiExternalLink } from "react-icons/hi";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore my projects showcasing my skills in web development, including Next.js, React, and TypeScript. View case studies and live demos.",
  alternates: {
    canonical: `${siteConfig.url}/projects`,
  },
  openGraph: {
    title: "Projects",
    description:
      "Explore my projects showcasing my skills in web development, including Next.js, React, and TypeScript. View case studies and live demos.",
    url: `${siteConfig.url}/projects`,
  },
};

export default async function BlogPage() {
  return (
    <div className="relative blue-haze">
      <div className="relative h-46 md:h-64">
        <BackgroundBeamsWithCollision>
          <h1 className="flex justify-center items-start md:items-center gap-3 md:gap-0 md:flex-col lg:pl-20 xl:pl-0 relative text-5xl lg:text-7xl font-bold text-center text-black font-sans tracking-tight">
            My
            <div className="relative mx-auto inline-block w-max filter-[drop-shadow(0px_1px_3px_rgba(27,37,80,0.14))]">
              <div className="relative bg-clip-text text-transparent bg-no-repeat bg-linear-to-r from-blue-300 via-blue-500 to-blue-800 pb-2 md:py-4">
                <span>Projects</span>
              </div>
            </div>
          </h1>
        </BackgroundBeamsWithCollision>
        <Image
          src={coolGuy}
          alt="Sitting figure"
          width={150}
          height={150}
          className="absolute bottom-[-55px] right-0 md:bottom-[-55px] md:right-20"
        />
      </div>
      <div className="mt-10 flex flex-col gap-4 w-fit mx-auto md:pl-[150px] lg:pl-10 container px-6">
        <div className="flex flex-col items-center z-20">
          <Breadcrumb className="bg-white rounded-2xl shadow-md py-2 px-4 mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink
                  className="hover:text-blue-500 hover:bg-sky-100 px-2 py-1 rounded-lg duration-300 text-gray-600 font-semibold text-lg"
                  href="/"
                >
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-blue-500 font-semibold text-lg">
                  Projects
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {projectsData.map((project, idx) => (
          <div key={project.title} className="z-100">
            <p className="text-center font-bagel text-3xl md:text-4xl p-2 text-white">
              #{idx + 1} {project.title}
            </p>
            <div
              className={
                "flex items-center gap-10 justify-center top-0 rounded-[22px]"
              }
            >
              <div className="relative w-full md:max-w-[500px] lg:max-w-[650px] xl:max-w-[725px] xl:h-[350px] group">
                {project.new && (
                  <div className="absolute top-2 left-2 font-bold bg-red-500 text-white px-4 py-2 rounded-full text-xs animate-bounce">
                    NEW
                  </div>
                )}
                <Image
                  src={project.content ?? null}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-md border-2 border-black shadow-black shadow-[6px_6px]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-gray-700 to-transparent opacity-100 flex items-end p-4 rounded-md  w-full">
                  <div className="text-white w-full flex justify-between items-end">
                    <div className="flex flex-col items-start">
                      {project?.githubLink && (
                        <p className="text-base lg:text-lg font-bold flex justify-center items-center gap-2 lineThroughEffect">
                          <Link
                            className="flex gap-2 justify-center items-center"
                            href={project.githubLink as string}
                            target="_blank"
                          >
                            Github Code{" "}
                            <HiExternalLink className="text-white" />
                          </Link>
                        </p>
                      )}
                      <p className="text-base lg:text-lg font-bold flex justify-center items-center gap-2 lineThroughEffect">
                        <Link
                          className="flex gap-2 justify-center items-center"
                          href={project.link as string}
                          target="_blank"
                        >
                          Live Site <HiExternalLink className="text-white" />
                        </Link>
                      </p>
                    </div>

                    <p className="text-base lg:text-lg font-bold hover:text-[#00E5FF] cursor-pointer">
                      <Link href={`/projects/${project.slug}`}>
                        See Case Study
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="md:pl-[150px] xl:pl-10 container flex flex-col-reverse md:flex-row max-w-5xl px-6 py-6 gap-10 lg:py-10"></div>
    </div>
  );
}
