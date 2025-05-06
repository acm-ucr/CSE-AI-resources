import React from "react";
import Major from "./major";
import { MAJORS } from "@/data/majors";
import Title from "./title";

const Majors = () => {
  return (
    <div className="my-8 w-5/6">
      <Title title="Majors Related to AI" underline={false} />
      {Object.keys(MAJORS).map((level) => (
        <div key={level}>
          <p className="mt-10 bg-ucr-blue bg-opacity-45 p-2 text-4xl font-medium">
            {level}
          </p>
          {MAJORS[level].map(
            ({ header, description, links }, index: number) => (
              <Major
                header={header}
                description={description}
                links={links}
                key={index}
              />
            ),
          )}
        </div>
      ))}
    </div>
  );
};

export default Majors;
