import React from "react";
import Image from "next/image";
import Link from "next/link";

interface NewsProps {
  title: string;
  pageLink: string;
  imageLink: string;
  imageAlt: string;
  description: string;
}

const News = ({
  title,
  pageLink,
  imageLink,
  imageAlt,
  description,
}: NewsProps) => {
  return (
    <div className="font-inter flex h-96 w-80 flex-col p-0">
      <div className="flex h-64 items-center justify-center overflow-hidden">
        <Image
          src={imageLink}
          alt={imageAlt}
          width={300}
          height={250}
          className="h-full w-full object-cover"
        ></Image>
      </div>
      <article>
        <p className="line-clamp-1 pt-4 text-2xl font-bold">
          <Link href={pageLink} className="hover:underline">
            {title}
          </Link>
        </p>
        <p className="line-clamp-6 pt-2 text-sm">{description}</p>
      </article>
    </div>
  );
};

export default News;
