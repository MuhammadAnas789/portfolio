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
      {/* Animated background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#2dd4bf]/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-[#2dd4bf]/3 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.p
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-[#2dd4bf] text-sm font-mono tracking-widest uppercase mb-4"
        >
          Hi, I&apos;m
        </motion.p>

        <motion.h1
          custom={0.1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-5xl sm:text-7xl font-bold text-[#f1f5f9] leading-tight mb-4"
        >
          Muhammad Anas
        </motion.h1>

        <motion.h2
          custom={0.2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-2xl sm:text-3xl font-semibold text-[#2dd4bf] mb-6"
        >
          Full-Stack Software Engineer
        </motion.h2>

        <motion.p
          custom={0.3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-[#94a3b8] text-lg max-w-2xl mx-auto leading-relaxed mb-10"
        >
          I build scalable web applications and APIs that power real businesses —
          from fintech dashboards to e-commerce platforms serving hundreds of clients.
        </motion.p>

        <motion.div
          custom={0.4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="/resume.pdf"
            download
            className="px-8 py-3 rounded-lg bg-[#2dd4bf] text-[#0f172a] font-semibold hover:bg-[#2dd4bf]/90 transition-colors"
          >
            View Resume
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg border border-[#334155] text-[#f1f5f9] hover:border-[#2dd4bf] hover:text-[#2dd4bf] transition-colors"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#94a3b8]"
      >
        <span className="text-xs tracking-widest uppercase font-mono">Scroll</span>
        <div className="w-0.5 h-8 bg-gradient-to-b from-[#94a3b8] to-transparent" />
      </motion.div>
    </section>
  );
}
