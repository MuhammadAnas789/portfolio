"use client";

import { motion } from "framer-motion";
import { useState, FormEvent } from "react";
import { Mail, Linkedin } from "lucide-react";

const FORMSPREE_ID = "mgolqgjd";

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
    <section id="contact" className="py-24 bg-[#1e293b]/30 border-t border-[#334155]/20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="w-8 h-px bg-[#2dd4bf]" />
            <p className="text-[#2dd4bf] text-xs font-mono tracking-widest uppercase">
              Get In Touch
            </p>
            <div className="w-8 h-px bg-[#2dd4bf]" />
          </div>
          <h2 className="text-3xl font-bold text-[#f1f5f9] mb-4">Contact</h2>
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
          className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
        >
          <a
            href="mailto:manas2k00@gmail.com"
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-[#2dd4bf]/30 text-[#2dd4bf] hover:bg-[#2dd4bf]/10 transition-colors duration-200"
          >
            <Mail className="w-4 h-4 shrink-0" />
            manas2k00@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/muhammadanas2k00"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-[#2dd4bf]/30 text-[#2dd4bf] hover:bg-[#2dd4bf]/10 transition-colors duration-200"
          >
            <Linkedin className="w-4 h-4 shrink-0" />
            LinkedIn
          </a>
        </motion.div>

        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#1e293b] rounded-xl border border-[#334155]/50 p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
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
                  className="w-full px-4 py-3 rounded-lg bg-[#0f172a] border border-[#334155]/60 text-[#f1f5f9] placeholder-[#334155] focus:outline-none focus:border-[#2dd4bf]/60 focus:ring-1 focus:ring-[#2dd4bf]/40 transition-all text-sm"
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
                  className="w-full px-4 py-3 rounded-lg bg-[#0f172a] border border-[#334155]/60 text-[#f1f5f9] placeholder-[#334155] focus:outline-none focus:border-[#2dd4bf]/60 focus:ring-1 focus:ring-[#2dd4bf]/40 transition-all text-sm"
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
                className="w-full px-4 py-3 rounded-lg bg-[#0f172a] border border-[#334155]/60 text-[#f1f5f9] placeholder-[#334155] focus:outline-none focus:border-[#2dd4bf]/60 focus:ring-1 focus:ring-[#2dd4bf]/40 transition-all text-sm resize-none"
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
              className="w-full py-3 rounded-lg bg-[#2dd4bf] text-[#0f172a] font-semibold hover:bg-[#2dd4bf]/90 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 shadow-[0_0_20px_-6px_#2dd4bf66]"
            >
              {status === "submitting" ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
