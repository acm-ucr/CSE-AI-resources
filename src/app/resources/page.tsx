"use client";
import External from "@/components/resources/external";
import Articles from "@/components/resources/articles";
import Notes from "@/components/resources/notes";
import AIDropdowns from "@/components/resources/ai-dropdown";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const page = () => {
  const section1Ref = useRef(null);
  const isSection1InView = useInView(section1Ref, { once: true });

  const section2Ref = useRef(null);
  const isSection2InView = useInView(section2Ref, { once: true });

  const section3Ref = useRef(null);
  const isSection3InView = useInView(section3Ref, { once: true });

  const section4Ref = useRef(null);
  const isSection4InView = useInView(section4Ref, { once: true });

  return (
    <div>
      <motion.div
        className="flex items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isSection1InView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9 }}
        ref={section1Ref}
      >
        <AIDropdowns />
      </motion.div>

      <motion.div
        className="flex items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isSection2InView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        ref={section2Ref}
      >
        <Articles />
      </motion.div>

      <motion.div
        className="flex items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isSection3InView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        ref={section3Ref}
      >
        <External />
      </motion.div>

      <motion.div
        className="flex items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isSection4InView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        ref={section4Ref}
      >
        <Notes />
      </motion.div>
    </div>
  );
};

export default page;
