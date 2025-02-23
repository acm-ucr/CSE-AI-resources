import React from "react";
import Link from "next/link";
import { NOTES } from "@/data/notesData";

const Notes = () => {
  return (
    <div className="p~5 mb-20 ml-auto mr-auto mt-20 w-11/12">
      <div className="mb-8 flex items-center">
        <h1 className="flex w-96 flex-col gap-2 whitespace-nowrap text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          Lecture Notes
        </h1>
        <div className="ml-14 h-1 w-11/12 bg-ucr-yellow max-sm:ml-5 md:ml-6"></div>
      </div>

      <div className="flex flex-col gap-2 text-left">
        {NOTES.map((note, index) => (
          <Link
            key={index}
            href={note.url}
            target="_blank"
            className="text-1xl text-ucr-blue underline sm:text-2xl lg:text-3xl"
          >
            {note.id}. {note.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Notes;
