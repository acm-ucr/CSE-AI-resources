import React from "react";
import Link from "next/link";
import { notesData } from "@/data/notesData";

const Notes = () => {
  return (
    <div className="font-inter items-left w-full px-20">
      <div className="mb-8 flex items-center">
        <h1 className="flex w-96 flex-col gap-2 whitespace-nowrap text-6xl">
          Lecture Notes
        </h1>
        <div className="ml-14 h-1 w-11/12 bg-ucr-yellow"></div>
      </div>

      <div className="flex flex-col gap-2 text-left">
        {notesData.map((note, index) => (
          <Link
            key={index}
            href={note.url}
            target="_blank"
            className="text-2xl text-ucr-blue underline"
          >
            {note.id}. {note.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Notes;
