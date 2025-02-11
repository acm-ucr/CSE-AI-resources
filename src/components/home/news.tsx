import { newsData } from "@/data/news";
import New from "./new";

const News = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex w-11/12 items-center gap-6">
        <h1 className="my-8 text-left text-6xl">Recent News</h1>
        <span className="flex-grow border-2 border-ucr-yellow" />
      </div>
      <div className="mb-[10vh] grid h-full grid-cols-3 justify-items-center gap-0 p-0">
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
