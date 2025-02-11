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
      <Faculty />
    </div>
  );
};

export default page;
