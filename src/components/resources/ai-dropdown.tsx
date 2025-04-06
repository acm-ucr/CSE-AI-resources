import { RESOURCES } from "@/data/resources";
import AIDropdown from "./ai-dropdowns";

const AIDropdowns = () => {
  return (
    <div className="w-5/6 md:my-3">
      {Object.keys(RESOURCES).map((level) => (
        <div key={level}>
          <p className="mt-10 bg-ucr-blue bg-opacity-45 p-2 text-4xl font-medium">
            {level}
          </p>
          {RESOURCES[level].map(({ header, image, description }, index) => (
            <AIDropdown
              header={header}
              image={image}
              description={description}
              key={index}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default AIDropdowns;
