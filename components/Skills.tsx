"use client";

import React from "react";
import {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiCplusplus,
  SiKotlin,
  SiLua,
  SiNextdotjs,
  SiTailwindcss,
  SiVite,
  SiExpress,
  SiNestjs,
  SiSocketdotio,
  SiPytorch,
  SiScikitlearn,
  SiOpencv,
  SiStreamlit,
  SiPandas,
  SiNumpy,
  SiJupyter,
  SiNvidia,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiVercel,
  SiNeovim,
  SiPostman,
} from "react-icons/si";
import { FaReact, FaJava, FaNodeJs, FaHtml5, FaCss3Alt, FaDocker, FaGitAlt, FaLinux, FaAws } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { Code2, Cpu, Layout, Server, Database, Wrench } from "lucide-react";

interface SkillItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface SkillCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: SkillItem[];
}

export default function Skills() {
  const categories: SkillCategory[] = [
    {
      id: "ai-ml",
      title: "Machine Learning, Deep Learning & CV",
      description: "Deep learning neural architectures, anomaly detection, synthetic data & real-time spatial tracking",
      icon: Cpu,
      skills: [
        { name: "PyTorch", icon: SiPytorch },
        { name: "Nvidia NeMo", icon: SiNvidia },
        { name: "OpenCV", icon: SiOpencv },
        { name: "Scikit-Learn", icon: SiScikitlearn },
        { name: "Streamlit", icon: SiStreamlit },
        { name: "Pandas", icon: SiPandas },
        { name: "NumPy", icon: SiNumpy },
        { name: "Jupyter", icon: SiJupyter },
      ],
    },
    {
      id: "languages",
      title: "Languages & Core",
      description: "Python, C++, TypeScript, and systems languages for ML pipelines & backends",
      icon: Code2,
      skills: [
        { name: "Python", icon: SiPython },
        { name: "TypeScript", icon: SiTypescript },
        { name: "JavaScript", icon: SiJavascript },
        { name: "C++", icon: SiCplusplus },
        { name: "Java", icon: FaJava },
        { name: "Kotlin", icon: SiKotlin },
        { name: "Lua", icon: SiLua },
      ],
    },
    {
      id: "frontend",
      title: "Frontend & UI Architecture",
      description: "Responsive web platforms, dashboards & interactive interfaces",
      icon: Layout,
      skills: [
        { name: "React.js", icon: FaReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "HTML5", icon: FaHtml5 },
        { name: "CSS3", icon: FaCss3Alt },
        { name: "Vite", icon: SiVite },
      ],
    },
    {
      id: "backend",
      title: "Backend & Distributed Systems",
      description: "RESTful architectures, asynchronous tasks & real-time services",
      icon: Server,
      skills: [
        { name: "Node.js", icon: FaNodeJs },
        { name: "Express.js", icon: SiExpress },
        { name: "NestJS", icon: SiNestjs },
        { name: "Socket.io", icon: SiSocketdotio },
      ],
    },
    {
      id: "databases-devops",
      title: "Databases & Cloud Infrastructure",
      description: "Relational/document datastores, containers & cloud deployment",
      icon: Database,
      skills: [
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Prisma ORM", icon: SiPrisma },
        { name: "Docker", icon: FaDocker },
        { name: "Linux", icon: FaLinux },
        { name: "Git", icon: FaGitAlt },
        { name: "AWS", icon: FaAws },
        { name: "Vercel", icon: SiVercel },
      ],
    },
    {
      id: "tools",
      title: "Developer Tooling",
      description: "Development environments, editor configurations & API testing",
      icon: Wrench,
      skills: [
        { name: "Neovim", icon: SiNeovim },
        { name: "VS Code", icon: VscVscode },
        { name: "Postman", icon: SiPostman },
      ],
    },
  ];

  return (
    <section id="skills" className="relative overflow-hidden border-t border-neutral-200 bg-white py-24 transition-colors dark:border-neutral-900 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-14 flex flex-col items-start space-y-2">
          <span className="font-mono text-xs font-semibold tracking-wider text-teal-600 uppercase dark:text-teal-400">Technical Stack</span>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">Skills &amp; Technologies</h2>
          <p className="max-w-2xl text-sm text-neutral-600 sm:text-base dark:text-neutral-400">Machine learning frameworks, deep learning libraries, computer vision toolkits, and scalable engineering infrastructure.</p>
        </div>

        {/* Cohesive Stack Architecture Matrix */}
        <div className="divide-y divide-neutral-200/70 overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50/50 backdrop-blur-sm dark:divide-neutral-800/70 dark:border-neutral-800 dark:bg-neutral-900/40">
          {categories.map((category) => (
            <div key={category.id} className="flex flex-col justify-between gap-6 p-6 transition-colors hover:bg-neutral-100/50 sm:p-7 lg:flex-row lg:items-center dark:hover:bg-neutral-900/60">
              {/* Category Info */}
              <div className="shrink-0 space-y-1 lg:w-80">
                <div className="flex items-center gap-2.5">
                  <category.icon className="h-4 w-4 shrink-0 text-teal-600 dark:text-teal-400" />
                  <h3 className="text-sm font-semibold text-neutral-900 sm:text-base dark:text-white">{category.title}</h3>
                </div>
                <p className="text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">{category.description}</p>
              </div>

              {/* Skills Chips */}
              <div className="flex flex-1 flex-wrap items-center gap-2 lg:justify-end">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group inline-flex cursor-default items-center gap-2 rounded-lg border border-neutral-200/80 bg-white px-3 py-1.5 text-xs font-medium text-neutral-700 shadow-2xs transition-all hover:border-neutral-300 hover:text-neutral-950 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-300 dark:hover:border-neutral-700 dark:hover:text-white"
                  >
                    <span className="text-neutral-400 transition-colors group-hover:text-teal-600 dark:text-neutral-500 dark:group-hover:text-teal-400">
                      <skill.icon className="h-3.5 w-3.5" />
                    </span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
