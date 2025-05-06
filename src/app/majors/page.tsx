import Background from "@/components/background";
import Majors from "@/components/majors";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Background />
      <Majors />
    </div>
  );
};

export default page;
