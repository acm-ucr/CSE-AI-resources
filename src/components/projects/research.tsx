import React from "react";
import Title from "../title";
import Link from "next/link";

const Research = () => {
  return (
    <div className="mx-auto my-5 flex w-11/12 flex-col gap-3">
      <div className="w-full">
        <Title title="Faculty" underline={false} />
        <Link
          href={"https://raise.ucr.edu/people"}
          className="font-inter pt-8 text-base font-semibold leading-relaxed hover:text-ucr-blue md:text-lg lg:text-2xl"
        >
          View more
        </Link>
        {/* <div className="flex justify-center gap-10">
        <div className="h-24 w-80 bg-ucr-blue/80 md:h-80" />
        <div className="h-24 w-80 bg-ucr-blue/80 md:h-80" />
        <div className="h-24 w-80 bg-ucr-blue/80 md:h-80" />
        </div> */}
      </div>
    </div>
  );
};

export default Research;
