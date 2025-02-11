import External from "@/components/resources/external";
import React from "react";
import Videos from "@/components/resources/videos";
import Articles from "@/components/resources/articles";
import Notes from "@/components/resources/notes";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Articles />
      <External />
      <Videos />
      <Notes />
    </div>
  );
};

export default page;
