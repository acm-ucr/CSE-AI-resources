"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/UCRLogo.svg";
import { ITEMS } from "@/data/nav";
import { usePathname } from "next/navigation";

type Item = {
  name: string;
  href: string;
};

const Navigation = () => {
  const pathname = usePathname();

  return (
    <div className="bg-ucr-blue text-white">
      <p className="bg-ucr-yellow p-3 text-center text-lg font-light text-black">
        University of California, Riverside
      </p>

      <div className="flex h-24 justify-between">
        <div className="flex items-center space-x-3 pl-4 text-4xl font-medium">
          <Link href={"/"}>
            <Image src={Logo} alt="UCR Logo" />
          </Link>
          <p className="pr-4 text-5xl font-extralight text-ucr-yellow">|</p>
          CSE AI
        </div>
        <div className="flex items-center space-x-7 pr-4 text-2xl">
          {ITEMS.map((item: Item, index: number) => (
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
      </div>
    </div>
  );
};

export default Navigation;
