"use client";
import { TimelineLayout } from "@/components/education/timeline-layout";

import CourseDropdowns from "@/components/education/course-dropdowns";
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const page = () => {
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { once: true });

  return (
    <div>
      <motion.div
        ref={sectionRef}
        className="flex w-full flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9 }}
      >
        <CourseDropdowns />
      </motion.div>

      <motion.div
        className="flex w-full flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9 }}
      >
        <TimelineLayout />
      </motion.div>
    </div>
  );
};

export default page;
