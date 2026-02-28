"use client";

import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay },
  }),
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background — orbs + dot grid */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Teal orb — top-left */}
        <div className="absolute -top-20 -left-20 w-[600px] h-[600px] rounded-full bg-[#2dd4bf]/[0.06] blur-3xl" />
        {/* Purple orb — bottom-right */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#7c3aed]/[0.05] blur-3xl" />
        {/* Dot grid with radial fade */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(#1e293b 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            maskImage:
              "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Eyebrow label */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="inline-flex items-center gap-2 mb-6"
        >
          <span className="text-[#2dd4bf]/50 font-mono text-sm">[</span>
          <span className="text-[#2dd4bf] text-xs font-mono tracking-widest uppercase">
            Software Engineer
          </span>
          <span className="text-[#2dd4bf]/50 font-mono text-sm">]</span>
        </motion.div>

        {/* Name — per-word staggered reveal */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-[#f1f5f9] leading-tight mb-4 flex items-center justify-center gap-[0.3em] flex-wrap">
          {["Muhammad", "Anas"].map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.1 + i * 0.15,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Title + blinking cursor */}
        <motion.h2
          custom={0.4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-2xl sm:text-3xl font-semibold text-[#2dd4bf] mb-6 inline-flex items-center"
        >
          Software Engineer
          <span className="inline-block w-0.5 h-6 bg-[#2dd4bf] ml-2 animate-pulse" />
        </motion.h2>

        <motion.p
          custom={0.55}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-[#94a3b8] text-lg max-w-2xl mx-auto leading-relaxed mb-10"
        >
          I build production-grade web applications and APIs — from real-time voice
          platforms to marketplace systems serving hundreds of clients.
        </motion.p>

        <motion.div
          custom={0.7}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          {/* Primary CTA */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-lg bg-[#2dd4bf] text-[#0f172a] font-semibold hover:bg-[#2dd4bf]/90 active:scale-95 transition-all duration-200 shadow-[0_0_20px_-4px_#2dd4bf66]"
          >
            View Resume
          </a>
          {/* Ghost CTA */}
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg border border-[#2dd4bf]/40 text-[#f1f5f9] hover:border-[#2dd4bf] hover:text-[#2dd4bf] hover:bg-[#2dd4bf]/5 active:scale-95 transition-all duration-200"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#94a3b8]/60"
      >
        <span className="text-xs tracking-widest uppercase font-mono">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-0.5 h-8 bg-gradient-to-b from-[#2dd4bf]/40 to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
}
