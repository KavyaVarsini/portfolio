import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import defaultAvatar from "../assets/avatar.png";

const speechPhrases = [
  "Hi, I'm Kavya.",
  "Full Stack Developer.",
  "AI Enthusiast.",
  "Building intelligent products.",
];

export default function AvatarSpeak() {
  const [currentPhraseIdx, setCurrentPhraseIdx] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Typewriter effect logic
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const fullText = speechPhrases[currentPhraseIdx];
    
    if (isTyping) {
      setIsSpeaking(true);
      if (displayedText.length < fullText.length) {
        timer = setTimeout(() => {
          setDisplayedText(fullText.substring(0, displayedText.length + 1));
        }, 100); // Typing speed
      } else {
        // Finished typing phrase, pause
        timer = setTimeout(() => {
          setIsTyping(false);
          setIsSpeaking(false);
        }, 2500);
      }
    } else {
      // Deleting text
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(displayedText.substring(0, displayedText.length - 1));
        }, 50); // Deleting speed
      } else {
        // Finished deleting, move to next phrase
        setCurrentPhraseIdx((prev) => (prev + 1) % speechPhrases.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isTyping, currentPhraseIdx]);

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center gap-10 max-w-2xl mx-auto py-12 px-6 rounded-2xl glass-panel border border-white/[0.08]">
      {/* Circle Avatar Frame with Audio Ripple Rings */}
      <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full flex items-center justify-center select-none transition-all duration-300 z-10 border border-white/[0.08] bg-white/[0.02]">
        {/* Concentric speaking ripples (only show active rings when speaking is true) */}
        {isSpeaking && (
          <>
            <div className="speak-pulse-ring pulse-ring-1 w-full h-full" />
            <div className="speak-pulse-ring pulse-ring-2 w-full h-full" />
            <div className="speak-pulse-ring pulse-ring-3 w-full h-full" />
          </>
        )}

        <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20 p-1">
          <img 
            src={defaultAvatar} 
            alt="Kavya Varsini S" 
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>

      {/* Speaking bubble */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentPhraseIdx}
          initial={{ opacity: 0, scale: 0.9, x: -10 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.9, x: 10 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
          className="relative max-w-sm flex-1 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-md shadow-2xl"
        >
          {/* Decorative bubble tail */}
          <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-4 h-4 rotate-45 bg-[#0A0E1A] border-l border-b border-white/[0.06] hidden md:block" />
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 bg-[#0A0E1A] border-t border-l border-white/[0.06] md:hidden" />

          {/* Animated typing output */}
          <div className="font-mono text-sm tracking-wide text-white min-h-[44px] flex items-center leading-relaxed">
            <span className="text-accent mr-1.5 font-bold">&gt;</span>
            <span>{displayedText}</span>
            <span className="w-2 h-4 bg-white/70 ml-1 inline-block animate-pulse" />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
