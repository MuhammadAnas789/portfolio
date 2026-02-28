"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

const stats = [
  { value: "3", numericValue: 3, label: "Roles", sub: "Across one focused company" },
  { value: "3", numericValue: 3, label: "Projects Shipped", sub: "End-to-end, production-ready" },
  { value: "500–1K", numericValue: null, label: "Clients Served", sub: "Through platforms I built" },
];

function AnimatedNumber({ target }: { target: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toString());
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, target, { duration: 1.4, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, count, target]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section id="about" ref={sectionRef} className="py-24 max-w-6xl mx-auto px-6">
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
            About Me
          </p>
          <div className="w-8 h-px bg-[#2dd4bf]" />
        </div>
        <h2 className="text-3xl font-bold text-[#f1f5f9]">A bit about myself</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Bio text */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="border-l-2 border-[#2dd4bf]/30 pl-5 space-y-4 text-[#94a3b8] leading-relaxed max-w-2xl"
        >
          <p>
            I&apos;m a software engineer with a strong backend foundation and full-stack
            delivery experience across Laravel, Vue.js, and Next.js. At SystemsD,
            I&apos;ve built and shipped production systems across multiple client
            products — from a marketplace platform serving 500–1,000 active clients,
            to a shipping analytics dashboard built entirely from scratch, to a
            multi-tenant AI voice SaaS with real-time WebSocket infrastructure.
          </p>
          <p>
            I care about clean architecture, reliable APIs, and writing code that holds
            up in production. Most of my work sits at the intersection of backend
            design and real product impact.
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
              whileHover={{ y: -2 }}
              className="flex items-start gap-5 p-6 rounded-lg bg-[#1e293b] backdrop-blur-sm border-t-2 border-t-[#2dd4bf] border border-[#334155]/40 hover:border-[#2dd4bf]/30 transition-all duration-200 cursor-default"
            >
              <div>
                <span className="text-4xl font-bold text-[#2dd4bf] tabular-nums">
                  {stat.numericValue !== null ? (
                    <AnimatedNumber target={stat.numericValue} />
                  ) : (
                    stat.value
                  )}
                </span>
                <p className="text-[#94a3b8] text-sm uppercase tracking-wide mt-0.5">{stat.label}</p>
                <p className="text-[#94a3b8] text-xs mt-1">{stat.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
