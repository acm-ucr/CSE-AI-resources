"use client";
import React, { useState } from "react";
import Image from "next/image";
import BlueTriangle from "@/public/bluetriangle.svg";
import YellowTriangle from "@/public/yellowtriangle.svg";

type Prerequisite = {
  name: string;
  indent: number;
};

const Dropdown = ({
  header,
  description,
  books,
  platforms,
  prerequisites,
}: {
  header: string;
  description: string;
  books: string[];
  platforms: string[];
  prerequisites: Prerequisite[];
}) => {
  const [courseOpen, setCourseOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [prerequisitesOpen, setPrerequisitesOpen] = useState(false);

  return (
    <div className="pb-9 pt-2">
      <div
        className="m-4 flex cursor-pointer gap-6 text-4xl"
        onClick={() => setCourseOpen(!courseOpen)}
      >
        <Image src={YellowTriangle} alt="Yellow Triangle" />
        <p>{header}</p>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${courseOpen ? "opacity-100" : "max-h-0 opacity-0"}`}
      >
        <p className="pb-2 pl-14 text-2xl font-light italic leading-7">
          {description}
        </p>

        <div
          className="flex cursor-pointer gap-6 overflow-hidden pl-7 text-2xl"
          onClick={() => setResourcesOpen(!resourcesOpen)}
        >
          <Image src={BlueTriangle} alt="Blue Triangle" />
          Resources
        </div>

        <div
          className={`transistion-all overflow-hidden pb-2 pl-20 text-xl duration-500 ease-in-out ${resourcesOpen ? "opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="mt-2 space-y-5">
            <p>
              Course Materials: Provided by UCR instructors (lecture slides,
              notes).
            </p>
            <div>
              Books:
              {books.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </div>
            <div>
              Practice Platforms:
              {platforms.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </div>
          </div>
        </div>

        <div
          className="flex cursor-pointer gap-6 pl-7 text-2xl"
          onClick={() => setPrerequisitesOpen(!prerequisitesOpen)}
        >
          <Image src={BlueTriangle} alt="Blue Triangle" />
          Prerequisites
        </div>

        <div
          className={`overflow-hidden pl-20 text-xl transition-all duration-500 ease-in-out ${prerequisitesOpen ? "opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="mt-2">
            {prerequisites.map((item, index) => (
              <li key={index} style={{ marginLeft: `${item.indent * 30}px` }}>
                {item.name}
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
