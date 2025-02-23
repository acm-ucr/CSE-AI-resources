"use client";

import { useState } from "react";
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
  const [collapsedItems, setCollapsedItems] = useState<{
    [key: number]: boolean;
  }>({});

  const toggleCollapse = (id: number) => {
    setCollapsedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="grid grid-cols-2 md:w-5/6">
      {Object.entries(timelineData).map(([level, items]) => (
        <Timeline key={level} className="mt-8 w-full">
          <div className="mb-4 text-center text-xl font-semibold md:mb-10 md:text-4xl">
            {level.charAt(0).toUpperCase() + level.slice(1)}
          </div>
          {items.map((item) => (
            <TimelineItem key={item.id}>
              <TimelineHeader>
                <TimelineTime
                  onClick={() => toggleCollapse(item.id)}
                  className="cursor-pointer bg-ucr-blue/80 p-0 text-base duration-300 hover:bg-ucr-blue/70 md:p-3 md:text-lg"
                >
                  {item.time}
                </TimelineTime>
                <TimelineTitle>{item.title}</TimelineTitle>
              </TimelineHeader>
              {collapsedItems[item.id] && item.description && (
                <TimelineDescription className="transition-all duration-300">
                  {item.description}
                </TimelineDescription>
              )}
            </TimelineItem>
          ))}
        </Timeline>
      ))}
    </div>
  );
};

export default TimelineLayout;
