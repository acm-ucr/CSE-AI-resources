"use client";
import Professionals from "@/components/projects/professionals";
import Research from "@/components/projects/research";
import Medical from "@/components/projects/medical";
import Business from "@/components/projects/business";
import { motion } from "motion/react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const page = () => {
  const researchRef = useRef(null);
  const isResearchInView = useInView(researchRef, { once: true });

  const professionalRef = useRef(null);
  const isProfessionalInView = useInView(professionalRef, { once: true });

  const businessRef = useRef(null);
  const isBusinessInView = useInView(businessRef, { once: true });

  const medicalRef = useRef(null);
  const isMedicalInView = useInView(medicalRef, { once: true });

  return (
    <div className="my-10 flex flex-col items-center justify-center gap-8">
      {/* Projecrs & Research Section */}
      <motion.div
        ref={researchRef}
        initial={{ opacity: 0, y: 20 }}
        animate={isResearchInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <Research />
      </motion.div>

      {/* Professional Section */}
      <motion.div
        ref={professionalRef}
        initial={{ opacity: 0, y: 20 }}
        animate={isProfessionalInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <Professionals />
      </motion.div>

      {/* Business Section */}
      <motion.div
        ref={businessRef}
        initial={{ opacity: 0, y: 20 }}
        animate={isBusinessInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Business />
      </motion.div>

      {/* Medical Section */}
      <motion.div
        ref={medicalRef}
        initial={{ opacity: 0, y: 20 }}
        animate={isMedicalInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Medical />
      </motion.div>
    </div>
  );
};

export default page;
