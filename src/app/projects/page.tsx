import Professionals from "@/components/projects/professionals";
import Research from "@/components/projects/research";
import Medical from "@/components/projects/medical";
import Business from "@/components/projects/business";

const page = () => {
  return (
    <div className="my-10 flex flex-col items-center justify-center gap-8">
      <Research />
      <Professionals />
      <Business />
      <Medical />
    </div>
  );
};

export default page;
