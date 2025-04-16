import React from "react";
import Title from "../title";
import Link from "next/link";
import Image from "next/image";
import Landing from "@/public/welcome.webp";

const Welcome = () => {
  return (
    <div className="my-10 flex w-5/6 flex-col gap-4 rounded-xl p-5 md:w-5/6 md:flex-row">
      <div className="w-full md:w-1/2">
        <Image
          src={Landing}
          alt="UCR AI Hub Vision"
          width={400}
          height={300}
          className="h-auto w-full rounded-xl object-cover shadow-sm"
        />
      </div>

      <div className="flex w-full flex-col items-start justify-start gap-4 md:w-1/2">
        <Title title="Our Goal" underline={false} />
        <p className="mt-1 text-start text-lg text-black">
          We aim to build an inclusive space where AI education at UCR is
          accessible to all students, regardless of major or background. Through
          curated topics, hands-on resources, and UCR courses, this site
          bridges curiosity with opportunity, helping students explore the
          growing world of artificial intelligence.
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
    </div>
  );
};

export default Welcome;
