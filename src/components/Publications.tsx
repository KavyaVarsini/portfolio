import { motion } from "framer-motion";
import { BookOpen, Presentation, Calendar, Award } from "lucide-react";

interface Publication {
  title: string;
  category: "Book Chapter" | "Conference Paper";
  details: string;
  year: string;
  description: string;
  icon: React.ReactNode;
}

const publications: Publication[] = [
  {
    title: "Sustainable AI and Green Data Analytics",
    category: "Book Chapter",
    details: "Research & Development Publication",
    year: "2024",
    description: "Contributed a scholarly book chapter discussing green engineering architectures, optimized server loads for training deep neural models, and carbon-neutral data structures in cloud computing.",
    icon: <BookOpen className="text-accent" size={20} />,
  },
  {
    title: "Generative AI in Analytical Era",
    category: "Conference Paper",
    details: "Presented at ICBAIC'24",
    year: "2024",
    description: "Authored and presented a peer-reviewed research paper outlining workflows of large language models inside data pipelines, model calibration mechanisms, and enterprise analytics implications.",
    icon: <Presentation className="text-highlight" size={20} />,
  },
];

export default function Publications() {
  return (
    <section id="publications" className="relative py-24 px-6 md:px-8 border-t border-white/[0.04] grid-bg">
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
            Scientific Research
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sora text-3xl md:text-5xl font-bold tracking-tight text-white mb-4"
          >
            Publications & Papers
          </motion.h2>
          <div className="w-12 h-1 bg-accent rounded" />
        </div>

        {/* Publications List */}
        <div className="space-y-6">
          {publications.map((pub, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group glass-panel glass-panel-hover p-6 md:p-8 rounded-2xl flex flex-col md:flex-row gap-6 items-start"
            >
              {/* Category Icon */}
              <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center group-hover:bg-accent/10 transition-colors shrink-0">
                {pub.icon}
              </div>

              {/* Contents */}
              <div className="flex-1 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-mono text-accent bg-accent/10 border border-accent/20 px-2.5 py-0.5 rounded-full uppercase tracking-wider font-semibold">
                    {pub.category}
                  </span>
                  <span className="text-xs font-mono text-muted flex items-center gap-1.5 font-semibold">
                    <Calendar size={12} />
                    {pub.year}
                  </span>
                </div>

                <h3 className="font-sora text-xl font-bold text-white group-hover:text-accent transition-colors">
                  {pub.title}
                </h3>
                <p className="text-xs font-semibold text-white/70 font-mono flex items-center gap-1">
                  <Award size={12} className="text-muted" />
                  {pub.details}
                </p>
                <p className="text-sm text-muted leading-relaxed pt-2">
                  {pub.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
