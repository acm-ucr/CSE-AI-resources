import React from "react";
import Link from "next/link";
import { Article } from "@/types";

interface ArticleListProps {
  title: string;
  articles: Article[];
}

const ArticleList = ({ title, articles }: ArticleListProps) => (
  <div>
    <h2 className="mb-4 sm:text-lg md:text-xl lg:text-2xl">{title}</h2>
    <ol className="space-y-1">
      {articles.map(({ link, title }, index) => (
        <li key={index} className="flex items-baseline">
          <span className="mr-2 text-black sm:text-lg md:text-xl lg:text-2xl">
            {index + 1}.
          </span>
          <Link
            href={link}
            target="_blank"
            className="text-ucr-blue underline transition-colors sm:text-lg md:text-xl lg:text-2xl"
          >
            {title}
          </Link>
        </li>
      ))}
    </ol>
  </div>
);

export default ArticleList;
