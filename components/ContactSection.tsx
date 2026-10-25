"use client";

import React, { useState } from "react";
import { Mail, MapPin, Github, Linkedin, Send, Copy, Check } from "lucide-react";
import { toast } from "sonner";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    messages: "",
  });

  const emailAddress = "work.achmadraihan@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    toast.success("Email copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.username.trim() || !formData.messages.trim()) {
      toast.error("Please enter your name and message.");
      return;
    }

    setIsSubmitting(true);
    try {
      const fullMessage = formData.email
        ? `From: ${formData.email}\n\n${formData.messages}`
        : formData.messages;

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formData.username,
          messages: fullMessage,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        toast.success("Message sent successfully!");
        setFormData({ username: "", email: "", messages: "" });
      } else {
        toast.error(data.messages || "Failed to send message. Please email directly.");
      }
    } catch (err) {
      toast.error("Network error. Please email work.achmadraihan@gmail.com directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-12 space-y-2">
          <span className="text-xs font-mono tracking-wider text-teal-600 dark:text-teal-400 uppercase font-semibold">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white tracking-tight">
            Contact
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl text-sm sm:text-base">
            Reach out regarding engineering opportunities, AI projects, or collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/80 dark:bg-neutral-900/40 p-5 space-y-2 transition-colors">
              <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
                <span className="flex items-center gap-1.5 font-medium">
                  <Mail className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                  Email
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1 text-[11px] text-teal-600 dark:text-teal-400 hover:underline"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-500" />
                      <span className="text-emerald-500 font-medium">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <a
                href={`mailto:${emailAddress}`}
                className="block text-sm font-semibold text-neutral-900 dark:text-neutral-200 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
              >
                {emailAddress}
              </a>
            </div>

            {/* Location Card */}
            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/80 dark:bg-neutral-900/40 p-5 space-y-1 transition-colors">
              <div className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                <MapPin className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                Location
              </div>
              <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-200">
                Surabaya, East Java, Indonesia
              </p>
            </div>

            {/* Socials Card */}
            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/80 dark:bg-neutral-900/40 p-5 space-y-3 transition-colors">
              <span className="text-xs text-neutral-500 dark:text-neutral-400 font-medium block">Profiles</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Achmad96"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-3 py-1.5 text-xs text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white transition-colors"
                >
                  <Github className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/achmad-raihan-mamad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-3 py-1.5 text-xs text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white transition-colors"
                >
                  <Linkedin className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/80 dark:bg-neutral-900/40 p-6 sm:p-7 transition-colors">
              <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-4">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="username" className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                    Name / Organization
                  </label>
                  <input
                    id="username"
                    type="text"
                    required
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    placeholder="Your name"
                    className="w-full rounded-lg border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-3.5 py-2 text-xs sm:text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-600 focus:border-teal-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full rounded-lg border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-3.5 py-2 text-xs sm:text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-600 focus:border-teal-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="messages" className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="messages"
                    required
                    rows={4}
                    value={formData.messages}
                    onChange={(e) => setFormData({ ...formData, messages: e.target.value })}
                    placeholder="Your message..."
                    className="w-full rounded-lg border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-3.5 py-2 text-xs sm:text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-600 focus:border-teal-500 focus:outline-none transition-colors resize-y"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 rounded-lg bg-teal-500 hover:bg-teal-400 px-5 py-2.5 text-xs sm:text-sm font-semibold text-neutral-950 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="h-3.5 w-3.5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
