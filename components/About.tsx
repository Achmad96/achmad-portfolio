"use client";

import React, { useState } from "react";
import { Copy, CheckCheck } from "lucide-react";
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

  return (
    <section id="about" className="relative overflow-hidden border-t border-neutral-200 bg-white py-24 transition-colors dark:border-neutral-900 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-12 flex flex-col items-start space-y-2">
          <span className="font-mono text-xs font-semibold tracking-wider text-teal-600 uppercase dark:text-teal-400">Background</span>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">About &amp; Core Competencies</h2>
        </div>

        {/* Narrative & Profile Details */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Narrative: Clean, authentic human paragraphs */}
          <div className="space-y-5 text-sm leading-relaxed text-neutral-600 sm:text-base lg:col-span-7 dark:text-neutral-300">
            <p>
              I am a <strong className="font-semibold text-neutral-900 dark:text-white">software engineer and Information Systems student</strong> based in Surabaya, Indonesia. My work centers on
              building resilient full-stack applications and deploying practical machine learning models.
            </p>
            <p>
              Rather than treating AI and software development as separate silos, I build systems that connect both: computer vision pipelines for real-time spatial motion tracking in video feeds,
              deep learning architectures for anomaly detection on high-volume transactional data, and responsive web platforms optimized for fast querying and clean interaction.
            </p>
            <p>I value clean architecture, low-latency processing, and software that solves tangible operational problems efficiently.</p>
          </div>

          {/* Right Column: Clean, understated spec sheet (No nested pills, no fake badges) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50/50 p-6 backdrop-blur-sm sm:p-7 dark:border-neutral-800 dark:bg-neutral-900/40">
              <h3 className="border-b border-neutral-200 pb-3 font-mono text-xs font-semibold tracking-wider text-neutral-500 uppercase dark:border-neutral-800 dark:text-neutral-400">
                Profile &amp; Details
              </h3>

              <div className="divide-y divide-neutral-200/80 text-xs sm:text-sm dark:divide-neutral-800/80">
                <div className="flex items-baseline justify-between gap-4 py-3.5">
                  <span className="shrink-0 font-medium text-neutral-500">Degree</span>
                  <span className="text-right font-medium text-neutral-900 dark:text-neutral-100">S.Kom, Information System</span>
                </div>

                <div className="flex items-baseline justify-between gap-4 py-3.5">
                  <span className="shrink-0 font-medium text-neutral-500">Location</span>
                  <span className="text-right font-medium text-neutral-900 dark:text-neutral-100">Surabaya, Indonesia</span>
                </div>

                <div className="flex items-baseline justify-between gap-4 py-3.5">
                  <span className="shrink-0 font-medium text-neutral-500">Primary Stack</span>
                  <span className="text-right font-mono text-xs text-neutral-900 dark:text-neutral-100">Python, TypeScript, Java, C++</span>
                </div>

                <div className="flex items-baseline justify-between gap-4 py-3.5">
                  <span className="shrink-0 font-medium text-neutral-500">Languages</span>
                  <span className="text-right text-neutral-900 dark:text-neutral-100">Indonesian (Native), English, Japanese</span>
                </div>

                <div className="flex items-center justify-between gap-4 pt-3.5">
                  <span className="shrink-0 font-medium text-neutral-500">Email</span>
                  <div className="flex items-center gap-2">
                    <a href={`mailto:${emailAddress}`} className="text-right font-medium text-neutral-900 transition-colors hover:text-teal-600 dark:text-neutral-100 dark:hover:text-teal-400">
                      {emailAddress}
                    </a>
                    <button onClick={handleCopy} title="Copy Email" className="cursor-pointer rounded p-1 text-neutral-400 transition-colors hover:text-neutral-900 dark:hover:text-white">
                      {copied ? <CheckCheck className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
