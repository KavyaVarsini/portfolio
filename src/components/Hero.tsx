import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Github, Linkedin, FileText, Mail } from "lucide-react";

const roles = ["Full Stack Developer", "AI Enthusiast"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Generate floating particle coordinates deterministically to prevent hydration mismatch
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: (i * 7) % 100,
    y: (i * 13) % 100,
    size: (i % 3) + 2,
    duration: (i % 5) + 6,
    delay: i * 0.4,
  }));

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-28 pb-16 px-6 md:px-8 bg-bg-dark grid-bg"
    >
      {/* Background Glowing Blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-accent blur-blob" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] bg-highlight blur-blob" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary blur-blob opacity-[0.08]" />

      {/* Floating Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute bg-white/10 rounded-full"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.15, 0.4, 0.15],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Soft tag above header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-xs font-mono text-muted mb-6 tracking-wider"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          AVAILABLE FOR INTERNSHIPS & ROLES
        </motion.div>

        {/* Large Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-sora text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tight text-white select-none leading-[1.05] mb-4"
        >
          KAVYA VARSINI S
        </motion.h1>

        {/* Rotating Subheadline */}
        <div className="h-10 sm:h-14 md:h-16 flex items-center justify-center mb-8 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={roleIndex}
              initial={{ y: 25, opacity: 0, filter: "blur(4px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              exit={{ y: -25, opacity: 0, filter: "blur(4px)" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="font-sora text-xl sm:text-3xl md:text-4xl font-semibold bg-gradient-to-r from-accent via-highlight to-secondary bg-clip-text text-transparent tracking-wide"
            >
              {roles[roleIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Short Summary */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl text-muted text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-10 px-4"
        >
          Final-year Computer Science & Data Analytics student building full-stack applications using React, Node.js, MongoDB and Flask.
        </motion.p>

        {/* Action Buttons (CTAs) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 px-4"
        >
          <a
            href="#contact"
            onClick={scrollToContact}
            className="px-6 py-3 rounded-full font-semibold text-sm bg-white text-bg-dark hover:bg-neutral-200 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.1)] cursor-pointer"
          >
            Get In Touch
          </a>
          <a
            href="mailto:kavyasenthil505@gmail.com"
            className="flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm text-white bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.15] transition-all cursor-pointer"
          >
            <Mail size={16} className="text-muted" />
            Email
          </a>
          <a
            href="https://github.com/KavyaVarsini"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm text-white bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.15] transition-all cursor-pointer"
          >
            <Github size={16} className="text-muted" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/kavya-varsini-s-54b057321/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm text-white bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.15] transition-all cursor-pointer"
          >
            <Linkedin size={16} className="text-muted" />
            LinkedIn
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm text-white bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.15] transition-all cursor-pointer"
          >
            <FileText size={16} className="text-muted" />
            Resume
          </a>
        </motion.div>
      </div>

      {/* Floating Indicators */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5, y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-muted"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll Down</span>
        <ArrowDown size={14} className="text-accent" />
      </motion.div>
    </section>
  );
}
