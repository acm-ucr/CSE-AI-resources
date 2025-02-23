import New from "./new";
import Title from "../title";
import { NEWS } from "@/data/news";

const News = () => {
  return (
    <div className="p~4 mb-20 ml-auto mr-auto mt-5 w-5/6">
      <Title title="Recent News" underline />
      <div className="my-[10vh] grid h-full justify-items-center gap-y-12 p-0 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {NEWS.map((news, index) => (
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
