"use client";

import { motion } from "framer-motion";
import { Ear, Volume2, Mic, Baby, Waves, Activity } from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  tag: string;
  icon: React.ComponentType<any>;
  description: string;
  features: string[];
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: "hearing-eval",
    title: "Hearing Evaluation & Diagnosis",
    tag: "Diagnostic",
    icon: Ear,
    description: "Comprehensive audiological testing for adults and pediatric cases using state-of-the-art diagnostic equipment.",
    features: [
      "Pure Tone Audiometry (PTA)",
      "Tympanometry & Reflexometry",
      "Pediatric Hearing Assessments"
    ]
  },
  {
    id: "hearing-aid",
    title: "Hearing Aid Fitting & Trials",
    tag: "Rehabilitation",
    icon: Volume2,
    description: "Personalized selection, digital programming, and live trials of cutting-edge, invisible hearing solutions.",
    features: [
      "Digital Tuning & Real Ear Measurements",
      "Custom Ear Molds & Shells",
      "Multi-brand Comparative Trials"
    ]
  },
  {
    id: "speech-therapy",
    title: "Speech-Language Therapy",
    tag: "Intervention",
    icon: Mic,
    description: "Clinical therapeutic intervention for diverse speech delays, voice disorders, and fluency (stuttering) correction.",
    features: [
      "Fluency & Stuttering Therapy",
      "Articulation & Clarity Correction",
      "Voice & Resonance Rehabilitation"
    ]
  },
  {
    id: "pediatric-dev",
    title: "Pediatric Language Development",
    tag: "Pediatric Care",
    icon: Baby,
    description: "Specialized, play-based intervention for developmental language delays, autism spectrum (ASD), and ADHD speech care.",
    features: [
      "Early Intervention (0-3 years)",
      "ASD & ADHD Communication Support",
      "Social Communication & Play Therapy"
    ]
  },
  {
    id: "tinnitus-mgmt",
    title: "Tinnitus Evaluation & Management",
    tag: "Specialized",
    icon: Waves,
    description: "Advanced clinical assessment and customized sound-therapy protocols to relieve ringing or buzzing in the ears.",
    features: [
      "Tinnitus Habituation Therapy",
      "Acoustic Masking Protocols",
      "Counseling & Stress Management"
    ]
  },
  {
    id: "dysphagia-care",
    title: "Swallowing Disorders (Dysphagia) Care",
    tag: "Clinical Care",
    icon: Activity,
    description: "Clinical evaluation and customized physical exercises to rehabilitate swallowing difficulties and oral motor control.",
    features: [
      "Clinical Swallowing Assessments",
      "Neurological Oral-Motor Exercises",
      "Safe Feeding Strategies"
    ]
  }
];

const SERVICE_STYLES: Record<string, { bg: string, text: string, tagBg: string, iconBg: string }> = {
  "hearing-eval": {
    bg: "bg-[#E0F2FE]", // Soft blue
    text: "text-sky-950",
    tagBg: "bg-[#BAE6FD] border-slate-900 text-sky-900",
    iconBg: "bg-white text-sky-600 border-slate-350"
  },
  "hearing-aid": {
    bg: "bg-[#ECFDF5]", // Soft mint green
    text: "text-emerald-950",
    tagBg: "bg-[#A7F3D0] border-slate-900 text-emerald-900",
    iconBg: "bg-white text-emerald-600 border-slate-350"
  },
  "speech-therapy": {
    bg: "bg-[#FFF1F2]", // Soft pink/rose
    text: "text-rose-950",
    tagBg: "bg-[#FECDD3] border-slate-900 text-rose-900",
    iconBg: "bg-white text-rose-600 border-slate-350"
  },
  "pediatric-dev": {
    bg: "bg-[#FEF3C7]", // Soft amber
    text: "text-amber-950",
    tagBg: "bg-[#FDE68A] border-slate-900 text-amber-900",
    iconBg: "bg-white text-amber-600 border-slate-350"
  },
  "tinnitus-mgmt": {
    bg: "bg-[#EEF2FF]", // Soft indigo
    text: "text-indigo-950",
    tagBg: "bg-[#C7D2FE] border-slate-900 text-indigo-900",
    iconBg: "bg-white text-indigo-600 border-slate-350"
  },
  "dysphagia-care": {
    bg: "bg-[#F0FDF4]", // Soft sage/green
    text: "text-green-950",
    tagBg: "bg-[#BBF7D0] border-slate-900 text-green-900",
    iconBg: "bg-white text-green-600 border-slate-350"
  }
};

