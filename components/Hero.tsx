"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] pt-28 pb-16 flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Minimalist Typography & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.1]">
              Hi, I&apos;m Achmad <br className="hidden sm:inline" />
              Raihan.
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-xl leading-relaxed">
              A passionate developer and Information Systems student based in Surabaya. Experienced in building AI-powered computer vision systems, deep learning anomaly detection models, and full-stack digital platforms.
            </p>

            {/* Pill-shaped Buttons & Social Links matching reference */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-neutral-950 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 px-6 py-3 text-sm font-semibold transition-colors shadow-sm"
              >
                <span>View Projects</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center rounded-full border border-neutral-300 bg-white hover:bg-neutral-100 text-neutral-800 dark:border-neutral-700 dark:bg-neutral-900/60 dark:hover:bg-neutral-800 dark:text-neutral-200 px-6 py-3 text-sm font-medium transition-colors"
              >
                Let&apos;s Talk
              </a>

              <div className="flex items-center gap-2 pl-2">
                <a
                  href="https://github.com/Achmad96"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                  className="p-2.5 rounded-full border border-neutral-200 bg-neutral-100 text-neutral-600 hover:text-neutral-950 hover:bg-neutral-200 dark:border-neutral-800 dark:bg-neutral-900/80 dark:text-neutral-400 dark:hover:text-white transition-colors"
                >
                  <Github className="h-4 w-4" />
                </a>

                <a
                  href="https://www.linkedin.com/in/achmad-raihan-mamad"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                  className="p-2.5 rounded-full border border-neutral-200 bg-neutral-100 text-neutral-600 hover:text-neutral-950 hover:bg-neutral-200 dark:border-neutral-800 dark:bg-neutral-900/80 dark:text-neutral-400 dark:hover:text-white transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                </a>

                <a
                  href="mailto:work.achmadraihan@gmail.com"
                  title="Email"
                  className="p-2.5 rounded-full border border-neutral-200 bg-neutral-100 text-neutral-600 hover:text-neutral-950 hover:bg-neutral-200 dark:border-neutral-800 dark:bg-neutral-900/80 dark:text-neutral-400 dark:hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Organic Pebble Shape (Not a rigid circle) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Soft ambient backlight */}
              <div
                className="absolute -inset-4 bg-teal-500/10 dark:bg-teal-500/15 blur-2xl pointer-events-none transition-all"
                style={{ borderRadius: "62% 38% 56% 44% / 42% 58% 42% 58%" }}
              />

              {/* Asymmetric Organic Pebble Avatar Frame matching reference */}
              <div
                className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] overflow-hidden border-2 border-neutral-200/80 dark:border-neutral-700/80 ring-4 sm:ring-8 ring-white/90 dark:ring-neutral-800/80 bg-gradient-to-b from-neutral-200/90 via-neutral-100 to-neutral-200/60 dark:from-neutral-800/90 dark:via-neutral-900 dark:to-neutral-950 shadow-2xl flex items-center justify-center transition-all duration-500"
                style={{ borderRadius: "62% 38% 56% 44% / 42% 58% 42% 58%" }}
              >
                <Image
                  src="/profile-avatar.png"
                  alt="Achmad Raihan"
                  fill
                  priority
                  className="object-cover object-center scale-105"
                  sizes="(max-width: 768px) 320px, 420px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
