import { Course } from "@/types";

export const courses: Record<string, Course[]> = {
  "Undergraduate Classes for AI": [
    {
      header: "CS 042: A Hitchhiker's Guide to Artificial Intelligence	",
      description:
        "An introduction to a breadth of topics within AI designed for non-engineering majors.",
      books: [],
      platforms: [],
      prerequisites: [
        {
          name: "None",
          indent: 0,
        },
      ],
    },
    {
      header: "CS 105: Data Analysis Methods",
      description:
        "Introduces fundamental concepts and methods in data analysis and visualization essential to various data science tasks.",
      books: [
        {
          text: "Introduction to the Practice of Statistics by Moore, McCabe, and Craig",
          link: "https://www.amazon.com/Introduction-Practice-Statistics-Moore/dp/1319153976",
        },
        {
          text: "Data Science from Scratch by Joel Grus",
          link: "https://www.oreilly.com/library/view/data-science-from/9781492041122/",
        },
      ],
      platforms: [
        {
          text: "LeetCode: Beginner data manipulation problems.",
          link: "https://leetcode.com/problemset/all/",
        },
        {
          text: "GeeksforGeeks: For data structure and algorithm fundamentals.",
          link: "https://www.geeksforgeeks.org/data-structures/",
        },
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
        {
          text: "Artificial Intelligence: A Modern Approach by Stuart Russell and Peter Norvig",
          link: "https://www.pearson.com/en-us/subject-catalog/p/artificial-intelligence-a-modern-approach/P200000003337",
        },
        {
          text: "Deep Learning by Ian Goodfellow",
          link: "https://www.deeplearningbook.org/",
        },
      ],
      platforms: [
        {
          text: "CS50 AI: A project-based Harvard course",
          link: "https://cs50.harvard.edu/ai/",
        },
        {
          text: "AI Dungeon (fun problem-solving with AI applications)",
          link: "https://play.aidungeon.io/",
        },
      ],
      prerequisites: [
        { name: "CS 100: Software Construction", indent: 0 },
        {
          name: "CS 010C: Introduction to Data Structures and Algorithms",
          indent: 1,
        },
        {
          name: "CS 010B: Introduction to Computer Science II",
          indent: 2,
        },
        {
          name: "CS 010A: Introduction to Computer Science I",
          indent: 2,
        },
      ],
    },
    {
      header: "CS 171: Introduction to Machine Learning and Data Mining",
      description:
        "Introduces machine learning algorithms and data mining techniques, focusing on supervised and unsupervised learning methods.",
      books: [
        {
          text: "Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow by Aurélien Géron",
          link: "https://www.oreilly.com/library/view/hands-on-machine-learning/9781098125974/",
        },
        {
          text: "Pattern Recognition and Machine Learning by Christopher Bishop",
          link: "https://www.springer.com/gp/book/9780387310732",
        },
      ],
      platforms: [
        {
          text: "Kaggle: For dataset-based ML problems",
          link: "https://www.kaggle.com/",
        },
        {
          text: "Machine Learning Mastery: Tutorials and practice datasets",
          link: "https://machinelearningmastery.com/",
        },
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
        {
          text: "Introduction to Information Retrieval by Christopher Manning",
          link: "https://nlp.stanford.edu/IR-book/",
        },
        {
          text: "Mining of Massive Datasets by Leskovec, Rajaraman, and Ullman",
          link: "http://infolab.stanford.edu/~ullman/mmds/book.pdf",
        },
      ],
      platforms: [
        {
          text: "ElasticSearch Labs: Practice building search engines",
          link: "https://www.elastic.co/training/free-courses",
        },
        {
          text: "IR Datasets: For testing and evaluation",
          link: "https://github.com/allenai/ir_datasets",
        },
      ],
      prerequisites: [{ name: "CS 100: Software Construction", indent: 0 }],
    },
    {
      header: "CS 173: Introduction to Natural Language Processing (NLP)",
      description:
        "Explores computational techniques for processing and understanding human language, covering syntax, semantics, and applications in NLP.",
      books: [
        {
          text: "Speech and Language Processing by Daniel Jurafsky and James H. Martin",
          link: "https://web.stanford.edu/~jurafsky/slp3/",
        },
        {
          text: "Natural Language Processing with PyTorch by Delip Rao",
          link: "https://www.oreilly.com/library/view/natural-language-processing/9781491978221/",
        },
      ],
      platforms: [
        {
          text: "Hugging Face: For hands-on NLP tasks with transformers",
          link: "https://huggingface.co/",
        },
        {
          text: "Kaggle: NLP challenges (e.g., sentiment analysis, summarization)",
          link: "https://www.kaggle.com/tags/nlp",
        },
      ],
      prerequisites: [{ name: "CS 100: Software Construction", indent: 0 }],
    },
  ],
  "Graduate Classes for AI": [
    {
      header: "CS 205: Artificial Intelligence",
      description:
        "Examines how knowledge representation, automated reasoning, and common-sense logic enable intelligent systems to reason and act autonomously.",
      books: [],
      platforms: [],
      prerequisites: [
        {
          name: "Graduate Standing OR CS 170: Introduction to Artificial Intelligence",
          indent: 0,
        },
      ],
    },
    {
      header: "CS 222: Natural Language Processing",
      description:
        "Introduces computational approaches for understanding, interpreting, and generating human language using both classical and deep learning methods.",
      books: [
        {
          text: "Dan Jurafsky and James Martin, Speech and Language Processing, 3rd ed",
          link: "https://web.stanford.edu/~jurafsky/slp3/ed3book_Jan25.pdf",
        },
        {
          text: "C.D. Manning & H. Schuetze, Foundations of Statistical Natural Language Processing",
          link: "https://www.amazon.com/Foundations-Statistical-Natural-Language-Processing/dp/0262133601",
        },
      ],
      platforms: [
        {
          text: "Stanford Speech and Language Processing",
          link: "http://web.stanford.edu/~jurafsky/slp3/",
        },
      ],
      prerequisites: [
        {
          name: "CS 224: Fundamentals of Machine Learning	or CS 228: Deep Learning or CS 229: Machine Learning",
          indent: 0,
        },
        {
          name: "Graduate Standing OR CS 171: Introduction to Machine Learning and Data Mining or CS 172: Introduction to Information Retrieval or CS 173: Introduction to NLP",
          indent: 0,
        },
      ],
    },
    {
      header: "CS 224: Foundations of Machine Learning",
      description:
        "Presents core concepts and techniques in probabilistic modeling, optimization, and evaluation essential for building effective machine learning systems.",
      books: [],
      platforms: [],
      prerequisites: [
        { name: "CS 100: Software Construction", indent: 0 },
        {
          name: "CS 010C: Introduction to Data Structures and Algorithms",
          indent: 1,
        },
        {
          name: "CS 010B: Introduction to Computer Science II",
          indent: 2,
        },
        {
          name: "CS 010A: Introduction to Computer Science I",
          indent: 2,
        },
      ],
    },
    {
      header: "CS 228: Deep Learning",
      description:
        "Explores the principles, architectures, and algorithms behind deep neural networks and their practical applications in AI and computer vision.",
      books: [],
      platforms: [],
      prerequisites: [
        { name: "CS 170: Introduction to Artificial Intelligence", indent: 0 },
      ],
    },
    {
      header: "CS 229: Machine Learning",
      description:
        "Covers fundamental methods in neural network design, optimization, and their applications to various machine learning and computer vision challenges.",
      books: [],
      platforms: [],
      prerequisites: [{ name: "CS 100: Software Construction", indent: 0 }],
    },
    {
      header: "CS 235: Data Mining",
      description:
        "Introduces methods for extracting meaningful patterns from data, including clustering, classification, association rules, and web mining.",
      books: [
        {
          text: "Data Mining: Concepts and Techniques, 4th ed.",
          link: "https://www.amazon.com/Data-Mining-Concepts-Techniques-Management/dp/0128117605",
        },
      ],
      platforms: [],
      prerequisites: [{ name: "CS 100: Software Construction", indent: 0 }],
    },
    {
      header: "CS 258: Introduction to Reinforcement Learning",
      description:
        "Offers a foundational understanding of reinforcement learning, covering decision-making processes, dynamic programming, and modern algorithmic strategies.",
      books: [],
      platforms: [],
      prerequisites: [{ name: "CS 100: Software Construction", indent: 0 }],
    },
  ],
};
