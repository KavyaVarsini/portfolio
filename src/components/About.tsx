import { motion } from "framer-motion";
import { GraduationCap, Calendar, BookOpen } from "lucide-react";
import AvatarSpeak from "./AvatarSpeak";

interface TimelineItem {
  year: string;
  degree: string;
  institution: string;
  score: string;
  description: string;
}

const educationTimeline: TimelineItem[] = [
  {
    year: "2024 – Present",
    degree: "B.Sc Computer Science with Data Analytics",
    institution: "KPR College of Arts Science and Research",
    score: "9.0 CGPA",
    description: "Specializing in software engineering methodologies, advanced data analysis models, full-stack application development, and database architectures.",
  },
  {
    year: "Graduated 2024",
    degree: "Higher Secondary Certificate (HSC)",
    institution: "MS.Vidyalaya Matriculation Higher Secondary School",
    score: "96%",
    description: "Focus on Mathematics, Computer Science, and Physics. Developed primary logic concepts and problem-solving skills.",
  },
  {
    year: "Graduated 2022",
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution: "MS.Vidyalaya Matriculation Higher Secondary School",
    score: "93%",
    description: "Acquired foundation skills in general science, mathematics, and primary programming basics.",
  },
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
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
    <section id="about" className="relative py-24 px-6 md:px-8 border-t border-white/[0.04] bg-[#070b1e]/30">
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
            Profile Summary
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sora text-3xl md:text-5xl font-bold tracking-tight text-white mb-4"
          >
            Engineering & Analytics
          </motion.h2>
          <div className="w-12 h-1 bg-accent rounded" />
        </div>

        {/* Interactive AvatarSpeak Section */}
        <div className="mb-20">
          <AvatarSpeak />
        </div>

        {/* Two-Column Details */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-start"
        >
          {/* Biography */}
          <motion.div variants={itemVariants} className="lg:col-span-6 space-y-6">
            <h3 className="font-sora text-2xl font-semibold text-white">Professional Biography</h3>
            <p className="text-muted leading-relaxed text-base">
              I am a final-year Computer Science & Data Analytics student with practical, hands-on experience in building scalable full-stack web applications. My training leverages the intersection of computer engineering practices and data-driven insights.
            </p>
            <p className="text-muted leading-relaxed text-base">
              My engineering stack centers around JavaScript (MERN: MongoDB, Express, React, Node.js), Python (Flask), and modern cloud/database systems. I approach development through a lens of clean architecture, modularity, and high performance.
            </p>
            <p className="text-muted leading-relaxed text-base">
              Deeply curious about AI-native systems, API engineering, and scalable enterprise designs, I enjoy building tools that solve real-world problems. I'm actively seeking opportunities to contribute as a Full Stack Developer or Software Engineering intern.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm">
                <div className="font-sora text-3xl font-bold text-accent">9.0</div>
                <div className="text-xs font-mono text-muted uppercase mt-1">B.Sc CGPA</div>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm">
                <div className="font-sora text-3xl font-bold text-highlight">96%</div>
                <div className="text-xs font-mono text-muted uppercase mt-1">HSC Score</div>
              </div>
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div variants={itemVariants} className="lg:col-span-6 space-y-6">
            <h3 className="font-sora text-2xl font-semibold text-white">Academic Journey</h3>

            <div className="relative border-l-2 border-white/[0.06] pl-6 ml-2 space-y-10">
              {educationTimeline.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Dot */}
                  <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-bg-dark border-2 border-accent transition-transform duration-300 group-hover:scale-125 z-10" />

                  {/* Timeline Content */}
                  <div className="glass-panel glass-panel-hover p-6 rounded-xl relative">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-mono text-accent bg-accent/10 px-2 py-0.5 rounded-full flex items-center gap-1.5 font-semibold">
                        <Calendar size={11} />
                        {item.year}
                      </span>
                      <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full font-bold">
                        {item.score}
                      </span>
                    </div>

                    <h4 className="font-sora text-lg font-bold text-white group-hover:text-accent transition-colors flex items-center gap-2">
                      <GraduationCap size={18} className="text-muted" />
                      {item.degree}
                    </h4>
                    <p className="text-xs font-semibold text-white/70 mt-1 flex items-center gap-1.5">
                      <BookOpen size={13} className="text-muted" />
                      {item.institution}
                    </p>
                    <p className="text-sm text-muted mt-3 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
