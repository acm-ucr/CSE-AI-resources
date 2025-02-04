import React from "react";
import Image from "next/image";
import Logo from "@/public/logo.png";

const Footer = () => {
  return (
    <div className="flex h-60 flex-col items-center bg-[#003DA5] pt-8">
      <Image
        src={Logo}
        alt="logo"
        width={300}
        height={250}
        className="mb-4 h-1/6 w-auto"
      ></Image>
    </div>
  );
};

export default Footer;
