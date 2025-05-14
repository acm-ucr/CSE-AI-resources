import React from "react";
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
    <div className="mx-auto w-full max-w-3xl px-4 py-8">
      <Timeline className="relative">
        {Object.entries(data).flatMap(([decade, items]) => [
          <Timeline
            key={decade}
            className="mt-2 flex h-full w-full flex-col items-center md:mt-8"
          >
            <div className="mb-4 w-fit border-b-4 border-ucr-yellow pb-1 text-center text-2xl font-semibold md:mb-10 md:text-4xl">
              {decade.charAt(0).toUpperCase() + decade.slice(1)}
            </div>
          </Timeline>,
          ...items.map((item, idx) => (
            <TimelineItem key={`${decade}-${idx}`} className="mb-0">
              <TimelineHeader>
                <TimelineTime className="rounded-md bg-ucr-blue/80 px-3 py-1 text-base font-medium normal-case">
                  {item.time}
                </TimelineTime>
                <TimelineTitle className="ml-3">{item.title}</TimelineTitle>
              </TimelineHeader>
              <TimelineDescription className="mt-2 text-gray-900">
                {Array.isArray(item.description) ? (
                  <ul className="ml-6 list-inside list-disc space-y-1">
                    {item.description.map((desc, i) => (
                      <li key={i} className="text-sm md:text-base">
                        {desc}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm md:text-base">{item.description}</p>
                )}
              </TimelineDescription>
            </TimelineItem>
          )),
        ])}
      </Timeline>
    </div>
  );
};

export default TimelineLayout;
