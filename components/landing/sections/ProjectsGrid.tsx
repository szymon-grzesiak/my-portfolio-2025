import { cn } from "@lib/utils";
import ProjectCard from "../ProjectCard";

const ProjectsGrid = ({ className }: { className?: string }) => {
  return (
    <section
      className={cn(
        "w-full overflow-hidden bg-white-900 px-6 py-[48px] dark:bg-black-200 md:py-[72px]",
        className,
      )}
    >
      <div className="mx-auto flex w-full max-w-[1270px] flex-col flex-wrap items-center justify-center gap-5 md:flex-row md:gap-9">
        <ProjectCard href="restly" />
        <ProjectCard href="restly" />
      </div>
    </section>
  );
};

export default ProjectsGrid;
