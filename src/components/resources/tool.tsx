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
    <div className="space-y-6 text-lg md:text-xl lg:text-2xl">
      <div className="font-semibold">{title}</div>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {section.map(({ link, text }, index) => (
          <Link key={index} href={link} className="block">
            <div className="rounded-2xl border-2 border-gray-200 bg-white p-4 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <div className="flex items-center gap-3 text-gray-900">
                <span className="w-full text-center font-medium hover:text-ucr-blue">
                  {text}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Tool;
