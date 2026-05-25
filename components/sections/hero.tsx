"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Award, Ear, Activity, MessageCircle, Building, MapPin, Phone } from "lucide-react";

export default function Hero() {
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  // Stagger entrance variants for centered title elements
  const titleContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center pt-28 sm:pt-32 lg:pt-40 pb-12 lg:pb-20 px-6 relative overflow-hidden select-none bg-brand-cyan-950 text-brand-white-950"
    >
      {/* Absolute Backlight glows centered behind elements */}
      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[550px] h-[550px] rounded-full bg-brand-teal-500/10 blur-[130px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] left-[10%] w-[350px] h-[350px] rounded-full bg-brand-coral-500/5 blur-[120px] pointer-events-none z-0" />

      {/* Premium Audiogram Diagnostic Line Grid (Biotech Blueprint Grid) */}
      <div
        className="absolute inset-0 z-0 pointer-events-none select-none opacity-70"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 180, 216, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 180, 216, 0.03) 1px, transparent 1px),
            linear-gradient(rgba(0, 180, 216, 0.01) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 180, 216, 0.01) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px, 80px 80px, 20px 20px, 20px 20px',
        }}
      />

      {/* 1. Header Typography Area (Centered, Clean, & Sexy) */}
      <motion.div
        variants={titleContainerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center flex flex-col items-center z-10 relative mb-8 lg:mb-12"
      >
        {/* Upper credential badge with a sparkling icon */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-teal-500/10 border border-brand-teal-500/20 mb-4 sm:mb-6 backdrop-blur-md"
        >
          <Award className="w-4 h-4 text-brand-teal-400" />
          <span className="text-[10px] sm:text-xs font-sans font-semibold tracking-widest text-brand-teal-400 uppercase">
            RCI Certified Specialist
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-ping" />
        </motion.div>

        {/* $10,000 Centered Title Stack - geometric sans-serif heading and elegant Garamond serif cursive-italic */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-bold tracking-tight leading-[1.1] max-w-3xl mb-4 sm:mb-6">
          <motion.span variants={itemVariants} className="block text-brand-white-950">
            Creating Comfort
          </motion.span>
          <motion.span variants={itemVariants} className="block mt-1">
            Through <span className="font-serif italic text-brand-white-950/60 font-medium tracking-normal lowercase">better</span>{" "}
            <span className="text-brand-coral-500">
              Speech
            </span>{" "}
            <span className="text-brand-white-950">&</span>{" "}
            <span className="text-brand-coral-500">
              Hearing.
            </span>
          </motion.span>
        </h1>

        {/* Sub-headline centered */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-brand-white-950/70 max-w-xl leading-relaxed mb-6 sm:mb-8"
        >
          Registered RCI Audiologist & Speech Therapist bringing premium, compassionate, evidence-based rehabilitation to Barak Valley at Valley Hospital.
        </motion.p>

        {/* Conversion Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto"
        >
          <a
            href="#contact"
            onClick={(e) => handleAnchorClick(e, "#contact")}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-coral-500 hover:bg-brand-coral-600 text-brand-white-950 font-sans font-semibold tracking-wide text-center transition-all duration-300 shadow-lg shadow-brand-coral-500/15 hover:shadow-brand-coral-500/25 active:scale-95 flex items-center justify-center gap-2 group"
          >
            <span>Book Appointment</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <a
            href="tel:8876226682"
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/10 hover:border-brand-teal-400 hover:bg-brand-teal-500/5 text-brand-white-950 font-sans font-semibold tracking-wide text-center transition-all duration-300 active:scale-95 flex items-center justify-center gap-2"
          >
            <Phone className="w-4.5 h-4.5 text-brand-teal-400" />
            <span>Call 8876226682</span>
          </a>
        </motion.div>
      </motion.div>

      {/* 2. Central Portrait Graphic Stack (Orbiting pills around Dr. Sona's silhouette) */}
      <div className="w-full max-w-4xl mx-auto flex items-center justify-center relative h-[320px] xs:h-[380px] sm:h-[440px] md:h-[500px] z-10 mb-6 lg:mb-12">

        {/* Background glowing circle mesh behind portrait */}
        <motion.div
          animate={{
            scale: [1, 1.04, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute w-56 h-56 xs:w-72 xs:h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-br from-brand-teal-500/20 to-brand-cyan-400/5 border border-brand-teal-500/20 backdrop-blur-sm z-0 flex items-center justify-center shadow-2xl shadow-brand-teal-500/5"
        />

        {/* Central Portrait Silhouette Frame - swaps with transparent portrait png */}
        <div className="absolute bottom-0 w-52 xs:w-64 sm:w-80 h-[300px] xs:h-[350px] sm:h-[400px] md:h-[460px] z-10 flex items-end justify-center pointer-events-none select-none">
          <div className="relative w-full h-full flex items-end justify-center">
            <img
              src="/hero_image.png"
              alt="Dr. Sona Gupta"
              className="w-full h-full object-contain filter drop-shadow([0_15px_30px_rgba(0,180,216,0.25)]) relative z-10 [mask-image:linear-gradient(to_bottom,black_75%,transparent_98%)] [-webkit-mask-image:linear-gradient(to_bottom,black_75%,transparent_98%)]"
            />
          </div>
        </div>

        {/* ----------------- ORBITING BADGES / PILLS (Freshaura Style) ----------------- */}

        {/* Left Side Pill A: Client Satisfaction Rating */}
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-12 left-1 sm:top-1/4 sm:left-10 md:left-20 z-20 flex items-center gap-1.5 sm:gap-2.5 px-3 sm:px-4.5 py-2 sm:py-3 rounded-full glass-card shadow-lg shadow-black/20"
        >
          {/* Avatar bubbles */}
          <div className="flex -space-x-1.5 sm:-space-x-2">
            <div className="w-4 sm:w-6 h-4 sm:h-6 rounded-full bg-brand-teal-500 border border-brand-cyan-950 flex items-center justify-center text-[6px] sm:text-[8px] font-bold text-brand-cyan-950">A</div>
            <div className="w-4 sm:w-6 h-4 sm:h-6 rounded-full bg-brand-coral-500 border border-brand-cyan-950 flex items-center justify-center text-[6px] sm:text-[8px] font-bold text-brand-white-950">B</div>
            <div className="w-4 sm:w-6 h-4 sm:h-6 rounded-full bg-brand-white-950 border border-brand-cyan-950 flex items-center justify-center text-[6px] sm:text-[8px] font-bold text-brand-cyan-950">C</div>
          </div>
          <div className="flex flex-col select-none">
            <span className="text-[8px] sm:text-[10px] font-heading font-extrabold text-brand-white-950 leading-none">250+</span>
            <span className="text-[6px] sm:text-[8px] font-sans text-brand-teal-400 font-semibold tracking-wider uppercase mt-0.5">Patients</span>
          </div>
        </motion.div>

        {/* Top Right Pill B: Affiliation Badge */}
        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3
          }}
          className="absolute top-4 right-1 sm:top-8 sm:right-12 md:right-24 z-20 flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2.5 rounded-full bg-[#008B9E]/10 border border-brand-teal-500/25 shadow-lg shadow-black/25 backdrop-blur-md"
        >
          <Building className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-brand-teal-400" />
          <span className="text-[8px] sm:text-[10px] font-sans font-bold uppercase tracking-wider text-brand-white-950">
            Valley Hospital Practice
          </span>
        </motion.div>

        {/* Middle Right Pill C: Audiology Feature Pill */}
        <motion.div
          animate={{
            x: [0, 6, 0],
            y: [0, -6, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.6
          }}
          className="absolute top-28 right-1 sm:top-1/2 sm:right-6 md:right-16 z-20 flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2.5 rounded-full glass-card hover:border-brand-teal-400 transition-colors"
        >
          <Ear className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-brand-teal-400" />
          <span className="text-[8px] sm:text-[9px] font-sans font-bold uppercase tracking-widest text-brand-white-950">
            Clinical Audiology
          </span>
        </motion.div>

        {/* Bottom Left Pill D: Specialty Pill */}
        <motion.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 5.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8
          }}
          className="absolute top-[160px] left-1 sm:top-auto sm:bottom-12 sm:left-14 md:left-24 z-20 flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2.5 rounded-full glass-card"
        >
          <MessageCircle className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-brand-teal-400" />
          <span className="text-[8px] sm:text-[9px] font-sans font-bold uppercase tracking-widest text-brand-white-950">
            Speech pathology
          </span>
        </motion.div>

        {/* Bottom Right Pill E: Region/Area Badge */}
        <motion.div
          animate={{
            x: [0, -5, 0],
            y: [0, 5, 0]
          }}
          transition={{
            duration: 4.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.1
          }}
          className="absolute top-[220px] right-1 sm:top-auto sm:bottom-16 sm:right-16 sm:left-auto sm:translate-x-0 md:right-28 z-20 flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2.5 rounded-full glass-card"
        >
          <MapPin className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-brand-teal-400" />
          <span className="text-[8px] sm:text-[9px] font-sans font-bold uppercase tracking-widest text-brand-white-950">
            Silchar, Assam
          </span>
        </motion.div>

        {/* Bottom Center Pill F (Overlapping the silhouette context) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 sm:bottom-4 z-20 flex items-center gap-1.5 sm:gap-2.5 px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-full bg-brand-cyan-900 border border-brand-teal-500/35 shadow-xl shadow-black/40 hover:border-brand-teal-400 transition-colors select-none w-fit"
        >
          <Activity className="w-3.5 sm:w-4.5 h-3.5 sm:h-4.5 text-brand-teal-400 animate-pulse" />
          <span className="text-[10px] sm:text-xs font-heading font-semibold text-brand-white-950 uppercase tracking-widest">
            Diagnostic Care Active
          </span>
          <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#10B981]" />
        </motion.div>

        {/* Floating Playful SVG trace arrows (linking left pills to central circle) */}
        <div className="absolute inset-0 z-20 pointer-events-none select-none opacity-30 hidden sm:block">
          <svg className="w-full h-full" viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              {/* Native sharp arrowhead marker that rotates automatically with the path curve */}
              <marker
                id="arrowhead"
                viewBox="0 0 10 10"
                refX="6"
                refY="5"
                markerWidth="7"
                markerHeight="7"
                orient="auto-start-reverse"
              >
                <path d="M 1 2 L 8 5 L 1 8 z" fill="#00B4D8" />
              </marker>
            </defs>
            {/* Left arrow linking pill to circle */}
            <path
              d="M185 180 Q 240 220 275 200"
              stroke="#00B4D8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="4 4"
              markerEnd="url(#arrowhead)"
            />

            {/* Right arrow linking pill to circle */}
            <path
              d="M625 185 Q 560 145 525 175"
              stroke="#00B4D8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="4 4"
              markerEnd="url(#arrowhead)"
            />
          </svg>
        </div>

      </div>

      {/* 3. Clinical Affiliations Banner (Premium Marquee style at bottom of Hero) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="w-full border-t border-b border-white/5 py-6 bg-brand-cyan-900/20 relative z-10 select-none overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 sm:gap-x-12 md:gap-x-16 text-[10px] sm:text-xs font-sans font-bold tracking-[0.2em] text-brand-white-950/60 uppercase text-center">
          <span>Valley Hospital & Research Centre</span>
          <span className="hidden sm:inline text-brand-teal-500">&bull;</span>
          <span>Rehabilitation Council of India (RCI)</span>
          <span className="hidden md:inline text-brand-teal-500">&bull;</span>
          <span>ISHA Association Affiliated</span>
          <span className="hidden sm:inline text-brand-teal-500">&bull;</span>
          <span>Barak Valley Health Network</span>
        </div>
      </motion.div>

    </section>
  );
}
