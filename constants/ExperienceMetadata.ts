export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  tech: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  gpa?: string;
  details: string;
  highlights?: string[];
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  issueDate?: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
}

export const EXPERIENCES_METADATA: ExperienceItem[] = [
  {
    id: "webtocrat-intern",
    role: "Technical Programmer Intern",
    company: "PT Jasa Web Indonesia (Webtocrat Motion Group)",
    location: "Surabaya, Indonesia",
    period: "January 2026 - May 2026",
    bullets: [
      "Achieved an accuracy rate of 98% on the held-out inference dataset by developing and optimizing a deep learning architecture aimed at detecting anomalies in financial transactions through supervised learning.",
      "Built a synthetic transaction generator using Nvidia NeMo Data Designer to solve acute class imbalance and support the training of robust fraud detection models.",
      "Utilized diffusion models and modern computer vision techniques to develop an intelligent image editing application capable of automated manipulation in production.",
    ],
    tech: ["Python", "Nvidia NeMo", "Machine Learning", "Diffusion Models", "Computer Vision"],
  },
  {
    id: "captiveau-intern",
    role: "AI Engineer Intern",
    company: "Captiveau",
    location: "Surabaya, Indonesia",
    period: "January 2026 - April 2026",
    bullets: [
      "Engineered an AI-driven match analysis system utilizing computer vision frameworks to detect and track multi-agent player dynamics and ball trajectories, achieving 85% tracking accuracy on standard test clips.",
      "Processed hours of video feeds from broadcast camera angles to extract on-field 2D spatial coordinate telemetry, reducing manual game-tagging time by approximately 30%.",
      "Generated automated game summaries based on spatial coordinates and event triggers, delivering tactical insights with an inference latency of under 5 seconds per clip segment.",
    ],
    tech: ["Python", "Computer Vision", "OpenCV", "Deep Learning", "Spatial Analytics", "Video Processing"],
  },
  {
    id: "freelance-swe",
    role: "Software Engineer",
    company: "Freelance",
    location: "Indonesia",
    period: "May 2025 - December 2025",
    bullets: [
      "Built custom interactive data dashboards to seamlessly render complex analytics, engineering database queries to handle live datasets of up to 10,000 rows with optimized response times.",
      "Developed and delivered 3 responsive digital applications and marketplace platforms, integrating data pipelines and modern user interfaces that increased client engagement.",
      "Optimized frontend architectures and data fetching strategies, reducing average page load times by roughly 20% and improving overall system throughput.",
    ],
    tech: ["Python", "TypeScript", "Next.js", "React", "Node.js", "PostgreSQL"],
  },
];

export const EDUCATION_METADATA: EducationItem = {
  degree: "Bachelor of Computer, Information System (S.Kom)",
  institution: "Universitas Islam Negeri Sunan Ampel Surabaya",
  period: "August 2023 - August 2027",
  location: "Surabaya, Indonesia",
  gpa: "3.86 / 4.00",
  details:
    "Specializing in applied machine learning, neural networks, computer vision, data analytics, and database systems architecture.",
  highlights: [
    "Samsung Innovation Campus (Batch 7)",
    "Big Data Competition Hology UB",
    "PROKSI Information System (Best Student)",
  ],
};

export const CERTIFICATIONS_METADATA: CertificationItem[] = [
  {
    id: "kaggle-intermediate-ml",
    name: "Intermediate Machine Learning",
    issuer: "Kaggle",
    issueDate: "2026",
    credentialUrl: "https://www.kaggle.com/learn/certification/achmadraihan96/intermediate-machine-learning",
  },
  {
    id: "dicoding-python",
    name: "Memulai Pemrograman dengan Python",
    issuer: "Dicoding Indonesia",
    issueDate: "June 2024",
    expiryDate: "June 2027",
    credentialId: "72ZDV51OLZYW",
    credentialUrl: "https://www.dicoding.com/certificates/72ZDV51OLZYW",
  },
  {
    id: "dicoding-data-viz",
    name: "Belajar Dasar Visualisasi Data",
    issuer: "Dicoding Indonesia",
    issueDate: "May 2024",
    expiryDate: "May 2027",
    credentialId: "NVP7Q9OKRZR0",
    credentialUrl: "https://www.dicoding.com/certificates/NVP7Q9OKRZR0",
  },
  {
    id: "mos-word-2019",
    name: "Microsoft Office Specialist: Word Associate (Word 2019)",
    issuer: "Microsoft (Certiport)",
    issueDate: "October 2025",
    expiryDate: "October 2030",
    credentialId: "CSyS-uTbz",
    // credentialUrl: "https://verify.certiport.com",
  },
  {
    id: "kominfo-ai-microskill",
    name: "Kecerdasan Artifisial (Micro Skill)",
    issuer: "Digital Talent Scholarship (Kominfo)",
    issueDate: "2024",
    // credentialUrl: "https://sdmdigital.komdigi.go.id",
  },
];

