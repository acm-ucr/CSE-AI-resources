import { TimelineItemType } from "@/types";

export const history: Record<string, TimelineItemType[]> = {
  "": [
    {
      title: "The Birth of AI",
      description: [
        "1950: Alan Turing publishes 'Computing Machinery and Intelligence', proposing the Turing Test to evaluate a machine's ability to exhibit intelligent behavior.",
        "1956: The Dartmouth Summer Research Project on Artificial Intelligence, organized by John McCarthy, Marvin Minsky, Claude Shannon, and Nathan Rochester, marks the official birth of AI as a field. The term 'Artificial Intelligence' is coined.",
      ],
      time: "1950s",
    },
    {
      title: "Struggles and Discoveries",
      description: [
        "1957: Frank Rosenblatt invents the Perceptron, an early neural network model capable of learning simple patterns, and widely believed to be the future of AI.",
        "1958-1969: AI research largely focuses on symbolic reasoning and rule-based expert systems showing success on toy problems but failed to generalize.",
        "1969: Minsky and Papert publish 'Perceptrons', highlighting the limitations of single-layer neural networks and dampening enthusiasm for connectionist models.",
      ],
      time: "1960s",
    },
    {
      title: "Setbacks and Skepticism",
      description: [
        "1970s: AI progress slows due to a mismatch between ambitious promises and real-world performance. Funding agencies reduce support—marking the first AI Winter.",
        "Symbolic systems struggle with real-world uncertainty, leading to doubts about AI's feasibility.",
      ],
      time: "1970s",
    },
    {
      title: "Revival and Expert Systems",
      description: [
        "1980: The rise of 'expert systems' like XCON (used by Digital Equipment Corporation) revives commercial interest in AI. These systems encode human expert knowledge as rules.",
        "1986: Rumelhart, Hinton, and Williams popularize the backpropagation algorithm, enabling effective training of multi-layer neural networks and renewing interest in connectionism.",
        "1987–1989: The second AI Winter begins due to limitations of expert systems (high maintenance, brittle rules) and the high cost of specialized AI hardware.",
      ],
      time: "1980s",
    },
    {
      title: "Neural Networks Resurface",
      description: [
        "1989: Yann LeCun introduces the first Convolutional Neural Network (CNN), LeNet-5, which successfully performs digit recognition and inspires future vision systems.",
        "1990s: A shift toward statistical learning methods begins, paving the way for support vector machines and probabilistic models.",
        "1997: IBM’s Deep Blue defeats chess grandmaster Garry Kasparov, showcasing the strength of brute-force search and domain-specific AI systems.",
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
    {
      title: "Rise of Deep Learning",
      description: [
        "2012: AlexNet wins ImageNet, showcasing the power of deep convolutional neural networks and igniting rapid progress in deep learning.",
        "2014–2015: Advances in sequence models (LSTMs, GRUs) and the introduction of GANs and ResNet lead to breakthroughs in speech recognition, generative modeling, and deep architectures.",
      ],
      time: "2010s",
    },
    {
      title: "Deep Learning Era",
      description: [
        "Deep learning becomes the core of modern AI, driven by large datasets and powerful GPUs.",
        "AI starts outperforming humans in specific tasks like image recognition, language processing, and games.",
        "Key breakthroughs like AlphaGo and the Transformer model pave the way for smarter language systems.",
        "Deep learning powers everyday tools such as virtual assistants, search engines, and recommendations.",
      ],
      time: "2015s",
    },
    {
      title: "Generative AI Boom",
      description: [
        "Generative AI takes off with powerful models like GPT-3, capable of writing, answering questions, and more.",
        "Multimodal tools like DALL·E and ChatGPT bring AI into the mainstream for text and image generation.",
        "Open-source models expand access to advanced AI, fueling innovation and broader adoption.",
        "By mid-decade, AI evolves into more capable agents—able to reason, take actions, and assist in complex tasks.",
      ],
      time: "2020s",
    },
  ],
};
