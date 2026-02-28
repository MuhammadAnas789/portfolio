"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-30% 0px -65% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-[#0f172a]/80 border-b border-[#334155]/50 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          {/* Geometric mark */}
          <div className="relative w-8 h-8 flex-shrink-0">
            <svg 
              viewBox="0 0 32 32" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              {/* Container */}
              <rect 
                width="32" 
                height="32" 
                rx="4" 
                fill="#0f172a" 
                stroke="#2dd4bf" 
                strokeWidth="1.5"
              />
              {/* Letter M */}
              <path 
                d="M6 22V10L11 17L16 10V22" 
                stroke="#2dd4bf" 
                strokeWidth="1.8" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                fill="none"
              />
              {/* Letter A */}
              <path 
                d="M18 22L21 10L24 22" 
                stroke="#2dd4bf" 
                strokeWidth="1.8" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                fill="none"
              />
              <path 
                d="M19.5 18H22.5" 
                stroke="#2dd4bf" 
                strokeWidth="1.8" 
                strokeLinecap="round"
              />
              {/* Subtle corner accent */}
              <rect 
                x="0" y="0" 
                width="6" height="2" 
                rx="1" 
                fill="#2dd4bf" 
                opacity="0.6"
              />
              <rect 
                x="0" y="0" 
                width="2" height="6" 
                rx="1" 
                fill="#2dd4bf" 
                opacity="0.6"
              />
            </svg>
            {/* Hover glow effect */}
            <div className="absolute inset-0 rounded opacity-0 
              group-hover:opacity-100 transition-opacity duration-300"
              style={{ 
                boxShadow: '0 0 12px rgba(45, 212, 191, 0.4)' 
              }} 
            />
          </div>

          {/* Wordmark — optional, shown only on larger screens */}
          <span className="hidden sm:block font-mono text-sm 
            font-semibold text-slate-300 
            group-hover:text-teal-400 
            transition-colors duration-300">
            manas
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const id = link.href.slice(1);
            const isActive = activeSection === id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm transition-all duration-200 relative ${
                  isActive
                    ? "text-[#2dd4bf]"
                    : "text-[#94a3b8] hover:text-[#f1f5f9]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#2dd4bf]" />
                )}
              </a>
            );
          })}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-4 py-1.5 rounded border border-[#2dd4bf] text-[#2dd4bf] hover:bg-[#2dd4bf]/10 transition-colors"
          >
            Resume
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 text-[#94a3b8] hover:text-[#f1f5f9]"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile drawer — animated */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-[#1e293b]/95 backdrop-blur-md border-b border-[#334155]/50"
          >
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => {
                const id = link.href.slice(1);
                const isActive = activeSection === id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className={`transition-colors duration-200 py-1 ${
                      isActive
                        ? "text-[#2dd4bf]"
                        : "text-[#94a3b8] hover:text-[#f1f5f9]"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="text-sm px-4 py-2 rounded border border-[#2dd4bf] text-[#2dd4bf] hover:bg-[#2dd4bf]/10 transition-colors text-center"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
