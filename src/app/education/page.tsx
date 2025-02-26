import { TimelineLayout } from "@/components/education/timeline-layout";

import Dropdowns from "@/components/education/dropdowns";
import React from "react";

const page = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <Dropdowns />
      <TimelineLayout />
    </div>
  );
};

export default page;
