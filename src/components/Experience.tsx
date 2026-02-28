"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Engineer",
    company: "SystemsD",
    location: "Lahore, Pakistan",
    period: "Sep 2025 — Present",
    current: true,
    bullets: [
      "Owned full-stack delivery across multiple client projects, covering architecture, backend, and frontend.",
      "Integrated AI, voice, and payment APIs into production systems, handling service design and error resilience.",
      "Designed schemas, built async job pipelines, and resolved production issues across live environments.",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "SystemsD",
    location: "Lahore, Pakistan",
    period: "Aug 2024 — Aug 2025",
    current: false,
    bullets: [
      "Built and maintained full-stack features for a client-facing marketplace platform using Laravel and Vue.js.",
      "Implemented real-time messaging and integrated third-party services for payments and file storage.",
      "Translated client requirements into technical solutions, iterating based on direct feedback.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "SystemsD",
    location: "Lahore, Pakistan",
    period: "Jun 2024 — Aug 2024",
    current: false,
    bullets: [
      "Refactored a CRUD application into a layered MVC architecture, separating frontend, backend, and database concerns.",
      "Contributed to API integration, relational database design, and backend development on live projects.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#1e293b]/30 border-t border-[#334155]/20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-teal-400"></span>
            <span className="text-teal-400 text-sm font-mono uppercase tracking-widest">
              Where I&apos;ve Worked
            </span>
            <span className="h-px w-8 bg-teal-400"></span>
          </div>
          <h2 className="text-3xl font-bold text-[#f1f5f9]">Experience</h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Continuous vertical line */}
          <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-gradient-to-b from-[#2dd4bf]/60 via-[#334155] to-[#334155]/20 hidden sm:block" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="sm:pl-12 relative"
              >
                {/* Timeline dot */}
                <div
                  className={`hidden sm:block absolute left-[9px] top-2 w-3 h-3 rounded-full border-2 border-[#0f172a] ${
                    exp.current
                      ? "bg-[#2dd4bf] shadow-[0_0_0_4px_#2dd4bf33]"
                      : "bg-[#334155] shadow-[0_0_0_4px_#33415533]"
                  }`}
                />

                <div className="bg-[#1e293b] rounded-xl p-6 border border-[#334155]/50 hover:border-[#2dd4bf]/30 hover:bg-[#1e293b]/80 transition-all duration-200">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-[#f1f5f9] font-bold text-xl">{exp.role}</h3>
                        {exp.current && (
                          <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-[#2dd4bf]/10 text-[#2dd4bf] border border-[#2dd4bf]/30">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-[#2dd4bf] font-medium mt-0.5">{exp.company}</p>
                      <p className="text-[#94a3b8] text-xs mt-0.5">{exp.location}</p>
                    </div>
                    <span className="text-[#94a3b8] text-sm font-mono shrink-0">{exp.period}</span>
                  </div>
                  <ul className="space-y-2 mt-4">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="flex gap-3 text-[#94a3b8] text-sm leading-relaxed">
                        <span className="text-[#2dd4bf] mt-1 shrink-0">▹</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
