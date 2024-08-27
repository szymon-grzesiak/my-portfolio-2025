import Typography from "@components/shared/Typography";
import { cn } from "@lib/utils";
import OtherCaseStudyCard from "../OtherCaseStudyCard";

const ProjectOtherCaseStudies = ({ className }: { className?: string }) => {
  return (
    <section
      className={cn(
        "w-full overflow-hidden bg-white-800 px-6 py-9 dark:bg-black-300 md:p-[72px]",
        className,
      )}
    >
      <div className="mx-auto flex w-full max-w-[880px] flex-col gap-[30px] md:gap-[40px]">
        <div>
          <Typography className="text-[12px] font-semibold leading-[17px] text-primary-light dark:text-primary-dark md:text-[14px] md:leading-[20px]">
            Projects
          </Typography>
          <Typography
            as="h3"
            className="md:leading-33px] mt-2.5 text-[28px] !font-semibold leading-[29px] tracking-[-0.14px] text-black-200 dark:text-white-900 md:text-[32px]"
          >
            Other Case Studies
          </Typography>
        </div>
        <div className="flex flex-col items-center gap-6 md:flex-row md:gap-5">
          <OtherCaseStudyCard />
          <OtherCaseStudyCard />
        </div>
      </div>
    </section>
  );
};

export default ProjectOtherCaseStudies;
