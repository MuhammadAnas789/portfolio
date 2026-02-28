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
        <a href="#hero" className="flex items-center gap-3 group select-none">
          {/* Premium geometric icon */}
          <div className="relative">
            <svg 
              viewBox="0 0 40 40" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10"
            >
              {/* Background with gradient on hover */}
              <rect 
                width="40" 
                height="40" 
                rx="8" 
                fill="#0f172a"
                className="group-hover:fill-[#1e293b] transition-all duration-300"
              />
              
              {/* Border with glow effect */}
              <rect 
                x="0.75" 
                y="0.75" 
                width="38.5" 
                height="38.5" 
                rx="7.25" 
                stroke="#2dd4bf" 
                strokeWidth="1.5"
                className="group-hover:stroke-[#5eead4] transition-all duration-300"
              />
              
              {/* M letter - custom geometric design */}
              <path 
                d="M10 26V14L14 22L18 14V26" 
                stroke="#2dd4bf" 
                strokeWidth="2.2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="group-hover:stroke-white transition-all duration-300"
              />
              
              {/* A letter - custom geometric design */}
              <path 
                d="M22 26L26 14L30 26M23.5 22H28.5" 
                stroke="#2dd4bf" 
                strokeWidth="2.2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="group-hover:stroke-white transition-all duration-300"
              />
              
              {/* Subtle corner accent - top right */}
              <circle 
                cx="32" 
                cy="8" 
                r="1.5" 
                fill="#2dd4bf" 
                opacity="0.4"
                className="group-hover:opacity-100 transition-opacity duration-300"
              />
              
              {/* Bottom left accent */}
              <circle 
                cx="8" 
                cy="32" 
                r="1.5" 
                fill="#2dd4bf" 
                opacity="0.4"
                className="group-hover:opacity-100 transition-opacity duration-300"
              />
            </svg>
            
            {/* Subtle outer glow on hover */}
            <div 
              className="absolute inset-0 rounded-lg opacity-0 
                group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{ 
                boxShadow: '0 0 20px rgba(45, 212, 191, 0.3), 0 0 40px rgba(45, 212, 191, 0.1)' 
              }} 
            />
          </div>

          {/* Refined wordmark */}
          <div className="hidden sm:flex flex-col -space-y-0.5">
            <span className="font-bold text-base tracking-tight text-slate-100 
              group-hover:text-transparent group-hover:bg-clip-text 
              group-hover:bg-gradient-to-r group-hover:from-teal-300 group-hover:via-teal-400 group-hover:to-cyan-400
              transition-all duration-300">
              Muhammad Anas
            </span>
            <span className="text-[10px] font-mono text-slate-500 
              group-hover:text-teal-400/70 
              transition-colors duration-300 tracking-widest uppercase">
              Software Engineer
            </span>
          </div>
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
