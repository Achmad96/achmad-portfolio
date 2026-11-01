"use client";

import React, { useState } from "react";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { PROJECTS_METADATA, ProjectCategory } from "@/constants/ProjectsMetadata";

const ITEMS_PER_PAGE = 6;

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("all");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "ai", label: "Artificial Intelligence" },
    { id: "web", label: "Full-Stack Website" },
    { id: "community", label: "Public & Community" },
    { id: "systems", label: "Mobile & Systems" },
  ];

  const filteredProjects = PROJECTS_METADATA.filter((project) => {
    return selectedCategory === "all" || project.category === selectedCategory;
  });

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);

  const paginatedProjects = filteredProjects.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

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
    <section id="projects" className="relative overflow-hidden border-t border-neutral-200 bg-white py-24 transition-colors dark:border-neutral-900 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-10 flex flex-col items-start space-y-2">
          <span className="font-mono text-xs font-semibold tracking-wider text-teal-600 uppercase dark:text-teal-400">Machine Learning &amp; Engineering Showcase</span>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">Featured Projects</h2>
          <p className="max-w-2xl text-sm text-neutral-600 sm:text-base dark:text-neutral-400">
            Machine learning architectures, computer vision pipelines, and intelligent systems developed as an aspiring ML engineer.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="mb-10 flex flex-wrap items-center gap-1.5 border-b border-neutral-200 pb-4 dark:border-neutral-800">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id as ProjectCategory)}
              className={`cursor-pointer rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                selectedCategory === cat.id
                  ? "bg-neutral-900 font-semibold text-white shadow-xs dark:bg-white dark:text-neutral-900"
                  : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-950 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid (6 items per page) */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {paginatedProjects.map((project) => (
            <div
              key={project.id}
              className={`group flex flex-col justify-between rounded-2xl border p-6 transition-all sm:p-7 ${
                project.isHighlighted
                  ? "border-teal-500/40 bg-teal-500/[0.02] shadow-xs ring-1 ring-teal-500/10 hover:border-teal-500/70 dark:border-teal-500/30 dark:bg-teal-500/[0.04] dark:hover:border-teal-400/60"
                  : "border-neutral-200 bg-neutral-50/50 hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900/40 dark:hover:border-neutral-700"
              }`}
            >
              <div className="space-y-3.5">
                {/* Header: Category & Company */}
                <div className="flex items-center justify-between gap-3 text-xs">
                  <span className="font-mono text-xs font-medium text-neutral-500 dark:text-neutral-400">{project.categoryLabel}</span>
                  {project.company && <span className="shrink-0 text-[11px] font-medium text-neutral-500 dark:text-neutral-400">{project.company}</span>}
                </div>

                {/* Title */}
                <h3 className="text-base leading-snug font-bold tracking-tight text-neutral-900 sm:text-lg dark:text-white">
                  {project.url ? (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-teal-600 dark:hover:text-teal-400">
                      <span>{project.title}</span>
                      <ExternalLink className="h-3.5 w-3.5 opacity-60 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                    </a>
                  ) : (
                    <span>{project.title}</span>
                  )}
                </h3>

                {/* Description */}
                <p className="text-xs leading-relaxed text-neutral-600 sm:text-sm dark:text-neutral-400">{project.description}</p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="rounded bg-neutral-100 px-2 py-0.5 font-mono text-[11px] font-medium text-neutral-600 dark:bg-neutral-800/70 dark:text-neutral-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="mt-5 flex items-center justify-between gap-3 border-t border-neutral-200/60 pt-4 text-xs dark:border-neutral-800/60">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                  >
                    <Github className="h-3.5 w-3.5" />
                    <span>Source Code</span>
                  </a>
                ) : (
                  <span className="text-[11px] text-neutral-400 dark:text-neutral-500">Proprietary / Industry project</span>
                )}

                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-teal-600 transition-colors hover:underline dark:text-teal-400"
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
          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-neutral-200/60 pt-8 sm:flex-row dark:border-neutral-800/60">
            <span className="font-mono text-xs text-neutral-500">
              Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1}–{Math.min(currentPage * ITEMS_PER_PAGE, filteredProjects.length)} of {filteredProjects.length} projects
            </span>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Previous Page"
                className="flex cursor-pointer items-center gap-1 rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium text-neutral-700 transition-colors hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-30 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800"
              >
                <ChevronLeft className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Prev</span>
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`h-8 min-w-[32px] cursor-pointer rounded-lg px-2.5 font-mono text-xs font-medium transition-colors ${
                    currentPage === page
                      ? "bg-neutral-900 font-semibold text-white shadow-xs dark:bg-white dark:text-neutral-900"
                      : "border border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800"
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Next Page"
                className="flex cursor-pointer items-center gap-1 rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium text-neutral-700 transition-colors hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-30 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800"
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* GitHub Repositories Banner */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl border border-neutral-200 bg-neutral-50/50 p-6 sm:flex-row sm:p-7 dark:border-neutral-800 dark:bg-neutral-900/40">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-sm font-semibold text-neutral-900 dark:text-white">Explore More Repositories on GitHub</h4>
            <p className="text-xs text-neutral-600 dark:text-neutral-400">Browse additional tools, algorithm implementations, and open-source contributions.</p>
          </div>
          <a
            href="https://github.com/Achmad96?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-lg bg-neutral-900 px-4 py-2 text-xs font-semibold text-white shadow-xs transition-colors hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
          >
            <Github className="h-4 w-4" />
            <span>View All Repositories</span>
          </a>
        </div>
      </div>
    </section>
  );
}
