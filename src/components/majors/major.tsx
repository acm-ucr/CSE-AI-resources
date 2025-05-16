import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Links from "../resources/links";

type props = {
  header: string;
  description: string;
  links: {
    text: string;
    link: string;
  }[];
};

const Major = ({ header, description, links }: props) => {
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

            {links.map(({ text, link }, index) => (
              <div key={index}>
                <Links title="" text={text} link={link} />
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Major;
