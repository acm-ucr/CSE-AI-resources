import React from "react";
import Title from "../title";

const Welcome = () => {
  return (
    <div className="my-4 flex w-full flex-col items-start justify-start bg-white p-4 md:w-5/6 md:p-0">
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
