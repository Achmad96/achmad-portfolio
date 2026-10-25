"use client";

import React from "react";
import { Briefcase, GraduationCap, Award, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import LanguagesCard from "@/components/LanguagesCard";

export default function Experience() {
  const experiences = [
    {
      period: "January 2026 – May 2026",
      role: "Technical Programmer",
      company: "PT Jasa Web Indonesia (Webtocrat Motion Group)",
      location: "Surabaya, Indonesia",
      bullets: [
        "Utilized diffusion models and advanced computer vision techniques to develop an intelligent image editing application capable of automated manipulation.",
        "Built a synthetic transaction generator using Nvidia NeMo Data Designer to support the training of a robust fraud detection model.",
        "Achieved an accuracy rate of 98% on the inference dataset by developing and optimizing a deep learning architecture aimed at detecting anomalies in transaction data through the application of supervised learning techniques.",
      ],
      tech: ["Python", "Nvidia NeMo", "Computer Vision", "Diffusion Models", "Deep Learning"],
    },
    {
      period: "January 2026 – April 2026",
      role: "AI Engineer",
      company: "Captiveau",
      location: "Surabaya, Indonesia",
      bullets: [
        "Engineered an AI-driven match analysis system utilizing computer vision frameworks to detect and track the movement of players and the ball, achieving an 85% tracking accuracy on standard test clips.",
        "Processed hours of video feeds specifically from the commentator's camera angle to extract on-field spatial data, reducing manual game-tagging time by approximately 30%.",
        "Generated automated game summaries based on spatial coordinates and event triggers, delivering tactical insights with a processing latency of under 5 seconds per clip segment.",
      ],
      tech: ["Python", "Computer Vision", "OpenCV", "Spatial Analysis", "Video Processing"],
    },
    {
      period: "May 2025 – December 2025",
      role: "Software Engineer",
      company: "Freelance",
      location: "Indonesia",
      bullets: [
        "Developed responsive, full-stack web applications and digital marketplaces, delivering 3 customized platforms that saw a steady increase in user engagement over the first month of launch.",
        "Built custom interactive dashboards to seamlessly render complex data visualizations, engineering database queries to handle live datasets of up to 10,000 rows with optimized rendering times for end-users.",
        "Optimized front-end architectures and implemented basic SEO practices, reducing average page load times by roughly 20% and improving organic search visibility.",
      ],
      tech: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    },
  ];

  const education = {
    degree: "Bachelor of Computer, Information System",
    period: "August 2023 – August 2027",
    location: "Surabaya, East Java, Indonesia",
    details:
      "Core study in computer science foundations, information systems architecture, relational databases, software engineering, and applied data analytics.",
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
    <section id="experience" className="py-24 relative overflow-hidden bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-16 space-y-2">
          <span className="text-xs font-mono tracking-wider text-teal-600 dark:text-teal-400 uppercase font-semibold">
            Track Record
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white tracking-tight">
            Work Experience &amp; Education
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl text-sm sm:text-base">
            Professional software engineering, AI model development, and computer vision roles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Work Experience Timeline */}
          <div className="lg:col-span-8 space-y-6">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-teal-600 dark:text-teal-400" />
              <span>Professional Experience</span>
            </h3>

            {/* Vertical Timeline Track */}
            <div className="relative border-l-2 border-neutral-200 dark:border-neutral-800 ml-3 sm:ml-4 space-y-8 pb-2">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-6 sm:pl-8 group">
                  {/* Timeline Node Pin with pulse on most recent */}
                  <div className="absolute -left-[13px] sm:-left-[15px] top-6 flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full border-2 border-teal-500 bg-white dark:bg-neutral-950 text-teal-600 dark:text-teal-400 shadow-sm group-hover:scale-110 group-hover:border-teal-400 group-hover:shadow-[0_0_12px_rgba(20,184,166,0.35)] transition-all">
                    {index === 0 && (
                      <span className="absolute inset-0 rounded-full bg-teal-400 opacity-25 animate-ping" />
                    )}
                    <span className="h-2 w-2 rounded-full bg-teal-500 group-hover:scale-125 transition-transform" />
                  </div>

                  {/* Timeline Card */}
                  <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-900/40 p-6 backdrop-blur-sm space-y-4 hover:border-neutral-300 dark:hover:border-neutral-700 shadow-sm transition-all duration-300 group-hover:translate-x-1">
                    {/* Top Details */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-200/70 dark:border-neutral-800/80 pb-3.5">
                      <div>
                        <h4 className="text-lg font-bold text-neutral-900 dark:text-white tracking-tight">
                          {exp.role}
                        </h4>
                        <div className="text-sm font-semibold text-teal-600 dark:text-teal-400 mt-0.5">
                          {exp.company}
                        </div>
                      </div>

                      <div className="flex flex-wrap sm:flex-col sm:items-end gap-1.5 sm:gap-1">
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-700 dark:text-neutral-300 bg-white dark:bg-neutral-950 px-2.5 py-1 rounded-lg border border-neutral-200 dark:border-neutral-800 font-medium">
                          <Calendar className="h-3.5 w-3.5 text-teal-600 dark:text-teal-400" />
                          <span>{exp.period}</span>
                        </span>
                        <span className="inline-flex items-center gap-1 text-[11px] text-neutral-500">
                          <MapPin className="h-3 w-3" />
                          <span>{exp.location}</span>
                        </span>
                      </div>
                    </div>

                    {/* Bullet Points */}
                    <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="h-4 w-4 text-teal-500 mt-0.5 shrink-0" />
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-200/70 dark:border-neutral-800/80">
                      {exp.tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 font-medium"
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
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white flex items-center gap-2 mb-4">
                <GraduationCap className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                <span>Education</span>
              </h3>
              <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-900/40 p-6 backdrop-blur-sm space-y-3 shadow-sm hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors">
                <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 block font-semibold">{education.period}</span>
                <h4 className="font-bold text-base text-neutral-900 dark:text-white leading-snug">{education.degree}</h4>
                <div className="text-xs text-neutral-500 flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  <span>{education.location}</span>
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 pt-3 border-t border-neutral-200/70 dark:border-neutral-800/80 leading-relaxed">
                  {education.details}
                </p>
              </div>
            </div>

            {/* Certifications Card */}
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white flex items-center gap-2 mb-4">
                <Award className="h-5 w-5 text-amber-500" />
                <span>Certifications</span>
              </h3>
              <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-900/40 p-6 backdrop-blur-sm space-y-3.5 shadow-sm hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors">
                {certifications.map((cert, cIdx) => (
                  <div key={cIdx} className="pb-3 border-b border-neutral-200/70 dark:border-neutral-800/70 last:border-b-0 last:pb-0">
                    <h5 className="font-semibold text-xs text-neutral-900 dark:text-neutral-200">{cert.name}</h5>
                    <p className="text-[11px] text-neutral-500 mt-0.5">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages Card with Realtime Duolingo Sync */}
            <LanguagesCard />
          </div>
        </div>
      </div>
    </section>
  );
}
