import { resource } from "@/types";
import affect from "@/public/resources/affect.webp";
import ai from "@/public/resources/ai.webp";
import apps from "@/public/resources/apps.webp";
import bias from "@/public/resources/bias.webp";
import data from "@/public/resources/data.webp";
import genai from "@/public/resources/genai.webp";
import privacy from "@/public/resources/privacy.webp";
import source from "@/public/resources/source.webp";
import type from "@/public/resources/type.webp";

export const RESOURCES: Record<string, resource[]> = {
  "Introduction to AI": [
    {
      header: "What is AI?",
      image: ai,
      description: [
        "Artificial Intelligence (AI) is a branch of computer science focused on building machines and systems that can carry out tasks normally requiring human intelligence. These include understanding speech, identifying images, making decisions, and even creating content like music, art, or writing. What sets AI apart is its ability to learn from data and improve over time, rather than relying only on fixed instructions.",
        "The core goal of AI is to mimic human thinking. While early AI systems were based on rigid rules and logic, modern AI often uses machine learning—an approach that lets systems learn patterns and make predictions from large datasets. This makes AI more adaptable, accurate, and effective in handling real-world challenges.",
        "AI plays a role in many parts of everyday life. From using Google Search and receiving Netflix recommendations to talking to assistants like Siri or Alexa, AI powers many tools we rely on. For engineers and technical learners, AI includes a range of methods—from rule-based systems and decision trees to advanced deep learning networks with millions of parameters. For non-engineers, it’s helpful to see AI as a way for computers to 'learn from experience' and assist in fields like healthcare, education, transportation, and entertainment.",
      ],
      reading: [
        {
          text: "Artificial Intelligence - Nvidia",
          link: "https://www.nvidia.com/en-us/glossary/artificial-intelligence/",
        },
        {
          text: "What is Artificial Intelligence? - IBM",
          link: "https://www.ibm.com/topics/artificial-intelligence",
        },
        {
          text: "Google AI Essentials Course",
          link: "https://grow.google/ai-essentials/",
        },
      ],
      video: [
        {
          text: "What Is an AI Anyway? - TED",
          link: "https://www.youtube.com/watch?v=KKNCiRWd_j0",
        },
        {
          text: "What is AI? - Simplilearn",
          link: "https://youtu.be/ad79nYk2keg?si=xIoMUVUg1yJgDub1",
        },
        {
          text: "AI, Machine Learning, Deep Learning and Generative AI Explained - IBM",
          link: "https://youtu.be/qYNweeDHiyU?si=-7wWMU_K2gPR1M2z",
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
        "In healthcare, AI is enhancing diagnostics by analyzing medical images, identifying diseases, and supporting doctors in clinical decisions. It’s also accelerating drug discovery, leading to faster development of new treatments.",
        "In finance, AI drives high-frequency trading and strengthens fraud detection by monitoring transactions in real time to identify suspicious behavior.",
        "Autonomous vehicles—from companies like Tesla and Waymo—rely on AI-powered vision systems for safe navigation. These systems boost transportation efficiency and help reduce accidents.",
        "In the creative world, AI tools like OpenAI’s DALL·E and ChatGPT are revolutionizing art, music, and writing. By extending human creativity, they open up entirely new forms of artistic expression.",
      ],
      reading: [
        {
          text: "AI in the Real World - MIT Sloan",
          link: "https://mitsloan.mit.edu/ideas-made-to-matter/topics/artificial-intelligence",
        },
        {
          text: "OpenAI Academy",
          link: "https://academy.openai.com",
        },
        {
          text: "Real world GenAI use cases - Google",
          link: "https://cloud.google.com/transform/101-real-world-generative-ai-use-cases-from-industry-leaders",
        },
      ],
      video: [
        {
          text: "Will AI Be Critical to Your Job and Everyday Life? - IBM",
          link: "https://www.youtube.com/watch?v=c9LQUI3VMJ8",
        },
        {
          text: "How AI Could Empower Any Business? - Andrew Ng",
          link: "https://youtu.be/reUZRyXxUs4?si=e-WChBcLTV9erhfD",
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
          text: "What is Big Data? - Google",
          link: "https://cloud.google.com/learn/what-is-big-data",
        },
        {
          text: "The Importance of Data Quality - HuggingFace",
          link: "https://huggingface.co/blog/ethics-soc-6",
        },
        {
          text: " AI Needs Data More Than Data Needs AI - Forbes",
          link: "https://www.forbes.com/councils/forbestechcouncil/2023/10/05/ai-needs-data-more-than-data-needs-ai/",
        },
      ],
      video: [
        {
          text: "Big data rules for AI - IBM",
          link: "https://www.youtube.com/watch?v=AtXqpveCWQU",
        },
        {
          text: "Big Data in 5 Min - Simplilearn",
          link: "https://youtu.be/bAyrObl7TYE?si=xbVYAcDzeY8bx11H",
        },
      ],
    },
    {
      header: "Supervised vs Unsupervised",
      image: type,
      description: [
        "Machine learning models are usually grouped into two main types: supervised and unsupervised learning. Each has its own strengths and use cases.",
        "Supervised Learning:\n- The AI is trained using data that already has correct answers (labels).\n- It's like teaching with flashcards—AI learns to match inputs to the right outputs.\n- Commonly used for tasks like email spam detection or image classification.",
        "Unsupervised Learning:\n- The AI works with data that has no labels or correct answers.\n- It looks for patterns or groups on its own.\n- Useful for things like customer segmentation or finding similar songs or movies.",
        "Semi-supervised Learning:\n- A mix of both approaches: some data is labeled, some isn’t.\n- Helps reduce the need for a lot of labeled data, which can be expensive or hard to get.\n- Often used when there’s a small amount of labeled data but lots of unlabeled data available.",
      ],
      reading: [
        {
          text: "What is Supervised Learning - Google",
          link: "https://cloud.google.com/discover/what-is-supervised-learning",
        },
        {
          text: "What is Unsupervised Learning - Google",
          link: "https://cloud.google.com/discover/what-is-unsupervised-learning",
        },
        {
          text: "Supervised vs. Unsupervised Learning - Google",
          link: "https://cloud.google.com/discover/what-is-unsupervised-learning",
        },
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
        {
          text: "Neural Networks Series - 3B1B",
          link: "https://www.youtube.com/watch?v=aircAruvnKk&list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi",
        },
        {
          text: "Supervised & Unsupervised Machine Learning - Steve Brunton",
          link: "https://youtu.be/wvODQqb3D_8?si=K5HCXr8hloU4jALQ",
        },
      ],
    },
    {
      header: "Generative AI",
      image: genai,
      description: [
        "Generative AI is a type of artificial intelligence that creates new content—like text, images, music, or video. It learns patterns from large amounts of data and uses that knowledge to produce original results. Common techniques include transformers (great for language), VAEs (used for structured content like faces), and GANs (best for realistic images and videos).",
        "Popular generative AI tools include ChatGPT for writing and conversation, DALL·E and Stable Diffusion for turning text into images, Claude for safe and thoughtful responses, and MusicLM for generating music from written prompts. These tools are being used in fields like art, business, and entertainment.",
        "Generative AI also comes with challenges. Deepfakes and misinformation are concerns as fake media becomes harder to detect. There are also questions about ownership and copyright, and biases in training data can lead to unfair results. Responsible use is key as the technology continues to grow.",
      ],
      reading: [
        {
          text: "What is Generative AI? - NVIDIA",
          link: "https://www.nvidia.com/en-us/glossary/generative-ai/",
        },
        {
          text: "Generative Models - OpenAI",
          link: "https://openai.com/index/generative-models/ ",
        },
      ],
      video: [
        {
          text: "How Generative AI Works (MIT)",
          link: "https://www.youtube.com/watch?v=D-pLXkS21fM",
        },
        {
          text: "Let's build GPT - Andrej Karpathy",
          link: "https://youtu.be/kCc8FmEb1nY?si=J3TBggo7p_Q5HR8S",
        },
      ],
    },
    {
      header: "Open source VS Closed source",
      image: source,
      description: [
        "AI development can take two main paths: open-source or closed-source, each with its own benefits and trade-offs. These approaches affect how AI is built, shared, and used across the world.",
        "Open-source AI is like a community project. Tools such as TensorFlow, PyTorch, and Hugging Face are shared freely online, allowing people around the globe to use them, learn from them, and build new ideas. This open and collaborative environment helps AI advance quickly and makes it accessible to students, researchers, and startups alike.", 
        "Closed-source AI is developed privately by companies like OpenAI, Google, and DeepMind. Their models—like GPT-4, Gemini, and AlphaFold—are powerful, but the code and data behind them are not shared publicly. This helps keep the technology secure and controlled but limits transparency and outside input.",
        "There are also ethical concerns. Open-source AI supports learning and innovation, but if misused, it could lead to harmful outcomes. Closed-source AI offers more control and safety, but can raise questions about fairness, accountability, and whether the public has enough insight into how these systems make decisions.",
      ],
      reading: [
        {
          text: "Why open source is critical to the future of AI - RedHat",
          link: "https://www.redhat.com/en/blog/why-open-source-critical-future-ai#",
        },
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
        "AI is transforming the job market by taking over repetitive, time-consuming tasks. This boosts productivity and efficiency but also raises concerns about job loss and growing inequality.",
        "Industries most affected by AI automation include:\n- Manufacturing: Automation in factories and production lines.\n- Customer service: Chatbots and AI agents handling routine inquiries.\n- Healthcare: AI tools assisting with diagnostics, scheduling, and patient records.",
        "At the same time, AI is creating new career opportunities, such as:\n- AI ethics officers: Ensuring responsible and fair use of AI.\n- Machine learning engineers: Building and improving AI systems.\n- AI trainers: Teaching AI systems how to understand human input.",
        "The key challenge is reskilling workers to adapt to these new AI-driven roles and ensuring no one is left behind in the transition.",
      ],
      reading: [
        {
          text: "AI and the Future of Work - World Economic Forum",
          link: "https://www.weforum.org/stories/2024/02/artificial-intelligence-ai-jobs-future/",
        },
        {
          text: "Claude AI for Work - Anthropic",
          link: "https://www.anthropic.com/learn/claude-for-work",
        },
        {
          text: "The Enviormental Impacts of AI - HuggingFace",
          link: "https://huggingface.co/blog/sasha/ai-environment-primer",
        },
      ],
      video: [
        {
          text: "How AI Could Save (Not Destroy) Education - Sal Khan",
          link: "https://www.pbs.org/video/future-jobs-impacts-ai-green-transition-f7borm/",
        },
        {
          text: "How AI is Changing Jobs - PBS",
          link: "https://youtu.be/hJP5GqnTrNo?si=4JCnKKYiYAqCs4fr",
        },
      ],
    },
    {
      header: "Privacy Concerns",
      image: privacy,
      description: [
        "AI systems often rely on large amounts of personal data to function effectively. This raises major privacy concerns, including the risk of:\n- Mass surveillance\n- Data misuse\n- Lack of user consent",
        "Generative AI adds new privacy risks because it can accidentally reveal private or sensitive information from the data it was trained on. This includes things like names, addresses, or other personally identifiable information (PII).",
        "To help protect users, new regulations like GDPR (Europe), CCPA (California), and the proposed EU AI Act are being introduced. These aim to strengthen data protection and promote ethical use of AI.",
        "To improve privacy while still using powerful AI, researchers are exploring safer methods such as:\n- Federated learning: A technique where AI models are trained across multiple devices or servers locally, so raw personal data never leaves the user's device.\n- Differential privacy: Adds randomness to the data or model outputs to protect individual identities while still learning useful patterns.",
      ],
      reading: [
        {
          text: "AI and Privacy Concerns - Harvard Business Review",
          link: "https://www.library.hbs.edu/working-knowledge/navigating-consumer-data-privacy-in-an-ai-world",
        },
        {
          text: "Designing for privacy in an AI world - Google",
          link: "https://blog.google/technology/safety-security/designing-for-privacy-in-an-ai-world/",
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
