import { motion } from "framer-motion";
import { Trophy, TrendingUp, Cpu, Users, Zap } from "lucide-react";

interface Achievement {
  title: string;
  category: string;
  metric?: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const achievements: Achievement[] = [
  {
    title: "Highest Academic Performer",
    category: "Academic Excellence",
    metric: "9.0 CGPA",
    description: "Ranked as one of the top academic students throughout the B.Sc Computer Science with Data Analytics program at KPR College.",
    icon: <Trophy size={18} />,
    color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  },
  {
    title: "Centum in Computer Applications",
    category: "Computer Science Specialization",
    metric: "100 / 100",
    description: "Achieved a perfect score (100%) in Computer Applications, demonstrating mastery of software packages and core computer theories.",
    icon: <Cpu size={18} />,
    color: "text-accent bg-accent/10 border-accent/20",
  },
  {
    title: "Centum in Economics",
    category: "Analytical Studies",
    metric: "100 / 100",
    description: "Scored a perfect 100% in Economics, validating strong data analysis skills and market demand analysis skills.",
    icon: <TrendingUp size={18} />,
    color: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  },
  {
    title: "Hackathon Participation - Team Lead",
    category: "Product Hackathon",
    metric: "Project Leader",
    description: "Steered the team in creating high-fidelity prototypes. Coordinated MERN stack integration, API structure design, and presentation.",
    icon: <Users size={18} />,
    color: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  },
  {
    title: "Kho Kho Tournament Winner",
    category: "Athletics & Sports",
    metric: "Gold Medal",
    description: "Competed and won gold in regional Kho Kho tournaments, reflecting discipline, teamwork, endurance, and collaborative coordination.",
    icon: <Zap size={18} />,
    color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  },
];

export default function Achievements() {
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
    <section id="achievements" className="relative py-24 px-6 md:px-8 border-t border-white/[0.04] grid-bg">
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
            Track Record
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sora text-3xl md:text-5xl font-bold tracking-tight text-white mb-4"
          >
            Honors & Achievements
          </motion.h2>
          <div className="w-12 h-1 bg-accent rounded" />
        </div>

        {/* Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {achievements.map((ach, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="group glass-panel glass-panel-hover p-6 rounded-2xl relative flex flex-col justify-between"
            >
              <div>
                {/* Icon Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-9 h-9 rounded-xl border flex items-center justify-center ${ach.color}`}>
                    {ach.icon}
                  </div>
                  {ach.metric && (
                    <span className="text-xs font-mono text-white/80 bg-white/[0.03] border border-white/[0.08] px-2.5 py-0.5 rounded-full font-bold">
                      {ach.metric}
                    </span>
                  )}
                </div>

                {/* Info */}
                <span className="text-[9px] font-mono text-muted uppercase tracking-widest font-bold">
                  {ach.category}
                </span>
                <h3 className="font-sora text-base font-bold text-white mt-1 group-hover:text-accent transition-colors leading-snug">
                  {ach.title}
                </h3>
                <p className="text-xs text-muted mt-3 leading-relaxed">
                  {ach.description}
                </p>
              </div>

              {/* Decorative line */}
              <div className="w-full h-[1px] bg-white/[0.04] mt-6 group-hover:bg-accent/20 transition-colors" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
