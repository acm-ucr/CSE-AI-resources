import React from "react";
import { articlesData } from "@/data/articles";
import ArticleList from "@/components/resources/articlelist";

const categoryTitles: { [key: string]: string } = {
  pytorch: "PyTorch Official Tutorials",
  kaggle: "Kaggle Projects",
};
const Articles = () => {
  return (
    <div className="p~5 mb-20 ml-auto mr-auto mt-20 w-11/12">
      <div className="mb-6 flex items-center gap-10 text-6xl">
        Articles
        <div className="h-1 flex-1 bg-ucr-yellow"></div>
      </div>

      <div className="grid w-5/12 grid-cols-1 md:grid-cols-2">
        {Object.entries(articlesData).map(([category, articles]) => (
          <ArticleList
            key={category}
            title={categoryTitles[category] || category}
            articles={articles}
          />
        ))}
      </div>
    </div>
  );
};

export default Articles;
