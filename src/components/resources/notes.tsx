import React from "react";
import Link from "next/link";
import { NOTES } from "@/data/notesData";
import Title from "../title";

const Notes = () => {
  return (
    <div className="my-10 flex w-11/12 flex-col gap-4 p-3 md:gap-6 md:p-0">
      <Title title="Lecture Notes" underline />
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
