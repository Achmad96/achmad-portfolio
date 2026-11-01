export type ProjectCategory = "all" | "ai" | "web" | "community" | "systems";

export type ProjectType = {
  id: string;
  title: string;
  role?: string;
  company?: string;
  description: string;
  highlight: string;
  tech: string[];
  category: "ai" | "web" | "community" | "systems";
  categoryLabel: string;
  url?: string;
  githubUrl?: string;
  featured: boolean;
  isML?: boolean;
  isHighlighted?: boolean;
};

export const PROJECTS_METADATA: ProjectType[] = [
  {
    id: "jimamet-nutrition",
    title: "Jimamet",
    description:
      "An intelligent multi-modal clinical nutrition platform pairing real-time computer vision with conversational LLM guidance. Features an Ultralytics YOLOv12 food detection model inferencing on live camera video streams, Google Gemini 2.5 Flash for context-aware clinical NutriCoach dietary recommendations, and a decoupled Django REST / Daphne ASGI backend with Supabase PostgreSQL and Next.js frontend.",
    highlight: "Real-time YOLOv8 food vision inference, context-aware Gemini 2.5 Flash NutriCoach & ASGI architecture.",
    tech: ["YOLOv12", "Google Gemini 2.5", "Next.js", "Django REST", "Daphne (ASGI)", "Supabase", "TypeScript"],
    category: "ai",
    categoryLabel: "Artificial Intelligence",
    githubUrl: "https://github.com/Achmad96/jimamet",
    featured: true,
    isML: true,
    isHighlighted: true,
  },
  {
    id: "synthetic-fraud-detection",
    title: "Synthetic Fraud Detection",
    company: "Webtocrat",
    description:
      "An end-to-end deep learning pipeline for financial fraud detection addressing severe class imbalance. Leveraged Nvidia NeMo Data Designer to synthesize realistic tabular transaction distributions, and trained deep neural anomaly detection classifiers achieving 98% accuracy on held-out inference datasets through supervised learning, custom loss optimization, and feature importance analysis.",
    highlight: "Nvidia NeMo synthetic tabular data generation & 98% accuracy deep learning anomaly classifier.",
    tech: ["Python", "PyTorch", "Nvidia NeMo", "Scikit-Learn", "Deep Learning", "Anomaly Detection"],
    category: "ai",
    categoryLabel: "Artificial Intelligence",
    githubUrl: "https://github.com/Achmad96/synthetic-fraud-detection-dataset",
    featured: true,
    isML: true,
    isHighlighted: true,
  },
  {
    id: "captiveau-ai-match-analysis",
    title: "Captiveau Match Analysis",
    company: "Captiveau",
    description:
      "A computer vision sports analytics pipeline tracking multi-agent player trajectories and ball kinematics from single-angle broadcast footage. Achieved 85% multi-object tracking accuracy on real-world clips, extracted continuous 2D on-field spatial coordinate telemetry, reduced manual game tagging time by 30%, and computed automated tactical summaries with sub-5-second processing latency.",
    highlight: "Real-time multi-object computer vision tracking (85% accuracy), spatial trajectory mapping & automated event extraction.",
    tech: ["Python", "Computer Vision", "OpenCV", "Deep Learning", "Object Tracking", "Spatial Analytics"],
    category: "ai",
    categoryLabel: "Artificial Intelligence",
    featured: true,
    isML: true,
    isHighlighted: true,
  },
  {
    id: "aerostride",
    title: "AeroStride",
    description:
      "An offline-native endurance training and running platform built for athletes who demand data sovereignty. Features a high-precision background GPS engine with Android foreground services and WAKE_LOCK, 5-second atomic SQLite crash recovery, Haversine velocity smoothing, real-time IQAir environmental air quality intelligence, and dynamic algorithmic training plans.",
    highlight: "Offline-first background GPS engine, 5-second atomic SQLite crash resilience & algorithmic training.",
    tech: ["React Native", "Expo SDK", "TypeScript", "SQLite", "Background Geolocation", "State Machine"],
    category: "systems",
    categoryLabel: "Mobile & Systems",
    githubUrl: "https://github.com/Achmad96/AeroStride",
    featured: true,
    isHighlighted: true,
  },
  {
    id: "nongki",
    title: "Nongki",
    description:
      "A production-grade workspace booking platform engineered to eliminate race conditions and double-bookings. Architected with Spring Boot 3 and React 19, incorporating deterministic lexicographical PESSIMISTIC_WRITE row locks to prevent database deadlocks, distributed idempotency verification via Idempotency-Key headers, asymmetric RS256 JWT auth, and interactive coordinate floor map visualization.",
    highlight: "Deadlock-free pessimistic locking, distributed idempotency & asymmetric RSA JWT auth.",
    tech: ["Spring Boot 3", "Java 17", "React 19", "MySQL 8", "RSA JWT"],
    category: "web",
    categoryLabel: "Full-Stack Website",
    githubUrl: "https://github.com/Achmad96/nongki",
    featured: true,
    isHighlighted: true,
  },
  {
    id: "driver-drowsiness-detection",
    title: "Driver Drowsiness Detection",
    description:
      "An edge computer vision safety system utilizing Ultralytics YOLOv11 for low-latency facial landmark and fatigue pattern detection. Monitors eye aspect ratios, closure durations, and yawning frequencies in video streams, executing instant heuristic alerting to preempt hazardous driving conditions.",
    highlight: "Ultralytics YOLOv11 deep learning model for real-time facial fatigue tracking and accident prevention.",
    tech: ["Python", "YOLOv11", "PyTorch", "Computer Vision", "OpenCV", "Deep Learning"],
    category: "ai",
    categoryLabel: "Artificial Intelligence",
    githubUrl: "https://github.com/Achmad96/DRIVER-DROWSINESS-DETECTION-YOLOV11",
    featured: true,
    isML: true,
    isHighlighted: true,
  },
  {
    id: "pemutu",
    title: "PEMUTU",
    description:
      "An institutional governance web platform centralizing academic quality assurance workflows, internal audits, evidence collection, accreditation instruments, and stakeholder satisfaction surveys.",
    highlight: "Centralized higher education QA, internal audit workflows, and accreditation management.",
    tech: ["PHP", "CodeIgniter", "PostgreSQL", "Database Architecture"],
    category: "web",
    categoryLabel: "Full-Stack Website",
    githubUrl: "https://github.com/Achmad96/pemutu",
    featured: false,
    isHighlighted: false,
  },
  {
    id: "toddler-nutrition-analysis",
    title: "Toddler Nutrition Analysis",
    description:
      "An applied machine learning and health informatics application for pediatric growth assessment and early stunting risk detection. Developed classification algorithms and statistical regression models benchmarked against World Health Organization (WHO) Anthro growth standards, automating z-score computation, risk stratification, and visual nutrition trend analysis.",
    highlight: "Supervised growth metric classification, WHO z-score modeling & interactive clinical risk analytics.",
    tech: ["Python", "Scikit-Learn", "Machine Learning", "Streamlit", "Pandas", "Statistical Modeling"],
    category: "ai",
    categoryLabel: "Artificial Intelligence",
    url: "https://toddler-nutrition-analysis.streamlit.app/",
    githubUrl: "https://github.com/Achmad96/toddler-nutrition-analysis",
    featured: false,
    isML: true,
    isHighlighted: false,
  },
  {
    id: "umkm-desa-keduyung",
    title: "UMKM Desa Keduyung",
    description:
      "A digital commerce and product showcase platform built to empower micro, small, and medium village enterprises (UMKM) in Desa Keduyung, expanding their distribution reach and catalog visibility.",
    highlight: "Full-stack marketplace empowering village entrepreneurs with online commerce.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    category: "web",
    categoryLabel: "Full-Stack Website",
    url: "https://keduyung.vercel.app",
    githubUrl: "https://github.com/Achmad96/umkm-desa-keduyung",
    featured: false,
    isHighlighted: false,
  },
  {
    id: "smart-sumbermalang",
    title: "Sumbermalang SMART",
    description:
      "An integrated smart village administration portal streamlining administrative workflows, resident services, village announcements, and transparent public information management.",
    highlight: "Integrated public administration and citizen service workflow platform.",
    tech: ["TypeScript", "Next.js", "React", "Tailwind CSS"],
    category: "community",
    categoryLabel: "Public & Community",
    url: "https://sumbermalang-smart.vercel.app/",
    githubUrl: "https://github.com/Achmad96/smart",
    featured: false,
    isHighlighted: false,
  },
  {
    id: "inventory-managements",
    title: "Inventory Managements",
    description:
      "End-to-end warehouse stock control dashboard with relational queries optimized for high-volume datasets, supplier management, and automated stock reorder triggers.",
    highlight: "Production stock management dashboard with Express REST APIs and React.",
    tech: ["React", "Node.js", "Express", "Vite", "REST API"],
    category: "web",
    categoryLabel: "Full-Stack Website",
    githubUrl: "https://github.com/Achmad96/inventory-managements",
    featured: false,
    isHighlighted: false,
  },
  {
    id: "himaprosif-portal",
    title: "HIMAPROSIF",
    description:
      "Official academic organization web portal for Himpunan Mahasiswa Program Studi Sistem Informasi, managing department portfolios, announcements, and student activities.",
    highlight: "Official student association digital portal serving the Information Systems department.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    category: "community",
    categoryLabel: "Public & Community",
    url: "https://himaprosif.vercel.app",
    githubUrl: "https://github.com/Achmad96/himaprosif",
    featured: false,
    isHighlighted: false,
  },
  {
    id: "spotimad",
    title: "Spotimad",
    description:
      "A responsive music streaming web client featuring audio playback controls, persistent playback state, playlist exploration, and dynamic album artwork handling.",
    highlight: "Audio streaming interface with responsive playback controls.",
    tech: ["TypeScript", "React", "Tailwind CSS", "Web Audio API"],
    category: "web",
    categoryLabel: "Full-Stack Website",
    url: "https://spotimad.vercel.app",
    githubUrl: "https://github.com/Achmad96/Spotimad",
    featured: false,
    isHighlighted: false,
  },
  {
    id: "remaja-masjid",
    title: "Remaja Masjid Nurul Huda",
    description:
      "A community portal for youth mosque organization, featuring prayer schedules, activity calendar, announcement board, and member coordination.",
    highlight: "Community management platform with prayer schedules and activity planning.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    category: "community",
    categoryLabel: "Public & Community",
    url: "https://remas-nh.vercel.app",
    githubUrl: "https://github.com/Achmad96/remaja-masjid-website",
    featured: false,
    isHighlighted: false,
  },
  {
    id: "geotera",
    title: "Geotera",
    description:
      "Corporate web platform for Geotera engineering and surveying services, presenting corporate portfolio, service catalogs, and client consultation workflows.",
    highlight: "Engineering consultancy web presence showcasing industrial surveying.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "web",
    categoryLabel: "Full-Stack Website",
    url: "https://geotera.vercel.app",
    githubUrl: "https://github.com/Achmad96/geotera",
    featured: false,
    isHighlighted: false,
  },
  {
    id: "madchat",
    title: "MadChat",
    description:
      "Low-latency instant messaging application with bi-directional WebSocket communication, channel rooms, live typing cues, and user status indicators.",
    highlight: "Real-time communication platform powered by WebSockets and TypeScript.",
    tech: ["TypeScript", "Node.js", "Socket.io", "React"],
    category: "web",
    categoryLabel: "Full-Stack Website",
    githubUrl: "https://github.com/Achmad96/madchat",
    featured: false,
    isHighlighted: false,
  },
  {
    id: "puskesmas",
    title: "Puskesmas",
    description:
      "Desktop electronic health record (EHR) and clinic management application facilitating patient triage, medical consultations, and medicine inventory administration.",
    highlight: "Desktop healthcare administration software built with Java and SQL.",
    tech: ["Java", "JavaFX", "Object-Oriented Design", "SQL"],
    category: "systems",
    categoryLabel: "Mobile & Systems",
    githubUrl: "https://github.com/Achmad96/puskesmas-new",
    featured: false,
    isHighlighted: false,
  },
];
