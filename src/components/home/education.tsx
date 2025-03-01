"use client";
import Title from "../title";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Education = () => {
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { once: true });

  return (
    <div className="flex w-5/6 flex-col px-0 md:w-5/6 md:px-0">
      <motion.div
        ref={sectionRef}
        initial={{ opacity: 0, y: 20 }}
        animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9 }}
      >
        <Title title="Our Values" underline />
      </motion.div>

      <motion.p
        className="mt-2 text-base leading-relaxed md:text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, delay: 0.1 }}
      >
        At the core of our initiative lies a commitment to innovation,
        inclusivity, and integrity. We believe in fostering a community where
        collaboration and curiosity drive meaningful advancements in AI. By
        upholding ethical principles, encouraging diverse perspectives, and
        promoting lifelong learning, we empower students and faculty to shape
        the future of AI responsibly. Our values ensure that AI education at UCR
        remains accessible, impactful, and forward-thinking, bridging the gap
        between cutting-edge research and real-world applications.
      </motion.p>
    </div>
  );
};

export default Education;
