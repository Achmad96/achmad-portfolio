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
  }, []);

  const total = stats?.totalSolved || 61;
  const easy = stats?.easySolved || 38;
  const medium = stats?.mediumSolved || 22;
  const hard = stats?.hardSolved || 1;
  const username = stats?.username || "Achmad96";
  const profileUrl = stats?.profileUrl || `https://leetcode.com/u/${username}/`;
  const ranking = stats?.ranking ? stats.ranking.toLocaleString() : "2,440,715";

  const easyPercent = total > 0 ? (easy / total) * 100 : 0;
  const mediumPercent = total > 0 ? (medium / total) * 100 : 0;
  const hardPercent = total > 0 ? (hard / total) * 100 : 0;

  return (
    <div>
      {/* Clean section header matching Education, Certifications & Languages */}
      <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
        LeetCode
      </h3>

      {/* Understated Card */}
      <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-6 backdrop-blur-sm space-y-4">
        {/* Total Solved Overview */}
        <div className="flex items-baseline justify-between">
          <div>
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block">
              Problems Solved
            </span>
            <div className="text-2xl font-bold text-neutral-900 dark:text-white mt-0.5">
              {total}
            </div>
          </div>
          <div className="text-right">
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block">
              Global Rank
            </span>
            <span className="text-xs font-mono text-neutral-700 dark:text-neutral-300 font-medium">
              #{ranking}
            </span>
          </div>
        </div>

        {/* Minimal Segmented Ratio Bar */}
        <div className="h-1.5 w-full rounded-full bg-neutral-200/80 dark:bg-neutral-800 overflow-hidden flex gap-0.5">
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
          <div className="py-2 px-1.5 rounded-lg bg-neutral-100/80 dark:bg-neutral-800/50">
            <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">
              Easy
            </div>
            <div className="text-sm font-bold text-neutral-900 dark:text-neutral-100 mt-0.5">
              {easy}
            </div>
          </div>
          <div className="py-2 px-1.5 rounded-lg bg-neutral-100/80 dark:bg-neutral-800/50">
            <div className="text-[10px] text-amber-600 dark:text-amber-400 font-semibold">
              Medium
            </div>
            <div className="text-sm font-bold text-neutral-900 dark:text-neutral-100 mt-0.5">
              {medium}
            </div>
          </div>
          <div className="py-2 px-1.5 rounded-lg bg-neutral-100/80 dark:bg-neutral-800/50">
            <div className="text-[10px] text-rose-600 dark:text-rose-400 font-semibold">
              Hard
            </div>
            <div className="text-sm font-bold text-neutral-900 dark:text-neutral-100 mt-0.5">
              {hard}
            </div>
          </div>
        </div>

        {/* Footer Link to Profile */}
        <div className="pt-3 border-t border-neutral-200/60 dark:border-neutral-800/60 flex items-center justify-between text-[11px] text-neutral-500">
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
            <span>Algorithm &amp; Data Structures</span>
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

