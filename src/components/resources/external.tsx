import React from "react";
import Title from "../title";

const External = () => {
  return (
    <div className="flex w-11/12 flex-col items-start justify-start bg-white p-3 md:my-8 md:w-11/12 md:p-0">
      <Title title="External Resources" underline={false} />
      <p className="font-inter text-lg font-normal leading-relaxed md:text-xl lg:text-2xl">
        We believe in the power of continuous learning and collaboration. Our
        curated collection of external resources provides access to cutting-edge
        research, industry insights, and AI development tools. Whether you're
        looking for online courses, research papers, or open-source frameworks,
        these resources empower students, professionals, and researchers to stay
        ahead in the ever-evolving field of AI.
      </p>
    </div>
  );
};

export default External;
