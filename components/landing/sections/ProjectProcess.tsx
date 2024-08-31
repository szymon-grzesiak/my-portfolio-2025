import Typography from "@components/shared/Typography";
import { cn } from "@lib/utils";

import { processIcons } from "@components/icons";

const ProjectProcess = () => {
  return (
    <div className="mx-auto flex w-full max-w-[880px] flex-col">
      <div className="flex flex-wrap items-center justify-center gap-x-[50px] gap-y-[30px] md:justify-between md:gap-0">
        {processIcons.map((process) => {
          const Icon = process.icon || (() => null);
          return (
            <div
              className="flex flex-col items-center justify-center border-2 border-black rounded-full w-[130px] h-[130px] shadow-[4px_4px]"
              key={process.name}
            >
              <div
                data-tooltip-id={process.name}
                className={cn(
                  "flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white-800 dark:bg-black-300"
                )}
              >
                <Icon
                  className={cn("h-[35px] w-[35px]")}
                />
              </div>
              <Typography className="text-center text-[12px] !font-semibold leading-[18px] text-black-300 dark:text-white-900 md:text-[18px] md:leading-[22px]">
                {process.name}
              </Typography>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectProcess;
