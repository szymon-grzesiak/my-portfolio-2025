import { ChallengeArrow, TickIcon } from "@components/icons";
import Typography from "@components/shared/Typography";
import { cn } from "@lib/utils";

const ProjectChallangesLearnings = ({
  challenges = [],
  learnings = [],
  className,
}: {
  className?: string;
  challenges: string[];
  learnings: string[];
}) => {
  return (
    <section
      className={cn(
        "w-full overflow-hidden bg-white-900 px-6 py-9 dark:bg-black-200 md:p-[72px]",
        className,
      )}
    >
      <div className="mx-auto flex w-full max-w-[880px] flex-col gap-6 md:gap-[30px]">
        <div>
          <Typography className="text-[12px] font-semibold leading-[17px] text-primary-light dark:text-primary-dark md:text-[14px] md:leading-[20px]">
            Problem
          </Typography>
          <Typography
            as="h3"
            className="md:leading-33px] mt-2.5 text-[28px] !font-semibold leading-[29px] tracking-[-0.14px] text-black-200 dark:text-white-900 md:text-[32px]"
          >
            Challenges & Learnings
          </Typography>
        </div>
        <div className="flex flex-col gap-6 rounded-[10px] bg-white-800 px-[14px] py-6 dark:bg-black-300 md:gap-[30px] md:px-10 md:py-9">
          <Typography className="text-[18px] !font-semibold leading-[29px] text-[#E15A46] md:text-[20px] md:leading-[26px]">
            CHALLENGES
          </Typography>
          <Typography
            as="div"
            className="flex flex-col justify-center gap-6 text-white-500 dark:text-white-800 md:gap-5 md:text-[18px] md:leading-[29px]"
          >
            {challenges.map((challenge) => (
              <p key={challenge} className="flex gap-[11px]">
                <ChallengeArrow className="mt-[6px] shrink-0" />
                <span>{challenge}</span>
              </p>
            ))}
          </Typography>
        </div>
        <div className="flex flex-col gap-6 rounded-[10px] bg-white-800 px-[14px] py-6 dark:bg-black-300 md:gap-[30px] md:px-10 md:py-9">
          <Typography className="text-[18px] !font-semibold leading-[29px] text-[#02BC7D] md:text-[20px] md:leading-[26px]">
            LEARNINGS
          </Typography>
          <Typography
            as="div"
            className="flex flex-col justify-center gap-6 text-white-500 dark:text-white-800 md:gap-5 md:text-[18px] md:leading-[29px]"
          >
            {learnings.map((learning) => (
              <p key={learning} className="flex gap-[11px]">
                <TickIcon className="mt-[6px] shrink-0" />
                <span>{learning}</span>
              </p>
            ))}
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default ProjectChallangesLearnings;
