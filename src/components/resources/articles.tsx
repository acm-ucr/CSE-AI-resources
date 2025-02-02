import React from "react";
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
          <a
            href={article.link}
            className="text-2xl text-ucr-blue underline transition-colors"
          >
            {article.title}
          </a>
        </li>
      ))}
    </ol>
  </div>
);

const Articles = () => {
  const pytorchArticles = [
    { id: 1, title: "CIFAR10 Classifier", link: "#" },
    { id: 2, title: "MNIST", link: "#" },
    { id: 3, title: "RNN Part 1", link: "#" },
    { id: 4, title: "RNN Part 2", link: "#" },
    { id: 5, title: "RNN Part 3", link: "#" },
    { id: 6, title: "Creating a Neural Network", link: "#" },
  ];

  const kaggleProjects = [{ id: 1, title: "Titanic Problem", link: "#" }];

  return (
    <div className="m-20">
      <div className="mb-6 flex items-center gap-10 text-6xl">
        Articles
        <div className="h-1 w-full bg-ucr-yellow"></div>
      </div>

      <div className="grid w-5/12 grid-cols-1 md:grid-cols-2">
        <ArticleList
          title="PyTorch Official Tutorials"
          articles={pytorchArticles}
        />
        <ArticleList title="Kaggle Projects" articles={kaggleProjects} />
      </div>
    </div>
  );
};

export default Articles;
