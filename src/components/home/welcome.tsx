import React from "react";
import Title from "../title";
import Link from "next/link";

const Welcome = () => {
  return (
    <div className="my-10 flex w-5/6 flex-col items-start justify-start gap-4 rounded-xl p-5 md:w-5/6">
      <Title title="Our Vision" underline={false} />
      <p className="mt-1 text-start text-lg text-black">
        We envision a future where AI education at UCR empowers students and
        faculty to drive innovation, research, and ethical AI development.
        Through collaboration and cutting-edge resources, we bridge AI theory
        and real-world impact.
      </p>

      <div className="mt-4 flex flex-wrap gap-4">
        <Link
          href={"/resources"}
          className="group relative overflow-hidden rounded-md bg-ucr-blue/80 px-6 py-2 font-medium text-white shadow-sm"
        >
          <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-2">
            Learn More
          </span>
          <div className="absolute inset-0 -translate-x-full bg-ucr-blue/80 transition-transform duration-300 group-hover:translate-x-0" />
        </Link>

        <Link
          href={"/education"}
          className="group relative overflow-hidden rounded-md bg-ucr-blue/80 px-6 py-2 font-medium text-white shadow-sm"
        >
          <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-2">
            Explore Classes
          </span>
          <div className="absolute inset-0 -translate-x-full bg-ucr-blue/80 transition-transform duration-300 group-hover:translate-x-0" />
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
