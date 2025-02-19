import React from "react";

const Welcome = () => {
  return (
    <div className="my-4 flex w-full flex-col items-start justify-start bg-white p-6 py-16 md:w-5/6 md:p-0">
      <h1 className="mb-3 border-b-[5px] border-ucr-yellow pb-2 text-6xl text-black">
        Welcome
      </h1>
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
