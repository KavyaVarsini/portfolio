import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle, FileText } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);

    fetch("https://formsubmit.co/ajax/kavyasenthil505@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: formState.name,
        email: formState.email,
        message: formState.message
      })
    })
      .then((res) => res.json())
      .then((data) => {
        setIsSubmitting(false);
        if (data.success === "true" || data.success === true) {
          setIsSuccess(true);
          setFormState({ name: "", email: "", message: "" });
          
          // Reset success state after 5 seconds
          setTimeout(() => setIsSuccess(false), 5000);
        } else {
          alert("Something went wrong. Please try again.");
        }
      })
      .catch((err) => {
        setIsSubmitting(false);
        console.error("Form submission error:", err);
        alert("An error occurred. Please email me directly at kavyasenthil505@gmail.com");
      });
  };

  return (
    <section id="contact" className="relative py-24 px-6 md:px-8 border-t border-white/[0.04] bg-[#070b1e]/30">
      {/* Glow background elements */}
      <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-xs font-mono text-accent uppercase tracking-widest mb-3"
          >
            Get in touch
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sora text-3xl md:text-5xl font-bold tracking-tight text-white mb-4"
          >
            Let's Collaborate
          </motion.h2>
          <div className="w-12 h-1 bg-accent rounded" />
        </div>

        {/* Form and Info Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-stretch">
          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between p-8 rounded-2xl glass-panel relative overflow-hidden"
          >
            {/* Visual element */}
            <div className="absolute -top-12 -left-12 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />

            <div className="space-y-8 relative z-10">
              <h3 className="font-sora text-2xl font-bold text-white">Contact Information</h3>
              <p className="text-sm text-muted leading-relaxed">
                Whether you want to discuss full-stack opportunities, AI integrations, academic collaborations, or just say hello, my inbox is open.
              </p>

              <div className="space-y-5">
                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-center text-accent">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-muted uppercase font-bold">Location</div>
                    <div className="text-sm text-white font-medium">Tirupur, Tamil Nadu, India</div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-center text-highlight">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-muted uppercase font-bold">Email Address</div>
                    <a href="mailto:kavyasenthil505@gmail.com" className="text-sm text-white hover:text-accent font-medium transition-colors">
                      kavyasenthil505@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links & Resume */}
            <div className="mt-12 pt-6 border-t border-white/[0.04] space-y-5 relative z-10">
              <div className="flex gap-4">
                <a
                  href="https://github.com/KavyaVarsini"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-muted hover:text-white hover:bg-white/[0.06] hover:border-white/[0.15] transition-all"
                  aria-label="GitHub"
                >
                  <Github size={16} />
                </a>
                <a
                  href="https://www.linkedin.com/in/kavya-varsini-s-54b057321/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-muted hover:text-white hover:bg-white/[0.06] hover:border-white/[0.15] transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
              </div>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-[11px] font-semibold tracking-wider text-white bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.15] transition-all uppercase cursor-pointer"
              >
                <FileText size={13} className="text-accent" />
                Download CV / Resume
              </a>
            </div>
          </motion.div>

          {/* Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 p-8 rounded-2xl glass-panel relative"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-mono text-muted uppercase font-bold">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-[#050816]/50 border border-white/[0.08] focus:border-accent rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-all placeholder:text-muted/40"
                    placeholder="John Doe"
                  />
                </div>
                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-mono text-muted uppercase font-bold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-[#050816]/50 border border-white/[0.08] focus:border-accent rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-all placeholder:text-muted/40"
                    placeholder="johndoe@example.com"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-mono text-muted uppercase font-bold">
                  Your Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-[#050816]/50 border border-white/[0.08] focus:border-accent rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-all placeholder:text-muted/40 resize-none"
                  placeholder="Hey, let's talk about the software development project..."
                />
              </div>

              {/* Submit / Status Button */}
              <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className="w-full h-12 rounded-xl bg-white text-bg-dark font-semibold text-sm hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 disabled:bg-neutral-800 disabled:text-neutral-500 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-neutral-500 border-t-white rounded-full animate-spin" />
                    Dispatching...
                  </>
                ) : isSuccess ? (
                  <>
                    <CheckCircle size={16} className="text-emerald-400" />
                    Sent Successfully
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>

            {/* success dialog confirmation */}
            <AnimatePresence>
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute bottom-1 right-8 left-8 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-2.5"
                >
                  <CheckCircle size={18} className="text-emerald-400 shrink-0" />
                  <span className="text-xs text-emerald-300 font-mono">
                    Message dispatched securely. I'll get back to you shortly!
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
