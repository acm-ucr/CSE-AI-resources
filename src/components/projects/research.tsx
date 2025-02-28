import React from "react";
import Title from "../title";

const Research = () => {
  return (
    <div className="my-10 flex w-11/12 flex-col items-start">
      <Title title="Projects & Research" underline={false} />
      <p className="font-inter mb-10 text-2xl font-normal leading-relaxed">
        At UCR, our AI projects and research initiatives explore groundbreaking
        advancements that bridge the gap between theory and real-world
        applications. Through collaborative innovation, we tackle challenges in
        various fields, leveraging AI to drive solutions that impact industries,
        communities, and the future of technology.
      </p>
      {/* <div className="flex justify-center gap-10">
        <div className="h-24 w-80 bg-ucr-blue/80 md:h-80" />
        <div className="h-24 w-80 bg-ucr-blue/80 md:h-80" />
        <div className="h-24 w-80 bg-ucr-blue/80 md:h-80" />
      </div> */}
    </div>
  );
};

export default Research;
