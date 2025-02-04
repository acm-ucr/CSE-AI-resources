import React from "react";
import Image from "next/image";

interface FacultyProps {
  facultyName: string;
  facultyImageLink: string;
  facultyDescription: string;
}

const Faculty = ({
  facultyName,
  facultyImageLink,
  facultyDescription,
}: FacultyProps) => {
  return (
    <div className="font-inter flex-col items-center justify-center overflow-hidden">
      <div className="flex-none bg-blue-200">
        <Image
          className="overflow-hidden"
          width={750}
          height={900}
          src={facultyImageLink}
          alt={`A portrait of ${facultyName}`}
        ></Image>
      </div>
      <div className="h-full flex-none bg-[#375cae]">
        <p className="line-clamp-1 p-4 align-middle text-4xl text-white">
          {facultyName}
        </p>
        <p className="line-clamp-1 text-wrap p-4 pb-12 pl-6 pt-0 align-middle text-xl text-gray-200">
          {facultyDescription}
        </p>
      </div>
    </div>
  );
};

export default Faculty;
