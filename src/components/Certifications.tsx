import { motion } from "framer-motion";
import { Award, ShieldCheck, Calendar, ExternalLink } from "lucide-react";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  skillsAcquired: string[];
  credentialId?: string;
  badgeColor: string;
  pdfUrl?: string;
}

const certifications: Certification[] = [
  {
    title: "Web Development Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "2024",
    skillsAcquired: ["HTML5", "CSS3", "JavaScript ES6", "Web Architectures", "Developer Toolkits"],
    credentialId: "IBM-SB-WDF-9082",
    badgeColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    pdfUrl: "/ibm_cert.pdf",
  },
  {
    title: "AI Tools and ChatGPT Workshop",
    issuer: "be10x",
    date: "2026",
    skillsAcquired: ["Prompt Engineering", "AI Productivity workflows", "GPT Agents Integration", "Workflow Automation"],
    credentialId: "BE10X-AI-8831",
    badgeColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    pdfUrl: "/be10x_cert.pdf",
  },
  {
    title: "Problem Solving (Basic)",
    issuer: "HackerRank",
    date: "2026",
    skillsAcquired: ["Algorithms", "Data Structures", "Problem Solving", "Logic Building"],
    credentialId: "BEC8430AD632",
    badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    pdfUrl: "/hackerrank_problem_solving.pdf",
  },
  {
    title: "Java (Basic)",
    issuer: "HackerRank",
    date: "2026",
    skillsAcquired: ["Java Basics", "OOP Concepts", "Basic Coding", "Syntax Fundamentals"],
    credentialId: "24605857658B",
    badgeColor: "text-orange-400 bg-orange-500/10 border-orange-500/20",
    pdfUrl: "/hackerrank_java.pdf",
  },
  {
    title: "UX Design Introduction Job Simulation",
    issuer: "Lloyds Banking Group (via Forage)",
    date: "2026",
    skillsAcquired: ["Competitive Analysis", "Customer Research", "User Research", "Survey Design"],
    credentialId: "4RqgSbtQ7FDR2EFx7",
    badgeColor: "text-teal-400 bg-teal-500/10 border-teal-500/20",
    pdfUrl: "/lloyds_ux_design.pdf",
  },
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte (via Forage)",
    date: "2026",
    skillsAcquired: ["Data Analysis", "Forensic Technology", "Enterprise Analytics", "Technical Auditing"],
    credentialId: "kK8vZYTZxRkmouL3T",
    badgeColor: "text-sky-400 bg-sky-500/10 border-sky-500/20",
    pdfUrl: "/deloitte_data_analytics.pdf",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 px-6 md:px-8 border-t border-white/[0.04] bg-[#070b1e]/30">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-xs font-mono text-accent uppercase tracking-widest mb-3"
          >
            Verified Credentials
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sora text-3xl md:text-5xl font-bold tracking-tight text-white mb-4"
          >
            Certifications
          </motion.h2>
          <div className="w-12 h-1 bg-accent rounded" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group premium-border-card p-6 md:p-8 flex flex-col justify-between"
            >
              <div>
                {/* Header: Issuer and Date */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[10px] font-mono border px-2.5 py-0.5 rounded-full uppercase tracking-wider font-semibold ${cert.badgeColor}`}>
                    {cert.issuer}
                  </span>
                  <span className="text-xs font-mono text-muted flex items-center gap-1">
                    <Calendar size={12} />
                    {cert.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-sora text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors flex items-start gap-2">
                  <Award size={20} className="text-accent shrink-0 mt-1" />
                  {cert.title}
                </h3>

                {/* Credential ID */}
                {cert.credentialId && (
                  <p className="text-[10px] font-mono text-muted mb-6 flex items-center gap-1.5 font-semibold">
                    <ShieldCheck size={12} className="text-emerald-400" />
                    License: {cert.credentialId}
                  </p>
                )}

                {/* Skills Acquired */}
                <div className="space-y-2">
                  <h4 className="text-[10px] font-mono text-white/70 uppercase tracking-widest font-bold">Skills Practiced</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skillsAcquired.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] font-mono bg-white/[0.02] border border-white/[0.05] text-white/70 px-2 py-1 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action buttons/footer */}
              <div className="mt-8 pt-4 border-t border-white/[0.04] flex items-center justify-between">
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full font-bold">
                  Credential Verified
                </span>
                {cert.pdfUrl && (
                  <a 
                    href={cert.pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-muted hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    Verify Link
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
