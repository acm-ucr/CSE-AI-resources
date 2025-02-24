import React from "react";
import Title from "../title";

const Business = () => {
  return (
    <div className="mx-auto flex w-11/12 flex-col">
      <Title title={"Business"} underline />
      <p className="font-inter text-base font-normal leading-relaxed md:text-lg lg:text-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
  );
};

export default Business;
