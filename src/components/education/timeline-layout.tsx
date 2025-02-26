import {
  Timeline,
  TimelineItem,
  TimelineTitle,
  TimelineDescription,
  TimelineTime,
  TimelineHeader,
} from "@/components/ui/timeline";
import { timelineData } from "@/data/timeline";

export const TimelineLayout = () => {
  return (
    <div className="grid h-full w-11/12 grid-cols-2 md:w-5/6">
      {Object.entries(timelineData).map(([level, items]) => (
        <Timeline key={level} className="mt-8 h-full w-full">
          <div className="mb-4 text-center text-xl font-semibold md:mb-10 md:text-4xl">
            {level.charAt(0).toUpperCase() + level.slice(1)}
          </div>
          {items.map((item) => (
            <TimelineItem key={item.id} className="h-fit">
              <TimelineHeader>
                <TimelineTime
                  variant={"default"}
                  className="bg-ucr-blue/80 p-0 text-base duration-300 hover:bg-ucr-blue/70 md:p-3 md:text-lg"
                >
                  {item.time}
                </TimelineTime>
                <TimelineTitle>{item.title}</TimelineTitle>
              </TimelineHeader>
              <TimelineDescription className="transition-all duration-300">
                {item.description}
              </TimelineDescription>
            </TimelineItem>
          ))}
        </Timeline>
      ))}
    </div>
  );
};

export default TimelineLayout;
