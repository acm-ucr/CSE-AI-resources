import { TimelineLayout } from "@/components/education/timeline-layout";

import CourseDropdowns from "@/components/education/course-dropdowns";
import React from "react";

const page = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <CourseDropdowns />
      <TimelineLayout />
    </div>
  );
};

export default page;
