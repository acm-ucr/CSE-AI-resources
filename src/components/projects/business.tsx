import React from "react";
import Title from "../title";

const Business = () => {
  return (
    <div className="flex w-11/12 flex-col mx-auto">
      <Title title={"Business"} underline />
      <p className="font-inter text-base md:text-lg lg:text-2xl font-normal leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
  );
};

export default Business;