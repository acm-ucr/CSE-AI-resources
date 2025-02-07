export const courses = [
  {
    header: "CS 105: Data Analysis Methods",
    description:
      "Introduces fundamental concepts and methods in data analysis and visualization essential to various data science tasks.",
    books: [
      "Introduction to the Practice of Statistics by Moore, McCabe, and Craig.",
      "Data Science from Scratch by Joel Grus.",
    ],
    platforms: [
      "LeetCode: Beginner data manipulation problems.",
      "GeeksforGeeks: For data structure and algorithm fundamentals.",
    ],
    prerequisites: [
      {
        name: "CS 009B: Data-Oriented Introduction to Computing II (Python)",
        indent: 0,
      },
    ],
  },
  {
    header: "CS 170: Introduction to Artificial Intelligence",
    description:
      "Covers fundamental AI topics, including search algorithms, machine learning, reasoning, and knowledge representation.",
    books: [
      "Artificial Intelligence: A Modern Approach by Stuart Russell and Peter Norvig.",
      "Deep Learning by Ian Goodfellow.",
    ],
    platforms: [
      "CS50 AI: A project-based Harvard course.",
      "AI Dungeon (fun problem-solving with AI applications).",
    ],
    prerequisites: [
      { name: "CS 100: Software Construction", indent: 0 },
      {
        name: "Prerequisites for CS 100: CS 010C: Introduction to Data Structures and Algorithms",
        indent: 1,
      },
      {
        name: "Prerequisites for CS 010C: CS 010B: Introduction to Computer Science II",
        indent: 2,
      },
      {
        name: "Prerequisites for CS 010B: CS 010A: Introduction to Computer Science I",
        indent: 2,
      },
    ],
  },
  {
    header: "CS 171: Introduction to Machine Learning and Data Mining",
    description:
      "Introduces machine learning algorithms and data mining techniques, focusing on supervised and unsupervised learning methods.",
    books: [
      "Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow by Aurélien Géron.",
      "Pattern Recognition and Machine Learning by Christopher Bishop.",
    ],
    platforms: [
      "Kaggle: For dataset-based ML problems.",
      "Machine Learning Mastery: Tutorials and practice datasets.",
    ],
    prerequisites: [
      { name: "CS 170: Introduction to Artificial Intelligence", indent: 0 },
    ],
  },
  {
    header: "CS 172: Introduction to Information Retrieval",
    description:
      "Focuses on the principles and methods of information retrieval, including indexing, querying, and evaluating search engines.",
    books: [
      "Introduction to Information Retrieval by Christopher Manning.",
      "Mining of Massive Datasets by Leskovec, Rajaraman, and Ullman.",
    ],
    platforms: [
      "ElasticSearch Labs: Practice building search engines.",
      "IR Datasets: For testing and evaluation.",
    ],
    prerequisites: [{ name: "CS 100: Software Construction", indent: 0 }],
  },
  {
    header: "CS 173: Introduction to Natural Language Processing (NLP)",
    description:
      "Explores computational techniques for processing and understanding human language, covering syntax, semantics, and applications in NLP.",
    books: [
      "Speech and Language Processing by Daniel Jurafsky and James H. Martin.",
      "Natural Language Processing with PyTorch by Delip Rao.",
    ],
    platforms: [
      "Hugging Face: For hands-on NLP tasks with transformers.",
      "Kaggle: NLP challenges (e.g., sentiment analysis, summarization).",
    ],
    prerequisites: [{ name: "CS 100: Software Construction", indent: 0 }],
  },
];
