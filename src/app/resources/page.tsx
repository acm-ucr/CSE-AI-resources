"use client";

import External from "@/components/resources/external";
import Articles from "@/components/resources/articles";
import Notes from "@/components/resources/notes";
import AIDropdowns from "@/components/resources/ai-dropdown";
import Tools from "@/components/resources/tools";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Page = () => {
  const sections = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  const inViewStates = sections.map((ref) => useInView(ref, { once: true }));

  const components = [AIDropdowns, Tools, Articles, External, Notes];

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

export default Page;
