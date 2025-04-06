import { TimelineItemType } from "@/types";

export const history: Record<string, TimelineItemType[]> = {
  "": [
    {
      title: "The Birth of AI",
      description: [
        "1950: Alan Turing introduces the Turing Test to assess machine intelligence.",
        "1956: John McCarthy coins the term Artificial Intelligence at the Dartmouth Conference.",
      ],
      time: "1950s",
    },
    {
      title: "Struggles and Discoveres",
      description: [
        "1957: Frank Rosenblatt develops the Perceptron, the first algorithm intended to model a simplified neural network.",
        "Early AI focused on symbolic reasoning and rule-based systems, with limited adaptability.",
      ],
      time: "1960s",
    },
    {
      title: "Foundations Laid",
      description: [
        "AI faces setbacks as symbolic systems fail to scale—leading to the AI Winters (mid-1970s and late 1980s) due to overhyped promises and underdelivered results.",
        "1986: Rumelhart, Hinton, and Williams reintroduce Backpropagation, revolutionizing the training of multi-layer neural networks.",
        "Foundations laid for modern deep learning, but limited by computational resources and data.",
      ],
      time: "1970s",
    },
    {
      title: "Neural Networks Resurface",
      description: [
        "1989: Yann LeCun develops the first Convolutional Neural Network (CNN)—LeNet-5—for digit recognition (used in zip code reading).",
        "Focus on machine learning and data-driven methods grows.",
        "1997: IBM’s Deep Blue defeats world chess champion Garry Kasparov, showing the power of domain-specific AI.",
      ],
      time: "1990s",
    },
    {
      title: "Rise of Machine Learning",
      description: [
        "Progress in support vector machines, boosting, and decision trees expands practical AI applications.",
        "Growth in data availability, cloud computing, and GPU acceleration enables more complex models.",
        "Early use of AI in search engines, recommendation systems, and basic NLP tasks.",
      ],
      time: "2000s",
    },
  ],
};
