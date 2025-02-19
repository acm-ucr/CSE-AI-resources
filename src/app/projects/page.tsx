import Professionals from "@/components/projects/professionals";
import Research from "@/components/projects/research";
import Medical from "@/components/projects/medical";
import Faculty from "@/components/projects/faculty";
import Business from "@/components/projects/business";

const page = () => {
  return (
    <div>
      <Research />
      <Professionals />
      <Business />
      <Medical />
      <Faculty />
    </div>
  );
};

export default page;
