"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/UCRLogo.svg";
import { ITEMS } from "@/data/nav";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

const Navigation = () => {
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="relative bg-ucr-blue text-white">
      <p className="bg-ucr-yellow p-3 text-center text-lg font-light text-black">
        University of California, Riverside
      </p>

      <div className="flex h-24 items-center justify-between px-4 md:px-8">
        <div className="flex items-center space-x-3 text-4xl font-medium">
          <Link href={"/"}>
            <Image src={Logo} alt="UCR Logo" className="w-20" />
          </Link>
          <p className="pr-4 text-5xl font-extralight text-ucr-yellow">|</p>
          <span className="hidden md:inline">CSE AI</span>
        </div>

        <div className="hidden items-center space-x-7 text-2xl md:flex">
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
            className="cursor-pointer text-3xl hover:text-ucr-yellow"
            onClick={() => setNavOpen(!navOpen)}
          />
        </div>
      </div>

      <div
        className={`absolute left-0 top-24 z-40 w-full transform bg-ucr-blue text-white transition-transform duration-300 ${
          navOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } flex flex-col items-center space-y-4 py-6 md:hidden`}
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
