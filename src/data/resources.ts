import { resource } from "@/types";
import affect from "@/public/resources/affect.png";
import ai from "@/public/resources/ai.png";
import apps from "@/public/resources/apps.png";
import bias from "@/public/resources/bias.png";
import data from "@/public/resources/data.png";
import genai from "@/public/resources/genai.png";
import privacy from "@/public/resources/privacy.png";
import source from "@/public/resources/source.png";
import type from "@/public/resources/type.png";

export const RESOURCES: Record<string, resource[]> = {
  "Introduction to AI": [
    {
      header: "What is AI?",
      image: ai,
      description: [
        "Artificial Intelligence (AI) refers to the ability of machines to perform tasks that typically require human intelligence. These tasks include recognizing speech, making decisions, solving problems, and even generating human-like text or images. AI is a broad discipline encompassing several approaches, from traditional rule-based systems to modern machine learning models.",
        "The core idea of AI is to enable computers to 'think' or 'learn' in a way that mimics human cognition. Some AI systems rely on predefined rules and logic, while others learn from vast amounts of data through statistical methods. AI can be found in everyday applications like Google Search, voice assistants (Siri, Alexa), and recommendation systems on Netflix or Spotify.",
      ],
      reading: [
        {
          text: "IBM - What is Artificial Intelligence?",
          link: "https://www.ibm.com/topics/artificial-intelligence",
        },
      ],
      video: [
        {
          text: "Artificial Intelligence Explained (TED-Ed)",
          link: "https://www.youtube.com/watch?v=2ePf9rue1Ao",
        },
      ],
    },
    {
      header: "Brief History of AI",
      description: ["json"],
    },
    {
      header: "Real World Applications",
      image: apps,
      description: [
        "AI is revolutionizing multiple industries, reshaping the way humans interact with technology.",
        "Healthcare: AI-powered diagnostic tools analyze medical images, detect diseases, and assist doctors in decision-making. AI-driven drug discovery accelerates the development of new medicines.",
        "Finance: AI-powered trading algorithms make high-frequency stock trades, while AI fraud detection systems analyze transactions in real-time to detect suspicious activities.",
        "Autonomous Vehicles: Self-driving cars from Tesla, Waymo, and other companies rely on AI-powered vision systems to navigate safely. AI in transportation improves efficiency and reduces accidents.",
        "Creative Fields: AI-generated art, music, and writing (e.g., OpenAI’s DALL·E and ChatGPT) push the boundaries of creativity, aiding human artists in unique ways.",
      ],
      reading: [
        {
          text: "MIT Sloan - AI in the Real World",
          link: "https://mitsloan.mit.edu/ideas-made-to-matter/topics/artificial-intelligence",
        },
      ],
      video: [
        {
          text: "Will AI Be Critical to Your Job and Everyday Life? (IBM)",
          link: "https://www.youtube.com/watch?v=c9LQUI3VMJ8",
        },
      ],
    },
  ],

  "General AI Concepts": [
    {
      header: "Importance of Data",
      image: data,
      description: [
        "AI models depend heavily on data, which serves as their foundation for learning patterns and making predictions. Without high-quality, diverse, and representative data, AI models can be inaccurate, biased, or ineffective. Data can be structured (like databases of numerical and categorical values) or unstructured (such as images, videos, and text).",
        "The quality of data is more important than quantity—poor data can lead to inaccurate predictions, biased outcomes, or even harmful real-world consequences. The process of preparing data for AI involves several critical steps:",
        "1. Data Collection – Gathering relevant information from sources like sensors, online databases, or manually labeled datasets.",
        "2. Data Cleaning – Removing inconsistencies, duplicate values, or incorrect entries that could skew results.",
        "3. Data Normalization – Standardizing the range of values so that different attributes contribute fairly to model training.",
        "4. Feature Engineering – Selecting the most relevant pieces of data to improve model performance.",
      ],
      reading: [
        {
          text: " AI Needs Data More Than Data Needs AI",
          link: "https://www.forbes.com/councils/forbestechcouncil/2023/10/05/ai-needs-data-more-than-data-needs-ai/",
        },
      ],
      video: [
        {
          text: "Big data rules for AI - IBM",
          link: "https://www.youtube.com/watch?v=AtXqpveCWQU",
        },
      ],
    },
    {
      header: "Supervised vs Unsupervised",
      image: type,
      description: [
        "Machine learning models generally fall into two main categories: Supervised Learning and Unsupervised Learning. Each approach has unique advantages and use cases.",
        "Supervised Learning – The model is trained on a dataset that contains both inputs and labeled outputs. This allows the AI to learn a direct mapping between inputs and their correct classifications.",
        "Unsupervised Learning – The AI explores data without explicit labels, discovering hidden patterns or groupings.",
        "Semi-supervised Learning – Leverages both labeled and unlabeled data, offering a cost-effective approach where labeling large datasets is expensive or impractical.",
      ],
      reading: [
        {
          text: "Supervised vs. Unsupervised Learning - IBM",
          link: "https://www.ibm.com/blog/supervised-vs-unsupervised-learning/",
        },
      ],
      video: [
        {
          text: "Supervised vs. Unsupervised Learning - IBM",
          link: "https://www.youtube.com/watch?v=W01tIRP_Rqs",
        },
      ],
    },
    {
      header: "Generative AI",
      image: genai,
      description: [
        "Generative AI (GenAI) is a branch of artificial intelligence that focuses on creating new content—whether it be text, images, audio, or even entire video sequences. Unlike traditional AI models that analyze or predict based on existing data, generative models learn patterns from large datasets and use that knowledge to produce original outputs. These models are built on advanced deep learning architectures, including transformers, variational autoencoders (VAEs), and generative adversarial networks (GANs). Each architecture serves different purposes—transformers are especially effective for language and sequence tasks, VAEs are useful for structured generation like faces, and GANs excel at generating highly realistic images and videos.",
        "Some of the most notable examples of generative AI include ChatGPT, which generates human-like text responses; DALL·E and Stable Diffusion, which create images from textual descriptions; Claude, which focuses on thoughtful and safe language generation; and MusicLM, which composes music from written prompts. These tools are being widely applied across a variety of industries.",
        "However, despite its potential, generative AI poses significant challenges. Deepfakes and misinformation are growing concerns as AI-generated media becomes increasingly convincing. Intellectual property issues are emerging as artists and developers question the originality and ownership of AI-created content. Additionally, biases present in training data can lead to biased outputs, raising ethical concerns about fairness and representation. As the technology evolves, addressing these issues will be critical for the responsible use of generative AI.",
      ],
      reading: [
        {
          text: "What is Generative AI? - NVIDIA",
          link: "https://www.nvidia.com/en-us/glossary/generative-ai/",
        },
      ],
      video: [
        {
          text: "How Generative AI Works (MIT)",
          link: "https://www.youtube.com/watch?v=D-pLXkS21fM",
        },
      ],
    },
    {
      header: "Open source VS Closed source",
      image: source,
      description: [
        "AI development can follow either open-source or closed-source approaches, each with distinct advantages and challenges.",
        "Open-Source AI: Frameworks like TensorFlow, PyTorch, and Hugging Face allow developers worldwide to contribute, improve, and use AI tools for free.",
        "Closed-Source AI: Proprietary AI models like OpenAI’s GPT-4, Google Gemini, and DeepMind’s AlphaFold have source code and training data kept private.",
        "Ethical Considerations: Open-source AI fosters innovation but may be used maliciously, while closed-source AI ensures controlled deployment but limits transparency.",
      ],
      reading: [
        {
          text: "Open vs Closed Source AI - Medium",
          link: "https://medium.com/%40paul.ekwere/open-source-vs-closed-source-ai-foundation-models-fd6829864fa5",
        },
      ],
      video: [
        {
          text: "Open vs Closed Source AI (Stanford)",
          link: "https://www.youtube.com/watch?v=ZfYrJlfLs1Q",
        },
      ],
    },
  ],
  "Social and Ethical Impact of AI": [
    {
      header: "How AI Effects Jobs and Society",
      image: affect,
      description: [
        "AI is reshaping the job market by automating repetitive and labor-intensive tasks, enhancing productivity and efficiency, but also raising concerns about job displacement and economic inequality.",
        "Industries Affected by AI Automation: Manufacturing, customer service, healthcare.",
        "AI is also creating new jobs, such as AI ethics officers, machine learning engineers, and AI trainers. The key challenge is reskilling workers to adapt to AI-driven roles.",
      ],
      reading: [
        {
          text: "AI and the Future of Work - World Economic Forum",
          link: "https://www.weforum.org/stories/2024/02/artificial-intelligence-ai-jobs-future/",
        },
      ],
      video: [
        {
          text: " How AI is Changing Jobs (PBS)",
          link: "https://www.pbs.org/video/future-jobs-impacts-ai-green-transition-f7borm/",
        },
      ],
    },
    {
      header: "Privacy Concerns",
      image: privacy,
      description: [
        "AI systems rely on vast amounts of personal data, raising concerns about mass surveillance, data misuse, and lack of user consent.",
        "Generative AI introduces new privacy challenges, as these models can unintentionally reveal sensitive or personally identifiable information (PII) from the data they were trained on. This has raised concerns about how such data is handled and protected. In response, regulations like GDPR, CCPA, and the proposed EU AI Act aim to strengthen data protection and ensure ethical AI development. To address these concerns, techniques such as federated learning and differential privacy are being developed to help preserve user privacy while still enabling powerful AI systems.",
      ],
      reading: [
        {
          text: "AI and Privacy Concerns - Harvard Business Review",
          link: "https://www.library.hbs.edu/working-knowledge/navigating-consumer-data-privacy-in-an-ai-world",
        },
      ],
      video: [
        {
          text: "AI and Privacy (The Guardian)",
          link: "https://youtu.be/bWWf4AHfzgM?si=BXeqU35NRNg5zjr2",
        },
      ],
    },
    {
      header: "Bias and Fairness in AI",
      image: bias,
      description: [
        "AI systems learn from human-generated data, making them vulnerable to biases that exist in society. AI bias has been documented in areas like hiring, criminal justice, and loan approvals.",
        "These technologies can reflect and even amplify existing societal biases, leading to unfair outcomes in areas like healthcare, education, finance, and beyond. Addressing these concerns involves using diverse and representative training data, applying fairness-aware algorithms, and continuously monitoring AI behavior for unintended discrimination. ",
        "This is especially important in the age of generative AI and large language models (LLMs), which learn from vast datasets and can unknowingly reproduce harmful stereotypes. Ensuring fairness in AI requires a thoughtful, ongoing commitment to ethical design, testing, and regulation.",
      ],
      reading: [
        {
          text: "AI Bias and Fairness - MIT Technology Review",
          link: "https://www.technologyreview.com/2019/02/04/137602/this-is-how-ai-bias-really-happensand-why-its-so-hard-to-fix/",
        },
      ],
      video: [
        {
          text: "Bias in AI (Google)",
          link: "https://www.youtube.com/watch?v=59bMh59JQDo",
        },
      ],
    },
  ],
};
