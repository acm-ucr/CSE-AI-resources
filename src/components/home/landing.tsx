import React from "react";
import Image from "next/image";
import Background from "@/public/ucr_background.webp";

const Landing = () => {
  return (
    <div className="flex h-[500px] w-full justify-center text-white sm:h-[780px]">
      <div className="absolute h-[500px] w-full sm:h-full">
        <Image
          className="h-full object-cover"
          src={Background}
          alt="UCR Background"
        />
      </div>
      <div className="absolute h-[500px] w-full bg-gradient-to-r from-[#003ca581] to-[#003DA5] opacity-[87%] sm:h-full"></div>
      <div className="z-10 flex flex-col items-center justify-center">
        <p className="text-center text-[30px] sm:text-[40px] md:text-[50px] lg:text-[70px] xl:text-[80px]">
          Computer Science Education
        </p>
        <div className="mb-2 mt-1 h-[2px] w-28 bg-[#FFB81C] sm:mb-3 sm:h-[3px] sm:w-36 md:mb-4 lg:mb-6 lg:h-1 lg:w-44"></div>
        <p className="text-base md:text-xl lg:text-2xl xl:text-3xl">
          Artificial Intelligence
        </p>
      </div>
    </div>
  );
};

export default Landing;
