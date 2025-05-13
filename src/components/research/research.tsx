import React from "react";
import Labs from "./labs";
import { LABS } from "@/data/research";
import Title from "../title";

const Research = () => {
  return (
    <div className="my-8 w-5/6">
      <Title title="UCR AI Research" underline={false} />
      {Object.keys(LABS).map((level) => (
        <div key={level}>
          <p className="mt-10 bg-ucr-blue bg-opacity-45 p-2 text-4xl font-medium">
            {level}
          </p>
          {LABS[level].map(({ header, description, links }, index: number) => (
            <Labs
              header={header}
              description={description}
              links={links}
              key={index}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Research;
