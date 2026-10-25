"use client";

import React, { useState } from "react";
import { Mail, MapPin, Github, Linkedin, Send, Copy, Check, ExternalLink, ShieldCheck } from "lucide-react";
import { toast } from "sonner";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    profileUrl: "",
    messages: "",
    _honey: "",
  });

  const emailAddress = "work.achmadraihan@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    toast.success("Email copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  const getComposedBody = () => {
    const greeting = "Hi Raihan,\n\n";
    const identityLine = formData.username
      ? `My name is ${formData.username}${formData.profileUrl ? ` (${formData.profileUrl})` : ""}.\n\n`
      : "";
    const msg = formData.messages ? `${formData.messages}\n\n` : "";
    const signoff = formData.username
      ? `Best regards,\n${formData.username}`
      : "Best regards,";

    return `${greeting}${identityLine}${msg}${signoff}`;
  };

  const handleOpenGmail = () => {
    const subject = formData.username
      ? `Portfolio Inquiry from ${formData.username}`
      : "Inquiry from Portfolio";
    const body = getComposedBody();
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      emailAddress
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, "_blank", "noopener,noreferrer");
    toast.info("Draft opened in Gmail!");
  };

  const handleOpenMailto = () => {
    const subject = formData.username
      ? `Portfolio Inquiry from ${formData.username}`
      : "Inquiry from Portfolio";
    const body = getComposedBody();
    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.username.trim() || !formData.messages.trim()) {
      toast.error("Please provide your name and a message.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        toast.success(data.message || "Message sent successfully!");
        setFormData({
          username: "",
          email: "",
          profileUrl: "",
          messages: "",
          _honey: "",
        });
      } else {
        toast.error(
          data.message ||
            data.messages ||
            "Failed to send message. Please compose via Gmail or email directly."
        );
      }
    } catch (err) {
      toast.error("Network error. You can click 'Compose in Gmail' or email directly.");
    } finally {
      setIsSubmitting(false);
    }
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
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white tracking-tight">
            Contact
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl text-sm sm:text-base">
            Reach out regarding machine learning opportunities, computer vision projects, or research collaboration. No account needed—submit on-page or launch straight from your personal mail client.
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
                  Direct Email
                </span>
                <button
                  type="button"
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

            {/* Socials & Verified Profiles */}
            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/80 dark:bg-neutral-900/40 p-5 space-y-3 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                  Direct Verified Channels
                </span>
                <span className="text-[11px] text-teal-600 dark:text-teal-400 font-mono">1-Click</span>
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href="https://www.linkedin.com/in/achmad-raihan-mamad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-3 py-2 text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:border-cyan-500 dark:hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all shadow-xs"
                >
                  <Linkedin className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
                  <span>LinkedIn InMail</span>
                </a>
                <a
                  href="https://github.com/Achmad96"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-3 py-2 text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:border-teal-500 dark:hover:border-teal-500 hover:text-teal-600 dark:hover:text-teal-400 transition-all shadow-xs"
                >
                  <Github className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            {/* Anti-Anonymity / Authenticated Identity Guarantee */}
            <div className="rounded-xl border border-teal-500/20 bg-teal-500/5 p-4 flex items-start gap-3">
              <ShieldCheck className="h-5 w-5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
              <div className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                <p className="font-semibold text-neutral-900 dark:text-neutral-200 mb-0.5">
                  Real-Identity Friendly
                </p>
                Provide your LinkedIn or work email so we can connect directly, or click <strong>Compose in Gmail</strong> to send directly from your logged-in Google account.
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/80 dark:bg-neutral-900/40 p-6 sm:p-7 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                  Send a Message
                </h3>
                <span className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
                  No account required
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot field for bot spam deterrence */}
                <input
                  type="text"
                  name="_honey"
                  value={formData._honey}
                  onChange={(e) => setFormData({ ...formData, _honey: e.target.value })}
                  aria-hidden="true"
                  tabIndex={-1}
                  className="hidden"
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name or Organization */}
                  <div>
                    <label
                      htmlFor="username"
                      className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1"
                    >
                      Name / Organization <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="username"
                      type="text"
                      required
                      value={formData.username}
                      onChange={(e) =>
                        setFormData({ ...formData, username: e.target.value })
                      }
                      placeholder="e.g. Alex Rivera or Acme Corp"
                      className="w-full rounded-lg border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-3.5 py-2 text-xs sm:text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-600 focus:border-teal-500 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Email address */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1"
                    >
                      Your Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="alex@company.com"
                      className="w-full rounded-lg border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-3.5 py-2 text-xs sm:text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-600 focus:border-teal-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Optional Social / LinkedIn / Website profile link */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label
                      htmlFor="profileUrl"
                      className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300"
                    >
                      LinkedIn, GitHub, or Website <span className="text-neutral-400 text-[11px] font-normal">(Optional)</span>
                    </label>
                    <span className="text-[11px] text-teal-600 dark:text-teal-400">
                      Helps verify identity
                    </span>
                  </div>
                  <input
                    id="profileUrl"
                    type="text"
                    value={formData.profileUrl}
                    onChange={(e) =>
                      setFormData({ ...formData, profileUrl: e.target.value })
                    }
                    placeholder="e.g. linkedin.com/in/alexrivera or github.com/alex"
                    className="w-full rounded-lg border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-3.5 py-2 text-xs sm:text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-600 focus:border-teal-500 focus:outline-none transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="messages"
                    className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="messages"
                    required
                    rows={4}
                    value={formData.messages}
                    onChange={(e) =>
                      setFormData({ ...formData, messages: e.target.value })
                    }
                    placeholder="Tell me about your project, idea, or role..."
                    className="w-full rounded-lg border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-3.5 py-2 text-xs sm:text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-600 focus:border-teal-500 focus:outline-none transition-colors resize-y"
                  />
                </div>

                {/* Action Buttons */}
                <div className="pt-2 space-y-2.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Primary Button: On-page Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex items-center justify-center gap-2 rounded-lg bg-teal-500 hover:bg-teal-400 px-4 py-2.5 text-xs sm:text-sm font-semibold text-neutral-950 transition-colors disabled:opacity-50 cursor-pointer shadow-xs"
                    >
                      {isSubmitting ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <span>Send Directly</span>
                          <Send className="h-3.5 w-3.5" />
                        </>
                      )}
                    </button>

                    {/* Secondary Button: Compose in Gmail */}
                    <button
                      type="button"
                      onClick={handleOpenGmail}
                      className="flex items-center justify-center gap-2 rounded-lg border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-950 hover:bg-neutral-100 dark:hover:bg-neutral-900 px-4 py-2.5 text-xs sm:text-sm font-semibold text-neutral-800 dark:text-neutral-200 transition-colors cursor-pointer shadow-xs"
                    >
                      <span>Compose in Gmail</span>
                      <ExternalLink className="h-3.5 w-3.5 text-neutral-500" />
                    </button>
                  </div>

                  {/* Fallback to Default Client */}
                  <div className="flex items-center justify-center gap-1.5 pt-1 text-[11px] text-neutral-500 dark:text-neutral-400">
                    <span>Prefer your local client?</span>
                    <button
                      type="button"
                      onClick={handleOpenMailto}
                      className="text-teal-600 dark:text-teal-400 hover:underline font-medium cursor-pointer"
                    >
                      Launch in Default Mail App
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
