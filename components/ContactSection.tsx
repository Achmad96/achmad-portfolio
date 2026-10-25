"use client";

import React, { useState } from "react";
import { Mail, MapPin, Github, Linkedin, Copy, Check, ExternalLink } from "lucide-react";
import { toast } from "sonner";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const emailAddress = "work.achmadraihan@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    toast.success("Email copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  const getEmailContent = () => {
    const subjectText = formData.subject.trim()
      ? formData.subject.trim()
      : `Portfolio Inquiry from ${formData.name.trim() || "Visitor"}`;

    const bodyText = `Hi Raihan,\n\n${formData.message.trim()}\n\n---\nSender: ${formData.name.trim() || "Anonymous"}\nEmail: ${formData.email.trim() || "Not provided"}`;

    return { subjectText, bodyText };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("Please fill in your name, email, and message.");
      return;
    }

    const { subjectText, bodyText } = getEmailContent();

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      emailAddress
    )}&su=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(bodyText)}`;

    window.open(gmailUrl, "_blank", "noopener,noreferrer");
    toast.success("Opening Gmail with your message...");
  };

  const handleMailto = () => {
    const { subjectText, bodyText } = getEmailContent();

    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subjectText
    )}&body=${encodeURIComponent(bodyText)}`;
  };

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-900 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-12 space-y-2">
          <span className="text-xs font-mono tracking-wider text-teal-600 dark:text-teal-400 uppercase font-semibold">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl text-sm sm:text-base">
            Have a project in mind, an opportunity, or just want to connect? Send a message and let&apos;s talk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                Let&apos;s build something together
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                I&apos;m always open to discussing machine learning engineering, computer vision research, full-stack projects, or collaboration opportunities.
              </p>
            </div>

            {/* Email Card */}
            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-5 flex items-center justify-between gap-4 transition-colors">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[11px] font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                    Email
                  </span>
                  <a
                    href={`mailto:${emailAddress}`}
                    className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 hover:text-teal-600 dark:hover:text-teal-400 transition-colors truncate block"
                  >
                    {emailAddress}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-2 rounded-lg text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200/50 dark:hover:bg-neutral-800 transition-colors shrink-0 cursor-pointer"
                title="Copy email"
                aria-label="Copy email"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-emerald-500" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </button>
            </div>

            {/* Location Card */}
            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-5 flex items-center gap-3.5 transition-colors">
              <div className="p-2.5 rounded-xl bg-neutral-200/60 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 shrink-0">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <span className="block text-[11px] font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                  Location
                </span>
                <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                  Surabaya, East Java, Indonesia
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-2.5 pt-2">
              <span className="block text-[11px] font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                Profiles
              </span>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://github.com/Achmad96"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 px-4 py-2.5 text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/achmad-raihan-mamad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 px-4 py-2.5 text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
                >
                  <Linkedin className="h-4 w-4 text-sky-600 dark:text-sky-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-6 sm:p-8 backdrop-blur-sm transition-colors">
              <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5"
                    >
                      Your Name <span className="text-teal-600 dark:text-teal-400">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-4 py-2.5 text-xs sm:text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-600 focus:border-teal-500 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5"
                    >
                      Your Email <span className="text-teal-600 dark:text-teal-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-4 py-2.5 text-xs sm:text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-600 focus:border-teal-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Project inquiry or collaboration"
                    className="w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-4 py-2.5 text-xs sm:text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-600 focus:border-teal-500 focus:outline-none transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5"
                  >
                    Message <span className="text-teal-600 dark:text-teal-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here..."
                    className="w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-4 py-2.5 text-xs sm:text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-600 focus:border-teal-500 focus:outline-none transition-colors resize-y"
                  />
                </div>

                {/* Submit Action: Direct to Gmail Web with prefilled content */}
                <div className="pt-2 space-y-3">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-neutral-950 px-5 py-3 text-sm font-semibold transition-all shadow-xs cursor-pointer group"
                  >
                    <span>Send via Gmail</span>
                    <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>

                  <div className="flex items-center justify-center gap-1.5 text-xs text-neutral-500">
                    <span>Don&apos;t use Gmail?</span>
                    <button
                      type="button"
                      onClick={handleMailto}
                      className="text-teal-600 dark:text-teal-400 hover:underline font-medium cursor-pointer"
                    >
                      Open default email app
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
