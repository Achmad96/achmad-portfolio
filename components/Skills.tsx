"use client";

import React, { useState } from "react";
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
import {
  FaReact,
  FaJava,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaAws,
} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { Layers } from "lucide-react";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    {
      id: "languages",
      title: "Languages",
      skills: [
        { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
        { name: "C++", icon: <SiCplusplus className="text-[#00599C]" /> },
        { name: "Java", icon: <FaJava className="text-[#ED8B00]" /> },
        { name: "Kotlin", icon: <SiKotlin className="text-[#7F52FF]" /> },
        { name: "Lua", icon: <SiLua className="text-[#000080]" /> },
      ],
    },
    {
      id: "ai-ml",
      title: "AI, ML & Computer Vision",
      skills: [
        { name: "PyTorch", icon: <SiPytorch className="text-[#EE4C2C]" /> },
        { name: "Nvidia NeMo", icon: <SiNvidia className="text-[#76B900]" /> },
        { name: "OpenCV (Computer Vision)", icon: <SiOpencv className="text-[#5C3EE8]" /> },
        { name: "Scikit-Learn", icon: <SiScikitlearn className="text-[#F7931E]" /> },
        { name: "Streamlit", icon: <SiStreamlit className="text-[#FF4B4B]" /> },
        { name: "Pandas", icon: <SiPandas className="text-[#150458]" /> },
        { name: "NumPy", icon: <SiNumpy className="text-[#013243]" /> },
        { name: "Jupyter", icon: <SiJupyter className="text-[#F37626]" /> },
      ],
    },
    {
      id: "fullstack",
      title: "Frontend & Full-Stack",
      skills: [
        { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-neutral-900 dark:text-white" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38BDF8]" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" /> },
        { name: "Vite", icon: <SiVite className="text-[#646CFF]" /> },
      ],
    },
    {
      id: "backend",
      title: "Backend & Systems",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-[#5FA04E]" /> },
        { name: "Express.js", icon: <SiExpress className="text-neutral-700 dark:text-neutral-300" /> },
        { name: "NestJS", icon: <SiNestjs className="text-[#E0234E]" /> },
        { name: "Socket.io", icon: <SiSocketdotio className="text-neutral-900 dark:text-white" /> },
      ],
    },
    {
      id: "databases-devops",
      title: "Databases & Cloud",
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
        { name: "Prisma ORM", icon: <SiPrisma className="text-neutral-900 dark:text-white" /> },
        { name: "Docker", icon: <FaDocker className="text-[#2496ED]" /> },
        { name: "Linux", icon: <FaLinux className="text-[#FCC624]" /> },
        { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
        { name: "AWS", icon: <FaAws className="text-[#FF9900]" /> },
        { name: "Vercel", icon: <SiVercel className="text-neutral-900 dark:text-white" /> },
      ],
    },
    {
      id: "tools",
      title: "Developer Tools",
      skills: [
        { name: "Neovim", icon: <SiNeovim className="text-[#57A143]" /> },
        { name: "VS Code", icon: <VscVscode className="text-[#007ACC]" /> },
        { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
      ],
    },
  ];

  const filtered =
    activeCategory === "all"
      ? categories
      : categories.filter((c) => c.id === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-12 space-y-2">
          <span className="text-xs font-mono tracking-wider text-teal-600 dark:text-teal-400 uppercase font-semibold">
            Technical Competencies
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white tracking-tight">
            Skills &amp; Technologies
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl text-sm sm:text-base">
            Languages, frameworks, computer vision tools, and platforms utilized in production and research.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              activeCategory === "all"
                ? "bg-teal-500 text-neutral-950 font-semibold"
                : "bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white"
            }`}
          >
            All Disciplines
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                activeCategory === cat.id
                  ? "bg-teal-500 text-neutral-950 font-semibold"
                  : "bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((group) => (
            <div
              key={group.id}
              className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/80 dark:bg-neutral-900/30 p-5 backdrop-blur-sm space-y-4"
            >
              <h3 className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 border-b border-neutral-200 dark:border-neutral-800 pb-3 flex items-center justify-between">
                <span>{group.title}</span>
                <span className="text-[11px] font-mono text-neutral-500">
                  {group.skills.length} tools
                </span>
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center gap-2 rounded-lg border border-neutral-200 dark:border-neutral-800/80 bg-white dark:bg-neutral-950 px-3 py-1.5 text-xs text-neutral-700 dark:text-neutral-300 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
                  >
                    <span className="text-base shrink-0">{skill.icon}</span>
                    <span className="font-medium">{skill.name}</span>
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
