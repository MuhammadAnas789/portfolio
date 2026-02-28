"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Languages",
    skills: ["PHP", "TypeScript", "JavaScript", "SQL"],
  },
  {
    category: "Frameworks",
    skills: ["Laravel", "Next.js", "Vue.js", "Tailwind CSS", "Alpine.js"],
  },
  {
    category: "Databases",
    skills: ["MySQL", "Redis", "Cloudflare D1"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub Actions", "Docker", "Vercel", "Fly.io", "AWS (S3)"],
  },
  {
    category: "Integrations",
    skills: ["Stripe", "Twilio", "ElevenLabs", "Clerk", "Zenventory", "Postmark"],
  },
  {
    category: "Other",
    skills: ["REST APIs", "WebSockets", "CI/CD"],
  },
];

const pillVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.25, delay: i * 0.04 },
  }),
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#1e293b]/30 border-t border-[#334155]/20">
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
              What I Work With
            </span>
            <span className="h-px w-8 bg-teal-400"></span>
          </div>
          <h2 className="text-3xl font-bold text-[#f1f5f9]">Skills</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <h3 className="text-teal-400 font-mono text-sm uppercase tracking-widest mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    custom={j}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={pillVariants}
                    className="text-sm px-3 py-1.5 rounded-md bg-[#0f172a] border border-[#334155]/60 text-[#94a3b8] hover:bg-teal-400 hover:text-slate-900 hover:border-teal-400 transition-colors duration-200 cursor-default font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
