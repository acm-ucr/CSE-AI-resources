"use client";

import About from "@/components/home/about";
import Education from "@/components/home/education";
import Landing from "@/components/home/landing";
import Welcome from "@/components/home/welcome";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Home = () => {
  const sections = Array.from({ length: 4 }, () => useRef(null));
  const inViewStates = sections.map((ref) => useInView(ref, { once: true }));
  const components = [Landing, Welcome, About, Education];

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

export default Home;
