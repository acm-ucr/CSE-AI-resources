import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type newsProps = {
  image: StaticImageData;
  alt: string;
  link: string;
  title: string;
  text: string;
};

const New = ({ image, alt, link, title, text }: newsProps) => {
  return (
    <div className="flex w-3/4 flex-col">
      <div className="flex h-64 items-center justify-center overflow-hidden">
        <Image
          src={image}
          alt={alt}
          className="h-full w-full rounded-t-2xl object-cover"
        />
      </div>
      <p className="line-clamp-1 pt-4 text-2xl font-bold">
        <Link href={link}>{title}</Link>
      </p>
      <p className="line-clamp-6 pt-2 text-sm">{text}</p>
    </div>
  );
};

export default New;
