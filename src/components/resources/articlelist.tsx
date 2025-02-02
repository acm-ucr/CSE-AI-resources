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

const ArticleList: React.FC<ArticleListProps> = ({ title, articles }) => (
  <div>
    <h2 className="mb-4 text-2xl">{title}</h2>
    <ol className="space-y-1">
      {articles.map((article) => (
        <li key={article.id} className="flex items-baseline">
          <span className="mr-2 text-2xl text-ucr-blue">{article.id}.</span>
          <Link
            href={article.link}
            className="text-2xl text-ucr-blue underline transition-colors"
          >
            {article.title}
          </Link>
        </li>
      ))}
    </ol>
  </div>
);

export default ArticleList;
