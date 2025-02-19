import React from "react";
import Link from "next/link";

interface Article {
  id: number;
  title: string;
  link: string;
}

interface ArticleListProps {
  title: string;
  articles: Article[];
}

const ArticleList = ({ title, articles }: ArticleListProps) => (
  <div>
    <h2 className="mb-4 sm:text-lg md:text-xl lg:text-2xl">{title}</h2>
    <ol className="space-y-1">
      {articles.map((article) => (
        <li key={article.id} className="flex items-baseline">
          <span className="mr-2 text-ucr-blue sm:text-lg md:text-xl lg:text-2xl">
            {article.id}.
          </span>
          <Link
            href={article.link}
            className="text-ucr-blue underline transition-colors sm:text-lg md:text-xl lg:text-2xl"
          >
            {article.title}
          </Link>
        </li>
      ))}
    </ol>
  </div>
);

export default ArticleList;
