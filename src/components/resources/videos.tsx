import React from "react";
import Title from "../title";
import Carousel from "./carousel";
import { VIDEOS } from "@/data/videos";

type Video = {
  title: string;
  videos: string[];
};

const Videos = () => {
  return (
    <div className="mb-5 ml-auto mr-auto mt-5 flex w-11/12 flex-col gap-4 md:gap-6">
      <Title title="Videos" underline />

      <div className="grid grid-cols-1 gap-10 text-xl md:grid-cols-2">
        {VIDEOS.map((item: Video, index: number) => (
          <Carousel title={item.title} videos={item.videos} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Videos;
