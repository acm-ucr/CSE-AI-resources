import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { resource } from "@/types";
import Image from "next/image";
import TimelineLayout from "../education/timeline-layout";
import { history } from "@/data/history";

const AIDropdown = ({ header, image, description }: resource) => {
  return (
    <div className="py-1">
      <Accordion
        type="single"
        collapsible
        className="overflow-hidden rounded-lg border shadow-sm"
      >
        <AccordionItem value="resource" className="border-0">
          <AccordionTrigger className="px-6 py-4 transition-all duration-200 hover:bg-gray-50 hover:no-underline dark:hover:bg-gray-800">
            <div className="flex items-center gap-4">
              <h3 className="text-xl font-medium md:text-2xl">{header}</h3>
            </div>
          </AccordionTrigger>
          <AccordionContent className="border-t px-6 pb-6 pt-2">
            <div className="flex flex-col gap-6 md:flex-row">
              {image && (
                <div className="w-full flex-shrink-0 md:w-2/5">
                  <Image
                    src={image}
                    alt={`${header} visual`}
                    className="w-full rounded-md object-cover shadow-sm"
                  />
                </div>
              )}
              <div className="flex w-full flex-col justify-center md:w-3/5">
                {Array.isArray(description) ? (
                  <div className="space-y-4 text-base md:text-lg">
                    {description.map((item, index) => (
                      <div key={index} className="leading-relaxed">
                        {item}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="w-full">
                    {typeof description === "object" ? (
                      <div className="md:-mx-6">
                        <TimelineLayout data={history} />
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                )}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default AIDropdown;
