import { StaticImageData } from "next/image";

export type News = {
  image: StaticImageData;
  imageAlt: string;
  refLink: string;
  title: string;
  text: string;
};

export type Note = {
  title: string;
  url: string;
};

export type Article = {
  title: string;
  link: string;
};

type Prerequisite = {
  name: string;
  indent: number;
};

export interface Course {
  header: string;
  description: string;
  prerequisites: Prerequisite[];
  books: linkableProps[];
  platforms: linkableProps[];
}

export type TimelineItemType = {
  title: string;
  description?: string;
  time: string;
};

export type resource = {
  header: string;
  description: string[];
  reading: linkableProps[];
  video: linkableProps[];
};

type linkableProps = {
  text: string;
  link: string;
};
