import React from "react";
import LanguagesCard from "@/components/LanguagesCard";
import LeetCodeCard from "@/components/LeetCodeCard";
import {
  EXPERIENCES_METADATA,
  EDUCATION_METADATA,
  CERTIFICATIONS_METADATA,
} from "@/constants/ExperienceMetadata";
import { ExternalLink, Linkedin } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden border-t border-neutral-200 bg-white py-24 transition-colors dark:border-neutral-900 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-14 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="space-y-2">
            <span className="font-mono text-xs font-semibold tracking-wider text-teal-600 uppercase dark:text-teal-400">
              Track Record
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">
              Work Experience &amp; Education
            </h2>
            <p className="max-w-2xl text-sm text-neutral-600 sm:text-base dark:text-neutral-400">
              Applied machine learning, deep learning architectures, computer vision pipelines, software developments, and production systems.
            </p>
          </div>
          <a
            href="https://www.linkedin.com/in/achmad-raihan-mamad"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 px-3.5 py-1.5 text-xs font-medium text-neutral-700 transition-colors hover:border-teal-500 hover:text-teal-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:border-teal-400 dark:hover:text-teal-400"
          >
            <Linkedin className="h-3.5 w-3.5 text-sky-600 dark:text-sky-400" />
            <span>LinkedIn Profile</span>
            <ExternalLink className="h-3 w-3 opacity-60" />
          </a>
        </div>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Work Experience */}
          <div className="space-y-6 lg:col-span-8">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Professional Experience</h3>

            {/* Clean Timeline */}
            <div className="relative ml-2 space-y-6 border-l border-neutral-200 pb-2 sm:ml-2.5 dark:border-neutral-800">
              {EXPERIENCES_METADATA.map((exp) => (
                <div key={exp.id} className="group relative pl-6 sm:pl-8">
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
                  <span>{EDUCATION_METADATA.period}</span>
                  <span>{EDUCATION_METADATA.location}</span>
                </div>
                <div>
                  <h4 className="text-base leading-snug font-bold text-neutral-900 dark:text-white">
                    {EDUCATION_METADATA.degree}
                  </h4>
                  <div className="mt-0.5 text-xs font-medium text-teal-600 dark:text-teal-400">
                    {EDUCATION_METADATA.institution}
                  </div>
                </div>
                {EDUCATION_METADATA.gpa && (
                  <div className="font-mono text-xs text-neutral-600 dark:text-neutral-400">
                    GPA: <span className="font-semibold text-neutral-900 dark:text-white">{EDUCATION_METADATA.gpa}</span>
                  </div>
                )}
                <p className="border-t border-neutral-200/60 pt-3 text-xs leading-relaxed text-neutral-600 dark:border-neutral-800/60 dark:text-neutral-400">
                  {EDUCATION_METADATA.details}
                </p>
              </div>
            </div>

            {/* Certifications Card */}
            <div>
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Certifications</h3>
                <span className="font-mono text-[11px] text-teal-600 dark:text-teal-400">Verified</span>
              </div>
              <div className="divide-y divide-neutral-200/60 rounded-2xl border border-neutral-200 bg-neutral-50/50 p-6 backdrop-blur-sm dark:divide-neutral-800/60 dark:border-neutral-800 dark:bg-neutral-900/40">
                {CERTIFICATIONS_METADATA.map((cert) => (
                  <div key={cert.id} className="py-3 first:pt-0 last:pb-0">
                    <div className="flex items-start justify-between gap-2">
                      <h5 className="text-xs font-semibold leading-tight text-neutral-900 dark:text-neutral-200">
                        {cert.name}
                      </h5>
                      {cert.credentialUrl && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Verify Credential"
                          className="shrink-0 text-neutral-400 transition-colors hover:text-teal-600 dark:hover:text-teal-400"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                    <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[11px] text-neutral-500">
                      <span>{cert.issuer}</span>
                      {cert.issueDate && (
                        <>
                          <span className="text-neutral-400 dark:text-neutral-600">&bull;</span>
                          <span className="font-mono">{cert.issueDate}</span>
                        </>
                      )}
                    </div>
                    {cert.credentialId && (
                      <div className="mt-1.5">
                        <span className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-[10px] text-neutral-600 dark:bg-neutral-800/80 dark:text-neutral-400">
                          ID: {cert.credentialId}
                        </span>
                      </div>
                    )}
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
