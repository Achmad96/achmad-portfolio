"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import TerminalModal from "@/components/TerminalModal";

export default function HomePage() {
  const [terminalOpen, setTerminalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 flex flex-col transition-colors">
      {/* Top Navbar */}
      <Navbar onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Terminal Modal */}
      <TerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />
    </div>
  );
}
