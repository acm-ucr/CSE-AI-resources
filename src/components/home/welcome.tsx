import React from "react";

const Welcome = () => {
  return (
    <div className="flex flex-col items-start justify-start bg-white py-16">
      {/* Welcome Heading */}
      <h1 className="mb-2 text-4xl text-black">Welcome</h1>
      {/* Yellow Underline */}
      <div className="mb-4 h-1 w-44 bg-ucr-orangeYellow"></div>
      {/* Description */}
      <p className="max-w-fit text-center text-black">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
  );
};

export default Welcome;
