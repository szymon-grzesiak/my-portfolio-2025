import Typography from "@components/shared/Typography";
import { cn } from "@lib/utils";
import { ComponentPropsWithoutRef, FC } from "react";

interface ProjectHeroProps extends ComponentPropsWithoutRef<"section"> {
  title?: string;
  titleDescription?: string;
}

const ProjectHero: FC<ProjectHeroProps> = ({
  title = "Restly",
  titleDescription = "A Stay Booking App",
  className,
}) => {
  return (
    <section
      className={cn(
        "w-full overflow-hidden bg-white-800 px-6 pt-[72px] dark:bg-black-300 md:pt-[186px] bg-white/40 backdrop-blur-xl border-b-2 border-b-black",
        className,
      )}
    >
      <div className="relative mx-auto flex w-full flex-col items-center justify-center py-[48px] md:py-0 md:pb-[108px]">
        <Typography className="mb-[10px] text-[14px] font-semibold leading-[18px] tracking-[4px] text-primary-light dark:text-primary-dark md:mb-[30px] md:text-[20px] md:leading-[26px] md:tracking-[6px]">
          Web Dev Project
        </Typography>
        <Typography
          as="h1"
          className="mb-5 text-center text-[42px] !font-bold leading-[48px] tracking-[-0.64px] text-black-200 dark:text-white-900 md:mb-[28px] md:text-[64px] md:leading-[83px]"
        >
          <span className="highlighted-text">{title}</span> - {titleDescription}
        </Typography>
      </div>
    </section>
  );
};

export default ProjectHero;
