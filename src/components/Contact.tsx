"use client";

import { motion } from "framer-motion";
import { useState, FormEvent } from "react";

/* TODO: Add Formspree ID after signup */
const FORMSPREE_ID = "";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24 bg-[#1e293b]/30">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="text-[#2dd4bf] text-sm font-mono tracking-widest uppercase mb-2">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f1f5f9] mb-4">Contact</h2>
          <p className="text-[#94a3b8] max-w-xl mx-auto">
            Have a project in mind, an opportunity to discuss, or just want to say hello?
            I&apos;d love to hear from you.
          </p>
        </motion.div>

        {/* Quick links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <a
            href="mailto:manas2k00@gmail.com"
            className="flex items-center justify-center gap-3 px-6 py-3 rounded-lg bg-[#1e293b] border border-[#334155]/50 text-[#94a3b8] hover:border-[#2dd4bf]/50 hover:text-[#2dd4bf] transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            manas2k00@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/muhammadanas2k00"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-6 py-3 rounded-lg bg-[#1e293b] border border-[#334155]/50 text-[#94a3b8] hover:border-[#2dd4bf]/50 hover:text-[#2dd4bf] transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            LinkedIn
          </a>
        </motion.div>

        {/* Contact form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#1e293b] rounded-xl border border-[#334155]/50 p-8 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-mono text-[#94a3b8] uppercase tracking-wider mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg bg-[#0f172a] border border-[#334155]/60 text-[#f1f5f9] placeholder-[#334155] focus:outline-none focus:border-[#2dd4bf]/50 transition-colors text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-[#94a3b8] uppercase tracking-wider mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-lg bg-[#0f172a] border border-[#334155]/60 text-[#f1f5f9] placeholder-[#334155] focus:outline-none focus:border-[#2dd4bf]/50 transition-colors text-sm"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-mono text-[#94a3b8] uppercase tracking-wider mb-2">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Tell me about your project or opportunity..."
              className="w-full px-4 py-3 rounded-lg bg-[#0f172a] border border-[#334155]/60 text-[#f1f5f9] placeholder-[#334155] focus:outline-none focus:border-[#2dd4bf]/50 transition-colors text-sm resize-none"
            />
          </div>

          {status === "success" && (
            <p className="text-[#2dd4bf] text-sm text-center">
              Message sent! I&apos;ll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-sm text-center">
              Something went wrong. Please try emailing directly.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full py-3 rounded-lg bg-[#2dd4bf] text-[#0f172a] font-semibold hover:bg-[#2dd4bf]/90 disabled:opacity-60 transition-colors"
          >
            {status === "submitting" ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
