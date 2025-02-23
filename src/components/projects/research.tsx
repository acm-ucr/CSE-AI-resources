import React from "react";
import Title from "../title";

const Research = () => {
  return (
    <div className="p~5 mb-10 ml-auto mr-auto mt-20 w-11/12">
      <Title title="Projects & Research" underline={false} />
      <p className="font-inter mb-16 text-2xl font-normal leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div className="flex justify-around gap-10">
        <div className="h-24 w-96 bg-ucr-blue/80 md:h-96" />
        <div className="h-24 w-96 bg-ucr-blue/80 md:h-96" />
        <div className="h-24 w-96 bg-ucr-blue/80 md:h-96" />
      </div>
    </div>
  );
};

export default Research;
