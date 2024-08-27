import Typography from "@components/shared/Typography";
import { cn } from "@lib/utils";
import { ComponentPropsWithoutRef, FC } from "react";

interface ProjectDateProps extends ComponentPropsWithoutRef<"section"> {
  role?: string;
  startDate?: string;
  endDate?: string;
}

const ProjectDate: FC<ProjectDateProps> = ({
  role = "Software Engineer",
  startDate = "24/05/2024",
  endDate = "02/08/2024",
  className,
}) => {
  return (
    <section
      className={cn(
        "w-full overflow-hidden bg-white-900 px-6 py-10 dark:bg-black-200 md:px-[72px] md:pb-[43px] md:pt-[53px]",
        className,
      )}
    >
      <div className="mx-auto flex w-full max-w-[880px] flex-col gap-9 md:flex-row md:items-center md:justify-between md:gap-0">
        <div className="flex flex-col gap-2.5">
          <Typography className="text-[14px] leading-[20px] text-black-400 dark:text-white-500 md:text-[18px] md:leading-[29px]">
            My Role
          </Typography>
          <Typography className="text-[20px] !font-semibold leading-[26px] text-black-200 dark:text-white-900 md:text-[24px] md:leading-[31px]">
            {role}
          </Typography>
        </div>
        <div className="flex flex-col gap-2.5">
          <Typography className="text-[14px] leading-[20px] text-black-400 dark:text-white-500 md:text-[18px] md:leading-[29px]">
            Start Date
          </Typography>
          <Typography className="text-[20px] !font-semibold leading-[26px] text-black-200 dark:text-white-900 md:text-[24px] md:leading-[31px]">
            {startDate}
          </Typography>
        </div>
        <div className="flex flex-col gap-2.5">
          <Typography className="text-[14px] leading-[20px] text-black-400 dark:text-white-500 md:text-[18px] md:leading-[29px]">
            End Date
          </Typography>
          <Typography className="text-[20px] !font-semibold leading-[26px] text-black-200 dark:text-white-900 md:text-[24px] md:leading-[31px]">
            {endDate}
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default ProjectDate;
