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
        <div className="flex flex-wrap items-center justify-start gap-x-[20px] gap-y-[33px] md:gap-[35px]">
          {technologies.map((tech) => {
            const Icon = tech.icon || (() => null);
            return (
              <TooltipProvider key={tech.title} delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger>
                    <div
                      data-tooltip-id={tech.title}
                      className={cn(
                        "flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white-800 dark:bg-black-300 md:h-[93px] md:w-[93px]"
                      )}
                    >
                      <div className="border-2 border-black rounded-full p-3 shadow-[4px_4px]">
                        <Icon
                          className={cn(
                            "h-[25px] w-[25px] md:h-[46px] md:w-[46px] "
                          )}
                        />
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="bg-white">
                    <span>{tech.title}</span>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            );
          })}
        </div>
     
  );
};

export default ProjectTechStack;
