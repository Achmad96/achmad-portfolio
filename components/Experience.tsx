"use client";

import React from "react";
import { Briefcase, GraduationCap, Award, Languages, MapPin, Calendar, CheckCircle2 } from "lucide-react";

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
    school: "UIN Sunan Ampel (UINSA)",
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

  const languages = [
    { name: "Indonesian", level: "Native / Bilingual" },
    { name: "English", level: "Professional Working" },
    { name: "Japanese", level: "Elementary" },
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
          <div className="lg:col-span-8 space-y-8">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-teal-600 dark:text-teal-400" />
              <span>Professional Experience</span>
            </h3>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/80 dark:bg-neutral-900/40 p-6 backdrop-blur-sm space-y-4 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h4 className="text-lg font-bold text-neutral-900 dark:text-white">{exp.role}</h4>
                      <div className="text-sm font-semibold text-teal-600 dark:text-teal-400 mt-0.5">
                        {exp.company}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-mono text-neutral-600 dark:text-neutral-400 bg-white dark:bg-neutral-950 px-2.5 py-1 rounded border border-neutral-200 dark:border-neutral-800">
                        {exp.period}
                      </span>
                      <div className="text-xs text-neutral-500 mt-1">{exp.location}</div>
                    </div>
                  </div>

                  <ul className="space-y-2 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-teal-500 mt-2 shrink-0" />
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-neutral-200 dark:border-neutral-800/80">
                    {exp.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300"
                      >
                        {t}
                      </span>
                    ))}
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
              <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/80 dark:bg-neutral-900/40 p-5 space-y-2.5">
                <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 block font-medium">{education.period}</span>
                <h4 className="font-bold text-base text-neutral-900 dark:text-white">{education.degree}</h4>
                <div className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">{education.school}</div>
                <div className="text-xs text-neutral-500 flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  <span>{education.location}</span>
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 pt-2 border-t border-neutral-200 dark:border-neutral-800/80 leading-relaxed">
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
              <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/80 dark:bg-neutral-900/40 p-5 space-y-3">
                {certifications.map((cert, cIdx) => (
                  <div key={cIdx} className="pb-2.5 border-b border-neutral-200 dark:border-neutral-800/70 last:border-b-0 last:pb-0">
                    <h5 className="font-semibold text-xs text-neutral-800 dark:text-neutral-200">{cert.name}</h5>
                    <p className="text-[11px] text-neutral-500 mt-0.5">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages Card */}
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white flex items-center gap-2 mb-4">
                <Languages className="h-5 w-5 text-indigo-500" />
                <span>Languages</span>
              </h3>
              <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/80 dark:bg-neutral-900/40 p-5 space-y-2.5">
                {languages.map((lang, lIdx) => (
                  <div key={lIdx} className="flex items-center justify-between text-xs">
                    <span className="font-medium text-neutral-800 dark:text-neutral-200">{lang.name}</span>
                    <span className="text-neutral-500 font-mono text-[11px]">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
