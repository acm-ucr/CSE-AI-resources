import Dropdown from "./course-dropdown";
import { courses } from "@/data/courses";

const Dropdowns = () => {
  return (
    <div className="w-5/6">
      {Object.keys(courses).map((level) => (
        <div key={level}>
          <p className="mt-10 bg-ucr-blue bg-opacity-45 p-2 text-4xl font-medium">
            {level}
          </p>
          {courses[level].map(
            (
              { header, description, books, platforms, prerequisites },
              index,
            ) => (
              <Dropdown
                header={header}
                description={description}
                books={books}
                platforms={platforms}
                prerequisites={prerequisites}
                key={index}
              />
            ),
          )}
        </div>
      ))}
    </div>
  );
};

export default Dropdowns;
