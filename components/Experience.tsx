"use client";

import React from "react";
import LanguagesCard from "@/components/LanguagesCard";
import LeetCodeCard from "@/components/LeetCodeCard";

export default function Experience() {
  const experiences = [
    {
      period: "January 2026 – May 2026",
      role: "Machine Learning & CV Developer",
      company: "PT Jasa Web Indonesia (Webtocrat Motion Group)",
      location: "Surabaya, Indonesia",
      bullets: [
        "Achieved an accuracy rate of 98% on the held-out inference dataset by developing and optimizing a deep learning architecture aimed at detecting anomalies in financial transactions through supervised learning.",
        "Built a synthetic transaction generator using Nvidia NeMo Data Designer to solve acute class imbalance and support the training of robust fraud detection models.",
        "Utilized diffusion models and modern computer vision techniques to develop an intelligent image editing application capable of automated manipulation in production.",
      ],
      tech: ["Python", "PyTorch", "Nvidia NeMo", "Deep Learning", "Computer Vision", "Diffusion Models"],
    },
    {
      period: "January 2026 – April 2026",
      role: "AI & Computer Vision Engineer",
      company: "Captiveau",
      location: "Surabaya, Indonesia",
      bullets: [
        "Engineered an AI-driven match analysis system utilizing computer vision frameworks to detect and track multi-agent player dynamics and ball trajectories, achieving 85% tracking accuracy on standard test clips.",
        "Processed hours of video feeds from broadcast camera angles to extract on-field 2D spatial coordinate telemetry, reducing manual game-tagging time by approximately 30%.",
        "Generated automated game summaries based on spatial coordinates and event triggers, delivering tactical insights with an inference latency of under 5 seconds per clip segment.",
      ],
      tech: ["Python", "Computer Vision", "OpenCV", "Deep Learning", "Spatial Analytics", "Video Processing"],
    },
    {
      period: "May 2025 – December 2025",
      role: "ML & Full-Stack Developer",
      company: "Freelance",
      location: "Indonesia",
      bullets: [
        "Built custom interactive data dashboards to seamlessly render complex analytics, engineering database queries to handle live datasets of up to 10,000 rows with optimized response times.",
        "Developed and delivered 3 responsive digital applications and marketplace platforms, integrating data pipelines and modern user interfaces that increased client engagement.",
        "Optimized frontend architectures and data fetching strategies, reducing average page load times by roughly 20% and improving overall system throughput.",
      ],
      tech: ["Python", "TypeScript", "Next.js", "React", "Node.js", "PostgreSQL"],
    },
  ];

  const education = {
    degree: "Bachelor of Computer, Information System",
    period: "August 2023 – August 2027",
    location: "Surabaya, Indonesia",
    details:
      "Specializing in applied machine learning, neural networks, computer vision, data analytics, and database systems architecture.",
  };

  const certifications = [
    {
      name: "Kecerdasan Artifisial (Micro Skill)",
      issuer: "Artificial Intelligence Foundation",
    },
    {
      name: "Data Visualization Foundation",
      issuer: "Analytics & Visual Representation",
    },
    {
      name: "Getting Started Programming with Python",
      issuer: "Software Development",
    },
    {
      name: "Microsoft Office Specialist: Word Associate",
      issuer: "Word and Word 2019",
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 relative overflow-hidden bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-900 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-14 space-y-2">
          <span className="text-xs font-mono tracking-wider text-teal-600 dark:text-teal-400 uppercase font-semibold">
            Track Record
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white tracking-tight">
            Work Experience &amp; Education
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl text-sm sm:text-base">
            Applied machine learning, deep learning architectures, computer vision pipelines, and production systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Work Experience */}
          <div className="lg:col-span-8 space-y-6">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
              Professional Experience
            </h3>

            {/* Clean Timeline */}
            <div className="relative border-l border-neutral-200 dark:border-neutral-800 ml-2 sm:ml-2.5 space-y-6 pb-2">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-6 sm:pl-8 group">
                  {/* Understated Minimal Node */}
                  <div className="absolute -left-[5px] top-6 h-2.5 w-2.5 rounded-full bg-neutral-400 dark:bg-neutral-600 ring-4 ring-white dark:ring-neutral-950 group-hover:bg-teal-500 transition-colors" />

                  {/* Experience Card */}
                  <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-6 sm:p-7 backdrop-blur-sm space-y-4 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors">
                    {/* Header: Role, Company & Date */}
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5 border-b border-neutral-200/70 dark:border-neutral-800/80 pb-3.5">
                      <div>
                        <h4 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white tracking-tight">
                          {exp.role}
                        </h4>
                        <div className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-medium mt-0.5">
                          {exp.company} <span className="text-neutral-400 dark:text-neutral-600">&bull;</span> {exp.location}
                        </div>
                      </div>

                      <div className="text-xs font-mono text-neutral-500 shrink-0">
                        {exp.period}
                      </div>
                    </div>

                    {/* Bullet Points with Authentic Bullet Dots */}
                    <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5">
                          <span className="text-neutral-400 dark:text-neutral-600 select-none mt-0.5 text-sm leading-none">&bull;</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-200/60 dark:border-neutral-800/60">
                      {exp.tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800/70 text-neutral-600 dark:text-neutral-400 font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education, Certifications & Languages */}
          <div className="lg:col-span-4 space-y-8">
            {/* Education Card */}
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
                Education
              </h3>
              <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-6 backdrop-blur-sm space-y-3">
                <div className="flex items-baseline justify-between gap-2 text-xs font-mono text-neutral-500">
                  <span>{education.period}</span>
                  <span>{education.location}</span>
                </div>
                <h4 className="font-bold text-base text-neutral-900 dark:text-white leading-snug">
                  {education.degree}
                </h4>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 pt-3 border-t border-neutral-200/60 dark:border-neutral-800/60 leading-relaxed">
                  {education.details}
                </p>
              </div>
            </div>

            {/* Certifications Card */}
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
                Certifications
              </h3>
              <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-6 backdrop-blur-sm divide-y divide-neutral-200/60 dark:divide-neutral-800/60">
                {certifications.map((cert, cIdx) => (
                  <div key={cIdx} className="py-2.5 first:pt-0 last:pb-0">
                    <h5 className="font-semibold text-xs text-neutral-900 dark:text-neutral-200">
                      {cert.name}
                    </h5>
                    <p className="text-[11px] text-neutral-500 mt-0.5">
                      {cert.issuer}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages Card with Realtime Duolingo Sync */}
            <LanguagesCard />

            {/* LeetCode Statistics with Realtime GraphQL Sync */}
            <LeetCodeCard />
          </div>
        </div>
      </div>
    </section>
  );
}
