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
    <div className="grid h-full w-11/12 grid-cols-1 md:w-5/6 md:grid-cols-2">
      {Object.entries(timelineData).map(([level, items]) => (
        <Timeline key={level} className="mt-2 h-full w-full md:mt-8">
          <div className="mb-4 text-center text-2xl font-semibold md:mb-10 md:text-4xl">
            {level.charAt(0).toUpperCase() + level.slice(1)}
          </div>
          {items.map((item, index) => (
            <TimelineItem key={index} className="h-fit">
              <TimelineHeader>
                <TimelineTime className="bg-ucr-blue/80 p-0 text-base duration-300 hover:bg-ucr-blue/70 md:p-3 md:text-lg">
                  {item.time}
                </TimelineTime>
                <TimelineTitle>{item.title}</TimelineTitle>
              </TimelineHeader>
              <TimelineDescription className="w-5/6">
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
