import React from "react";
import { faculty } from "@/data/faculty";
import Faculties from "./faculties";
import Title from "../title";

const Faculty = () => {
  return (
    <div className="flex w-11/12 flex-col items-center gap-4 md:gap-6">
      <Title title="Faculty" underline />
      <div className="my-4 mt-5 grid grid-cols-1 justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-3">
        {faculty.map(
          ({ facultyName, facultyDescription, facultyImageLink }, index) => (
            <Faculties
              key={index}
              name={facultyName}
              description={facultyDescription}
              image={facultyImageLink}
              alt={facultyName}
            />
          ),
        )}
      </div>
    </div>
  );
};

export default Faculty;
