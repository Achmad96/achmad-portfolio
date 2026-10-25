"use client";

import React, { useState } from "react";
import {
  Code2,
  BrainCircuit,
  Database,
  Server,
  Check,
  GraduationCap,
  Building2,
  Languages,
  Mail,
  Copy,
  CheckCheck,
  Sparkles,
} from "lucide-react";
import { toast } from "sonner";

export default function About() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "work.achmadraihan@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    toast.success("Email copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  const pillars = [
    {
      icon: <BrainCircuit className="h-5 w-5 text-teal-600 dark:text-teal-400" />,
      title: "AI & Computer Vision",
      description:
        "Developing deep learning anomaly classifiers, Nvidia NeMo synthetic data pipelines, and real-time computer vision player/ball tracking algorithms.",
    },
    {
      icon: <Code2 className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />,
      title: "Full-Stack Web Development",
      description:
        "Building responsive digital marketplaces, interactive dashboards, and client portals with Next.js, React, TypeScript, and Node.js REST APIs.",
    },
    {
      icon: <Database className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
      title: "Data Analytics & Optimization",
      description:
        "Engineering database queries to handle live datasets of up to 10,000+ rows with optimized rendering times, and creating Streamlit visualization tools.",
    },
    {
      icon: <Server className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />,
      title: "Information Systems & ERP",
      description:
        "Designing enterprise workflows, smart village administration systems (Sumbermalang SMART), and clinical health administration software in Java & SQL.",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-12 space-y-2">
          <span className="text-xs font-mono tracking-wider text-teal-600 dark:text-teal-400 uppercase font-semibold">
            Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white tracking-tight">
            About &amp; Core Competencies
          </h2>
        </div>

        {/* Narrative & Restyled Profile Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-14">
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
            <p>
              I am an <strong className="text-neutral-900 dark:text-white font-semibold">Information Systems student &amp; software engineer</strong> based in Surabaya, studying at <strong className="text-neutral-900 dark:text-white font-semibold">UIN Sunan Ampel (UINSA)</strong>. My work focuses on building resilient full-stack applications and deploying practical machine learning models.
            </p>
            <p>
              My technical experience spans computer vision pipelines that track dynamic player and ball movement in real-time match footage at <strong className="text-neutral-900 dark:text-white font-semibold">Captiveau</strong>, as well as developing deep learning anomaly detection architectures and synthetic transactional data generators using Nvidia NeMo at <strong className="text-neutral-900 dark:text-white font-semibold">PT Jasa Web Indonesia</strong>.
            </p>
            <p>
              On the web and systems front, I engineer digital platforms and community marketplaces—such as <strong className="text-neutral-900 dark:text-white font-semibold">UMKM Desa Keduyung</strong> and <strong className="text-neutral-900 dark:text-white font-semibold">Sumbermalang SMART</strong>—ensuring robust database indexing, smooth data visualization, and streamlined user interfaces.
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-neutral-700 dark:text-neutral-300">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-teal-600 dark:text-teal-400 shrink-0" />
                <span>AI Models &amp; Computer Vision</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-teal-600 dark:text-teal-400 shrink-0" />
                <span>Next.js, TypeScript &amp; Python</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-teal-600 dark:text-teal-400 shrink-0" />
                <span>High-Volume Data Querying</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-teal-600 dark:text-teal-400 shrink-0" />
                <span>Surabaya, East Java, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Right Restyled Profile Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/80 dark:bg-neutral-900/60 p-6 backdrop-blur-md shadow-sm dark:shadow-xl space-y-5 transition-colors">
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-500/10 dark:bg-teal-400/10 text-teal-600 dark:text-teal-400">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-neutral-900 dark:text-white">
                      Professional Profile
                    </h3>
                    <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
                      Academic &amp; Technical Credentials
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-teal-500/10 text-teal-700 dark:text-teal-300 font-medium">
                  Verified
                </span>
              </div>

              {/* Rows */}
              <div className="space-y-3.5 text-xs">
                {/* Degree */}
                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-white dark:bg-neutral-950 border border-neutral-200/80 dark:border-neutral-850">
                  <GraduationCap className="h-4 w-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <div className="text-[11px] font-medium text-neutral-500 dark:text-neutral-400">
                      Degree Program
                    </div>
                    <div className="font-semibold text-neutral-900 dark:text-neutral-100">
                      B.Comp, Information System
                    </div>
                  </div>
                </div>

                {/* University */}
                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-white dark:bg-neutral-950 border border-neutral-200/80 dark:border-neutral-850">
                  <Building2 className="h-4 w-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <div className="text-[11px] font-medium text-neutral-500 dark:text-neutral-400">
                      Institution
                    </div>
                    <div className="font-semibold text-neutral-900 dark:text-neutral-100">
                      UIN Sunan Ampel (UINSA)
                    </div>
                  </div>
                </div>

                {/* Core Stack */}
                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-white dark:bg-neutral-950 border border-neutral-200/80 dark:border-neutral-850">
                  <Code2 className="h-4 w-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <div className="text-[11px] font-medium text-neutral-500 dark:text-neutral-400 mb-1">
                      Primary Stack
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {["Python", "TypeScript", "Java", "C++"].map((lang) => (
                        <span
                          key={lang}
                          className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spoken Languages */}
                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-white dark:bg-neutral-950 border border-neutral-200/80 dark:border-neutral-850">
                  <Languages className="h-4 w-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <div className="text-[11px] font-medium text-neutral-500 dark:text-neutral-400">
                      Spoken Languages
                    </div>
                    <div className="font-semibold text-neutral-900 dark:text-neutral-100">
                      Indonesian (Native) &bull; English &bull; Japanese
                    </div>
                  </div>
                </div>

                {/* Email with copy button */}
                <div className="flex items-center justify-between gap-3 p-2.5 rounded-xl bg-white dark:bg-neutral-950 border border-neutral-200/80 dark:border-neutral-850">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <Mail className="h-4 w-4 text-teal-600 dark:text-teal-400 shrink-0" />
                    <div className="truncate">
                      <div className="text-[11px] font-medium text-neutral-500 dark:text-neutral-400">
                        Direct Email
                      </div>
                      <a
                        href={`mailto:${emailAddress}`}
                        className="font-semibold text-teal-600 dark:text-teal-400 hover:underline truncate block"
                      >
                        {emailAddress}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopy}
                    title="Copy Email"
                    className="p-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors shrink-0"
                  >
                    {copied ? (
                      <CheckCheck className="h-3.5 w-3.5 text-emerald-500" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-900/30 p-5 space-y-3 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
            >
              <div className="p-2.5 rounded-lg bg-neutral-200/60 dark:bg-neutral-800/80 w-fit">
                {item.icon}
              </div>
              <h4 className="text-base font-bold text-neutral-900 dark:text-white">{item.title}</h4>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
