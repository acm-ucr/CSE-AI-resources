import React from "react";
import Link from "next/link";
import { NOTES } from "@/data/notesData";
import Title from "../title";

const Notes = () => {
  return (
    <div className="my-10 flex w-11/12 flex-col gap-4 p-3 md:gap-6 md:p-0">
      <Title title="Lecture Notes" underline />
      <div className="flex flex-col gap-2 text-left">
        {NOTES.map(({ title, url }, index) => (
          <div className="flex items-center" key={index}>
            <p className="mr-2 text-black sm:text-lg md:text-xl lg:text-2xl">
              {index + 1}.
            </p>
            <Link
              href={url}
              target="_blank"
              className="text-xl text-ucr-blue underline md:text-xl lg:text-2xl"
            >
              {title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
