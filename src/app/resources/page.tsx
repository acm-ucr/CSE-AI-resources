import External from "@/components/resources/external";
import React from "react";
import Videos from "@/components/resources/videos";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <External />
      <Videos />
    </div>
  );
};

export default page;
