"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import SpotifyStatus from "@/components/SpotifyStatus";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-900 bg-white dark:bg-neutral-950 py-10 relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-neutral-200 dark:border-neutral-900">
          <div className="flex flex-col items-center md:items-start space-y-1">
            <Link href="/" className="text-xl font-black text-neutral-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
              AR.
            </Link>
            <p className="text-xs text-neutral-500">
              Aspiring Machine Learning Engineer &bull; Information Systems
            </p>
          </div>

          {/* Spotify Live Status */}
          <SpotifyStatus />

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Achmad96"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors"
              title="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/achmad-raihan-mamad"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:work.achmadraihan@gmail.com"
              className="p-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors"
              title="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>&copy; {new Date().getFullYear()} Achmad Raihan.</p>
          <div className="flex items-center gap-4">
            <Link href="#about" className="hover:text-neutral-900 dark:hover:text-neutral-300 transition-colors">
              About
            </Link>
            <Link href="#experience" className="hover:text-neutral-900 dark:hover:text-neutral-300 transition-colors">
              Experience
            </Link>
            <Link href="#projects" className="hover:text-neutral-900 dark:hover:text-neutral-300 transition-colors">
              Projects
            </Link>
            <Link href="#skills" className="hover:text-neutral-900 dark:hover:text-neutral-300 transition-colors">
              Skills
            </Link>
            <Link href="/articles" className="hover:text-neutral-900 dark:hover:text-neutral-300 transition-colors">
              Articles
            </Link>
            <Link href="#contact" className="hover:text-neutral-900 dark:hover:text-neutral-300 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
