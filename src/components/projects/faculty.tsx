import React from "react";
import Title from "../title";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const Faculty = () => {
  return (
    <div className="mx-auto my-5 flex w-11/12 flex-col gap-3">
      <div className="w-full">
        <Title title="Faculty" underline={false} />
        <Link
          href={"https://raise.ucr.edu/people"}
          className="font-inter flex w-fit items-center pt-2 text-base font-normal leading-relaxed text-ucr-blue duration-300 hover:text-ucr-blue/60 md:text-lg lg:text-2xl"
        >
          View Faculty <ArrowUpRight size={28} />
        </Link>
      </div>
    </div>
  );
};

export default Faculty;
