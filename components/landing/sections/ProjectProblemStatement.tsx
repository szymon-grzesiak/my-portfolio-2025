import Typography from "@components/shared/Typography";
import { cn } from "@lib/utils";
import Image from "next/image";
import React, { ComponentPropsWithoutRef, FC } from "react";
import restlyImageDesktop from "../../../assets/keanu.webp";

interface ProjectProblemStatement extends ComponentPropsWithoutRef<"section"> {
  description?: string;
  image?: React.ComponentProps<typeof Image>["src"];
  alt?: string;
}

const ProjectProblemStatement: FC<ProjectProblemStatement> = ({
  description = "While traveling is a dream for many, it remains out of reach for some. Is this really the case, though? There is a widespread belief that traveling requires substantial financial outlay, often exceeding what people can afford, largely because of the high costs associated with planning, especially accommodation. Hotels in popular tourist centers tend to have inflated prices, leaving visitors with less money to enjoy local experiences and attractions. A potential solution to this challenge could be the development of an app where property owners, either as businesses or independent individuals, can rent out their extra space. This approach would allow people with unused space in their homes to offer affordable lodging. Such a service could eliminate the need for expensive hotel stays, thus lowering the overall costs of travel. Consequently, more people could afford to travel, experiencing new cultures, stunning scenery, and indulging in local cuisine.",
  image = restlyImageDesktop,
  alt = "Problem Statement Image",
  className,
}) => {
  return (
    <section
      className={cn(
        "w-full overflow-hidden bg-white-900 px-6 py-10 dark:bg-black-200 md:px-[72px] md:pb-[43px] md:pt-[53px]",
        className,
      )}
    >
      <div className="mx-auto flex w-full max-w-[880px] flex-col">
        <div>
          <Typography className="text-[12px] font-semibold leading-[17px] text-primary-light dark:text-primary-dark md:text-[14px] md:leading-[20px]">
            Problem
          </Typography>
          <Typography
            as="h3"
            className="md:leading-33px] mt-2.5 text-[28px] !font-semibold leading-[29px] tracking-[-0.14px] text-black-200 dark:text-white-900 md:text-[32px]"
          >
            Problem Statement
          </Typography>
        </div>
        <Typography
          className="mb-6 mt-6 text-white-500 dark:text-white-800 md:mb-[30px]"
          variant={"p-regular"}
        >
          {description}
        </Typography>
        <Image src={image} alt={alt} className="rounded-[10px]" />
      </div>
    </section>
  );
};

export default ProjectProblemStatement;
