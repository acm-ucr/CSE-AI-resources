import React from "react";

const Landing = () => {
  return (
    <div className="flex h-[780px] w-full justify-center bg-[url('/ucr_background.png')] bg-cover bg-center bg-no-repeat text-white">
      <div className="absolute h-[780px] w-full bg-gradient-to-r from-[#003ca581] to-[#003DA5] opacity-[87%]"></div>
      <div className="z-10 flex flex-col items-center justify-center">
        <p className="text-[80px]">Computer Science Education</p>
        <div className="mb-6 h-[3px] w-[176px] bg-[#FFB81C]"></div>
        <p className="text-3xl">Artificial Intelligence</p>
      </div>
    </div>
  );
};

export default Landing;
