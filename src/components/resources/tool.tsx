import React from "react";
import Link from "next/link";

type ToolProps = {
  section: {
    link: string;
    text: string;
  }[];
  title: string;
};

const Tool = ({ section, title }: ToolProps) => {
  return (
    <div>
      <div className="mb-4 sm:text-lg md:text-xl lg:text-2xl">{title}</div>
      <div className="flex flex-col gap-2">
        {section.map(({ link, text }, index) => (
          <div
            key={index}
            className="mr-2 flex gap-2 text-black sm:text-lg md:text-xl lg:text-2xl"
          >
            {index + 1}.
            <Link
              href={link}
              className="text-ucr-blue underline transition-colors sm:text-lg md:text-xl lg:text-2xl"
            >
              {text}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tool;
