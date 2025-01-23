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
    <div className="bg-ucr-blue text-white">
      <p className="bg-ucr-yellow p-3 text-center text-lg font-light text-black">
        University of California, Riverside
      </p>

      <div className="flex h-24 justify-between">
        <div className="flex items-center space-x-3 pl-4 text-4xl font-medium">
          <Image src={Logo} alt="UCR Logo" />
          <p className="pr-4 text-5xl font-extralight text-ucr-yellow">|</p>
          CSE AI
        </div>
        <div className="flex items-center space-x-7 pr-4 text-2xl">
          {items.map((item: Item, index: number) => (
            <Link href={item.href} key={index}>
              {" "}
              {item.name}{" "}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
