"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/UCRLogo.svg";
import { items } from "@/data/nav";

type Item = {
  name: string;
  href: string;
};

const Navigation = () => {
  const [selected, setSelected] = useState("");

  return (
    <div className="bg-ucr-blue text-white">
      <p className="bg-ucr-yellow p-3 text-center text-lg font-light text-black">
        University of California, Riverside
      </p>

      <div className="flex h-24 justify-between">
        <div className="flex items-center space-x-3 pl-4 text-4xl font-medium">
          <Link
            onClick={() => {
              setSelected("");
            }}
            href={"/"}
          >
            <Image src={Logo} alt="UCR Logo" />
          </Link>
          <p className="pr-4 text-5xl font-extralight text-ucr-yellow">|</p>
          CSE AI
        </div>
        <div className="flex items-center space-x-7 pr-4 text-2xl">
          {items.map((item: Item, index: number) => (
            <Link
              href={item.href}
              key={index}
              onClick={() => {
                setSelected(item.name);
              }}
              className={`group relative duration-300 hover:text-ucr-yellow ${
                selected === item.name ? "text-ucr-yellow" : "text-white"
              }`}
            >
              {item.name}
              <span className="absolute -bottom-0.5 left-0 h-[3px] w-0 bg-ucr-yellow transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
