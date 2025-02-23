import React from "react";
import Title from "../title";

const Welcome = () => {
  return (
    <div className="my-4 flex w-5/6 flex-col items-start justify-start bg-white md:w-5/6">
      <Title title="Welcome" underline={false} />
      <p className="text-start text-lg text-black">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
  );
};

export default Welcome;
