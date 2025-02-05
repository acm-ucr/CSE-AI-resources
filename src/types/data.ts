import { StaticImageData } from "next/image";

export type News = {
  image: StaticImageData;
  imageAlt: string;
  refLink: string;
  title: string;
  text: string;
};

export type Note = {
  id: number;
  title: string;
  url: string;
};

export type Data = {
  id: number;
  title: string;
  link: string;
};
