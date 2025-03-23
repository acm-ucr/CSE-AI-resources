"use client";
import Professionals from "@/components/projects/professionals";
import Research from "@/components/projects/research";
import Medical from "@/components/projects/medical";
import Business from "@/components/projects/business";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";

const page = () => {
  const sections = Array.from({ length: 4 }, () => useRef(null));
  const inViewStates = sections.map((ref) => useInView(ref, { once: true }));
  const components = [Research, Professionals, Medical, Business];

  return (
    <div>
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
    </div>
  );
};

export default page;
