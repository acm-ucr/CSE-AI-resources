import React from "react";
import { articlesData } from "@/data/articles";
import ArticleList from "@/components/resources/articlelist";
import Title from "../title";

const categoryTitles: { [key: string]: string } = {
  pytorch: "PyTorch Official Tutorials",
  kaggle: "Kaggle Projects",
};

const Articles = () => {
  return (
    <div className="my-5 ml-auto mr-auto mt-4 flex w-11/12 flex-col gap-4 p-3 md:my-8 md:gap-6 md:p-0">
      <Title title="Articles" underline />
      <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2">
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
