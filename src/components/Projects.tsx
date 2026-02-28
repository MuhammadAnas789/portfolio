"use client";

import { motion } from "framer-motion";

const projects = [
  {
    tech: ["Laravel", "Vue.js", "MySQL", "Redis", "Docker"],
    bullets: [
      "Maintained and extended a versioned REST API serving 500–1,000 active clients across a legacy Vue 2 and a modern Vue 3 frontend.",
      "Resolved a production performance bottleneck by optimizing database placement, resulting in measurable API response improvement and positive client feedback.",
      "Implemented WebSocket-based real-time chat and integrated Stripe, AWS S3, and Postmark within a role-scoped domain architecture.",
    ],
  },
  {
    tech: ["Next.js", "TypeScript", "Twilio", "WebSockets", "Docker"],
    bullets: [
      "Architected a multi-tenant AI voice SaaS with a split-service design, isolating a Next.js serverless app from a real-time voice bridge for reliable long-lived WebSocket handling.",
      "Owned the voice bridge end-to-end: AI calls, warm transfers, per-call configuration, and fault-tolerant transcript delivery.",
      "Built 35+ REST API handlers in TypeScript, a durable job queue, and a post-call pipeline covering summarization, notifications, and idempotency.",
    ],
  },
  {
    tech: ["Laravel", "Vue 3", "MySQL", "Redis"],
    bullets: [
      "Sole developer — designed and built a decoupled Laravel REST API and Vue 3 SPA from scratch, processing 100+ orders daily.",
      "Built the frontend with Vue 3, Pinia, Vue Router 4, and Ant Design Vue, featuring auth-guarded routing and persistent state.",
      "Automated order ingestion via scheduled jobs integrating Zenventory and ShipStation, with hourly alerts and per-order cost tracking.",
    ],
  },
];

const cardNumbers = ["01", "02", "03"];

export default function Projects() {
  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-px bg-[#2dd4bf]" />
          <p className="text-[#2dd4bf] text-xs font-mono tracking-widest uppercase">
            What I&apos;ve Built
          </p>
          <div className="w-8 h-px bg-[#2dd4bf]" />
        </div>
        <h2 className="text-3xl font-bold text-[#f1f5f9]">Projects</h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative flex flex-col bg-[#1e293b] rounded-xl border-t-2 border-t-[#2dd4bf] border border-[#334155]/50 p-6 min-h-[320px] hover:border-[#2dd4bf]/50 hover:shadow-[0_0_30px_-5px_#2dd4bf20] transition-all duration-300"
          >
            {/* Decorative number */}
            <span className="absolute top-4 right-5 text-4xl font-bold text-[#334155]/40 font-mono group-hover:text-[#2dd4bf]/20 transition-colors duration-300 select-none">
              {cardNumbers[i]}
            </span>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2 mb-5 pr-10">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-1 rounded-full bg-[#2dd4bf]/10 text-[#2dd4bf] border border-[#2dd4bf]/20 font-mono hover:bg-[#2dd4bf]/20 transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Bullets */}
            <ul className="space-y-2.5 flex-1">
              {project.bullets.map((bullet, j) => (
                <li
                  key={j}
                  className="flex gap-3 text-[#94a3b8] text-sm leading-relaxed"
                >
                  <span className="text-[#2dd4bf] mt-1 shrink-0">▹</span>
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
