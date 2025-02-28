import React from "react";
import Title from "../title";

const Research = () => {
  return (
    <div className="my-10 flex w-11/12 flex-col items-start">
      <Title title="Projects & Research" underline={false} />
      <p className="font-inter mb-10 text-2xl font-normal leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div className="flex gap-10">
        <div className="h-24 w-80 bg-ucr-blue/80 md:h-80" />
        <div className="h-24 w-80 bg-ucr-blue/80 md:h-80" />
        <div className="h-24 w-80 bg-ucr-blue/80 md:h-80" />
      </div>
    </div>
  );
};

export default Research;
