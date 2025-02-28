import { StaticImageData } from "next/image";
import mock from "@/public/mock.webp";

type FacultyProps = {
  facultyName: string;
  facultyImageLink: StaticImageData;
  facultyDescription: string;
};

export const faculty: FacultyProps[] = [
  {
    facultyName: "John Doe",
    facultyImageLink: mock,
    facultyDescription: "CSE Professor",
  },
  {
    facultyName: "John Doe",
    facultyImageLink: mock,
    facultyDescription: "EE Professor",
  },
  {
    facultyName: "John Doe",
    facultyImageLink: mock,
    facultyDescription: "CSE Professor",
  },
  {
    facultyName: "John Doe",
    facultyImageLink: mock,
    facultyDescription: "EE Professor",
  },
  {
    facultyName: "John Doe",
    facultyImageLink: mock,
    facultyDescription: "EE Professor",
  },
];
