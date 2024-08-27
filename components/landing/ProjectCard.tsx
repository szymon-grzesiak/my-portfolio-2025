import Typography from "@components/shared/Typography";
import { cn } from "@lib/utils";
import Image, { StaticImageData } from "next/image";
import React, { ComponentPropsWithoutRef } from "react";
import restlyImageDesktop from "../../public/images/projects/restly.svg";
import Link from "next/link";

interface ProjectCardProps extends ComponentPropsWithoutRef<"div"> {
  title?: string;
  description?: string;
  projectBg?: string;
  image?: StaticImageData;
  href?: string;
}

const ProjectCard = ({
  title = "Restly",
  description = "Restly - A Stay Booking App",
  projectBg = "rgb(92, 175, 252)",
  image = restlyImageDesktop,
  href = "/",
  className,
}: ProjectCardProps) => {
  return (
    <Link
      href={`/case-studies/${href}`}
      className={cn(
        "h-[284px] w-[345px] md:h-[431px] md:w-[465px] xl:w-[550px]",
        className,
      )}
    >
      <div
        className={cn(
          "flex h-[205px] items-end justify-center rounded-[16px] bg-[#5CAFFC] md:h-[327px] md:px-3 lg:px-0",
          `bg-[${projectBg}]`,
        )}
      >
        <Image
          src={image}
          alt={`${title} image`}
          className="h-[165px] w-[278px] md:h-[258px] md:w-[443px] xl:h-[263px]"
        />
      </div>
      <div className="mt-5 flex flex-col md:mt-[25px] md:gap-2.5 md:px-[14px] xl:mt-[30px] xl:px-[56px]">
        <Typography
          as="h3"
          className="text-[20px] !font-semibold leading-[26px] tracking-[-0.16px] text-black-200 dark:text-white-900 md:text-[32px] md:leading-[33px]"
        >
          {title}
        </Typography>
        <Typography className="text-[14px] leading-[22px] text-white-500 dark:text-black-400 md:text-[20px] md:leading-[30px]">
          {description}
        </Typography>
      </div>
    </Link>
  );
};

export default ProjectCard;
