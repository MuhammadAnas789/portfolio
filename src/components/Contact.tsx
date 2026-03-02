"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef, FormEvent } from "react";
import { Mail, Linkedin } from "lucide-react";

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MESSAGE_MAX = 2000;
const COOLDOWN_SECONDS = 60;

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [messageLength, setMessageLength] = useState(0);
  const [cooldown, setCooldown] = useState(0);
  const honeypotRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (cooldown <= 0) return;
    const timer = setInterval(() => {
      setCooldown((c) => {
        if (c <= 1) {
          clearInterval(timer);
          return 0;
        }
        return c - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [cooldown]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Honeypot — silently reject bots
    if (honeypotRef.current?.value) return;

    const form = e.currentTarget;
    const raw = new FormData(form);

    const name = (raw.get("name") as string).trim();
    const email = (raw.get("email") as string).trim();
    const message = (raw.get("message") as string).trim();

    // Client-side validation
    if (!EMAIL_REGEX.test(email)) {
      setStatus("error");
      return;
    }
    if (message.length > MESSAGE_MAX) return;

    const data = new FormData();
    data.set("name", name);
    data.set("email", email);
    data.set("message", message);

    setStatus("submitting");

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
        setMessageLength(0);
        setCooldown(COOLDOWN_SECONDS);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const isDisabled = status === "submitting" || cooldown > 0;

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
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-teal-400" />
            <span className="text-teal-400 text-sm font-mono uppercase tracking-widest">
              Get In Touch
            </span>
            <span className="h-px w-8 bg-teal-400" />
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
            className="flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-[#1e293b] border border-[#334155]/50 text-[#94a3b8] hover:border-[#2dd4bf]/60 hover:text-[#2dd4bf] hover:bg-[#2dd4bf]/5 transition-all duration-200"
          >
            <Mail className="w-4 h-4 shrink-0" />
            manas2k00@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/muhammadanas2k00"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-[#1e293b] border border-[#334155]/50 text-[#94a3b8] hover:border-[#2dd4bf]/60 hover:text-[#2dd4bf] hover:bg-[#2dd4bf]/5 transition-all duration-200"
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
            {/* Honeypot — hidden from real users, catches bots */}
            <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
              <input
                ref={honeypotRef}
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-xs font-mono text-[#94a3b8] uppercase tracking-wider mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  aria-required="true"
                  maxLength={100}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg bg-[#0f172a] border border-[#334155]/60 text-[#f1f5f9] placeholder-[#334155] focus:outline-none focus:border-[#2dd4bf]/60 focus:ring-2 focus:ring-[#2dd4bf]/40 transition-all text-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-mono text-[#94a3b8] uppercase tracking-wider mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  aria-required="true"
                  maxLength={254}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg bg-[#0f172a] border border-[#334155]/60 text-[#f1f5f9] placeholder-[#334155] focus:outline-none focus:border-[#2dd4bf]/60 focus:ring-2 focus:ring-[#2dd4bf]/40 transition-all text-sm"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-mono text-[#94a3b8] uppercase tracking-wider mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                aria-required="true"
                rows={5}
                maxLength={MESSAGE_MAX}
                placeholder="Tell me about your project or opportunity..."
                onChange={(e) => setMessageLength(e.target.value.length)}
                className="w-full px-4 py-3 rounded-lg bg-[#0f172a] border border-[#334155]/60 text-[#f1f5f9] placeholder-[#334155] focus:outline-none focus:border-[#2dd4bf]/60 focus:ring-2 focus:ring-[#2dd4bf]/40 transition-all text-sm resize-none"
              />
              <p
                className={`text-xs text-right mt-1 transition-colors ${
                  messageLength > 1800 ? "text-red-400" : "text-[#94a3b8]/50"
                }`}
              >
                {messageLength} / {MESSAGE_MAX}
              </p>
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
            {cooldown > 0 && (
              <p className="text-[#94a3b8] text-sm text-center">
                You can send another message in {cooldown}s
              </p>
            )}

            <button
              type="submit"
              disabled={isDisabled}
              className="w-full sm:w-auto sm:px-8 py-3 rounded-lg bg-[#2dd4bf] text-[#0f172a] font-semibold hover:bg-[#2dd4bf]/90 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 shadow-[0_0_20px_-6px_#2dd4bf66]"
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
