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
};

export const PROJECTS_METADATA: ProjectType[] = [
  {
    id: "synthetic-fraud-detection",
    title: "Synthetic Transaction & Fraud Anomaly Detection",
    company: "PT Jasa Web Indonesia (Webtocrat)",
    description:
      "A deep learning architecture and synthetic transaction generator built using Nvidia NeMo Data Designer to detect financial anomalies, achieving 98% accuracy on the inference dataset via supervised learning techniques.",
    highlight: "Nvidia NeMo data synthesis & 98% accuracy deep learning anomaly classifier.",
    tech: ["Python", "Nvidia NeMo", "PyTorch", "Scikit-Learn", "Computer Vision"],
    category: "ai",
    categoryLabel: "AI & Machine Learning",
    githubUrl: "https://github.com/Achmad96/synthetic-fraud-detection-dataset",
    featured: true,
  },
  {
    id: "captiveau-ai-match-analysis",
    title: "AI Match Analysis & Computer Vision Tracking",
    company: "Captiveau",
    description:
      "Computer vision match analysis pipeline tracking player and ball trajectories with 85% tracking accuracy. Extracts spatial coordinates from match video feeds, cutting manual game-tagging time by 30% and delivering tactical summaries in under 5 seconds.",
    highlight: "Real-time sports computer vision tracking & automated spatial tactical summaries.",
    tech: ["Python", "Computer Vision", "OpenCV", "Deep Learning", "Video Processing"],
    category: "ai",
    categoryLabel: "AI & Computer Vision",
    featured: true,
  },
  {
    id: "umkm-desa-keduyung",
    title: "UMKM Desa Keduyung Marketplace",
    description:
      "A digital commerce and product showcase platform built to empower micro, small, and medium village enterprises (UMKM) in Desa Keduyung, expanding their distribution reach and catalog visibility.",
    highlight: "Full-stack marketplace empowering village entrepreneurs with online commerce.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    category: "web",
    categoryLabel: "Full-Stack Web",
    url: "https://keduyung.vercel.app",
    githubUrl: "https://github.com/Achmad96/umkm-desa-keduyung",
    featured: true,
  },
  {
    id: "smart-sumbermalang",
    title: "Sumbermalang SMART Governance",
    description:
      "An integrated smart village administration portal streamlining administrative workflows, resident services, village announcements, and transparent public information management.",
    highlight: "Integrated public administration and citizen service workflow platform.",
    tech: ["TypeScript", "Next.js", "React", "Tailwind CSS"],
    category: "community",
    categoryLabel: "Public Systems",
    url: "https://sumbermalang-smart.vercel.app/",
    githubUrl: "https://github.com/Achmad96/smart",
    featured: true,
  },
  {
    id: "toddler-nutrition-analysis",
    title: "Toddler Nutrition & Stunting Analytics",
    description:
      "A data analytics application built with Streamlit and Python for assessing child growth metrics, identifying stunting risks, and benchmarking nutrition indicators against World Health Organization (WHO) standards.",
    highlight: "WHO-benchmarked pediatric growth analytics and interactive data visualization.",
    tech: ["Python", "Streamlit", "Pandas", "WHO Standards", "Data Visualization"],
    category: "ai",
    categoryLabel: "Data Analytics",
    url: "https://toddler-nutrition-analysis.streamlit.app/",
    githubUrl: "https://github.com/Achmad96/toddler-nutrition-analysis",
    featured: true,
  },
  {
    id: "inventory-managements",
    title: "Full-Stack Inventory & Supply Platform",
    description:
      "End-to-end warehouse stock control dashboard with relational queries optimized for high-volume datasets, supplier management, and automated stock reorder triggers.",
    highlight: "Production stock management dashboard with Express REST APIs and React.",
    tech: ["React", "Node.js", "Express", "Vite", "REST API"],
    category: "web",
    categoryLabel: "Full-Stack Web",
    githubUrl: "https://github.com/Achmad96/inventory-managements",
    featured: true,
  },
  {
    id: "himaprosif-portal",
    title: "HIMAPROSIF Official Platform",
    description:
      "Official academic organization web portal for Himpunan Mahasiswa Program Studi Sistem Informasi, managing department portfolios, announcements, and student activities.",
    highlight: "Official student association digital portal serving the Information Systems department.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    category: "community",
    categoryLabel: "Organization & Community",
    url: "https://himaprosif.vercel.app",
    githubUrl: "https://github.com/Achmad96/himaprosif",
    featured: false,
  },
  {
    id: "spotimad",
    title: "Spotimad Music Player Web Client",
    description:
      "A responsive music streaming web client featuring audio playback controls, persistent playback state, playlist exploration, and dynamic album artwork handling.",
    highlight: "Audio streaming interface with responsive playback controls.",
    tech: ["TypeScript", "React", "Tailwind CSS", "Web Audio API"],
    category: "web",
    categoryLabel: "Web App",
    url: "https://spotimad.vercel.app",
    githubUrl: "https://github.com/Achmad96/Spotimad",
    featured: false,
  },
  {
    id: "remaja-masjid",
    title: "Remaja Masjid Nurul Huda Hub",
    description:
      "A community portal for youth mosque organization, featuring prayer schedules, activity calendar, announcement board, and member coordination.",
    highlight: "Community management platform with prayer schedules and activity planning.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    category: "community",
    categoryLabel: "Community Platform",
    url: "https://remas-nh.vercel.app",
    githubUrl: "https://github.com/Achmad96/remaja-masjid-website",
    featured: false,
  },
  {
    id: "geotera",
    title: "Geotera Engineering Consulting",
    description:
      "Corporate web platform for Geotera engineering and surveying services, presenting corporate portfolio, service catalogs, and client consultation workflows.",
    highlight: "Engineering consultancy web presence showcasing industrial surveying.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "web",
    categoryLabel: "Web Development",
    url: "https://geotera.vercel.app",
    githubUrl: "https://github.com/Achmad96/geotera-website",
    featured: false,
  },
  {
    id: "madchat",
    title: "MadChat Real-Time Messaging",
    description:
      "Low-latency instant messaging application with bi-directional WebSocket communication, channel rooms, live typing cues, and user status indicators.",
    highlight: "Real-time communication platform powered by WebSockets and TypeScript.",
    tech: ["TypeScript", "Node.js", "Socket.io", "React"],
    category: "web",
    categoryLabel: "Full-Stack Web",
    githubUrl: "https://github.com/Achmad96/madchat",
    featured: false,
  },
  {
    id: "puskesmas",
    title: "Puskesmas Clinical Information System",
    description:
      "Desktop electronic health record (EHR) and clinic management application facilitating patient triage, medical consultations, and medicine inventory administration.",
    highlight: "Desktop healthcare administration software built with Java and SQL.",
    tech: ["Java", "JavaFX", "Object-Oriented Design", "SQL"],
    category: "systems",
    categoryLabel: "Desktop & Systems",
    githubUrl: "https://github.com/Achmad96/puskesmas-new",
    featured: false,
  },
];
