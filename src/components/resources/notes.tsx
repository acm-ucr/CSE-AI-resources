import React from "react";

const notes = () => {
  return (
    <div className="font-inter items-left w-auto">
      <div className="mb-8 flex items-center">
        <h1 className="mb-2 w-96 text-5xl">Lecture Notes</h1>
        <div className="h-1 w-[832px] bg-ucr-yellow"></div>
      </div>

      <div className="mb-2 text-left">
        <a href="mocklink.com" className="text-2xl text-ucr-blue underline">
          1. Stanford CS229 Machine Learning Lecture Notes
        </a>
      </div>
      <div className="mb-2 text-left">
        <a href="mocklink.com" className="text-2xl text-ucr-blue underline">
          2. Stanford Deep Learning Lecture slide
        </a>
      </div>
    </div>
  );
};

export default notes;
