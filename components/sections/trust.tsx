"use client";

import { motion } from "framer-motion";
import { Award, Users, Activity, HeartHandshake } from "lucide-react";

interface TrustCard {
  id: string;
  badge: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

const TRUST_CARDS_DATA: TrustCard[] = [
  {
    id: "rci-cert",
    badge: "National Registration",
    title: "RCI Certified Specialist",
    description: "Fully registered with the Rehabilitation Council of India, guaranteeing adherence to national clinical practice guidelines and ethical healthcare standards.",
    icon: Award
  },
  {
    id: "lifespan-care",
    badge: "Pediatric to Geriatric",
    title: "Multi-Age Lifespan Focus",
    description: "Expert therapeutic care for patients across their entire lifespan — from play-based early speech intervention for children to precise digital hearing aid trials for adult and geriatric patients.",
    icon: Users
  },
  {
    id: "hospital-standards",
    badge: "Valley Hospital Silchar",
    title: "Integrated Clinical Practice",
    description: "Practicing in a trusted, hospital-integrated OPD environment, ensuring patients immediate access to state-of-the-art diagnostic audiometry, soundproof testing chambers, and medical consultations.",
    icon: Activity
  },
  {
    id: "regional-trust",
    badge: "Silchar & Barak Valley",
    title: "Trusted Regional Care",
    description: "Over 8 years of clinical expertise, introducing advanced evidence-based audiological diagnostics and customized speech-language rehabilitation to communities across Barak Valley.",
    icon: HeartHandshake
  }
];

export default function Trust() {
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
      id="trust"
      className="py-20 lg:py-32 px-6 relative overflow-hidden select-none bg-brand-cyan-950 text-brand-white-950 border-t border-white/5"
    >
      {/* Background Ambient Mesh Glows */}
      <div className="absolute top-[30%] left-[20%] w-[450px] h-[450px] rounded-full bg-brand-teal-500/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] rounded-full bg-brand-coral-500/5 blur-[110px] pointer-events-none z-0" />

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
            Why Choose Dr. Sona
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight leading-[1.15] text-brand-white-950 max-w-3xl"
          >
            Clinical Excellence & <br className="hidden sm:inline" />
            <span className="text-brand-coral-500">Compassionate Standards.</span>
          </motion.h2>
        </div>

        {/* 2x2 Glassmorphic Trust Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {TRUST_CARDS_DATA.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                variants={cardVariants}
                className="relative rounded-3xl p-8 bg-brand-cyan-900/30 border border-white/5 hover:border-brand-teal-400/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,180,216,0.12)] group overflow-hidden flex flex-col justify-between"
              >
                {/* Custom Left Edge Indicator Stripe (Teal Glow on Hover) */}
                <div className="w-1 h-12 bg-brand-teal-400 absolute left-0 top-1/2 -translate-y-1/2 rounded-r-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />

                <div>
                  {/* Card Header Row */}
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full bg-brand-teal-500/5 border border-brand-teal-500/10 text-[9px] font-sans font-bold tracking-widest text-brand-teal-400/90 uppercase">
                      {card.badge}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-brand-teal-500/10 border border-brand-teal-500/20 flex items-center justify-center text-brand-teal-400 group-hover:text-brand-white-950 group-hover:bg-brand-teal-500 transition-all duration-500 group-hover:shadow-[0_0_15px_rgba(0,180,216,0.3)]">
                      <Icon className="w-5.5 h-5.5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-heading font-bold text-brand-white-950 mt-6 group-hover:text-brand-teal-400 transition-colors duration-300">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-brand-white-950/65 leading-relaxed font-sans mt-3">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
