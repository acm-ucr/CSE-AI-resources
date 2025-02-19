"use client";

import {
  Timeline,
  TimelineItem,
  TimelineTitle,
  TimelineDescription,
  TimelineTime,
  TimelineHeader,
} from "@/components/ui/timeline";
import { undergradData, graduateData } from "@/data/timeline";
import { TimelineItemType } from "@/types";
import { useState } from "react";

export type TImelineProps = {
  title: string;
  data: TimelineItemType[];
};

const TimelineSection = ({ title, data }: TImelineProps) => {
  const [collapsedItems, setCollapsedItems] = useState<{
    [key: number]: boolean;
  }>({});

  const toggleCollapse = (id: number) => {
    setCollapsedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <Timeline className="mt-8 w-full">
      <div className="mb-4 text-center text-xl font-semibold md:mb-10 md:text-4xl">
        {title}
      </div>
      {data.map((item) => (
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
  );
};

export const TimelineLayout = () => {
  return (
    <div className="flex gap-10 md:w-5/6">
      <TimelineSection title="Undergraduate" data={undergradData} />
      <TimelineSection title="Graduate" data={graduateData} />
    </div>
  );
};

export default TimelineLayout;
