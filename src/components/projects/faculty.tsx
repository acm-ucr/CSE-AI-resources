import React from "react";
import { faculty } from "@/data/faculty";
import Faculties from "./faculties";

const Faculty = () => {
  return (
    <div>
      <div className="flex flex-col p-4">
        <div className="flex items-center">
          <h1 className="font-inter text-6xl font-normal leading-relaxed">
            Faculty
          </h1>
          <div className="ml-8 h-1 w-11/12 bg-ucr-yellow" />
        </div>
      </div>

      <div className="my-4 grid grid-cols-1 justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-3">
        {faculty.map((faculty, index) => (
          <Faculties
            key={index}
            name={faculty.facultyName}
            description={faculty.facultyDescription}
            image={faculty.facultyImageLink}
            alt={faculty.facultyName}
          />
        ))}
      </div>
    </div>
  );
};

export default Faculty;
