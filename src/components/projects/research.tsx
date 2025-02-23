import React from "react";
import Image from "next/image";
import mock from "@/public/mock.webp";
import Title from "../title";

const Research = () => {
  return (
    <div className="p~5 mb-10 ml-auto mr-auto mt-20 w-11/12">
      <Title title="Projects & Research" underline={false} />
      <p className="font-inter mb-16 text-2xl font-normal leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div className="flex justify-around gap-20">
        <Image
          src={mock}
          alt="Image placeholder with blue background"
          className="w-full"
        />
        <Image
          src={mock}
          alt="Image placeholder with blue background"
          className="w-full"
        />
        <Image
          src={mock}
          alt="Image placeholder with blue background"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Research;
