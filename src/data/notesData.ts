export type Note = {
  id: number;
  title: string;
  url: string;
};

export const notesData: Note[] = [
  {
    id: 1,
    title: "Stanford CS229 Machine Learning Lecture Notes",
    url: "www.mocklink.com",
  },
  {
    id: 2,
    title: "Stanford Deep Learning Lecture Slide",
    url: "www.mocklink.com",
  },
];
