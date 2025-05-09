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
import Links from "@/components/resources/links";

// Helper component to render text with bullet points parsed from newlines
function FormattedText({ text }: { text: string }) {
  const lines = text.split("\n");
  return (
    <div className="leading-relaxed">
      {lines.map((line, index) => {
        const trimmedLine = line.trim();
        if (trimmedLine.startsWith("- ")) {
          const bulletText = trimmedLine.substring(2);
          return (
            <ul key={index} className="ml-5 list-disc">
              <li>{bulletText}</li>
            </ul>
          );
        }
        return <p key={index}>{line}</p>;
      })}
    </div>
  );
}

const AIDropdown = ({
  header,
  image,
  description,
  reading,
  video,
}: resource) => {
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
          <AccordionContent className="w-full border-t px-6 pb-6 pt-2">
            {/* Main content row (Image + Text) */}
            <div className="flex w-full flex-col gap-6 md:flex-row">
              {image && (
                <div className="w-full flex-shrink-0 md:w-2/5">
                  <Image
                    src={image}
                    alt={`${header} visual`}
                    className="w-full rounded-md object-cover shadow-sm"
                  />
                </div>
              )}
              <div className="flex w-full items-center justify-center md:w-11/12">
                {Array.isArray(description) ? (
                  description[0] === "json" ? (
                    <div className="flex w-full justify-center md:mx-6">
                      <TimelineLayout data={history} />
                    </div>
                  ) : (
                    <div className="space-y-4 text-base md:text-lg">
                      {description.map((item, index) =>
                        typeof item === "string" ? (
                          <FormattedText key={index} text={item} />
                        ) : null,
                      )}
                    </div>
                  )
                ) : (
                  <div className="text-base">No description available.</div>
                )}
              </div>
            </div>

            {((reading && reading?.length > 0) ||
              (video && video?.length > 0)) && (
              <div className="mt-6 grid w-full grid-cols-2 gap-4">
                {reading && reading.length > 0 && (
                  <div>
                    <h4 className="mb-2 font-medium">Articles:</h4>
                    <ul className="ml-5 list-disc space-y-2">
                      {reading.map(({ text, link }, index) => (
                        <li key={index}>
                          <Links title="" text={text} link={link} />
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {video && video.length > 0 && (
                  <div>
                    <h4 className="mb-2 font-medium">Videos:</h4>
                    <ul className="ml-5 list-disc space-y-2">
                      {video.map(({ text, link }, index) => (
                        <li key={index}>
                          <Links title="" text={text} link={link} />
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default AIDropdown;
