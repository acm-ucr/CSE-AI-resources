"use client";
import About from "@/components/home/about";
import Education from "@/components/home/education";
import Landing from "@/components/home/landing";
import News from "@/components/home/news";
import Welcome from "@/components/home/welcome";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Home = () => {
  // Create refs for each section
  const welcomeRef = useRef(null);
  const isWelcomeInView = useInView(welcomeRef, { once: true });

  const aboutRef = useRef(null);
  const isAboutInView = useInView(aboutRef, { once: true });

  const educationRef = useRef(null);
  const isEducationInView = useInView(educationRef, { once: true });

  const newsRef = useRef(null);
  const isNewsInView = useInView(newsRef, { once: true });

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      {/* Landing section doesn't need animation since it's likely visible on page load */}
      <Landing />

      {/* Animate Welcome section */}
      <div ref={welcomeRef} className="w-full">
        <motion.div
          className="flex w-full flex-col items-center justify-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isWelcomeInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Welcome />
        </motion.div>
      </div>

      {/* Animate About section */}
      <div ref={aboutRef} className="w-full">
        <motion.div
          className="flex w-full flex-col items-center justify-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <About />
        </motion.div>
      </div>

      {/* Animate Education section */}
      <div ref={educationRef} className="w-full">
        <motion.div
          className="flex w-full flex-col items-center justify-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isEducationInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <Education />
        </motion.div>
      </div>

      {/* Animate News section */}
      <div ref={newsRef} className="w-full">
        <motion.div
          className="flex w-full flex-col items-center justify-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isNewsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <News />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
