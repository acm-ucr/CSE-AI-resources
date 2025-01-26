import React from "react";
import Carousel from "./carousel";

const videos1 = [
  "https://www.youtube.com/embed/xsh4_9VX9jM?si=4dlhoadJtRFfugTH",
  "https://www.youtube.com/embed/xsh4_9VX9jM?si=4dlhoadJtRFfugTH",
  "https://www.youtube.com/embed/xsh4_9VX9jM?si=4dlhoadJtRFfugTH",
];

const videos2 = [
  "https://www.youtube.com/embed/xsh4_9VX9jM?si=4dlhoadJtRFfugTH",
  "https://www.youtube.com/embed/xsh4_9VX9jM?si=4dlhoadJtRFfugTH",
  "https://www.youtube.com/embed/xsh4_9VX9jM?si=4dlhoadJtRFfugTH",
];

const videos3 = [
  "https://www.youtube.com/embed/xsh4_9VX9jM?si=4dlhoadJtRFfugTH",
  "https://www.youtube.com/embed/xsh4_9VX9jM?si=4dlhoadJtRFfugTH",
  "https://www.youtube.com/embed/xsh4_9VX9jM?si=4dlhoadJtRFfugTH",
];

const videos4 = [
  "https://www.youtube.com/embed/xsh4_9VX9jM?si=4dlhoadJtRFfugTH",
  "https://www.youtube.com/embed/xsh4_9VX9jM?si=4dlhoadJtRFfugTH",
  "https://www.youtube.com/embed/xsh4_9VX9jM?si=4dlhoadJtRFfugTH",
];

const Videos = () => {
  return (
    <div className="m-20">
      <div className="mb-11 flex items-center gap-10 text-6xl">
        Videos
        <div className="h-1 w-full bg-ucr-yellow"></div>
      </div>

      <div className="columns-2 gap-x-40 text-xl">
        <div className="pb-20">
          <p className="mb-3">3Blue1Brown Deep Learning Series</p>
          <Carousel videos={videos1} />
        </div>

        <div>
          <p className="mb-3">
            Andrej Karpathy Zero To Hero Neural Networks Series Long Videos
          </p>
          <Carousel videos={videos2} />
        </div>

        <div className="pb-20">
          <p className="mb-3">Stanford CS229 Lecture Videos - Andrew Ng</p>
          <Carousel videos={videos3} />
        </div>

        <div>
          <p className="mb-3">Andrej Karpathy GPT From Scratch Videos</p>
          <Carousel videos={videos4} />
        </div>
      </div>
    </div>
  );
};

export default Videos;
