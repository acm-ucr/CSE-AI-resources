import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { resource } from "@/types";
import Links from "./links";

const AIDropdown = ({ header, description, reading, video }: resource) => {
  return (
    <div className="py-1">
      <Accordion type="single" collapsible>
        <AccordionItem value="resource">
          <AccordionTrigger className="py-0 hover:no-underline">
            <div className="m-1 my-4 flex gap-6 text-3xl">{header}</div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="pb-2 pl-14 text-2xl font-light leading-7">
              {description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
              {reading.map(({ text, link }, index) => (
                <Links
                  title={"Further Reading"}
                  text={text}
                  link={link}
                  key={index}
                />
              ))}
              {video.map(({ text, link }, index) => (
                <Links title={"Video"} text={text} link={link} key={index} />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default AIDropdown;
