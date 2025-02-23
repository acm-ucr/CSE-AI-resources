import Dropdown from "../home/dropdown";
import { courses } from "@/data/courses";
import { Course } from "@/types";

const Dropdowns = () => {
  return (
    <div className="w-5/6">
      {Object.keys(courses).map((level) => (
        <div key={level}>
          <p className="mt-10 bg-ucr-blue bg-opacity-45 p-2 text-4xl font-medium">
            {level}
          </p>
          {courses[level].map((item: Course, index: number) => (
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
      ))}
    </div>
  );
};

export default Dropdowns;
