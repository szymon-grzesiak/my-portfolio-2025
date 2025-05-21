interface TimelineEntry {
  occupation: string;
  title: string;
  content: React.ReactNode;
}

export const TimelineData = ({ data }: { data: TimelineEntry[] }) => {
  return (
    <>
      {data.map((item, index) => (
        <div key={index} className="flex pt-8 md:gap-10 pl-16 md:pl-0">
          <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
            <div className="hidden h-10 absolute left-3 md:left-3 w-10 rounded-full bg-black md:flex items-center justify-center">
              <div className="h-4 w-4 rounded-full bg-neutral-800 border border-neutral-700 p-2" />
            </div>
            <h3 className="hidden md:block text-sm md:pl-16 md:text-4xl font-bold text-neutral-500 dark:text-neutral-500 ">
              {item.title}
            </h3>
          </div>

          <div className="z-20 relative pl-4 lg:pl-20 mr-4 md:pl-4 w-full bg-white/10 border backdrop-blur-xl rounded-xl p-3 dark:text-black">
            <h3 className="font-bold text-xl">{item.occupation}</h3>
            <h4 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
              {item.title}
            </h4>
            {item.content}
          </div>
        </div>
      ))}
    </>
  );
};
