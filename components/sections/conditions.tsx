"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Condition {
  name: string;
  category: "hearing" | "speech";
}

const CONDITIONS_DATA: Condition[] = [
  // Hearing Concerns
  { name: "Sensorineural Hearing Loss", category: "hearing" },
  { name: "Conductive Hearing Loss", category: "hearing" },
  { name: "Tinnitus (Ringing in Ears)", category: "hearing" },
  { name: "Age-Related Hearing Loss (Presbycusis)", category: "hearing" },
  { name: "Auditory Processing Disorder (APD)", category: "hearing" },
  { name: "Noise-Induced Hearing Damage", category: "hearing" },

  // Speech & Language
  { name: "Childhood Speech Delays", category: "speech" },
  { name: "Stuttering & Stammering (Fluency)", category: "speech" },
  { name: "Misarticulation & Pronunciation Issues", category: "speech" },
  { name: "Autism (ASD) Communication Delays", category: "speech" },
  { name: "ADHD Communication Challenges", category: "speech" },
  { name: "Voice & Resonance Disorders", category: "speech" },
  { name: "Swallowing Difficulties (Dysphagia)", category: "speech" },
  { name: "Post-Stroke Aphasia & Dysarthria", category: "speech" }
];

const FILTERS = [
  { id: "all", label: "All Concerns" },
  { id: "hearing", label: "Hearing Concerns" },
  { id: "speech", label: "Speech & Language" }
];

const CATEGORY_STYLES = {
  hearing: {
    bg: "bg-[#E0F2FE]", // soft blue
    hoverBg: "hover:bg-[#BAE6FD]",
    dotBg: "bg-sky-600",
  },
  speech: {
    bg: "bg-[#FFEDD5]", // soft amber
    hoverBg: "hover:bg-[#FDE68A]",
    dotBg: "bg-amber-600",
  }
};

const SparkleStar = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
  </svg>
);

export default function Conditions() {
  const [activeFilter, setActiveFilter] = useState<"all" | "hearing" | "speech">("all");

  const filteredConditions = CONDITIONS_DATA.filter(
    (item) => activeFilter === "all" || item.category === activeFilter
  );

  return (
    <section
      id="conditions"
      className="py-20 lg:py-32 px-6 relative overflow-hidden select-none bg-[#F3F7F5] text-slate-900 border-t-2 border-slate-900"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-brand-teal-500/5 blur-[140px] pointer-events-none z-0" />

      {/* Decorative stars floating in background */}
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-16 left-6 md:left-24 text-teal-400 w-8 h-8 pointer-events-none opacity-40 hidden sm:block"
      >
        <SparkleStar />
      </motion.div>
      <motion.div
        animate={{ y: [0, 8, 0], rotate: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-16 right-6 md:right-24 text-brand-coral-500 w-6 h-6 pointer-events-none opacity-40 hidden sm:block"
      >
        <SparkleStar />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="px-3.5 py-1.5 rounded-full bg-[#FFFBEB] border-2 border-slate-900 text-[10px] font-sans font-extrabold tracking-widest text-slate-800 uppercase mb-4 shadow-[2px_2px_0px_0px_#0F172A]"
          >
            Who Can Benefit
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight leading-[1.15] text-slate-900 max-w-3xl relative"
          >
            Clinical Conditions We <br className="hidden sm:inline" />
            <span className="text-brand-coral-500">Treat & Support.</span>
            
            {/* Cute stars right next to heading */}
            <SparkleStar className="absolute -top-3 -right-6 text-amber-400 w-4 h-4 animate-pulse hidden md:block" />
            <SparkleStar className="absolute -bottom-2 -left-8 text-teal-500 w-5 h-5 animate-bounce hidden md:block" />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base text-slate-700 leading-relaxed font-sans max-w-2xl mt-4 font-semibold"
          >
            Providing expert diagnostic testing and personalized therapeutic plans for patients across all stages of development and life.
          </motion.p>
        </div>

        {/* Dynamic Segmented Switcher */}
        <div className="flex justify-center mb-16 px-4">
          <div className="relative flex rounded-full bg-white border-2 border-slate-900 p-1.5 max-w-[480px] w-full shadow-[4px_4px_0px_0px_#0F172A]">
            {FILTERS.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id as any)}
                className={`relative z-10 flex-1 py-2.5 text-[9px] sm:text-xs font-sans font-bold tracking-wider uppercase transition-colors duration-300 rounded-full cursor-pointer ${
                  activeFilter === filter.id
                    ? "text-white"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {filter.label}
                {activeFilter === filter.id && (
                  <motion.span
                    layoutId="activeTab"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    className="absolute inset-0 bg-teal-600 border border-slate-900 rounded-full z-[-1]"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Filtered Conditions Grid with Flicker-free Group Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] as const }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4.5 max-w-4xl mx-auto"
          >
            {filteredConditions.map((condition) => {
              const style = CATEGORY_STYLES[condition.category];
              return (
                <motion.div
                  key={condition.name}
                  whileHover={{ scale: 1.015, x: -2, y: -2 }}
                  className={`group px-6 py-4 rounded-2xl ${style.bg} ${style.hoverBg} border-2 border-slate-900 text-slate-800 font-sans tracking-wide transition-all duration-200 shadow-[3px_3px_0px_0px_#0F172A] hover:shadow-[5px_5px_0px_0px_#0F172A] cursor-pointer select-none flex items-center gap-3.5`}
                >
                  <div className="w-5 h-5 rounded-full bg-white border-2 border-slate-900 flex items-center justify-center shrink-0">
                    <span className={`w-1.5 h-1.5 rounded-full ${style.dotBg} shrink-0`} />
                  </div>
                  <span className="text-sm font-extrabold leading-normal">{condition.name}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
