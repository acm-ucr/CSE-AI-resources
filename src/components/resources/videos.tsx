import React from "react";
import Carousel from "./carousel";
import { videos } from "@/data/videos";

type Video = {
  title: string;
  videos: string[];
};

const Videos = () => {
  return (
    <div className="p~5 mb-20 ml-auto mr-auto mt-20 w-11/12">
      <div className="mb-11 flex items-center gap-10 text-6xl">
        Videos
        <div className="h-1 w-full bg-ucr-yellow"></div>
      </div>

      <div className="columns-2 gap-x-40 text-xl">
        {videos.map((item: Video, index: number) => (
          <Carousel title={item.title} videos={item.videos} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Videos;