const SparkleStar = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
  </svg>
);

export default function Services() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 1, rotate: 0 },
    visible: { scale: 1, rotate: 0 },
    hover: {
      rotate: [0, -10, 10, -10, 0],
      transition: { duration: 0.45 }
    }
  };

  return (
    <section
      id="services"
      className="py-20 lg:py-32 px-6 relative overflow-hidden select-none bg-[#FAF8F5] text-slate-900 border-t-2 border-slate-900"
    >
      {/* Background Backlight Mesh Glows */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-brand-teal-500/5 blur-[130px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-brand-coral-500/5 blur-[130px] pointer-events-none z-0" />

      {/* Decorative stars */}
      <motion.div
        animate={{ y: [0, 8, 0], rotate: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-12 text-[#F26A36] w-7 h-7 pointer-events-none opacity-40 hidden sm:block"
      >
        <SparkleStar />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="px-3.5 py-1.5 rounded-full bg-[#E0F2FE] border-2 border-slate-900 text-[10px] font-sans font-extrabold tracking-widest text-slate-800 uppercase mb-4 shadow-[2px_2px_0px_0px_#0F172A]"
          >
            Clinical Offerings
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight leading-[1.15] text-slate-900 max-w-3xl"
          >
            Specialized Care for Speech, <br className="hidden sm:inline" />
            <span className="text-[#F26A36]">Language & Hearing.</span>
          </motion.h2>
        </div>

        {/* 3x2 services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {SERVICES_DATA.map((service) => {
            const Icon = service.icon;
            const style = SERVICE_STYLES[service.id] || {
              bg: "bg-white",
              text: "text-slate-950",
              tagBg: "bg-slate-100 border-slate-900 text-slate-800",
              iconBg: "bg-white text-slate-600 border-slate-300"
            };

            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover="hover"
                className={`relative rounded-[28px] p-6 sm:p-8 border-2 border-slate-900 ${style.bg} ${style.text} shadow-[5px_5px_0px_0px_#0F172A] hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[8px_8px_0px_0px_#0F172A] transition-all duration-300 group overflow-hidden flex flex-col justify-between cursor-pointer`}
              >
                <div>
                  {/* Card Header Row */}
                  <div className="flex items-center justify-between">
                    <span className={`px-2.5 py-0.5 rounded-full border-2 border-slate-900 text-[9px] font-sans font-extrabold tracking-widest uppercase ${style.tagBg}`}>
                      {service.tag}
                    </span>
                    <motion.div 
                      variants={iconVariants}
                      className={`w-11 h-11 rounded-xl border-2 border-slate-900 flex items-center justify-center group-hover:text-white group-hover:bg-[#0F172A] transition-all duration-300 ${style.iconBg}`}
                    >
                      <Icon className="w-5.5 h-5.5" />
                    </motion.div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-heading font-extrabold mt-6 flex items-center gap-1.5 leading-snug">
                    <span>{service.title}</span>
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed font-sans mt-3 opacity-95 font-semibold">
                    {service.description}
                  </p>
                </div>

                {/* Offerings Bullets checklist */}
                <div className="mt-6 border-t-2 border-slate-900/10 pt-4">
                  <ul className="space-y-2.5">
                    {service.features.map((feat, idx) => (
                      <motion.li 
                        key={idx} 
                        whileHover={{ x: 2 }}
                        className="flex items-center gap-2.5 text-xs font-sans font-extrabold opacity-95"
                      >
                        <div className="w-4 h-4 rounded-md border-2 border-slate-900 bg-white flex items-center justify-center text-slate-900 shrink-0 shadow-[1.5px_1.5px_0px_0px_#0F172A] group-hover:bg-[#FFFBEB] transition-colors">
                          <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span>{feat}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>


    </section>
  );
}
