"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Award, Ear, Activity, MessageCircle, Building, MapPin, Phone } from "lucide-react";

const SparkleStar = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
  </svg>
);

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
      className="min-h-screen flex flex-col items-center justify-center pt-28 sm:pt-32 lg:pt-40 pb-20 lg:pb-32 px-6 relative overflow-hidden select-none bg-[#F3F7F5] text-slate-900"
    >
      {/* Absolute Backlight glows centered behind elements */}
      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[550px] h-[550px] rounded-full bg-brand-teal-500/10 blur-[130px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] left-[10%] w-[350px] h-[350px] rounded-full bg-brand-coral-500/5 blur-[120px] pointer-events-none z-0" />

      {/* Premium Audiogram Diagnostic Line Grid (Biotech Blueprint Grid) */}
      <div
        className="absolute inset-0 z-0 pointer-events-none select-none opacity-70"
        style={{
          backgroundImage: `
            linear-gradient(rgba(13, 148, 136, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(13, 148, 136, 0.04) 1px, transparent 1px),
            linear-gradient(rgba(13, 148, 136, 0.01) 1px, transparent 1px),
            linear-gradient(90deg, rgba(13, 148, 136, 0.01) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px, 80px 80px, 20px 20px, 20px 20px',
        }}
      />

      {/* Floating Sparkles in the background */}
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, 20, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 md:left-24 text-teal-500 w-8 h-8 pointer-events-none opacity-40 z-10 hidden md:block"
      >
        <SparkleStar />
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0], rotate: [0, -15, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-1/3 right-10 md:right-24 text-amber-400 w-6 h-6 pointer-events-none opacity-40 z-10 hidden md:block"
      >
        <SparkleStar />
      </motion.div>

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
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E0F2FE] border-2 border-slate-900 shadow-[3px_3px_0px_0px_#0F172A] mb-4 sm:mb-6"
        >
          <Award className="w-4 h-4 text-teal-600" />
          <span className="text-[10px] sm:text-xs font-sans font-extrabold tracking-widest text-slate-800 uppercase">
            RCI Certified Specialist
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-ping" />
        </motion.div>

        {/* $10,000 Centered Title Stack - geometric sans-serif heading and elegant Garamond serif cursive-italic */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-bold tracking-tight leading-[1.1] max-w-3xl mb-4 sm:mb-6">
          <motion.span variants={itemVariants} className="block text-slate-900">
            Creating Comfort
          </motion.span>
          <motion.span variants={itemVariants} className="block mt-1 relative z-10">
            Through <span className="font-serif italic text-slate-500 font-medium tracking-normal lowercase">better</span>{" "}
            <span className="relative inline-block">
              <span className="text-[#F26A36]">Speech</span>
            </span>{" "}
            <span className="text-slate-900">&</span>{" "}
            <span className="relative inline-block px-1">
              <span className="text-[#F26A36]">Hearing.</span>
              {/* Cute hand-drawn style self-drawing underline SVG */}
              <svg className="absolute -bottom-2.5 left-0 w-full h-2 text-amber-500" viewBox="0 0 100 10" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                  d="M0,5 C30,2 70,8 100,5"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: 0.8, ease: "easeInOut" }}
                />
              </svg>
            </span>
          </motion.span>
        </h1>

        {/* Sub-headline centered */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-slate-650 max-w-xl leading-relaxed mb-6 sm:mb-8 font-extrabold"
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
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#F26A36] text-white font-sans font-extrabold tracking-wide text-center border-2 border-slate-900 shadow-[4px_4px_0px_0px_#0F172A] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_#0F172A] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_0px_#0F172A] transition-all duration-205 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Book Appointment</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <a
            href="tel:8876226682"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-slate-900 font-sans font-extrabold tracking-wide text-center border-2 border-slate-900 shadow-[4px_4px_0px_0px_#0F172A] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_#0F172A] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_0px_#0F172A] transition-all duration-205 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Phone className="w-4.5 h-4.5 text-teal-600" />
            <span>Call 8876226682</span>
          </a>
        </motion.div>
      </motion.div>

      {/* 2. Central Portrait Graphic Stack (Orbiting pills around Sona's silhouette) */}
      <div className="w-full max-w-4xl mx-auto flex items-center justify-center relative h-[320px] xs:h-[380px] sm:h-[440px] md:h-[500px] z-10 mb-6 lg:mb-16">

        {/* Background glowing circle mesh behind portrait with image clipped inside */}
        <motion.div
          animate={{
            scale: [1, 1.04, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute w-56 h-56 xs:w-72 xs:h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-br from-teal-500/20 to-cyan-400/5 border-2 border-slate-900 backdrop-blur-sm z-10 overflow-hidden flex items-end justify-center shadow-2xl shadow-teal-550/5"
        >
          <div className="relative w-[90%] h-[95%] flex items-end justify-center pointer-events-none select-none">
            <img
              src="/hero_image.png"
              alt="Sona Gupta"
              className="w-full h-full object-contain filter drop-shadow([0_15px_30px_rgba(13,148,136,0.15)]) relative z-10 [mask-image:linear-gradient(to_bottom,black_85%,transparent_99%)] [-webkit-mask-image:linear-gradient(to_bottom,black_85%,transparent_99%)]"
            />
          </div>
        </motion.div>

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
          whileHover={{ scale: 1.05, rotate: [0, -2, 2, -2, 0] }}
          className="absolute top-12 left-1 sm:top-1/4 sm:left-10 md:left-20 z-20 flex items-center gap-1.5 sm:gap-2.5 px-3 sm:px-4.5 py-2 sm:py-3 rounded-full border-2 border-slate-900 bg-[#FFFBEB] shadow-[3px_3px_0px_0px_#0F172A] cursor-pointer"
        >
          {/* Avatar bubbles */}
          <div className="flex -space-x-1.5 sm:-space-x-2">
            <div className="w-4 sm:w-6 h-4 sm:h-6 rounded-full bg-teal-600 border border-slate-900 flex items-center justify-center text-[6px] sm:text-[8px] font-bold text-white">A</div>
            <div className="w-4 sm:w-6 h-4 sm:h-6 rounded-full bg-[#F26A36] border border-slate-900 flex items-center justify-center text-[6px] sm:text-[8px] font-bold text-white">B</div>
            <div className="w-4 sm:w-6 h-4 sm:h-6 rounded-full bg-slate-100 border border-slate-900 flex items-center justify-center text-[6px] sm:text-[8px] font-bold text-slate-800">C</div>
          </div>
          <div className="flex flex-col select-none">
            <span className="text-[8px] sm:text-[10px] font-heading font-extrabold text-slate-900 leading-none">250+</span>
            <span className="text-[6px] sm:text-[8px] font-sans text-teal-650 font-extrabold tracking-wider uppercase mt-0.5">Patients</span>
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
          whileHover={{ scale: 1.05, rotate: [0, 2, -2, 2, 0] }}
          className="absolute top-4 right-1 sm:top-8 sm:right-12 md:right-24 z-20 flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2.5 rounded-full border-2 border-slate-900 bg-[#CCFBF1] shadow-[3px_3px_0px_0px_#0F172A] cursor-pointer"
        >
          <Building className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-teal-650" />
          <span className="text-[8px] sm:text-[10px] font-sans font-extrabold uppercase tracking-wider text-slate-900">
            Valley Hospital
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
          whileHover={{ scale: 1.05, rotate: [0, -2, 2, -2, 0] }}
          className="absolute top-28 right-1 sm:top-1/2 sm:right-6 md:right-16 z-20 flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2.5 rounded-full border-2 border-slate-900 bg-[#E0F2FE] shadow-[3px_3px_0px_0px_#0F172A] cursor-pointer"
        >
          <Ear className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-teal-650" />
          <span className="text-[8px] sm:text-[9px] font-sans font-extrabold tracking-widest text-slate-900">
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
          whileHover={{ scale: 1.05, rotate: [0, 2, -2, 2, 0] }}
          className="absolute top-[160px] left-1 sm:top-auto sm:bottom-12 sm:left-14 md:left-24 z-20 flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2.5 rounded-full border-2 border-slate-900 bg-[#FFEDD5] shadow-[3px_3px_0px_0px_#0F172A] cursor-pointer"
        >
          <MessageCircle className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-teal-650" />
          <span className="text-[8px] sm:text-[9px] font-sans font-extrabold tracking-widest text-slate-900">
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
          whileHover={{ scale: 1.05, rotate: [0, -2, 2, -2, 0] }}
          className="absolute top-[220px] right-1 sm:top-auto sm:bottom-16 sm:right-16 sm:left-auto sm:translate-x-0 md:right-28 z-20 flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2.5 rounded-full border-2 border-slate-900 bg-[#FCE7F3] shadow-[3px_3px_0px_0px_#0F172A] cursor-pointer"
        >
          <MapPin className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-teal-650" />
          <span className="text-[8px] sm:text-[9px] font-sans font-extrabold tracking-widest text-slate-900">
            Silchar, Assam
          </span>
        </motion.div>

        {/* Bottom Center Pill F (Overlapping the silhouette context) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          whileHover={{ scale: 1.05, rotate: [0, 2, -2, 2, 0] }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 sm:bottom-4 z-20 flex items-center gap-1.5 sm:gap-2.5 px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-full border-2 border-slate-900 bg-[#DCFCE7] shadow-[3px_3px_0px_0px_#0F172A] w-fit cursor-pointer"
        >
          <Activity className="w-3.5 sm:w-4.5 h-3.5 sm:h-4.5 text-teal-600 animate-pulse" />
          <span className="text-[10px] sm:text-xs font-heading font-extrabold text-slate-900 uppercase tracking-widest">
            Diagnostic Care Active
          </span>
          <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#10B981]" />
        </motion.div>

        {/* Floating Playful SVG trace arrows (linking left pills to central circle) */}
        <div className="absolute inset-0 z-20 pointer-events-none select-none opacity-25 hidden sm:block">
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
                <path d="M 1 2 L 8 5 L 1 8 z" fill="#0D9488" />
              </marker>
            </defs>
            {/* Left arrow linking pill to circle */}
            <path
              d="M185 180 Q 240 220 275 200"
              stroke="#0D9488"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="4 4"
              markerEnd="url(#arrowhead)"
            />

            {/* Right arrow linking pill to circle */}
            <path
              d="M625 185 Q 560 145 525 175"
              stroke="#0D9488"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="4 4"
              markerEnd="url(#arrowhead)"
            />
          </svg>
        </div>

      </div>

      {/* 3. Clinical Affiliations Banner (Premium structured style at bottom of Hero) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="w-full border-t-2 border-b-2 border-slate-900 py-8 bg-white/50 relative z-10 select-none shadow-[0_8px_20px_-8px_rgba(0,0,0,0.05)]"
      >
        <div className="max-w-5xl mx-auto px-6">
          <ul className="grid grid-cols-2 gap-y-6 gap-x-6 md:gap-x-12 justify-items-center text-[9px] sm:text-xs font-sans font-extrabold tracking-[0.12em] sm:tracking-[0.15em] text-slate-800 uppercase">
            <li className="flex items-center gap-2 sm:gap-3 w-full max-w-[180px] sm:max-w-xs justify-start">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-teal-500 shrink-0" />
              <span className="leading-relaxed">Valley Hospital & Research Centre</span>
            </li>
            <li className="flex items-center gap-2 sm:gap-3 w-full max-w-[180px] sm:max-w-xs justify-start">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-teal-500 shrink-0" />
              <span className="leading-relaxed">Rehabilitation Council of India (RCI)</span>
            </li>
            <li className="flex items-center gap-2 sm:gap-3 w-full max-w-[180px] sm:max-w-xs justify-start">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-teal-500 shrink-0" />
              <span className="leading-relaxed">ISHA Association Affiliated</span>
            </li>
            <li className="flex items-center gap-2 sm:gap-3 w-full max-w-[180px] sm:max-w-xs justify-start">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-teal-500 shrink-0" />
              <span className="leading-relaxed">Barak Valley Health Network</span>
            </li>
          </ul>
        </div>
      </motion.div>


    </section>
  );
}
