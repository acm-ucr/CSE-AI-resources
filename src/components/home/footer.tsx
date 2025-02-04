import React from "react";
import Image from "next/image";
import Logo from "@/public/logo.svg";

const Footer = () => {
  return (
    <div className="flex h-60 flex-col items-center bg-ucr-blue p-8">
      <Image src={Logo} alt="logo" />
    </div>
  );
};

export default Footer;
