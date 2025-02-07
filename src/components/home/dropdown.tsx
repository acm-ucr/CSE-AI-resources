"use client";
import React, { useState } from "react";
import Image from "next/image";
import BlueTriangle from "@/public/bluetriangle.svg";
import YellowTriangle from "@/public/yellowtriangle.svg";

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
const Collapsible = CollapsiblePrimitive.Root;
const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;
const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;

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
      <Collapsible open={courseOpen} onOpenChange={setCourseOpen}>
        <CollapsibleTrigger asChild>
          <div className="m-4 flex cursor-pointer gap-6 text-4xl">
            <Image
              src={YellowTriangle}
              alt="Yellow Triangle"
              className={`duration-300 ${courseOpen ? "rotate-90" : "rotate-0"}`}
            />
            {header}
          </div>
        </CollapsibleTrigger>

        <CollapsibleContent>
          <p className="pb-2 pl-14 text-2xl font-light italic leading-7">
            {description}
          </p>

          <Collapsible open={resourcesOpen} onOpenChange={setResourcesOpen}>
            <CollapsibleTrigger asChild>
              <div className="mb-3 flex cursor-pointer gap-6 pl-7 text-2xl">
                <Image
                  src={BlueTriangle}
                  alt="Blue Triangle"
                  className={`duration-300 ${resourcesOpen ? "rotate-0" : "-rotate-90"}`}
                />
                Resources
              </div>
            </CollapsibleTrigger>

            <CollapsibleContent>
              <div className="mt-2 space-y-5 pb-2 pl-20 text-xl">
                <p>
                  Course Materials: Provided by UCR instructors (lecture
                  slides,notes).
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
            </CollapsibleContent>
          </Collapsible>

          <Collapsible
            open={prerequisitesOpen}
            onOpenChange={setPrerequisitesOpen}
          >
            <CollapsibleTrigger asChild>
              <div className="flex cursor-pointer gap-6 pl-7 text-2xl">
                <Image
                  src={BlueTriangle}
                  alt="Blue Triangle"
                  className={`duration-300 ${prerequisitesOpen ? "rotate-0" : "-rotate-90"}`}
                />
                Prerequisites
              </div>
            </CollapsibleTrigger>

            <CollapsibleContent>
              <div className="mt-2 pl-20 text-xl duration-500">
                {prerequisites.map((item, index) => (
                  <li
                    key={index}
                    style={{ marginLeft: `${item.indent * 30}px` }}
                  >
                    {item.name}
                  </li>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default Dropdown;
