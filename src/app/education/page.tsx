import Tree from "@/components/education/tree";
import Dropdowns from "@/components/home/dropdowns";
import React from "react";

const page = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <Dropdowns />
      <Tree />
    </div>
  );
};

export default page;
