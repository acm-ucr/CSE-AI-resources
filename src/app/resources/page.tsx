import External from "@/components/resources/external";
import Articles from "@/components/resources/articles";
import Notes from "@/components/resources/notes";
import AIDropdowns from "@/components/resources/ai-dropdown";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <AIDropdowns />
      <Articles />
      <External />
      <Notes />
    </div>
  );
};

export default page;
