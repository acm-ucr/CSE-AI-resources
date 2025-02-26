import Image from "next/image";
import BlueTriangle from "@/public/bluetriangle.svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

const CourseDropdown = ({
  header,
  description,
  books,
  platforms = [],
  prerequisites = [],
}: props) => {
  return (
    <div className="py-1">
      <Accordion type="single" collapsible>
        <AccordionItem value="course">
          <AccordionTrigger className="py-0 hover:no-underline">
            <div className="m-1 my-4 flex gap-6 text-3xl">{header}</div>
          </AccordionTrigger>
          <AccordionContent>
            <p className="pb-2 pl-14 text-2xl font-light italic leading-7">
              {description}
            </p>

            <Accordion type="multiple" className="border-none">
              <AccordionItem value="resources" className="border-none">
                <AccordionTrigger className="py-1">
                  <div className="mb-3 flex gap-6 pl-7 text-xl">
                    <Image
                      src={BlueTriangle}
                      alt="Triangle"
                      className="-rotate-90 duration-300"
                    />
                    Resources
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="mt-2 space-y-5 pb-2 pl-20 text-lg">
                    <p>
                      Course Materials: Provided by UCR instructors (lecture
                      slides, notes).
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
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="prerequisites" className="border-none">
                <AccordionTrigger className="py-1">
                  <div className="flex gap-6 pl-7 text-xl">
                    <Image
                      src={BlueTriangle}
                      alt="Triangle"
                      className="-rotate-90 duration-300"
                    />
                    Prerequisites
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="mt-2 pl-20 text-xl">
                    {prerequisites.map((item, index) => (
                      <li
                        key={index}
                        style={{ marginLeft: `${item.indent * 30}px` }}
                      >
                        {item.name}
                      </li>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default CourseDropdown;
