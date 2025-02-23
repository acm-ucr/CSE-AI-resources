"use client";

import { useState } from "react";
import Image from "next/image";
import BlueTriangle from "@/public/bluetriangle.svg";
import YellowTriangle from "@/public/yellowtriangle.svg";

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
const Collapsible = CollapsiblePrimitive.Root;
const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;
const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;

type prerequisite = {
  name: string;
  indent: number;
};

type props = {
  header: string;
  description: string;
  books: string[];
  platforms: string[];
  prerequisites: prerequisite[];
};

const Dropdown = ({
  header,
  description,
  books,
  platforms,
  prerequisites,
}: props) => {
  const [courseOpen, setCourseOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [prerequisitesOpen, setPrerequisitesOpen] = useState(false);

  return (
    <div className="py-1">
      <Collapsible open={courseOpen} onOpenChange={setCourseOpen}>
        <CollapsibleTrigger asChild>
          <div className="m-4 flex cursor-pointer gap-6 text-3xl">
            <Image
              src={courseOpen ? YellowTriangle : BlueTriangle}
              alt="Yellow Triangle"
              className={`duration-300 ${courseOpen ? "rotate-90" : "-rotate-90"}`}
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
              <div className="mb-3 flex cursor-pointer gap-6 pl-7 text-xl">
                <Image
                  src={resourcesOpen ? YellowTriangle : BlueTriangle}
                  alt="Blue Triangle"
                  className={`duration-300 ${resourcesOpen ? "rotate-90" : "-rotate-90"}`}
                />
                Resources
              </div>
            </CollapsibleTrigger>

            <CollapsibleContent>
              <div className="mt-2 space-y-5 pb-2 pl-20 text-lg">
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
              <div className="flex cursor-pointer gap-6 pl-7 text-xl">
                <Image
                  src={prerequisitesOpen ? YellowTriangle : BlueTriangle}
                  alt="Blue Triangle"
                  className={`duration-300 ${prerequisitesOpen ? "rotate-90" : "-rotate-90"}`}
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
