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
      <Accordion type="single" collapsible>
        <AccordionItem value="course">
          <AccordionTrigger className="m-1 my-4 flex gap-6 py-0 text-3xl hover:no-underline">
            {header}
          </AccordionTrigger>
          <AccordionContent>
            <p className="pb-2 pl-14 text-2xl font-light italic leading-7">
              {description}
            </p>

            <div className="mb-3 flex gap-6 pl-7 text-xl">Resources</div>
            <div className="mt-2 space-y-5 pb-2 pl-20 text-lg">
              <p>
                Course Materials: Provided by UCR instructors (lecture slides,
                notes).
              </p>

              {books.length > 0 && (
                <div>
                  <h3 className="mt-4 text-lg font-semibold">Books:</h3>
                  <ul>
                    {books.map(({ text, link }, index) => (
                      <li key={index}>
                        <Links title="" text={text} link={link} />
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {platforms.length > 0 && (
                <div>
                  <h3 className="mt-4 text-lg font-semibold">
                    Practice Platforms:
                  </h3>
                  <ul>
                    {platforms.map(({ text, link }, index) => (
                      <li key={index}>
                        <Links title="" text={text} link={link} />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="flex gap-6 pl-7 text-xl">Prerequisites</div>

            <div className="mt-2 pl-20 text-xl">
              <ul>
                {prerequisites.map((item, index) => (
                  <li
                    key={index}
                    style={{ marginLeft: `${item.indent * 30}px` }}
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
