import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Links from "@/components/resources/links";

type prerequisite = {
  name: string;
  indent: number;
};

type book = {
  text: string;
  link: string;
};

type platform = {
  text: string;
  link: string;
};

type props = {
  header: string;
  description: string;
  books: book[];
  platforms: platform[];
  prerequisites: prerequisite[];
};

const CourseDropdown = ({
  header,
  description,
  books,
  platforms,
  prerequisites,
}: props) => {
  return (
    <div className="py-1">
      <Accordion
        type="single"
        collapsible
        className="my-1 overflow-hidden rounded-lg border shadow-sm"
      >
        <AccordionItem value="course" className="border-0">
          <AccordionTrigger className="p-4 text-lg font-medium transition-colors duration-200 hover:bg-gray-50 hover:no-underline dark:hover:bg-gray-800 md:text-xl">
            {header}
          </AccordionTrigger>
          <AccordionContent className="border-t px-6 pb-6">
            <p className="mb-6 mt-4 text-lg font-light italic text-gray-600 dark:text-gray-300">
              {description}
            </p>
            {books.length > 0 || platforms.length > 0 && (
              <div className="mb-6">
                <h3 className="mb-3 flex items-center text-lg font-semibold md:text-xl">
                  <span className="mr-2 h-6 w-1 rounded bg-ucr-blue/70" />
                  Resources
                </h3>

                  <div className="ml-4 space-y-4">
                    <p className="text-base">
                      Course Materials: Provided by UCR instructors (lecture slides,
                      notes).
                    </p>

                    {books.length > 0 && (
                      <div className="mt-4">
                        <h4 className="mb-2 font-medium">Books:</h4>
                        <ul className="ml-5 list-disc space-y-2">
                          {books.map(({ text, link }, index) => (
                            <li key={index}>
                              <Links title="" text={text} link={link} />
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {platforms.length > 0 && (
                      <div className="mt-4">
                        <h4 className="mb-2 font-medium">Practice Platforms:</h4>
                        <ul className="ml-5 list-disc space-y-2">
                          {platforms.map(({ text, link }, index) => (
                            <li key={index}>
                              <Links title="" text={text} link={link} />
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
              </div>
            )}
            <div>
              <h3 className="mb-3 flex items-center text-lg font-semibold md:text-xl">
                <span className="mr-2 h-6 w-1 rounded bg-ucr-blue/70" />
                Prerequisites
              </h3>

              <ul className="ml-4 space-y-1">
                {prerequisites.map((item, index) => (
                  <li
                    key={index}
                    className="border-l-2 border-gray-200 py-1 pl-4 transition-colors duration-200 hover:border-ucr-blue/50"
                    style={{ marginLeft: `${item.indent * 16}px` }}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default CourseDropdown;
