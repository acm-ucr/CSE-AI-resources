import External from "@/components/resources/external";
import Articles from "@/components/resources/articles";
import Notes from "@/components/resources/notes";
import AIDropdowns from "@/components/resources/ai-dropdown";
import Tools from "@/components/resources/tools";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <AIDropdowns />
      <Tools />
      <Articles />
      <External />
      <Notes />
    </div>
  );
};

export default page;
