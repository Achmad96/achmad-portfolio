"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-white text-neutral-900 transition-colors dark:bg-neutral-950 dark:text-neutral-100">
      {/* Top Navbar */}
      <Navbar />

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
    </div>
  );
}
