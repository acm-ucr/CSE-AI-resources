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
        "Deep learning gains momentum across academia and industry, fueled by massive datasets and powerful GPU hardware.",
        "AI applications expand across vision, language, and games, with systems beginning to outperform humans in specific domains.",
        "2016: DeepMind’s AlphaGo defeats Lee Sedol, marking a landmark achievement in reinforcement learning and planning.",
        "2017: Transformer architecture introduced (Vaswani et al.), revolutionizing natural language processing with attention mechanisms.",
        "2018–2019: Emergence of large pre-trained language models (e.g., BERT, GPT-2) enables transfer learning and drives NLP performance to new heights.",
        "Deep learning becomes the backbone of modern AI, powering tools like image search, recommendation systems, and virtual assistants.",
      ],
      time: "2010s",
    },
    {
      title: "Generative AI Boom",
      description: [
        "2020: OpenAI releases GPT-3, a 175B parameter language model, showcasing unprecedented capabilities in few-shot learning and natural language understanding.",
        "Scaling laws research reveals that performance improves predictably with model size, data, and compute—fueling the trend of ever-larger models.",
        "2021–2022: Explosion of multimodal and generative AI, with models like DALL·E, CLIP, and Stable Diffusion enabling image and text understanding/generation.",
        "2022: ChatGPT launches, bringing conversational AI to the public and accelerating mainstream adoption of generative models.",
        "Rapid rise of open-source alternatives (e.g., LLaMA, Mistral, Falcon), democratizing access to powerful models.",
        "2023: GPT-4 and Claude push boundaries in reasoning, coding, and multimodal capabilities, marking a leap in model alignment and safety.",
        "2024: OpenAI introduces o1, a reasoning-focused model, capable of complex problem-solving in science, coding, and mathematics by spending more time “thinking” before responding.",
        "2025 and beyond: Rise of autonomous AI agents, capable of taking actions, using tools, and pursuing long-term goals—shifting from assistants to collaborators.",
      ],
      time: "2020s",
    },
  ],
};
