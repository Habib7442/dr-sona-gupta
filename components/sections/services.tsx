"use client";

import { motion } from "framer-motion";
import { Ear, Volume2, Mic, Baby, Waves, Activity, ArrowUpRight } from "lucide-react";

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

  return (
    <section
      id="services"
      className="py-20 lg:py-32 px-6 relative overflow-hidden select-none bg-brand-cyan-950 text-brand-white-950 border-t border-white/5"
    >
      {/* Background Backlight Mesh Glows */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-brand-teal-500/5 blur-[130px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-brand-coral-500/5 blur-[130px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="px-3.5 py-1.5 rounded-full bg-brand-teal-500/10 border border-brand-teal-500/20 text-[9px] sm:text-[10px] font-sans font-bold tracking-widest text-brand-teal-400 uppercase mb-4"
          >
            Clinical Offerings
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight leading-[1.15] text-brand-white-950 max-w-3xl"
          >
            Specialized Care for Speech, <br className="hidden sm:inline" />
            <span className="text-brand-coral-500">Language & Hearing.</span>
          </motion.h2>
        </div>

        {/* 3x2 Glassmorphic Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {SERVICES_DATA.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className="relative rounded-[24px] p-6 sm:p-8 bg-brand-cyan-900/30 border border-white/5 hover:border-brand-teal-400/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,180,216,0.12)] group overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Card Header Row */}
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full bg-brand-teal-500/5 border border-brand-teal-500/10 text-[9px] font-sans font-bold tracking-widest text-brand-teal-400/90 uppercase">
                      {service.tag}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-brand-teal-500/10 border border-brand-teal-500/20 flex items-center justify-center text-brand-teal-400 group-hover:text-brand-white-950 group-hover:bg-brand-teal-500 transition-all duration-500 group-hover:shadow-[0_0_15px_rgba(0,180,216,0.3)]">
                      <Icon className="w-5.5 h-5.5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-heading font-semibold text-brand-white-950 mt-6 group-hover:text-brand-teal-400 transition-colors duration-300 flex items-center gap-1.5">
                    <span>{service.title}</span>
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-brand-white-950/60 leading-relaxed font-sans mt-3">
                    {service.description}
                  </p>
                </div>

                {/* Offerings Bullets */}
                <div className="mt-6 border-t border-white/5 pt-4">
                  <ul className="space-y-2">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs text-brand-white-950/70 font-sans">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-teal-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
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
