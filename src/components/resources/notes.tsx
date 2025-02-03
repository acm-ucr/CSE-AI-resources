import React from "react";
import Link from "next/link";
import notesData, { Note } from "../../data/notesData";

const notes = () => {
  return (
    <div className="font-inter items-left w-auto">
      <div className="mb-8 flex items-center">
        <h1 className="flex w-96 flex-col gap-2 text-5xl">Lecture Notes</h1>
        <div className="h-1 w-[832px] bg-ucr-yellow"></div>
      </div>

      <div className="flex flex-col gap-2 text-left">
        {notesData.map((note: Note) => (
          <Link
            key={note.id}
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

export default notes;
