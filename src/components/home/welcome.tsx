import React from "react";

const Welcome = () => {
  return (
    <div className="flex flex-col items-start justify-start bg-white py-16 pl-[105px] pr-[130px]">
      <h1 className="mb-3 text-6xl text-black">Welcome</h1>
      <div className="mb-9 h-1 w-72 bg-ucr-orangeYellow"></div>
      <p className="text-start text-2xl text-black">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
  );
};

export default Welcome;
