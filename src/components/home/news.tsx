import { newsData } from "@/data/news";
import New from "./new";

const News = () => {
  return (
    <div className="p~5 mb-20 ml-auto mr-auto mt-20 w-11/12">
      <div className="flex items-center gap-6">
        <h1 className="my-8 text-left text-6xl">Recent News</h1>
        <span className="flex-grow border-2 border-ucr-yellow" />
      </div>
      <div className="mb-[10vh] grid h-full justify-items-center gap-y-12 p-0 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {newsData.map((news, index) => (
          <New
            title={news.title}
            text={news.text}
            link={news.refLink}
            image={news.image}
            alt={news.imageAlt}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default News;
