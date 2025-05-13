import Dropdown from "./course-dropdown";
import { courses } from "@/data/courses";
import Title from "../title";

const CourseDropdowns = () => {
  return (
    <div className="my-8 w-5/6">
      <Title title="UCR AI Courses" underline={false} />
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

export default CourseDropdowns;
