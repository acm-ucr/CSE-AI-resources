import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/UCRLogo.svg";
import { items } from "@/data/nav";

type Item = {
  name: string;
  href: string;
};

const Navigation = () => {
  return (
    <div className="flex-col bg-ucr-blue text-white">
      <p className="bg-ucr-yellow p-3 text-center text-lg text-black font-light">
        University of California, Riverside
      </p>

      <div className="flex justify-between h-24">
        <div className=" flex pl-4 text-4xl font-medium items-center space-x-3">
          <Image src={Logo} alt="UCR Logo"></Image>
          <p className="text-ucr-yellow text-5xl font-extralight pr-4">|</p> 
          CSE AI
        </div>
        <div className=" flex space-x-7 pr-4 text-2xl items-center">
          {items.map((item: Item) => (
            <Link href={item.href}> {item.name} </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
