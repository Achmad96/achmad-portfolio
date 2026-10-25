"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Menu, X, Github, Linkedin, Mail, Sun, Moon } from "lucide-react";

export default function Navbar() {
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
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "border-b border-neutral-200 bg-white/90 py-3 shadow-sm backdrop-blur-md dark:border-neutral-800/80 dark:bg-neutral-950/90" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Minimalist Logo matching reference */}
          <Link href="/" className="text-2xl font-black tracking-tight text-neutral-900 transition-colors hover:text-teal-600 dark:text-white dark:hover:text-teal-400">
            AR.
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative rounded-lg px-3.5 py-1.5 text-xs font-medium text-neutral-600 transition-colors duration-200 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white"
              >
                {/* Soft backdrop pill on hover */}
                <span className="absolute inset-0 rounded-lg bg-neutral-100/80 opacity-0 transition-opacity duration-200 group-hover:opacity-100 dark:bg-neutral-900/80" />

                {/* Label */}
                <span className="relative z-10">{link.name}</span>

                {/* Smooth centered accent line */}
                <span className="absolute bottom-1 inset-x-3.5 h-[2px] origin-center scale-x-0 rounded-full bg-teal-500 transition-transform duration-300 ease-out group-hover:scale-x-100 dark:bg-teal-400" />
              </a>
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden items-center gap-3 md:flex">
            {/* Theme Toggle Button */}
            {mounted && (
              <button
                onClick={toggleTheme}
                title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
                className="rounded-lg border border-neutral-200 bg-neutral-100 p-2 text-neutral-700 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:border-neutral-700"
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4 text-neutral-700" />}
              </button>
            )}
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 md:hidden">
            {mounted && (
              <button
                onClick={toggleTheme}
                className="rounded-lg border border-neutral-200 bg-neutral-100 p-2 text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300"
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4 text-neutral-700" />}
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg border border-neutral-200 bg-neutral-100 p-2 text-neutral-700 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:text-white"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="mt-3 space-y-3 rounded-xl border border-neutral-200 bg-white p-4 shadow-xl md:hidden dark:border-neutral-800 dark:bg-neutral-950">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-teal-600 dark:text-neutral-300 dark:hover:bg-neutral-900 dark:hover:text-teal-400"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="flex items-center justify-between border-t border-neutral-200 pt-2 dark:border-neutral-800">
              <div className="flex items-center gap-3">
                <a href="https://github.com/Achmad96" target="_blank" rel="noopener noreferrer" className="p-1 text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white">
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/achmad-raihan-mamad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="mailto:work.achmadraihan@gmail.com" className="p-1 text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white">
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
