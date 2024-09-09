import { cn } from "@lib/utils";

interface Props {
  leftSide: React.ReactNode;
  rightSide: React.ReactNode;
  className?: string;
}

const DoubleColumn = ({ leftSide, rightSide, className }: Props) => {
  return (
    <section className={cn("flex md:justify-between flex-col lg:flex-row gap-2 md:gap-10 w-full px-6 md:px-10 py-9 md:py-[72px] max-w-[1220px] mx-auto", className)}>
      <div className="md:text-[32px] font-semibold md:leading-[48px] tracking-[-0.8px] text-[24px] leading-[40px]">
        {leftSide}
      </div>
      <div className="w-full lg:w-3/4 md:text-[20px] md:leading-[33px] tracking-[-0.48px] text-[16px] leading-[22px] text-slate-900">
        {rightSide}
      </div>
    </section>
  );
};

export default DoubleColumn;
