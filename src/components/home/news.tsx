import New from "./new";
import Title from "../title";
import { NEWS } from "@/data/news";
// import { useQuery } from "@tanstack/react-query";
// import { fetchEvents } from "@/data/actions";

const News = () => {
  //   const { isFetching, isError, data, error } = useQuery({
  //     queryKey: ["Events"],
  //     queryFn: fetchEvents,
  //   });
  // console.log(isError)
  // console.log(isFetching)
  // console.log(error)

  // console.log(data)
  return (
    <div className="my-10 flex w-5/6 flex-col">
      <Title title="Recent News" underline />
      <div className="my-[6vh] grid h-full justify-items-center gap-y-12 p-0 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {NEWS.map(({ title, text, refLink, image, imageAlt }, index) => (
          <New
            title={title}
            text={text}
            link={refLink}
            image={image}
            alt={imageAlt}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default News;
