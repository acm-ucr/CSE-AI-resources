import Title from "../title";
import Tool from "./tool";
import { TOOLS } from "@/data/tools";

const Tools = () => {
  return (
    <div className="ml-auto mr-auto mt-20 flex w-11/12 flex-col gap-4 p-3 md:gap-6 md:p-0">
      <Title title="Common AI Tools" underline />
      <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-3">
        {Object.entries(TOOLS).map(([title, links], index) => (
          <Tool key={index} title={title} section={links} />
        ))}
      </div>
    </div>
  );
};

export default Tools;
