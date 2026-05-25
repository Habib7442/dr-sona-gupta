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

export default function Conditions() {
  const [activeFilter, setActiveFilter] = useState<"all" | "hearing" | "speech">("all");

  const filteredConditions = CONDITIONS_DATA.filter(
    (item) => activeFilter === "all" || item.category === activeFilter
  );

  return (
    <section
      id="conditions"
      className="py-20 lg:py-32 px-6 relative overflow-hidden select-none bg-brand-cyan-950 text-brand-white-950 border-t border-white/5"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-brand-teal-500/5 blur-[140px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="px-3.5 py-1.5 rounded-full bg-brand-teal-500/10 border border-brand-teal-500/20 text-[9px] sm:text-[10px] font-sans font-bold tracking-widest text-brand-teal-400 uppercase mb-4"
          >
            Who Can Benefit
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight leading-[1.15] text-brand-white-950 max-w-3xl"
          >
            Clinical Conditions We <br className="hidden sm:inline" />
            <span className="text-brand-coral-500">Treat & Support.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base text-brand-white-950/60 leading-relaxed font-sans max-w-2xl mt-4"
          >
            Providing expert diagnostic testing and personalized therapeutic plans for patients across all stages of development and life.
          </motion.p>
        </div>

        {/* Dynamic Segmented Switcher */}
        <div className="flex justify-center mb-16 px-4">
          <div className="relative flex rounded-full bg-brand-cyan-900/50 border border-white/5 p-1 max-w-[480px] w-full shadow-lg">
            {FILTERS.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id as any)}
                className={`relative z-10 flex-1 py-2.5 text-[9px] sm:text-xs font-sans font-bold tracking-wider uppercase transition-colors duration-300 rounded-full cursor-pointer ${
                  activeFilter === filter.id
                    ? "text-brand-cyan-950"
                    : "text-brand-white-950/60 hover:text-brand-white-950"
                }`}
              >
                {filter.label}
                {activeFilter === filter.id && (
                  <motion.span
                    layoutId="activeTab"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    className="absolute inset-0 bg-brand-teal-400 rounded-full z-[-1] shadow-[0_0_15px_rgba(0,180,216,0.3)]"
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
            className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto"
          >
            {filteredConditions.map((condition) => (
              <div
                key={condition.name}
                className="group px-6 py-4 rounded-2xl bg-brand-cyan-900/35 border border-white/5 text-brand-white-950/80 font-sans tracking-wide hover:border-brand-teal-400/30 hover:text-brand-white-950 transition-all duration-300 shadow-sm cursor-pointer select-none flex items-center gap-3.5 hover:bg-brand-cyan-900/50 hover:shadow-[0_0_20px_rgba(0,180,216,0.08)] hover:scale-[1.015]"
              >
                <div className="w-5 h-5 rounded-full bg-brand-teal-500/10 border border-brand-teal-500/20 flex items-center justify-center text-brand-teal-400 group-hover:text-brand-white-950 group-hover:bg-brand-teal-500 transition-all duration-300 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-current shrink-0" />
                </div>
                <span className="text-sm font-medium leading-normal">{condition.name}</span>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
