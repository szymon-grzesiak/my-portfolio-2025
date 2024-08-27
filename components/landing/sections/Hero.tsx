import Typography from "@components/shared/Typography";
import { cn } from "@lib/utils";

const Hero = ({ className }: { className?: string }) => {
  return (
    <section
      className={cn(
        "w-full overflow-hidden bg-white-800 px-6 pt-[72px] dark:bg-black-300 md:pt-[186px]",
        className,
      )}
    >
      <div className="relative mx-auto flex w-full max-w-[740px] flex-col items-center justify-center py-[48px] md:py-0 md:pb-[108px]">
        <Typography
          as="h1"
          className="mb-5 text-center text-[42px] !font-bold leading-[48px] tracking-[-0.64px] text-black-200 dark:text-white-900 md:mb-[28px] md:text-[64px] md:leading-[83px]"
        >
          Recent <span className="highlighted-text">Case Studies</span>
        </Typography>
        <Typography className="max-w-[704px] text-center text-white-500 dark:text-white-800 lg:text-[20px] lg:leading-[30px]">
          Dive into my recent success stories and discover how I&apos;ve helped
          clients overcome challenges, innovate, and achieve their goals
        </Typography>
      </div>
    </section>
  );
};

export default Hero;
