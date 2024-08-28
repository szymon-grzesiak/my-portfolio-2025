import { cn } from "@lib/utils";

interface Props {
  leftSide: React.ReactNode;
  rightSide: React.ReactNode;
  className?: string;
}

const DoubleColumn = ({ leftSide, rightSide, className }: Props) => {
  return (
    <section className={cn("flex md:justify-between flex-col lg:flex-row gap-2 md:gap-10 w-full px-6 py-9 md:py-[72px] max-w-[1220px] mx-auto", className)}>
      <div className="md:text-[40px]  font-semibold md:leading-[56px] tracking-[-0.8px] text-[24px] leading-[40px]">
        {leftSide}
      </div>
      <div className="md:w-[900px] w-full md:text-[24px] md:leading-[33px] tracking-[-0.48px] text-[16px] leading-[22px] text-slate-900">
        {rightSide}
      </div>
    </section>
  );
};

export default DoubleColumn;
