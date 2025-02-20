import React from "react";

const Professionals = () => {
  return (
    <div className="p~5 ml-auto mr-auto mt-4 flex w-11/12 flex-col items-center">
      <div className="flex w-full items-center">
        <h1 className="w-full whitespace-nowrap text-left lg:text-6xl md:text-4xl text-xl"> 
          Engineers/Technical Professionals
        </h1>
        <div className="ml-8 h-1 w-11/12 bg-ucr-yellow" />
      </div>
      <p className="font-inter lg:mt-14 md:mt-10 mt-8 lg:text-2xl md:text-xl text-base font-normal leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
  );
};

export default Professionals;
