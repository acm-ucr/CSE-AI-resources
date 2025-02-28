import { resource } from "@/types";

export const RESOURCES: Record<string, resource[]> = {
  "Introduction to AI": [
    {
      header: "What is AI?",
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
      description: [
        "AI has evolved significantly over the past century, marked by several major breakthroughs and setbacks.",
        "The Birth of AI (1950s-1960s): The origins of AI trace back to Alan Turing, who proposed the famous Turing Test to determine if a machine could exhibit human-like intelligence. In 1956, John McCarthy coined the term 'Artificial Intelligence' at the Dartmouth Conference, setting the stage for early research in symbolic AI. Early AI models were based on rule-based programming, which involved manually coding a set of instructions for the AI to follow.",
        "AI Winters (1970s-1980s): As AI research advanced, expectations exceeded reality. Funding declined due to the failure of early AI systems to perform complex tasks, leading to multiple AI winters, where research slowed dramatically.",
        "Resurgence of AI (1990s-Present): The rise of machine learning and deep learning in the 1990s and 2000s brought AI back to the forefront. IBM’s Deep Blue defeated chess champion Garry Kasparov in 1997, and Google’s AlphaGo shocked the world by beating a Go master in 2016. Modern AI relies on neural networks and massive data processing, enabling applications such as autonomous vehicles and natural language processing.",
      ],
      reading: [
        {
          text: "A Short History of AI - Harvard",
          link: "https://hbsp.harvard.edu/product/CMR711-PDF-ENG",
        },
      ],
      video: [
        {
          text: "History of AI (Oxford Martin School)",
          link: "https://youtu.be/mSd9nmPM7Vg?si=RRfJ9j2snPT-EL3h",
        },
      ],
    },
    {
      header: "Real World Applications",
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
      description: [
        "AI models depend heavily on data, which serves as their foundation for learning patterns and making predictions. Without high-quality, diverse, and representative data, AI models can be inaccurate, biased, or ineffective.",
        "Data can be structured (like databases of numerical and categorical values) or unstructured (such as images, videos, and text).",
        "The quality of data is more important than quantity—poor data can lead to inaccurate predictions, biased outcomes, or even harmful real-world consequences.",
        "The process of preparing data for AI involves several critical steps:",
        "Data Collection – Gathering relevant information from sources like sensors, online databases, or manually labeled datasets.",
        "Data Cleaning – Removing inconsistencies, duplicate values, or incorrect entries that could skew results.",
        "Data Normalization – Standardizing the range of values so that different attributes contribute fairly to model training.",
        "Feature Engineering – Selecting the most relevant pieces of data to improve model performance.",
        "As AI continues to evolve, there is increasing focus on privacy-preserving AI, where techniques like federated learning allow models to be trained without sharing raw data, addressing ethical and security concerns.",
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
      header: "Classical AI Algorithms",
      description: [
        "Before modern deep learning, AI relied on classical algorithms that used logic-based or statistical techniques to solve problems. Many of these algorithms are still widely used in AI applications today.",
        "Search Algorithms – Techniques like A* (A-star) algorithm and Dijkstra’s algorithm are used in pathfinding, robotics, and navigation systems (e.g., Google Maps).",
        "Optimization Algorithms – Algorithms such as Genetic Algorithms (GA) and Simulated Annealing help find the best solutions in complex problems, such as in logistics and game AI.",
        "Expert Systems – Rule-based AI models that store human knowledge in structured formats to assist in decision-making (e.g., medical diagnosis systems like MYCIN).",
        "Classical AI approaches laid the foundation for modern machine learning techniques, proving that even without learning from data, AI could still solve complex problems efficiently.",
      ],
      reading: [
        {
          text: "Artificial Intelligence (AI) Algorithms",
          link: "https://www.geeksforgeeks.org/ai-algorithms/",
        },
      ],
      video: [
        {
          text: "Introduction to AI Algorithms (MIT)",
          link: "https://ocw.mit.edu/courses/6-034-artificial-intelligence-fall-2010/resources/lecture-1-introduction-and-scope/",
        },
      ],
    },
    {
      header: "Supervised vs Unsupervised",
      description: [
        "Machine learning models generally fall into two main categories: Supervised Learning and Unsupervised Learning. Each approach has unique advantages and use cases.",
        "Supervised Learning – The model is trained on a dataset that contains both inputs and labeled outputs. This allows the AI to learn a direct mapping between inputs and their correct classifications.",
        "Examples: Spam detection, medical diagnostics.",
        "Unsupervised Learning – The AI explores data without explicit labels, discovering hidden patterns or groupings.",
        "Examples: Customer segmentation, anomaly detection.",
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
      description: [
        "Generative AI (GenAI) is a branch of artificial intelligence that focuses on creating new content—whether it be text, images, audio, or even entire video sequences.",
        "How Generative AI Works: Generative AI models are based on deep learning architectures, such as transformers, variational autoencoders (VAEs), and generative adversarial networks (GANs).",
        "Notable Generative AI Models: ChatGPT, DALL·E, Stable Diffusion, Claude, MusicLM.",
        "Applications: Content creation, visual arts, entertainment & gaming, healthcare, software development.",
        "Challenges and Ethical Concerns: Deepfakes, intellectual property issues, bias in AI outputs.",
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

      description: [
        "AI is reshaping the job market by automating repetitive and labor-intensive tasks, enhancing productivity and efficiency, but also raising concerns about job displacement and economic inequality.",
        "Industries Affected by AI Automation: Manufacturing, customer service, healthcare.",
        "AI is also creating new jobs, such as AI ethics officers, machine learning engineers, and AI trainers.",
        "The key challenge is reskilling workers to adapt to AI-driven roles.",
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
      description: [
        "AI systems rely on vast amounts of personal data, raising concerns about mass surveillance, data misuse, and lack of user consent.",
        "Generative AI and New Privacy Challenges: Generative AI models can unintentionally leak sensitive or personally identifiable information (PII).",
        "Regulating AI and Strengthening Data Protection: GDPR, CCPA, and the proposed EU AI Act.",
        "Privacy-preserving techniques like federated learning and differential privacy.",
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
      description: [
        "AI systems learn from human-generated data, making them vulnerable to biases that exist in society. AI bias has been documented in areas like hiring, criminal justice, and loan approvals.",
        "Why Bias in AI is a Problem: Examples include biased hiring algorithms and facial recognition struggles with darker skin tones.",
        "Mitigating AI bias: Using fairness-aware AI models, diverse training datasets, and bias-detection techniques.",
        "Ethical AI development requires constant monitoring and regulation.",
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
