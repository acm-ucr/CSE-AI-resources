import React from "react";
import Title from "../title";

const External = () => {
  return (
    <div className="my-4 flex w-11/12 flex-col items-start justify-start bg-white p-3 py-16 md:w-11/12 md:p-0">
      <Title title="External Resources" underline={false} />
      <p className="font-inter text-2xl font-normal leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
  );
};

export default External;
