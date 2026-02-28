"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 max-w-6xl mx-auto px-6">
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
            Academic Background
          </p>
        </div>
        <h2 className="text-3xl font-bold text-[#f1f5f9]">Education</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-[#1e293b] rounded-xl border border-[#334155]/50 p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:border-[#2dd4bf]/30 transition-colors"
      >
        <div className="flex items-start gap-5">
          {/* Icon */}
          <div className="w-12 h-12 rounded-lg bg-[#2dd4bf]/10 border border-[#2dd4bf]/20 flex items-center justify-center shrink-0">
            <GraduationCap className="w-6 h-6 text-[#2dd4bf]" />
          </div>

          <div>
            <h3 className="text-[#f1f5f9] font-bold text-xl">
              Bachelor of Computer Science
            </h3>
            <p className="text-[#2dd4bf] font-medium mt-1">Namal University</p>
            <p className="text-[#94a3b8] text-sm mt-1">Mianwali, Pakistan</p>
          </div>
        </div>

        <div className="text-right shrink-0">
          <span className="text-[#94a3b8] font-mono text-sm">Sep 2019 — Sep 2023</span>
        </div>
      </motion.div>
    </section>
  );
}
