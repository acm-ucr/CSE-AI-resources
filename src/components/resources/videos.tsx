import React from "react";
import Carousel from "./carousel";
import { videos } from "@/data/videos";

type Video = {
  title: string;
  videos: string[];
};

const Videos = () => {
  return (
    <div className="mb-20 ml-auto mr-auto mt-20 w-11/12 p-5">
      <div className="mb-11 flex items-center gap-10 text-5xl md:text-6xl">
        Videos
        <div className="h-1 w-full bg-ucr-yellow"></div>
      </div>

      <div className="grid grid-cols-1 gap-10 text-xl md:grid-cols-2">
        {videos.map((item: Video, index: number) => (
          <Carousel title={item.title} videos={item.videos} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Videos;
