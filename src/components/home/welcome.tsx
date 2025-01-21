import React from "react";

const Welcome = () => {
  return (
    <div className="flex flex-col items-start justify-start py-16 bg-white">
      {/* Welcome Heading */}
      <h1 className="text-4xl text-black mb-2">Welcome</h1>
      {/* Yellow Underline */}
      <div className="w-44 h-1 bg-ucr-orangeYellow mb-4"></div>
      {/* Description */}
      <p className="text-center text-black max-w-fit">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
  );
};
 
export default Welcome;
