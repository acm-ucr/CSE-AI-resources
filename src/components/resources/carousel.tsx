"use client";
import React from "react";
import { useState } from "react";

const Carousel = ({ videos }: { videos: string[] }) => {
  const [curr, setCurr] = useState(0);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {videos.map((vid, index: number) => (
          <iframe
            src={vid}
            key={index}
            width="100%"
            height="300"
            className="w-full flex-shrink-0"
            allowFullScreen
          ></iframe>
        ))}
      </div>

      <div className="bottom-4 left-0 right-0 pt-3">
        <div className="flex items-center justify-center gap-2">
          {videos.map((_: unknown, i: number) => (
            <div
              key={i}
              onClick={() => setCurr(i)}
              className={`h-3 w-3 rounded-full bg-ucr-yellow transition-all ${curr === i ? "p-1" : "bg-opacity-50"} `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
