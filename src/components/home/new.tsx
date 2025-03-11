import React from "react";
import { StaticImageData } from "next/image";
import Link from "next/link";

type newsProps = {
  image: StaticImageData;
  alt: string;
  link: string;
  title: string;
  text: string;
};

const New = ({ link, title, text }: newsProps) => {
  return (
    <div className="flex w-5/6 flex-col rounded-xl border border-gray-300 bg-white p-5 shadow">
      <div className="mb-2 w-full border-b-[3px] border-ucr-yellow text-xl font-semibold text-black md:text-3xl">
        {title}
      </div>
      <p className="line-clamp-6 p-0 text-base">{text}</p>
      <Link
        href={link}
        className="bg- mt-2 inline-block w-fit rounded-lg border-2 border-ucr-yellow p-2 text-sm font-semibold text-black transition-all hover:bg-ucr-yellow hover:text-white"
      >
        Read More
      </Link>
    </div>
  );
};

export default New;
