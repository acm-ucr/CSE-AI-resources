import {
  Timeline,
  TimelineItem,
  TimelineTitle,
  TimelineDescription,
  TimelineTime,
  TimelineHeader,
} from "@/components/ui/timeline";
import { timelineData } from "@/data/timeline";

export const TimelineLayout = ({ data = timelineData }) => {
  return (
    <div className="flex h-full w-11/12 flex-wrap justify-between md:w-5/6">
      {Object.entries(data).map(([level, items]) => (
        <Timeline
          key={level}
          className="mt-2 flex h-full w-full flex-col items-center md:mt-8"
        >
          <div className="mb-4 w-fit border-b-4 border-ucr-yellow pb-1 text-center text-2xl font-semibold md:mb-10 md:text-4xl">
            {level.charAt(0).toUpperCase() + level.slice(1)}
          </div>
          {items.map((item, index) => (
            <TimelineItem key={index} className="h-fit">
              <TimelineHeader>
                <TimelineTime className="rounded-md bg-ucr-blue/80 p-0 px-3 text-base font-medium normal-case shadow-sm duration-300 hover:bg-ucr-blue/70 md:p-3 md:text-lg">
                  {item.time}
                </TimelineTime>
                <TimelineTitle>{item.title}</TimelineTitle>
              </TimelineHeader>
              <TimelineDescription className="mt-2 text-gray-900">
                {Array.isArray(item.description) ? (
                  <ul className="ml-2 mt-2 list-inside list-disc space-y-1">
                    {item.description.map((desc, index) => (
                      <li key={index} className="text-sm md:text-base">
                        {desc}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm md:text-base">{item.description}</p>
                )}
              </TimelineDescription>
            </TimelineItem>
          ))}
        </Timeline>
      ))}
    </div>
  );
};

export default TimelineLayout;
