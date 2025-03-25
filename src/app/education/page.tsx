"use client";

import { TimelineLayout } from "@/components/education/timeline-layout";
import CourseDropdowns from "@/components/education/course-dropdowns";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const page = () => {
  const sections = Array.from({ length: 2 }, () => useRef(null));
  const inViewStates = sections.map((ref) => useInView(ref, { once: true }));
  const components = [CourseDropdowns, TimelineLayout];

  return (
    <>
      {components.map((Component, index) => (
        <motion.div
          key={index}
          className="flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inViewStates[index] ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 + index * 0.1 }}
          ref={sections[index]}
        >
          <Component />
        </motion.div>
      ))}
    </>
  );
};

export default page;
