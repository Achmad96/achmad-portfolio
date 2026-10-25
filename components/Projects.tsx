"use client";

import React, { useState } from "react";
import { ExternalLink, Github, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { PROJECTS_METADATA, ProjectCategory } from "@/constants/ProjectsMetadata";

const ITEMS_PER_PAGE = 6;

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("all");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "ai", label: "Machine Learning & AI" },
    { id: "web", label: "Full-Stack Web" },
    { id: "community", label: "Public & Community" },
    { id: "systems", label: "Desktop & Systems" },
  ];

  const filteredProjects = PROJECTS_METADATA.filter((project) => {
    return selectedCategory === "all" || project.category === selectedCategory;
  });

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);

  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleCategoryChange = (cat: ProjectCategory) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="projects"
      className="py-24 relative overflow-hidden bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-900 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-10 space-y-2">
          <span className="text-xs font-mono tracking-wider text-teal-600 dark:text-teal-400 uppercase font-semibold">
            Machine Learning &amp; Engineering Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl text-sm sm:text-base">
            Machine learning architectures, computer vision pipelines, and intelligent systems developed as an aspiring ML engineer.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center gap-1.5 mb-10 pb-4 border-b border-neutral-200 dark:border-neutral-800">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id as ProjectCategory)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-xs font-semibold"
                  : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid (6 items per page) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedProjects.map((project) => (
            <div
              key={project.id}
              className={`group rounded-2xl border transition-all p-6 sm:p-7 flex flex-col justify-between ${
                project.isML
                  ? "border-teal-500/40 dark:border-teal-500/30 bg-teal-500/[0.02] dark:bg-teal-500/[0.04] shadow-xs hover:border-teal-500/70 dark:hover:border-teal-400/60 ring-1 ring-teal-500/10"
                  : "border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 hover:border-neutral-300 dark:hover:border-neutral-700"
              }`}
            >
              <div className="space-y-3">
                {/* Header: Category, ML Badge & Company */}
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-neutral-500">
                      {project.categoryLabel}
                    </span>
                    {project.isML && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-teal-500/15 dark:bg-teal-500/20 px-2 py-0.5 text-[10px] font-mono font-semibold text-teal-700 dark:text-teal-300 border border-teal-500/30">
                        <Sparkles className="h-2.5 w-2.5 text-teal-600 dark:text-teal-400" />
                        ML Focus
                      </span>
                    )}
                  </div>
                  {project.company && (
                    <span className="text-[11px] text-neutral-500 dark:text-neutral-400 font-medium">
                      {project.company}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white leading-snug tracking-tight">
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>{project.title}</span>
                      <ExternalLink className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    </a>
                  ) : (
                    <span>{project.title}</span>
                  )}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800/70 text-neutral-600 dark:text-neutral-400 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-4 mt-5 border-t border-neutral-200/60 dark:border-neutral-800/60 flex items-center justify-between gap-3 text-xs">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                  >
                    <Github className="h-3.5 w-3.5" />
                    <span>Source Code</span>
                  </a>
                ) : (
                  <span className="text-[11px] text-neutral-400 dark:text-neutral-500">
                    Proprietary / Industry project
                  </span>
                )}

                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-teal-600 dark:text-teal-400 hover:underline transition-colors"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 mt-8 border-t border-neutral-200/60 dark:border-neutral-800/60">
            <span className="text-xs font-mono text-neutral-500">
              Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1}–
              {Math.min(currentPage * ITEMS_PER_PAGE, filteredProjects.length)} of{" "}
              {filteredProjects.length} projects
            </span>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Previous Page"
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
              >
                <ChevronLeft className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Prev</span>
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`min-w-[32px] h-8 px-2.5 rounded-lg text-xs font-mono font-medium transition-colors cursor-pointer ${
                    currentPage === page
                      ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-semibold shadow-xs"
                      : "border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Next Page"
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* GitHub Repositories Banner */}
        <div className="mt-12 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-sm font-semibold text-neutral-900 dark:text-white">
              Explore More Repositories on GitHub
            </h4>
            <p className="text-xs text-neutral-600 dark:text-neutral-400">
              Browse additional tools, algorithm implementations, and open-source contributions.
            </p>
          </div>
          <a
            href="https://github.com/Achmad96?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-200 px-4 py-2 text-xs font-semibold transition-colors shrink-0 cursor-pointer shadow-xs"
          >
            <Github className="h-4 w-4" />
            <span>View All Repositories</span>
          </a>
        </div>
      </div>
    </section>
  );
}
