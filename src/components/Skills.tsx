import { motion } from "framer-motion";
import { Code2, Monitor, Server, Database, BrainCircuit } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: <Code2 className="text-accent" size={20} />,
    skills: ["Python", "Java", "JavaScript", "C", "C++"],
    color: "from-purple-500/20 to-indigo-500/20",
  },
  {
    title: "Frontend Engineering",
    icon: <Monitor className="text-highlight" size={20} />,
    skills: ["React", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Backend Development",
    icon: <Server className="text-secondary" size={20} />,
    skills: ["Node.js", "Express.js", "Flask", "REST APIs"],
    color: "from-violet-500/20 to-purple-500/20",
  },
  {
    title: "Database Engineering",
    icon: <Database className="text-indigo-400" size={20} />,
    skills: ["MongoDB", "MySQL", "SQLite", "SQL Fundamentals"],
    color: "from-indigo-500/20 to-pink-500/20",
  },
  {
    title: "Core CS & Tools",
    icon: <BrainCircuit className="text-emerald-400" size={20} />,
    skills: ["Data Structures & Algorithms", "OOP Concepts", "DBMS", "Git / GitHub"],
    color: "from-emerald-500/20 to-teal-500/20",
  },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="skills" className="relative py-24 px-6 md:px-8 border-t border-white/[0.04] grid-bg">
      {/* Background radial soft light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

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
            Technical Competence
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sora text-3xl md:text-5xl font-bold tracking-tight text-white mb-4"
          >
            Skills & Core Stack
          </motion.h2>
          <div className="w-12 h-1 bg-accent rounded" />
        </div>

        {/* Skill Card Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="group glass-panel glass-panel-hover p-6 rounded-2xl relative overflow-hidden"
            >
              {/* Inner card colored ambient glow */}
              <div className={`absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br ${category.color} rounded-full blur-xl group-hover:scale-150 transition-transform duration-500`} />

              {/* Title & Icon Header */}
              <div className="flex items-center gap-3.5 mb-6 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center group-hover:bg-white/[0.08] transition-colors">
                  {category.icon}
                </div>
                <h3 className="font-sora text-lg font-bold text-white group-hover:text-accent transition-colors">
                  {category.title}
                </h3>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2.5 relative z-10">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-xs font-mono bg-white/[0.02] border border-white/[0.06] text-white/80 hover:text-white hover:border-white/15 px-3 py-1.5 rounded-lg transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
