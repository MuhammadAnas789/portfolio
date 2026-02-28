"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "3",
    label: "Roles",
    sub: "Across startups & product teams",
  },
  {
    value: "3",
    label: "Projects Shipped",
    sub: "End-to-end, production-ready",
  },
  {
    value: "500–1K",
    label: "Clients Served",
    sub: "Through platforms I built",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-[#2dd4bf] text-sm font-mono tracking-widest uppercase mb-2">
          About Me
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#f1f5f9] mb-12">
          A bit about myself
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Bio text */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4 text-[#94a3b8] leading-relaxed"
        >
          <p>
            I&apos;m a full-stack software engineer with a track record of building
            production-grade web applications from the ground up. I specialize in
            Node.js, React, and Python ecosystems — comfortable across the entire
            stack from database schema to polished UI.
          </p>
          <p>
            I&apos;ve worked across fintech, e-commerce, and SaaS domains, contributing
            to platforms that serve hundreds to thousands of users. I care deeply about
            clean architecture, performance, and writing code that teams can
            confidently maintain and extend.
          </p>
          <p>
            When I&apos;m not engineering, I&apos;m exploring new tools, contributing to
            side projects, or digging into system design concepts to sharpen my craft.
          </p>
        </motion.div>

        {/* Stat cards */}
        <div className="flex flex-col gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="flex items-start gap-5 p-5 rounded-lg bg-[#1e293b] border-l-4 border-[#2dd4bf]"
            >
              <div>
                <span className="text-3xl font-bold text-[#f1f5f9]">{stat.value}</span>
                <p className="text-[#2dd4bf] font-semibold text-sm mt-0.5">{stat.label}</p>
                <p className="text-[#94a3b8] text-xs mt-1">{stat.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
