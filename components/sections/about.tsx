"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, HeartHandshake } from "lucide-react";

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section 
      id="about" 
      className="py-20 lg:py-32 px-6 relative overflow-hidden select-none bg-brand-cyan-950 text-brand-white-950 border-t border-white/5"
    >
      {/* Background Backlight Mesh Glow */}
      <div className="absolute top-1/2 left-[10%] -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-brand-teal-500/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[5%] right-[5%] w-[350px] h-[350px] rounded-full bg-brand-coral-500/5 blur-[100px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
        >
          {/* LEFT COLUMN: Beautiful Framed Portrait Card (40% width) */}
          <motion.div 
            className="hidden lg:flex lg:col-span-5 relative items-center justify-center"
            variants={cardVariants}
          >
            {/* Ambient circle glow */}
            <div className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-brand-teal-500/15 to-brand-cyan-400/5 blur-3xl opacity-60" />

            {/* Premium framed container */}
            <div className="w-full max-w-sm rounded-3xl p-3 bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl relative overflow-hidden group">
              <div className="relative rounded-2xl overflow-hidden bg-brand-cyan-900/50 aspect-[3/4] flex items-end justify-center">
                {/* Glowing ring backdrop */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-cyan-950 to-transparent z-10" />
                <img
                  src="/about.png"
                  alt="Dr. Sona Gupta"
                  className="w-full h-full object-cover relative z-0 transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Embedded bottom info overlay */}
                <div className="absolute bottom-4 left-4 right-4 z-20 p-4 rounded-xl bg-brand-cyan-950/80 border border-white/5 backdrop-blur-md">
                  <div className="text-xs font-sans font-bold tracking-widest text-brand-teal-400 uppercase">Valley Hospital</div>
                  <div className="text-sm font-heading font-bold text-brand-white-950 mt-1">Meherpur, Silchar</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Biography Content (60% width) */}
          <motion.div 
            className="col-span-12 lg:col-span-7 flex flex-col items-start"
            variants={containerVariants}
          >
            {/* Credential chips row */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2 mb-6"
            >
              <span className="px-3 py-1 rounded-full bg-brand-teal-500/10 border border-brand-teal-500/20 text-[9px] sm:text-[10px] font-sans font-bold tracking-widest text-brand-teal-400 uppercase flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>RCI Certified Specialist</span>
              </span>
              <span className="px-3 py-1 rounded-full bg-brand-teal-500/10 border border-brand-teal-500/20 text-[9px] sm:text-[10px] font-sans font-bold tracking-widest text-brand-teal-400 uppercase flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" />
                <span>Audiologist</span>
              </span>
              <span className="px-3 py-1 rounded-full bg-brand-teal-500/10 border border-brand-teal-500/20 text-[9px] sm:text-[10px] font-sans font-bold tracking-widest text-brand-teal-400 uppercase flex items-center gap-1.5">
                <HeartHandshake className="w-3.5 h-3.5" />
                <span>Speech Therapist</span>
              </span>
            </motion.div>

            {/* Editorial geometric display header */}
            <motion.h2 
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight leading-[1.15] mb-6 text-brand-white-950"
            >
              Restoring the Joy of <br />
              <span className="text-brand-coral-500">Connecting & Hearing.</span>
            </motion.h2>

            {/* Narrative Biography Body */}
            <div className="space-y-6 text-base text-brand-white-950/80 leading-relaxed font-sans mb-8">
              <motion.p variants={itemVariants}>
                Dr. Sona Gupta Deb Purkayastha is a qualified{" "}
                <span className="text-brand-white-950 font-semibold">Audiologist and Speech Therapist</span>{" "}
                registered with the{" "}
                <span className="text-brand-teal-400 font-semibold">Rehabilitation Council of India (RCI)</span>. 
                She practices at the trusted{" "}
                <span className="text-brand-teal-400 font-semibold">Valley Hospital & Research Centre (P) Ltd.</span>{" "}
                in Meherpur, Silchar, bringing compassionate, evidence-based care to patients of all ages — from children with speech delays to adults managing hearing loss.
              </motion.p>

              <motion.p variants={itemVariants}>
                Her clinical approach centers on patient comfort and family involvement, ensuring every individual receives personalized attention and a clear, structured path to better communication.
              </motion.p>
            </div>

            {/* Signature Block */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col items-start border-t border-white/5 pt-6 w-full"
            >
              <span className="text-2xl font-serif italic text-brand-white-950/80 tracking-wide font-medium">
                Dr. Sona Gupta Deb Purkayastha
              </span>
              <span className="text-[10px] sm:text-xs font-sans text-brand-teal-400 font-bold uppercase tracking-wider mt-1.5">
                Audiologist & Speech Therapist
              </span>
            </motion.div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
