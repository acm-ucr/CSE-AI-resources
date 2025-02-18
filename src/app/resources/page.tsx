import External from "@/components/resources/external";
import React from "react";
import Videos from "@/components/resources/videos";
import Articles from "@/components/resources/articles";
import Notes from "@/components/resources/notes";
import Dropdowns from "@/components/resources/aidrop";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Dropdowns />
      <Articles />
      <External />
      <Videos />
      <Notes />
    </div>
  );
};

export default page;
