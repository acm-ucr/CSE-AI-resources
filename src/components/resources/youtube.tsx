import Link from "next/link";
import Title from "../title";
import { VIDEOS } from "@/data/youtube";

const Youtube = () => {
  return (
    <div className="my-10 ml-auto mr-auto mt-20 flex w-11/12 flex-col gap-4 p-3 md:gap-6 md:p-0">
      <Title title="Recommended Youtube Channels" underline={false} />
      <div className="grid w-2/3 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {VIDEOS.map(({ text, link }, index) => (
          <Link key={index} href={link} className="block">
            <div className="rounded-2xl border-2 border-gray-200 bg-white p-4 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <div className="flex items-center gap-3 text-gray-900">
                <span className="w-full text-center font-medium hover:text-ucr-blue">
                  {text}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Youtube;
