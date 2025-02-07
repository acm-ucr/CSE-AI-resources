import React from "react";
import Dropdown from "./dropdown";
import { courses } from "@/data/courses";

type Prerequisite = {
  name: string;
  indent: number;
};

type Course = {
  header: string;
  description: string;
  books: string[];
  platforms: string[];
  prerequisites: Prerequisite[];
};

const Education = () => {
  return (
    <div className="flex w-5/6 flex-col">
      <div className="flex items-center gap-6">
        <h1 className="my-8 text-left text-6xl">Education</h1>
        <div className="flex-grow border-2 border-ucr-yellow"></div>
      </div>
      <p className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        labore vitae, molestias autem nam officiis numquam quam repudiandae
        pariatur dolorem provident dolorum enim tempora doloribus officia
        veritatis ad cupiditate id? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Assumenda labore vitae, molestias autem nam officiis
        numquam quam repudiandae pariatur dolorem provident dolorum enim tempora
        doloribus officia veritatis ad cupiditate id? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Assumenda labore vitae, molestias autem
        nam officiis numquam quam repudiandae pariatur dolorem provident dolorum
        enim tempora doloribus officia veritatis ad cupiditate id?
      </p>

      <p className="mt-10 bg-ucr-blue bg-opacity-45 p-2 text-5xl">Beginner</p>
      <div>
        {courses.map((item: Course, index: number) => (
          <Dropdown
            header={item.header}
            description={item.description}
            books={item.books}
            platforms={item.platforms}
            prerequisites={item.prerequisites}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Education;
