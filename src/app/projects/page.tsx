import Professionals from "@/components/projects/professionals";
import Research from "@/components/projects/research";
import Medical from "@/components/projects/medical";
import Faculty from "@/components/projects/faculty";

const page = () => {
  return (
    <div>
      <Research />
      <Professionals />
      <Medical />
      <div className="items-left flex flex-col p-20">
        <div className="flex items-center">
          <h1 className="font-inter text-6xl font-normal leading-relaxed">
            Faculty
          </h1>
          <div className="ml-8 h-1 w-11/12 bg-ucr-yellow"></div>
        </div>
      </div>
      <div className="grid grid-cols-3 place-items-center gap-24 p-24 pt-0">
        <Faculty
          facultyName="John Doe"
          facultyImageLink="https://i.nuuls.com/B66hZ.png"
          facultyDescription="Professor of Economics at UCR"
        />
        <Faculty
          facultyName="John Doe"
          facultyImageLink="https://i.nuuls.com/B66hZ.png"
          facultyDescription="Assistant Researcher"
        />
        <Faculty
          facultyName="John Doe"
          facultyImageLink="https://i.nuuls.com/B66hZ.png"
          facultyDescription="guy"
        />
        <Faculty
          facultyName="John Doe"
          facultyImageLink="https://i.nuuls.com/B66hZ.png"
          facultyDescription="guy 2"
        />
      </div>
    </div>
  );
};

export default page;
