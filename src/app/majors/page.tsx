"use client";

import Background from "@/components/background";
import Majors from "@/components/majors/majors";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";

const Page = () => {
  const sections = Array.from({ length: 2 }, () => useRef(null));
  const inViewStates = sections.map((ref) => useInView(ref, { once: true }));
  const components = [Background, Majors];

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

export default Page;
