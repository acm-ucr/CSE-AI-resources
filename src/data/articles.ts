import { Article } from "@/types";

export const articlesData: Record<string, Article[]> = {
  pytorch: [
    {
      title: "CIFAR10 Classifier",
      link: "https://pytorch.org/tutorials/beginner/blitz/cifar10_tutorial.html?utm_source=chatgpt.com",
    },
    { title: "MNIST", link: "#" },
    {
      title: "RNN Part 1",
      link: "https://pytorch.org/tutorials/intermediate/char_rnn_classification_tutorial.html",
    },
    {
      title: "RNN Part 2",
      link: "https://pytorch.org/tutorials/intermediate/char_rnn_generation_tutorial.html",
    },
    {
      title: "RNN Part 3",
      link: "https://pytorch.org/tutorials/intermediate/seq2seq_translation_tutorial.html",
    },
    {
      title: "Creating a Neural Network",
      link: "https://pytorch.org/tutorials/beginner/basics/buildmodel_tutorial.html",
    },
  ],
  kaggle: [
    {
      title: "Titanic Problem",
      link: "https://www.kaggle.com/competitions/titanic?utm_source=chatgpt.com",
    },
  ],
};
