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
      <p className="bg-ucr-yellow p-3 text-center text-lg text-black">
        University of California, Riverside
      </p>
      <div className="flex justify-between p-6">
        <div className="pl-4 text-4xl font-medium">
          <Image src={Logo} alt="UCR Logo"></Image>
          CSE AI
        </div>
        <div className="flex space-x-4 pr-4 text-2xl font-normal">
          {items.map((item: Item) => (
            <Link href={item.href}> {item.name} </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
