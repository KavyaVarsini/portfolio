import { motion } from "framer-motion";
import { Github, ExternalLink, ShieldCheck, Cpu, Layout, CheckCircle2 } from "lucide-react";

interface Project {
  title: string;
  tagline: string;
  type: string;
  description: string;
  stack: string[];
  features: string[];
  github?: string;
  live?: string;
  badgeIcon: React.ReactNode;
}

const projects: Project[] = [
  {
    title: "ShopSphere",
    tagline: "High-Performance Full-Stack Commerce",
    type: "MERN Stack E-Commerce",
    description: "A complete software architecture for digital shopping. ShopSphere features state-of-the-art authentication middlewares, efficient state management, and real-time processing APIs.",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs", "JWT Auth"],
    features: ["Advanced Cart Management", "Secure User Auth & JWT Middleware", "Order Processing & Shipping APIs", "Dynamic Product Catalog Filter"],
    github: "https://github.com/KavyaVarsini/shopsphere",
    live: "https://shopsphere-livid-gamma.vercel.app/",
    badgeIcon: <ShieldCheck className="text-accent" size={18} />,
  },
  {
    title: "Centralized Power Loom Production & Shift Monitoring System",
    tagline: "Industrial Capstone System",
    type: "Industrial Production & IoT Dash",
    description: "A robust enterprise tool tailored for industrial power looms. Optimizes scheduling metrics, tracks worker shift logs, aggregates analytics, and monitors manufacturing production outputs.",
    stack: ["Flask (Python)", "SQLite", "Job Scheduling", "Analytics Dashboard", "Worker Tracking", "Production Logging"],
    features: ["Real-time Shift & Loom Monitoring", "Automated Worker Scheduling Engine", "Interactive Analytics & CSV Exports", "Production Log Database Audit"],
    github: "https://github.com/KavyaVarsini/powerloom_salary_management",
    badgeIcon: <Cpu className="text-highlight" size={18} />,
  },
  {
    title: "Femmora",
    tagline: "Premium Fashion E-Commerce UI",
    type: "Responsive UI/UX Development",
    description: "A clean, client-focused frontend architecture for e-commerce, offering a responsive layout designed for high conversion rates and fluid desktop-to-mobile usage.",
    stack: ["Bootstrap", "JavaScript", "HTML5", "CSS3", "Responsive UI"],
    features: ["Elastic Real-Time Search UI", "Interactive Client Cart Module", "Cross-Browser Compatible Layout", "SEO Compliant Semantic Structure"],
    github: "https://github.com/KavyaVarsini/femmora-frontend",
    live: "https://femmora-frontend.vercel.app/",
    badgeIcon: <Layout className="text-emerald-400" size={18} />,
  },
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="projects" className="relative py-24 px-6 md:px-8 border-t border-white/[0.04] bg-[#070b1e]/30">
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
            Developer Portfolio
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sora text-3xl md:text-5xl font-bold tracking-tight text-white mb-4"
          >
            Featured Projects
          </motion.h2>
          <div className="w-12 h-1 bg-accent rounded" />
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="h-full"
            >
              <div className="premium-border-card flex flex-col h-full">
                {/* Card Inner Padding */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                  
                  <div>
                    {/* Category Type & Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-mono text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded-full uppercase tracking-wider font-semibold">
                        {project.type}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center">
                        {project.badgeIcon}
                      </div>
                    </div>

                    {/* Title & Tagline */}
                    <h3 className="font-sora text-xl font-bold text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-xs text-muted font-medium font-mono mb-4">
                      {project.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-muted mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features Bullet List */}
                    <div className="mb-6 space-y-2">
                      <h4 className="text-xs font-mono text-white/80 uppercase tracking-widest mb-3">Key Features</h4>
                      {project.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs text-muted">
                          <CheckCircle2 size={13} className="text-accent mt-0.5 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Chips & Action buttons */}
                  <div>
                    {/* Tech stack chips */}
                    <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-white/[0.04]">
                      {project.stack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-mono text-white/60 bg-white/[0.02] border border-white/[0.05] px-2 py-0.5 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1.5 text-xs font-semibold text-white/80 hover:text-white transition-colors"
                        >
                          <Github size={14} />
                          Repository
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-white transition-colors"
                        >
                          <ExternalLink size={14} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
