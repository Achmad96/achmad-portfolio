"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface LeetCodeStats {
  success: boolean;
  username: string;
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  ranking: number;
  profileUrl: string;
}

export default function LeetCodeCard() {
  const [stats, setStats] = useState<LeetCodeStats | null>(null);

  useEffect(() => {
    const fetchLeetCode = () => {
      fetch("/api/leetcode")
        .then((res) => (res.ok ? res.json() : null))
        .then((json) => {
          if (json && json.success) {
            setStats(json);
          }
        })
        .catch(() => {
          // Fallback handled gracefully
        });
    };

    fetchLeetCode();

    // Revalidate every 5 minutes when tab is visible
    const interval = setInterval(() => {
      if (typeof document !== "undefined" && document.visibilityState === "visible") {
        fetchLeetCode();
      }
    }, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  const total = stats?.totalSolved || 0;
  const easy = stats?.easySolved || 0;
  const medium = stats?.mediumSolved || 0;
  const hard = stats?.hardSolved || 0;
  const username = stats?.username || "Achmad96";
  const profileUrl = stats?.profileUrl || `https://leetcode.com/u/${username}/`;
  const ranking = stats?.ranking ? stats.ranking.toLocaleString() : "2,440,715";

  const easyPercent = total > 0 ? (easy / total) * 100 : 0;
  const mediumPercent = total > 0 ? (medium / total) * 100 : 0;
  const hardPercent = total > 0 ? (hard / total) * 100 : 0;

  return (
    <div>
      {/* Clean section header matching Education, Certifications & Languages */}
      <h3 className="mb-4 text-lg font-semibold text-neutral-900 dark:text-white">LeetCode</h3>

      {/* Understated Card */}
      <div className="space-y-4 rounded-2xl border border-neutral-200 bg-neutral-50/50 p-6 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/40">
        {/* Total Solved Overview */}
        <div className="flex items-baseline justify-between">
          <div>
            <span className="block font-mono text-xs tracking-wider text-neutral-500 uppercase">Problems Solved</span>
            <div className="mt-0.5 text-2xl font-bold text-neutral-900 dark:text-white">{total}</div>
          </div>
          <div className="text-right">
            <span className="block font-mono text-xs tracking-wider text-neutral-500 uppercase">Global Rank</span>
            <span className="font-mono text-xs font-medium text-neutral-700 dark:text-neutral-300">#{ranking}</span>
          </div>
        </div>

        {/* Minimal Segmented Ratio Bar */}
        <div className="flex h-1.5 w-full gap-0.5 overflow-hidden rounded-full bg-neutral-200/80 dark:bg-neutral-800">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${easyPercent}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="h-full bg-emerald-500"
            title={`Easy: ${easy}`}
          />
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${mediumPercent}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="h-full bg-amber-500"
            title={`Medium: ${medium}`}
          />
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${hardPercent}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="h-full bg-rose-500"
            title={`Hard: ${hard}`}
          />
        </div>

        {/* Difficulty Breakdown Badges */}
        <div className="grid grid-cols-3 gap-2 pt-1 text-center font-mono">
          <div className="rounded-lg bg-neutral-100/80 px-1.5 py-2 dark:bg-neutral-800/50">
            <div className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">Easy</div>
            <div className="mt-0.5 text-sm font-bold text-neutral-900 dark:text-neutral-100">{easy}</div>
          </div>
          <div className="rounded-lg bg-neutral-100/80 px-1.5 py-2 dark:bg-neutral-800/50">
            <div className="text-[10px] font-semibold text-amber-600 dark:text-amber-400">Medium</div>
            <div className="mt-0.5 text-sm font-bold text-neutral-900 dark:text-neutral-100">{medium}</div>
          </div>
          <div className="rounded-lg bg-neutral-100/80 px-1.5 py-2 dark:bg-neutral-800/50">
            <div className="text-[10px] font-semibold text-rose-600 dark:text-rose-400">Hard</div>
            <div className="mt-0.5 text-sm font-bold text-neutral-900 dark:text-neutral-100">{hard}</div>
          </div>
        </div>

        {/* Footer Link to Profile */}
        <div className="flex items-center justify-between border-t border-neutral-200/60 pt-3 text-[11px] text-neutral-500 dark:border-neutral-800/60">
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
            <span>Algorithm &amp; Data Structures</span>
          </div>

          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
          >
            <span>@{username}</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
