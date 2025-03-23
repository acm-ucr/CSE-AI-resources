import Title from "../title";
import Tool from "./tool";
import { VIDEOS } from "@/data/youtube";

const Youtube = () => {
  return (
    <div className="ml-auto mr-auto mt-20 flex w-11/12 flex-col gap-4 p-3 md:gap-6 md:p-0">
      <Title title="Recommended Youtube Channels" underline />
      <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2">
        {Object.entries(VIDEOS).map(([title, links], index) => (
          <Tool key={index} title={title} section={links} />
        ))}
      </div>
    </div>
  );
};

export default Youtube;