import React from "react";
import Image from "next/image";

const Landing = () => {
  return (
    <div className="flex h-[780px] w-full justify-center text-white">
      <div className="absolute h-[780px] w-full">
        <Image
          fill
          style={{ objectFit: "cover" }}
          src="/ucr_background.webp"
          alt="UCR Background"
        />
      </div>
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
