"use client";

import React from "react";
import LanguagesCard from "@/components/LanguagesCard";
import LeetCodeCard from "@/components/LeetCodeCard";

export default function Experience() {
  const experiences = [
    {
      period: "January 2026 - May 2026",
      role: "Technical Programmer",
      company: "PT Jasa Web Indonesia (Webtocrat Motion Group)",
      location: "Surabaya, Indonesia",
      bullets: [
        "Achieved an accuracy rate of 98% on the held-out inference dataset by developing and optimizing a deep learning architecture aimed at detecting anomalies in financial transactions through supervised learning.",
        "Built a synthetic transaction generator using Nvidia NeMo Data Designer to solve acute class imbalance and support the training of robust fraud detection models.",
        "Utilized diffusion models and modern computer vision techniques to develop an intelligent image editing application capable of automated manipulation in production.",
      ],
      tech: ["Python", "Nvidia NeMo", "Machine Learning", "Diffusion Models"],
    },
    {
      period: "January 2026 - April 2026",
      role: "AI Engineer",
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
      period: "May 2025 - December 2025",
      role: "Software Engineer",
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
    details: "Specializing in applied machine learning, neural networks, computer vision, data analytics, and database systems architecture.",
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
    <section id="experience" className="relative overflow-hidden border-t border-neutral-200 bg-white py-24 transition-colors dark:border-neutral-900 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-14 flex flex-col items-start space-y-2">
          <span className="font-mono text-xs font-semibold tracking-wider text-teal-600 uppercase dark:text-teal-400">Track Record</span>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">Work Experience &amp; Education</h2>
          <p className="max-w-2xl text-sm text-neutral-600 sm:text-base dark:text-neutral-400">
            Applied machine learning, deep learning architectures, computer vision pipelines, and production systems.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Work Experience */}
          <div className="space-y-6 lg:col-span-8">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Professional Experience</h3>

            {/* Clean Timeline */}
            <div className="relative ml-2 space-y-6 border-l border-neutral-200 pb-2 sm:ml-2.5 dark:border-neutral-800">
              {experiences.map((exp, index) => (
                <div key={index} className="group relative pl-6 sm:pl-8">
                  {/* Understated Minimal Node */}
                  <div className="absolute top-6 -left-[5px] h-2.5 w-2.5 rounded-full bg-neutral-400 ring-4 ring-white transition-colors group-hover:bg-teal-500 dark:bg-neutral-600 dark:ring-neutral-950" />

                  {/* Experience Card */}
                  <div className="space-y-4 rounded-2xl border border-neutral-200 bg-neutral-50/50 p-6 backdrop-blur-sm transition-colors hover:border-neutral-300 sm:p-7 dark:border-neutral-800 dark:bg-neutral-900/40 dark:hover:border-neutral-700">
                    {/* Header: Role, Company & Date */}
                    <div className="flex flex-col justify-between gap-1.5 border-b border-neutral-200/70 pb-3.5 sm:flex-row sm:items-baseline dark:border-neutral-800/80">
                      <div>
                        <h4 className="text-base font-bold tracking-tight text-neutral-900 sm:text-lg dark:text-white">{exp.role}</h4>
                        <div className="mt-0.5 text-xs font-medium text-neutral-600 sm:text-sm dark:text-neutral-400">
                          {exp.company} <span className="text-neutral-400 dark:text-neutral-600">&bull;</span> {exp.location}
                        </div>
                      </div>

                      <div className="shrink-0 font-mono text-xs text-neutral-500">{exp.period}</div>
                    </div>

                    {/* Bullet Points with Authentic Bullet Dots */}
                    <ul className="space-y-2.5 text-xs leading-relaxed text-neutral-600 sm:text-sm dark:text-neutral-300">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5">
                          <span className="mt-0.5 text-sm leading-none text-neutral-400 select-none dark:text-neutral-600">&bull;</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 border-t border-neutral-200/60 pt-3 dark:border-neutral-800/60">
                      {exp.tech.map((t, tIdx) => (
                        <span key={tIdx} className="rounded bg-neutral-100 px-2 py-0.5 font-mono text-[11px] font-medium text-neutral-600 dark:bg-neutral-800/70 dark:text-neutral-400">
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
          <div className="space-y-8 lg:col-span-4">
            {/* Education Card */}
            <div>
              <h3 className="mb-4 text-lg font-semibold text-neutral-900 dark:text-white">Education</h3>
              <div className="space-y-3 rounded-2xl border border-neutral-200 bg-neutral-50/50 p-6 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/40">
                <div className="flex items-baseline justify-between gap-2 font-mono text-xs text-neutral-500">
                  <span>{education.period}</span>
                  <span>{education.location}</span>
                </div>
                <h4 className="text-base leading-snug font-bold text-neutral-900 dark:text-white">{education.degree}</h4>
                <p className="border-t border-neutral-200/60 pt-3 text-xs leading-relaxed text-neutral-600 dark:border-neutral-800/60 dark:text-neutral-400">{education.details}</p>
              </div>
            </div>

            {/* Certifications Card */}
            <div>
              <h3 className="mb-4 text-lg font-semibold text-neutral-900 dark:text-white">Certifications</h3>
              <div className="divide-y divide-neutral-200/60 rounded-2xl border border-neutral-200 bg-neutral-50/50 p-6 backdrop-blur-sm dark:divide-neutral-800/60 dark:border-neutral-800 dark:bg-neutral-900/40">
                {certifications.map((cert, cIdx) => (
                  <div key={cIdx} className="py-2.5 first:pt-0 last:pb-0">
                    <h5 className="text-xs font-semibold text-neutral-900 dark:text-neutral-200">{cert.name}</h5>
                    <p className="mt-0.5 text-[11px] text-neutral-500">{cert.issuer}</p>
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
