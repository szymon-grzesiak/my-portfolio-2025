import Typography from "@components/shared/Typography";
import { cn } from "@lib/utils";

import { processIcons } from "@components/icons";

const ProjectProcess = ({ className }: { className?: string }) => {
  return (
    <section
      className={cn(
        "w-full overflow-hidden bg-white-900 px-6 py-9 dark:bg-black-200 md:p-[72px]",
        className,
      )}
    >
      <div className="mx-auto flex w-full max-w-[880px] flex-col">
        <div>
          <Typography className="text-[12px] font-semibold leading-[17px] text-primary-light dark:text-primary-dark md:text-[14px] md:leading-[20px]">
            Way of work
          </Typography>
          <Typography
            as="h3"
            className="md:leading-33px] mt-2.5 text-[28px] !font-semibold leading-[29px] tracking-[-0.14px] text-black-200 dark:text-white-900 md:text-[32px]"
          >
            My Process
          </Typography>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-[50px] gap-y-[30px] md:mt-11 md:justify-between md:gap-0">
          {processIcons.map((process) => {
            const Icon = process.icon || (() => null);
            return (
              <div
                className="flex flex-col items-center justify-center gap-[14px] md:gap-5"
                key={process.name}
              >
                <div
                  data-tooltip-id={process.name}
                  className={cn(
                    "flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white-800 dark:bg-black-300 md:h-[93px] md:w-[93px]",
                  )}
                >
                  <Icon
                    className={cn("h-[25px] w-[25px] md:h-[46px] md:w-[46px]")}
                  />
                </div>
                <Typography className="text-center text-[14px] !font-semibold leading-[20px] text-black-300 dark:text-white-900 md:text-[20px] md:leading-[26px]">
                  {process.name}
                </Typography>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectProcess;
