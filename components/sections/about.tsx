"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, HeartHandshake } from "lucide-react";
import Image from "next/image";

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
      className="py-20 lg:py-32 px-6 relative overflow-hidden select-none bg-[#F3F7F5] text-slate-900 border-t-2 border-slate-900"
    >
      {/* Background Backlight Mesh Glow */}
      <div className="absolute top-1/2 left-[10%] -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-brand-teal-500/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[5%] right-[5%] w-[350px] h-[350px] rounded-full bg-brand-coral-500/5 blur-[100px] pointer-events-none z-0" />

      {/* Background Sparkles */}
      <motion.div
        animate={{ y: [0, -8, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-12 right-12 text-teal-500 w-6 h-6 pointer-events-none opacity-30 hidden sm:block"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10 mb-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
        >
          {/* LEFT COLUMN: Beautiful Framed Portrait Card (40% width) */}
          <motion.div 
            className="hidden lg:flex lg:col-span-5 relative items-center justify-center [perspective:1000px]"
            variants={cardVariants}
          >
            {/* Ambient circle glow */}
            <div className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-teal-500/15 to-cyan-400/5 blur-3xl opacity-60" />

            {/* Premium framed container with 3D tilt */}
            <motion.div 
              whileHover={{ rotateY: 8, rotateX: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-full max-w-sm rounded-[32px] p-3 bg-white border-2 border-slate-900 shadow-[6px_6px_0px_0px_#0F172A] hover:shadow-[9px_9px_0px_0px_#0F172A] transition-all duration-300 relative overflow-hidden group cursor-pointer"
            >
              <div className="relative rounded-[24px] overflow-hidden bg-slate-50 aspect-[3/4] flex items-end justify-center">
                {/* Glowing ring backdrop */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent z-10" />
                <Image
                  src="/about.png"
                  alt="Dr. Sona Gupta Deb Purkayastha inside her practice clinic room at Valley Hospital Silchar"
                  fill
                  sizes="(max-width: 1024px) 100vw, 384px"
                  className="w-full h-full object-cover relative z-0 transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Embedded bottom info overlay */}
                <div className="absolute bottom-4 left-4 right-4 z-20 p-4 rounded-2xl bg-[#FFFBEB] border-2 border-slate-900 shadow-[3px_3px_0px_0px_#0F172A]">
                  <div className="text-xs font-sans font-extrabold tracking-widest text-teal-700 uppercase">Valley Hospital</div>
                  <div className="text-sm font-heading font-extrabold text-slate-900 mt-1">Meherpur, Silchar</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Biography Content (60% width) */}
          <motion.div 
            className="col-span-1 lg:col-span-7 flex flex-col items-start"
            variants={containerVariants}
          >
            {/* Credential chips row with wiggles */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 mb-6"
            >
              <motion.span 
                whileHover={{ scale: 1.05, rotate: [0, -2, 2, -2, 0] }}
                className="px-3.5 py-1.5 rounded-full bg-[#DCFCE7] border-2 border-slate-900 text-[10px] font-sans font-extrabold tracking-wider text-slate-800 uppercase flex items-center gap-1.5 shadow-[2px_2px_0px_0px_#0F172A] cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>RCI Certified Specialist</span>
              </motion.span>
              <motion.span 
                whileHover={{ scale: 1.05, rotate: [0, 2, -2, 2, 0] }}
                className="px-3.5 py-1.5 rounded-full bg-[#E0F2FE] border-2 border-slate-900 text-[10px] font-sans font-extrabold tracking-wider text-slate-800 uppercase flex items-center gap-1.5 shadow-[2px_2px_0px_0px_#0F172A] cursor-pointer"
              >
                <Award className="w-4 h-4 text-sky-600" />
                <span>Audiologist</span>
              </motion.span>
              <motion.span 
                whileHover={{ scale: 1.05, rotate: [0, -2, 2, -2, 0] }}
                className="px-3.5 py-1.5 rounded-full bg-[#FFEDD5] border-2 border-slate-900 text-[10px] font-sans font-extrabold tracking-wider text-slate-800 uppercase flex items-center gap-1.5 shadow-[2px_2px_0px_0px_#0F172A] cursor-pointer"
              >
                <HeartHandshake className="w-4 h-4 text-amber-600" />
                <span>Speech Therapist</span>
              </motion.span>
            </motion.div>

            {/* Editorial geometric display header */}
            <motion.h2 
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight leading-[1.15] mb-6 text-slate-900"
            >
              Restoring the Joy of <br />
              <span className="text-brand-coral-500">Connecting & Hearing.</span>
            </motion.h2>

            {/* Narrative Biography Body */}
            <div className="space-y-6 text-base text-slate-700 leading-relaxed font-sans mb-8">
              <motion.p variants={itemVariants} className="font-semibold">
                Sona Gupta Deb Purkayastha is a qualified{" "}
                <span className="text-slate-900 font-bold">Audiologist and Speech Therapist</span>{" "}
                registered with the{" "}
                <span className="text-brand-teal-500 font-bold">Rehabilitation Council of India (RCI)</span>. 
                She practices at the trusted{" "}
                <span className="text-brand-teal-500 font-bold">Valley Hospital & Research Centre (P) Ltd.</span>{" "}
                in Meherpur, Silchar, bringing compassionate, evidence-based care to patients of all ages — from children with speech delays to adults managing hearing loss.
              </motion.p>

              <motion.p variants={itemVariants} className="font-semibold">
                Her clinical approach centers on patient comfort and family involvement, ensuring every individual receives personalized attention and a clear, structured path to better communication.
              </motion.p>
            </div>

            {/* Signature Block */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col items-start border-t-2 border-slate-900 pt-6 w-full overflow-hidden"
            >
              <span className="text-lg xs:text-xl sm:text-2xl font-serif italic text-slate-800 tracking-wide font-medium block w-full whitespace-normal break-words leading-tight">
                Sona Gupta Deb Purkayastha
              </span>
              <span className="text-[10px] sm:text-xs font-sans text-brand-teal-500 font-extrabold uppercase tracking-wider mt-1.5 block w-full whitespace-normal break-words">
                Audiologist & Speech Therapist
              </span>
            </motion.div>

          </motion.div>
        </motion.div>
      </div>


    </section>
  );
}
