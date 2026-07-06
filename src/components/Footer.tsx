import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 px-6 md:px-8 border-t border-white/[0.04] bg-[#050816] z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo and Credits */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="font-sora text-sm font-bold text-white tracking-wide">
            KAVYA VARSINI S
          </div>
          <p className="text-[11px] text-muted font-mono leading-relaxed">
            Designed and developed by Kavya Varsini S &copy; 2026. All rights reserved.
          </p>
        </div>



        {/* Scroll To Top */}
        <button
          onClick={scrollToTop}
          className="w-9 h-9 rounded-full bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.15] transition-all flex items-center justify-center text-muted hover:text-white cursor-pointer"
          aria-label="Back to top"
        >
          <ArrowUp size={16} />
        </button>
        
      </div>
    </footer>
  );
}
