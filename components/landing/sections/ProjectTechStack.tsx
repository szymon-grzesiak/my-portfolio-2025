import Typography from "@components/shared/Typography";
import { cn } from "@lib/utils";
import { ComponentPropsWithoutRef, FC } from "react";
import { IconType } from "react-icons/lib";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ProjectTechStack extends ComponentPropsWithoutRef<"section"> {
  technologies?: {
    icon?: IconType;
    title: string;
  }[];
}

const ProjectTechStack: FC<ProjectTechStack> = ({
  technologies = [],
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
            Technologies used
          </Typography>
          <Typography
            as="h3"
            className="md:leading-33px] mt-2.5 text-[28px] !font-semibold leading-[29px] tracking-[-0.14px] text-black-200 dark:text-white-900 md:text-[32px]"
          >
            Tech Stack
          </Typography>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-[20px] gap-y-[33px] md:mt-11 md:gap-[35px]">
          {technologies.map((tech) => {
            const Icon = tech.icon || (() => null);
            return (
              <TooltipProvider key={tech.title}>
                <Tooltip>
                  <TooltipTrigger>
                    <div
                      data-tooltip-id={tech.title}
                      className={cn(
                        "flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white-800 dark:bg-black-300 md:h-[93px] md:w-[93px]",
                      )}
                    >
                      <Icon
                        className={cn(
                          "h-[25px] w-[25px] md:h-[46px] md:w-[46px]",
                        )}
                      />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <span>{tech.title}</span>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectTechStack;
