import React from "react";
import Image from "next/image";
import Link from "next/link";
import { newsData } from "@/data/news";

const News = () => {
  return (
    <div className="grid h-96 grid-cols-3 gap-20 p-20">
      {newsData.map((news, index) => (
        <div key={index} className="w-80 flex-col">
          <div className="flex h-64 items-center justify-center overflow-hidden">
            <Image
              src={news.image}
              alt={news.imageAlt}
              width={300}
              height={250}
              className="h-full w-full object-cover"
            ></Image>
          </div>
          <article>
            <p className="line-clamp-1 pt-4 text-2xl font-bold">
              <Link href={news.refLink} className="hover:underline">
                {news.title}
              </Link>
            </p>
            <p className="line-clamp-6 pt-2 text-sm">{news.text}</p>
          </article>
        </div>
      ))}
    </div>
  );
};

export default News;
