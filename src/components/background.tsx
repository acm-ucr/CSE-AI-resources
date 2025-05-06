"use client";

import Image from "next/image";
import ucr from "@/public/ucr_background.webp";
import { usePathname } from "next/navigation";

const Background = () => {
  const pathname = usePathname();
  return (
    <div className="relative h-80 w-full">
      <Image src={ucr} alt="project hero" fill className="z-0 object-cover" />
      <div className="absolute inset-0 z-10 bg-ucr-blue/50" />
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center md:bottom-6 md:left-6 md:items-start md:justify-end md:text-left">
        <div className="border-l-0 border-yellow-400 pl-2 text-3xl font-semibold text-white md:border-l-4 md:pl-2 md:text-4xl">
          {pathname
            .split("/")
            .filter(Boolean)
            .join(" ")
            .replace(/\b\w/g, (char) => char.toUpperCase())}
        </div>
      </div>
    </div>
  );
};

export default Background;
