"use client";

import { useState } from "react";
import { ITEMS } from "@/data/nav";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/UCRLogo.svg";

const Navigation = () => {
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="relative bg-ucr-blue text-white">
      <p className="bg-ucr-yellow p-3 text-center text-lg font-light text-black">
        University of California, Riverside
      </p>

      <div className="flex h-24 items-center justify-between px-4 lg:px-10">
        <div className="flex items-center space-x-3 text-4xl font-medium">
          <Link href={"/"}>
            <Image src={Logo} alt="UCR Logo" className="w-14 md:w-24" />
          </Link>
          <p className="font-extralight text-ucr-yellow lg:text-5xl">|</p>
          <span className="hidden w-full md:inline">Learn AI</span>
        </div>

        <div className="hidden items-center space-x-7 text-xl md:flex lg:text-2xl">
          {ITEMS.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className={`group relative duration-300 ${
                pathname === item.href
                  ? "text-ucr-yellow"
                  : "text-white hover:text-ucr-yellow"
              }`}
            >
              {item.name}
              <span
                className={`absolute -bottom-0.5 left-0 h-[3px] bg-ucr-yellow transition-all duration-300 ${
                  pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          <Menu
            className={`cursor-pointer text-3xl ${navOpen ? "text-ucr-yellow" : "text-white"}`}
            onClick={() => setNavOpen(!navOpen)}
          />
        </div>
      </div>
      <div
        className={`absolute left-0 top-36 z-40 flex w-full flex-col items-center space-y-4 overflow-hidden bg-ucr-blue py-6 text-white transition-all duration-300 md:hidden ${
          navOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {ITEMS.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className={`text-lg font-semibold ${
              pathname === item.href
                ? "text-ucr-yellow"
                : "hover:text-ucr-yellow"
            }`}
            onClick={() => setNavOpen(false)}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
