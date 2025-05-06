import { LabList } from "@/types";

export const LABS: Record<string, LabList[]> = {
  "CSE Department":[
    {
      header: "Foundational Machine Learning",
      description:
        "Researching core machine-learning algorithms including supervised, unsupervised, and reinforcement methods and applies them to various real-world problems and scenarios.",
      links: [
        {
          text: "R-LAIR",
          link: "https://rlair.cs.ucr.edu/",
        },
      ],
    },
    {
        header: "Natural Language Processing",
        description:
          "Research centers on developing trustworthy, controllable, and safe natural language processing systems capable of understanding, reasoning, and generating human-like text. Key focus areas include reducing hallucination and improving factual accuracy, ensuring fairness across social groups, detecting AI-generated content for responsible use, and aligning models for safe and useful output.",
        links: [
          {
            text: "UCR NLP & Text Mining Group",
            link: "https://yuedong.us/lab/lablist/",
          },
          {
            text: "PiLabs",
            link: "https://sites.google.com/ucr.edu/paea-lependu",
          },
        ],
    },
    {
      header: "Data Mining & Graph Analytics",
      description:
        "Focuses on scalable algorithms for discovering patterns in massive, heterogeneous data—graph mining, community detection, temporal data analysis, and building next-generation database systems for complex queries.",
      links: [
        {
          text: "MAD Lab",
          link: "https://www.cs.ucr.edu/~epapalex/group.html",
        },
        {
            text: "UCR Database Lab",
            link: "http://dblab.cs.ucr.edu/",
          },
      ],
    },
    {
      header: "Computer Vision",
      description:
        "Developing advanced computer-vision techniques for video understanding, biometric recognition, and multi-sensor fusion—combining deep learning with physics-based models to tackle problems in surveillance, animation, and autonomous navigation.",
      links: [
        {
          text: "VISLab",
          link: "https://vislab.ucr.edu/PEOPLE/BIR_BHANU/index.php",
        },
      ],
    },
    {
      header: "Robotics",
      description:
        "Exploring safe, real-time path-planning and collision-avoidance for single and multi-agent robotic systems, integrating motion-prediction, crowd simulation, and adaptive control for autonomous platforms.",
      links: [
        {
          text: "Motion Planning Lab",
          link: "https://motion-lab.github.io/",
        },
      ],
    },
  ],
  "ECE Department": [
    {
      header: "Robotics & Autonomous Systems",
      description:
        "Research focuses on developing robust and safe autonomous systems that operate in complex, dynamic environments. Projects include real-time motion planning, multi-agent coordination, formal verification for safety-critical tasks, and collaborative intelligence across human-robot teams. Methods span perception, control, planning, and trustworthy decision-making in robotics.",
      links: [
        {
          text: "ARCS Lab",
          link: "https://sites.google.com/view/arcs-lab",
        },
        {
            text: "Trustworthy Autonomous Systems Laboratory",
            link: "https://tasl.ucr.edu/",
        },
        {
            text: "Collaborative Intelligence Systems Lab",
            link: "https://cisl.ucr.edu/",
        },
      ],
    },
    {
      header: "Hardware-Aware AI",
      description:
        "Research centers on designing and optimizing custom hardware architectures for AI acceleration. This includes VLSI systems, FPGA-based prototyping, and energy-efficient processing for neural networks. Efforts emphasize hardware-software co-design, reliability-aware computing, and low-power architectures tailored for real-time AI inference.",
      links: [
        {
          text: "VLSI System Computing Lab (VSCLAB)",
          link: "https://vsclab.ece.ucr.edu/",
        },
      ],
    },
  ],
};
