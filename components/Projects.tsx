"use client";

import React, { useState } from "react";
import { ExternalLink, Github, FolderGit2, Building2 } from "lucide-react";
import { PROJECTS_METADATA, ProjectType, ProjectCategory } from "@/constants/ProjectsMetadata";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "ai", label: "AI & Machine Learning" },
    { id: "web", label: "Full-Stack Web" },
    { id: "community", label: "Public & Community" },
    { id: "systems", label: "Desktop & Systems" },
  ];

  const filteredProjects = PROJECTS_METADATA.filter((project) => {
    return selectedCategory === "all" || project.category === selectedCategory;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-12 space-y-2">
          <span className="text-xs font-mono tracking-wider text-teal-600 dark:text-teal-400 uppercase font-semibold">
            Selected Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white tracking-tight">
            Featured Projects &amp; Systems
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl text-sm sm:text-base">
            Production applications, AI architectures, computer vision pipelines, and public platforms.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-neutral-200 dark:border-neutral-800">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as ProjectCategory)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                selectedCategory === cat.id
                  ? "bg-teal-500 text-neutral-950 font-semibold"
                  : "bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/80 dark:bg-neutral-900/40 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors p-6 flex flex-col justify-between"
            >
              <div className="space-y-3.5">
                {/* Header: Category & Company */}
                <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
                  <span className="font-mono text-teal-600 dark:text-teal-400 text-[11px] uppercase tracking-wider font-semibold">
                    {project.categoryLabel}
                  </span>
                  {project.company && (
                    <span className="flex items-center gap-1 text-[11px] text-neutral-500 dark:text-neutral-400 font-medium">
                      <Building2 className="h-3 w-3 text-neutral-400 dark:text-neutral-500" />
                      {project.company}
                    </span>
                  )}
                </div>

                {/* Title & Highlight */}
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-teal-600 dark:text-teal-400 font-medium mt-1">
                    {project.highlight}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-5 mt-5 border-t border-neutral-200 dark:border-neutral-800/80 flex items-center justify-between gap-3 text-xs">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    <span>Source Code</span>
                  </a>
                ) : (
                  <span className="text-[11px] text-neutral-400 dark:text-neutral-500 italic">
                    Proprietary / Industry project
                  </span>
                )}

                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium text-teal-600 dark:text-teal-400 hover:underline transition-colors"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Repositories Banner */}
        <div className="mt-12 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/80 dark:bg-neutral-900/40 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-sm font-semibold text-neutral-900 dark:text-white flex items-center gap-2 justify-center sm:justify-start">
              <FolderGit2 className="h-4 w-4 text-teal-600 dark:text-teal-400" />
              <span>Explore More Repositories on GitHub</span>
            </h4>
            <p className="text-xs text-neutral-600 dark:text-neutral-400">
              Browse additional tools, algorithm implementations, and open-source contributions.
            </p>
          </div>
          <a
            href="https://github.com/Achmad96?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-200 px-4 py-2 text-xs font-semibold transition-colors shrink-0"
          >
            <Github className="h-4 w-4" />
            <span>View All Repositories</span>
          </a>
        </div>
      </div>
    </section>
  );
}
