"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface LanguageItem {
  name: string;
  level: string;
  percent: number;
  note?: string;
  xp?: number;
}

interface DuolingoResponse {
  success: boolean;
  username: string;
  totalXp: number;
  streak: number;
  profileUrl: string;
}

export default function LanguagesCard() {
  const [duo, setDuo] = useState<DuolingoResponse | null>(null);

  useEffect(() => {
    const fetchDuolingo = () => {
      fetch("/api/duolingo")
        .then((res) => (res.ok ? res.json() : null))
        .then((json) => {
          if (json && json.success) {
            setDuo(json);
          }
        })
        .catch(() => {
          // Silent fallback to static values
        });
    };

    fetchDuolingo();

    // Revalidate every 5 minutes when tab is visible
    const interval = setInterval(() => {
      if (typeof document !== "undefined" && document.visibilityState === "visible") {
        fetchDuolingo();
      }
    }, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  const totalXp = duo?.totalXp || 3689;
  const username = duo?.username || "Achmad96";
  const profileUrl = duo?.profileUrl || `https://www.duolingo.com/profile/${username}`;

  const languages: LanguageItem[] = [
    {
      name: "Indonesian",
      level: "Native / Bilingual",
      percent: 100,
    },
    {
      name: "English",
      level: "Professional Working",
      percent: 85,
      xp: totalXp,
      note: `${totalXp.toLocaleString()} XP`,
    },
    {
      name: "Japanese",
      level: "Elementary",
      percent: 35,
      note: "JLPT N5",
    },
  ];

  return (
    <div>
      {/* Clean section header matching Education & Certifications */}
      <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
        Languages
      </h3>

      {/* Professional Card with subtle interactive micro-animations */}
      <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-900/40 p-6 backdrop-blur-sm space-y-4 shadow-sm hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200">
        <div className="space-y-3.5">
          {languages.map((lang, idx) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              className="group/item -mx-2 px-2 py-1.5 rounded-lg hover:bg-neutral-100/70 dark:hover:bg-neutral-800/40 transition-colors"
            >
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-medium text-neutral-900 dark:text-neutral-200">
                  {lang.name}
                </span>

                <div className="flex items-center gap-2 font-mono text-[11px]">
                  {lang.note && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-neutral-200/70 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 group-hover/item:text-teal-600 dark:group-hover/item:text-teal-400 transition-colors">
                      {lang.note}
                    </span>
                  )}
                  <span className="text-neutral-500">{lang.level}</span>
                </div>
              </div>

              {/* Minimal Animated Track */}
              <div className="h-1 w-full rounded-full bg-neutral-200/80 dark:bg-neutral-800 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.percent}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.15 + idx * 0.1, ease: "easeOut" }}
                  className="h-full rounded-full bg-neutral-700 dark:bg-neutral-300 group-hover/item:bg-teal-600 dark:group-hover/item:bg-teal-400 transition-colors"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Realtime Duolingo Footnote Link */}
        <div className="pt-3 border-t border-neutral-200/60 dark:border-neutral-800/60 flex items-center justify-between text-[11px] text-neutral-500">
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span>Duolingo Active</span>
            <span className="text-neutral-400 dark:text-neutral-600">•</span>
            <span className="font-mono text-neutral-700 dark:text-neutral-300">
              {totalXp.toLocaleString()} XP
            </span>
          </div>

          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            <span>@{username}</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
