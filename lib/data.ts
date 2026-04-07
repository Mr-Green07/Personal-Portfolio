// ─── Portfolio Data ────────────────────────────────────────────────────────────

export const personalInfo = {
  name: "Yuvraj Singh",
  title: "AI / ML Engineer",
  tagline: "Building intelligent systems for edge AI, representation learning & multimodal applications.",
  email: "yuvrajkumar5070@gmail.com",
  phone: "+91-6202897536",
  linkedin: "https://www.linkedin.com/in/yuvraj-singh-45o12/",
  github: "https://github.com/Mr-Green07",
  location: "Mohali, Punjab, India",
  summary:
    "Aspiring AI/ML engineer with hands-on experience in Python, deep learning, speech recognition, computer vision, and signal processing. Passionate about building intelligent systems for edge AI, representation learning, multimodal applications, and real-world model deployment.",
  availability: "Open to opportunities",
};

export const education = [
  {
    id: "cu",
    institution: "Chandigarh University",
    degree: "B.E. – Computer Science and Engineering",
    duration: "2023 – 2027",
    location: "Mohali, Punjab",
    grade: "CGPA: 7.0",
    coursework: [
      "Data Structures",
      "Computer Organization & Architecture",
      "Operating Systems",
      "Artificial Intelligence & Machine Learning",
      "Full Stack Development",
    ],
  },
];

export const projects = [
  {
    id: "speech-recognition",
    title: "Speech Recognition Model",
    shortDesc: "Converting spoken audio into text using ML & signal processing.",
    description:
      "A speech recognition system built in Python that converts spoken audio into text using audio preprocessing, feature extraction, and machine learning techniques. Applied signal processing for noise reduction, audio cleaning, and normalization to improve robustness across varied audio conditions.",
    tags: ["Python", "Machine Learning", "Audio Processing", "Signal Processing"],
    period: "Oct – Nov 2023",
    highlights: [
      "Audio preprocessing pipeline with noise reduction & normalization",
      "Feature extraction from raw audio signals",
      "Multi-sample evaluation and pipeline refinement",
      "Edge-oriented AI workflows for deployment efficiency",
    ],
    category: "ML / Audio",
    icon: "🎙️",
    color: "from-teal-500/20 to-cyan-500/10",
  },
  {
    id: "emotion-recognition",
    title: "Emotion Recognition Model",
    shortDesc: "Facial expression classification using CNN & deep learning.",
    description:
      "An emotion recognition model leveraging Convolutional Neural Networks (CNNs) in TensorFlow for facial expression classification. Applied representation learning concepts to learn discriminative visual features, trained on facial emotion datasets with NumPy and Pandas preprocessing.",
    tags: ["Python", "TensorFlow", "CNN", "Deep Learning", "Computer Vision"],
    period: "Jan – Apr 2024",
    highlights: [
      "CNN architecture for facial expression classification",
      "Representation learning for discriminative feature extraction",
      "Dataset preprocessing with NumPy & Pandas",
      "Multi-class emotion detection with high accuracy",
    ],
    category: "Computer Vision",
    icon: "😊",
    color: "from-purple-500/20 to-pink-500/10",
  },
  {
    id: "llm-assistant",
    title: "On-Device LLM Assistant",
    shortDesc: "Privacy-first, low-latency conversational AI running on edge devices.",
    description:
      "An on-device local chat processing LLM assistant built for real-time conversational AI with low-latency response generation on edge devices. Features context-aware NLP pipelines for multi-turn conversations and is optimized for privacy-preserving, resource-efficient inference without cloud dependency.",
    tags: ["Python", "NLP", "Deep Learning", "Edge AI", "LLM"],
    period: "July 2025 – Jan 2026",
    highlights: [
      "On-device inference with zero cloud dependency",
      "Multi-turn context-aware NLP pipelines",
      "Low-memory & resource-efficient optimization",
      "Federated learning & few-shot adaptation exploration",
    ],
    category: "Edge AI / NLP",
    icon: "🤖",
    color: "from-blue-500/20 to-indigo-500/10",
    featured: true,
  },
];

export const skills = {
  programming: [
    { name: "Python", level: 92 },
    { name: "C / C++", level: 72 },
    { name: "JavaScript", level: 68 },
    { name: "SQL", level: 70 },
    { name: "HTML / CSS", level: 75 },
    { name: "Rust", level: 65},
  ],
  aiml: [
    { name: "Deep Learning", level: 85 },
    { name: "CNNs", level: 82 },
    { name: "Machine Learning", level: 88 },
    { name: "Computer Vision", level: 80 },
    { name: "Speech Recognition", level: 78 },
    { name: "NLP", level: 75 },
    { name: "Edge AI", level: 72 },
    
  ],
  libraries: [
    { name: "TensorFlow", level: 83 },
    { name: "OpenCV", level: 78 },
    { name: "NumPy", level: 88 },
    { name: "Pandas", level: 85 },
    { name: "Flask", level: 70 },
    { name: "Git / GitHub", level: 80 },
    { name: "Power BI", level: 70},
  ],
  concepts: [
    "Signal Processing",
    "Audio Processing",
    "Image Processing",
    "Feature Extraction",
    "Model Evaluation",
    "Noise Handling",
    "Representation Learning",
    "Data Preprocessing",
    "Model Deployment",
    "AI Model Development",
  ],
};

export const certifications = [
  {
    id: "cloud-iit",
    title: "Cloud Computing Certificate",
    issuer: "IIT Kharagpur",
    icon: "☁️",
    color: "text-sky-400",
  },
  {
    id: "dl-deepai",
    title: "Neural Networks & Deep Learning",
    issuer: "DeepLearning.AI",
    icon: "🧠",
    color: "text-purple-400",
  },
  {
    id: "ai-ibm",
    title: "AI Engineering Professional Certificate",
    issuer: "IBM",
    icon: "🔵",
    color: "text-blue-400",
  },
  {
    id: "hackathon-hot",
    title: "Hackathon Participant",
    issuer: "House of Turing – Satellite Imagery, Retrieval & Detection",
    icon: "🏆",
    color: "text-yellow-400",
  },
];
