import React from "react";
import Image from "next/image";
import { faculty } from "@/data/faculty";

const Faculty = () => {
  return (
    <div>
      <div className="items-left flex flex-col p-20">
        <div className="flex items-center">
          <h1 className="font-inter text-6xl font-normal leading-relaxed">
            Faculty
          </h1>
          <div className="ml-8 h-1 w-11/12 bg-ucr-yellow" />
        </div>
      </div>

      <div className="grid h-96 auto-rows-auto grid-cols-3 justify-items-center gap-10">
        {faculty.map((faculty, index) => (
          <div key={index} className="w-8/12 flex-col">
            <div className="font-inter flex-col items-center justify-center overflow-hidden">
              <div className="flex-none bg-blue-200">
                <Image
                  className="overflow-hidden"
                  width={750}
                  height={900}
                  src={faculty.facultyImageLink}
                  alt={`A portrait of ${faculty.facultyName}`}
                />
              </div>
              <div className="h-full flex-none bg-[#375cae]">
                <p className="line-clamp-1 p-4 align-middle text-4xl text-white">
                  {faculty.facultyName}
                </p>
                <p className="line-clamp-1 text-wrap p-4 pb-12 pl-6 pt-0 align-middle text-xl text-gray-200">
                  {faculty.facultyDescription}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faculty;
