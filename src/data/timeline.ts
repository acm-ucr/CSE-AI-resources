import { TimelineItemType } from "@/types";

export const timelineData: Record<string, TimelineItemType[]> = {
  undergraduate: [
    {
      title: "Data Analysis Methods",
      description:
        "An introduction to fundamental concepts and methods in data analysis and visualization essential to a variety of data science tasks. Designed to provide preparation for the data science major and for advanced courses in data analysis and applications of data science",
      time: "CS 105",
    },
    {
      title: "Computer Vision",
      description:
        " Covers imaging formation, early vision processing, boundary detection, region growing, two-dimensional and three-dimensional object representation, and recognition techniques.",
      time: "EE 146",
    },
    {
      title: "Intro to Artificial Intelligence",
      description:
        " An introduction to the field of artificial intelligence. Focuses on discretevalued problems. Covers heuristic search, problem representation, and classical planning. Also covers constraint satisfaction and logical inference",
      time: "CS 170",
    },
    {
      title: "Intro to Machine Learning & Data Mining",
      description:
        "Introduces formalisms and methods in data mining and machine learning. Topics include data representation, supervised learning, and classification. Covers regression and clustering. Also covers rule learning, function approximation, and margin-based methods. ",
      time: "CS 171",
    },
    {
      title: "Intro to Natural Language Processing",
      description:
        "An overview of modern approaches for natural language processing. Focuses on major algorithms used in NLP for various applications such as part-of-speech tagging, parsing, named entity recognition, coreference resolution, sentiment analysis, and machine translation",
      time: "CS 173",
    },
    {
      title: "Project In Artifical Intelligence",
      description:
        "Covers the planning, design, implementation, testing, and documentation of an artificial intelligence-related system. Incorporates techniques presented in previous related courses. Emphasizes professional and ethical responsibilities; the need to stay current on technology; and its global impact on economics, society, and the environment",
      time: "CS 179M",
    },
  ],
  graduate: [
    {
      title: "Artificial Intelligence",
      description:
        "Examines knowledge representation and automated reasoning and their use in capturing common sense and expert knowledge. Also addresses predicate and nonmonotonic logics; resolution and term rewriting; reasoning under uncertainty; theorem provers; planning systems; and belief networks. Includes topics in natural language processing, perception, logic programming, expert systems, and deductive databases.",
      time: "CS 205",
    },
    {
      title: "Natural Language Processing",
      description:
        "Language Processing (NLP), the study of computing systems that understand or communicate with human language. Covers both historical and contemporary NLP tasks and the fundamental methods of NLP 'particularly deep learning-based approaches.' Topics include basic classification techniques, feedforward neural networks, attention mechanisms, and pre-trained neural models.",
      time: "CS 222",
    },
    {
      title: "Machine Learning & Data Mining",
      description:
        "A study of generative and discriminative approaches to machine learning. Topics include probabilistic model fitting, gradient-based loss optimization, regularization, hyper-parameters, and generalization. Includes experience with data science programming environments, data from practice, and performance metrics",
      time: "CS 224",
    },
    {
      title: "Deep Learning",
      description:
        "Explores fundamentals of deep neural networks and their applications in various machine learning tasks. Includes the fundamentals of perception, approximation, neural network architectures, loss functions, and generalization. Addresses optimization methods including backpropagation, automatic differentiation, and regularization. Covers non-standard problems including auto-encoders and probabilistic models. Presents applications in machine learning/computer vision",
      time: "CS 228",
    },
    {
      title: "Machine Learning & Data Mining",
      description:
        "Provides a broad background in the design and use of data mining algorithms and tools. Includes clustering, classification, association rules mining, time series clustering, and Web mining",
      time: "CS 235",
    },
  ],
};
