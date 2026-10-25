"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Terminal, Menu, X, Github, Linkedin, Mail, Sun, Moon } from "lucide-react";

interface NavbarProps {
  onOpenTerminal?: () => void;
}

export default function Navbar({ onOpenTerminal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Experience", href: "/#experience" },
    { name: "Projects", href: "/#projects" },
    { name: "Skills", href: "/#skills" },
    { name: "Articles", href: "/articles" },
    { name: "Contact", href: "/#contact" },
  ];

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-neutral-950/90 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800/80 py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Minimalist Logo matching reference */}
          <Link href="/" className="text-2xl font-black tracking-tight text-neutral-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
            AR.
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle Button */}
            {mounted && (
              <button
                onClick={toggleTheme}
                title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
                className="p-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4 text-amber-400" />
                ) : (
                  <Moon className="h-4 w-4 text-neutral-700" />
                )}
              </button>
            )}

            {onOpenTerminal && (
              <button
                onClick={onOpenTerminal}
                title="Open Terminal Emulator"
                className="flex items-center gap-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 px-3 py-1.5 text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
              >
                <Terminal className="h-3.5 w-3.5 text-teal-600 dark:text-teal-400" />
                <span>Terminal</span>
              </button>
            )}

            <a
              href="/#contact"
              className="inline-flex items-center justify-center rounded-lg bg-teal-500 px-3.5 py-1.5 text-xs font-semibold text-neutral-950 hover:bg-teal-400 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-2">
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300"
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4 text-amber-400" />
                ) : (
                  <Moon className="h-4 w-4 text-neutral-700" />
                )}
              </button>
            )}
            {onOpenTerminal && (
              <button
                onClick={onOpenTerminal}
                className="p-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 text-teal-600 dark:text-teal-400"
                aria-label="Toggle Terminal"
              >
                <Terminal className="h-4 w-4" />
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-4 shadow-xl space-y-3">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-neutral-100 dark:hover:bg-neutral-900 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-2 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Achmad96"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white p-1"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/achmad-raihan-mamad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white p-1"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="mailto:work.achmadraihan@gmail.com"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white p-1"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center rounded-lg bg-teal-500 px-3 py-1.5 text-xs font-semibold text-neutral-950"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
