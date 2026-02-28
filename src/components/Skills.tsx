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

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#1e293b]/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-[#2dd4bf] text-sm font-mono tracking-widest uppercase mb-2">
            What I Work With
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f1f5f9]">Skills</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <h3 className="text-xs font-mono text-[#2dd4bf] tracking-widest uppercase mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1.5 rounded-md bg-[#1e293b] border border-[#334155]/60 text-[#94a3b8] hover:border-[#2dd4bf]/40 hover:text-[#f1f5f9] transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
