import { motion } from "framer-motion";
import { Briefcase, Calendar, Building2, CheckCircle2 } from "lucide-react";

interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  duration: string;
  highlights: string[];
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: "MERN Stack Intern",
    company: "Sparkout Tech Solutions Pvt. Ltd.",
    location: "Remote / Coimbatore, India",
    duration: "06/2026 – 07/2026",
    highlights: [
      "Developed full-stack web applications using MongoDB, Express.js, React.js, and Node.js.",
      "Designed responsive user interfaces and integrated REST APIs.",
      "Performed CRUD operations with MongoDB.",
      "Used Git and GitHub for version control and project management."
    ],
    skills: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs", "Git", "GitHub"]
  }
];

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="experience" className="relative py-24 px-6 md:px-8 border-t border-white/[0.04] bg-[#070b1e]/10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-xs font-mono text-accent uppercase tracking-widest mb-3"
          >
            Professional Experience
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sora text-3xl md:text-5xl font-bold tracking-tight text-white mb-4"
          >
            Internships & History
          </motion.h2>
          <div className="w-12 h-1 bg-accent rounded" />
        </div>

        {/* Experience Timeline / Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          {experiences.map((exp, idx) => (
            <motion.div key={idx} variants={itemVariants} className="w-full">
              <div className="group glass-panel glass-panel-hover p-6 md:p-8 rounded-2xl relative flex flex-col gap-6">
                
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                      <Briefcase size={22} />
                    </div>
                    <div>
                      <h3 className="font-sora text-xl font-bold text-white group-hover:text-accent transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-white/70 mt-1 font-medium">
                        <span className="flex items-center gap-1">
                          <Building2 size={14} className="text-muted" />
                          {exp.company}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Badge & Dates */}
                  <div className="flex items-center gap-3 self-start md:self-center font-mono">
                    <span className="text-xs font-semibold text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full">
                      Internship
                    </span>
                    <span className="text-xs text-muted flex items-center gap-1.5 font-semibold bg-white/[0.02] border border-white/[0.06] px-3 py-1 rounded-full">
                      <Calendar size={13} />
                      {exp.duration}
                    </span>
                  </div>
                </div>

                <div className="h-[1px] bg-white/[0.04]" />

                {/* Highlights / Responsibilities */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono text-muted uppercase tracking-wider font-bold">Key Responsibilities</h4>
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-3 text-sm text-muted leading-relaxed">
                        <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills Used */}
                <div className="flex flex-wrap gap-2 pt-4">
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[10px] font-mono text-white/80 bg-white/[0.03] border border-white/[0.08] hover:border-accent/40 transition-colors px-2.5 py-1 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
