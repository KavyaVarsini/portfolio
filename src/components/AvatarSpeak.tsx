import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, Image as ImageIcon } from "lucide-react";
import defaultAvatar from "../assets/avatar.png";

const speechPhrases = [
  "Hi, I'm Kavya.",
  "Full Stack Developer.",
  "AI Enthusiast.",
  "Building intelligent products.",
];

export default function AvatarSpeak() {
  const [avatarSrc, setAvatarSrc] = useState<string | null>(defaultAvatar);
  const [dragActive, setDragActive] = useState(false);
  const [currentPhraseIdx, setCurrentPhraseIdx] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isSpeaking, setIsSpeaking] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  // Handle clipboard paste of image
  useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
      const items = e.clipboardData?.items;
      if (items) {
        for (let i = 0; i < items.length; i++) {
          if (items[i].type.indexOf("image") !== -1) {
            const file = items[i].getAsFile();
            if (file) {
              const reader = new FileReader();
              reader.onload = (event) => {
                if (event.target?.result) {
                  setAvatarSrc(event.target.result as string);
                }
              };
              reader.readAsDataURL(file);
            }
          }
        }
      }
    };

    window.addEventListener("paste", handlePaste);
    return () => window.removeEventListener("paste", handlePaste);
  }, []);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (event) => {
          if (event.target?.result) {
            setAvatarSrc(event.target.result as string);
          }
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setAvatarSrc(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const removeAvatar = (e: React.MouseEvent) => {
    e.stopPropagation();
    setAvatarSrc(null);
  };

  return (
    <div 
      className="relative flex flex-col md:flex-row items-center justify-center gap-10 max-w-2xl mx-auto py-12 px-6 rounded-2xl glass-panel border border-white/[0.08]"
      onDragEnter={handleDrag}
      onDragOver={handleDrag}
      onDragLeave={handleDrag}
      onDrop={handleDrop}
    >
      {/* File input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />

      {/* Circle Avatar Frame with Audio Ripple Rings */}
      <div 
        onClick={triggerFileInput}
        className={`relative w-40 h-40 md:w-48 md:h-48 rounded-full flex items-center justify-center cursor-pointer select-none transition-all duration-300 z-10 ${
          dragActive 
            ? "border-2 border-dashed border-accent scale-105 bg-accent/10" 
            : "border border-white/[0.08] hover:border-accent/40 bg-white/[0.02]"
        }`}
      >
        {/* Concentric speaking ripples (only show active rings when speaking is true) */}
        {isSpeaking && (
          <>
            <div className="speak-pulse-ring pulse-ring-1 w-full h-full" />
            <div className="speak-pulse-ring pulse-ring-2 w-full h-full" />
            <div className="speak-pulse-ring pulse-ring-3 w-full h-full" />
          </>
        )}

        {avatarSrc ? (
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20 p-1 group">
            <img 
              src={avatarSrc} 
              alt="Kavya Varsini S" 
              className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-105"
            />
            {/* Hover overlay to change/remove */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity text-xs font-mono gap-1 text-white text-center p-2 rounded-full">
              <Upload size={16} className="mb-1" />
              <span>Change Image</span>
              <button 
                onClick={removeAvatar} 
                className="mt-2 bg-rose-600 hover:bg-rose-700 px-2 py-0.5 rounded text-[10px] uppercase font-bold"
              >
                Clear
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center text-center p-4">
            <div className="w-12 h-12 rounded-full bg-white/[0.04] flex items-center justify-center text-white border border-white/[0.08] mb-3 group-hover:bg-accent/10 transition-colors">
              <ImageIcon size={20} className="text-muted group-hover:text-accent" />
            </div>
            <span className="text-xs font-semibold text-white tracking-wide mb-1">Upload Photo</span>
            <span className="text-[10px] text-muted max-w-[120px] leading-tight">Drag, paste or click to browse</span>
          </div>
        )}
      </div>

      {/* Speaking bubble */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentPhraseIdx}
          initial={{ opacity: 0, scale: 0.9, x: -10 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.9, x: 10 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
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
