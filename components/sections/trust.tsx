"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Users, Activity, HeartHandshake, ChevronLeft, ChevronRight, MessageSquare } from "lucide-react";

interface TrustCard {
  id: string;
  badge: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

interface Testimonial {
  name: string;
  role: string;
  rating: number;
  quote: string;
  bg: string;
  tagBg: string;
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

const TRUST_STYLES: Record<string, { bg: string, text: string, badgeBg: string, iconBg: string }> = {
  "rci-cert": {
    bg: "bg-[#DCFCE7]", // Soft green
    text: "text-emerald-950",
    badgeBg: "bg-[#A7F3D0] border-slate-900 text-emerald-900",
    iconBg: "bg-white text-emerald-600 border-slate-350"
  },
  "lifespan-care": {
    bg: "bg-[#E0F2FE]", // Soft blue
    text: "text-sky-950",
    badgeBg: "bg-[#BAE6FD] border-slate-900 text-sky-900",
    iconBg: "bg-white text-sky-600 border-slate-350"
  },
  "hospital-standards": {
    bg: "bg-[#FEF3C7]", // Soft amber
    text: "text-amber-950",
    badgeBg: "bg-[#FDE68A] border-slate-900 text-amber-900",
    iconBg: "bg-white text-amber-600 border-slate-350"
  },
  "regional-trust": {
    bg: "bg-[#FFF1F2]", // Soft pink
    text: "text-rose-950",
    badgeBg: "bg-[#FECDD3] border-slate-900 text-rose-900",
    iconBg: "bg-white text-rose-600 border-slate-350"
  }
};

const TESTIMONIALS_DATA: Testimonial[] = [
  {
    name: "Ranjan Dev",
    role: "Parent of Pediatric Speech Patient",
    rating: 5,
    quote: "Our child had severe articulation issues and was struggling to connect words. Sona Gupta's structured early intervention therapy has worked wonders. His vocabulary and pronunciation have improved drastically over the past year!",
    bg: "bg-[#FEF3C7] text-amber-950",
    tagBg: "bg-[#FDE68A] border-slate-900 text-amber-900"
  },
  {
    name: "Subrata Roy",
    role: "Adult Hearing Aid Patient",
    rating: 5,
    quote: "Exceptional clinical care! Sona helped diagnose my progressive hearing loss, conducted multi-brand comparative digital aid trials, and tuned my custom ear molds. The invisible hearing solution has completely changed my quality of life.",
    bg: "bg-[#E0F2FE] text-sky-950",
    tagBg: "bg-[#BAE6FD] border-slate-900 text-sky-900"
  },
  {
    name: "Meera Nath",
    role: "Tinnitus Management Patient",
    rating: 5,
    quote: "I was suffering from a constant buzzing noise in my ears that made it hard to sleep. Sona's clinical acoustic masking protocols and stress counseling gave me immediate relief. Strongly recommend her practice in Silchar!",
    bg: "bg-[#FFF1F2] text-rose-950",
    tagBg: "bg-[#FECDD3] border-slate-900 text-rose-900"
  }
];

const SparkleStar = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
  </svg>
);

export default function Trust() {
  const [currentTestimonialIdx, setCurrentTestimonialIdx] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonialIdx((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIdx((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

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

  const testimonial = TESTIMONIALS_DATA[currentTestimonialIdx];

  return (
    <section
      id="trust"
      className="py-20 lg:py-32 px-6 relative overflow-hidden select-none bg-[#FAF8F5] text-slate-900 border-t-2 border-slate-900"
    >
      {/* Background Ambient Mesh Glows */}
      <div className="absolute top-[30%] left-[20%] w-[450px] h-[450px] rounded-full bg-glow-teal pointer-events-none z-0" />
      <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] rounded-full bg-glow-coral pointer-events-none z-0" />

      {/* Decorative sparks */}
      <motion.div
        animate={{ y: [0, -8, 0], rotate: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-16 right-16 text-teal-400 w-8 h-8 pointer-events-none opacity-40 hidden sm:block"
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
            Why Choose Sona Gupta
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight leading-[1.15] text-slate-900 max-w-3xl"
          >
            Clinical Excellence & <br className="hidden sm:inline" />
            <span className="text-brand-coral-500">Compassionate Standards.</span>
          </motion.h2>
        </div>

        {/* 2x2 Trust Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-24 lg:mb-32"
        >
          {TRUST_CARDS_DATA.map((card) => {
            const Icon = card.icon;
            const style = TRUST_STYLES[card.id] || {
              bg: "bg-white",
              text: "text-slate-955",
              badgeBg: "bg-slate-100 border-slate-900 text-slate-800",
              iconBg: "bg-white text-slate-600 border-slate-300"
            };

            return (
              <motion.div
                key={card.id}
                variants={cardVariants}
                whileHover="hover"
                className={`relative rounded-[28px] p-8 border-2 border-slate-900 ${style.bg} ${style.text} shadow-[5px_5px_0px_0px_#0F172A] hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[8px_8px_0px_0px_#0F172A] transition-all duration-300 group overflow-hidden flex flex-col justify-between cursor-pointer`}
              >
                <div>
                  {/* Card Header Row */}
                  <div className="flex items-center justify-between">
                    <span className={`px-2.5 py-0.5 rounded-full border-2 border-slate-900 text-[9px] font-sans font-extrabold tracking-widest uppercase ${style.badgeBg}`}>
                      {card.badge}
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
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed font-sans mt-3 opacity-95 font-semibold">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ----------------- TESTIMONIALS SLIDER SECTION (Speech Bubble Style) ----------------- */}
        <div className="max-w-4xl mx-auto flex flex-col items-center relative mt-16 md:mt-24">
          {/* Subheading decorative badge */}
          <div className="flex items-center gap-2 mb-6">
            <SparkleStar className="w-5 h-5 text-amber-500" />
            <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-slate-800">
              Patient Testimonials
            </span>
            <SparkleStar className="w-5 h-5 text-amber-500" />
          </div>

          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-center text-slate-900 mb-10">
            What Our Patients Say
          </h3>

          <div className="w-full relative min-h-[280px] xs:min-h-[250px] sm:min-h-[220px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonialIdx}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className={`w-full rounded-[28px] p-6 sm:p-8 border-2 border-slate-900 ${testimonial.bg} shadow-[6px_6px_0px_0px_#0F172A] relative flex flex-col justify-between`}
              >
                {/* Speech bubble pointer path decoration */}
                <div className="absolute -bottom-[14px] left-12 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[14px] border-t-slate-900 pointer-events-none" />
                <div className="absolute -bottom-[11px] left-[49px] w-0 h-0 border-l-[11px] border-l-transparent border-r-[11px] border-r-transparent border-t-[12px] border-t-white pointer-events-none z-10" />

                <div>
                  {/* Rating Stars and Speech Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-amber-500 text-lg">★</span>
                      ))}
                    </div>
                    <MessageSquare className="w-6 h-6 opacity-40 text-current" />
                  </div>

                  {/* Patient Quote copy */}
                  <blockquote className="text-sm sm:text-base font-sans font-extrabold italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                </div>

                {/* Patient details */}
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full border-2 border-slate-900 bg-white flex items-center justify-center font-heading font-extrabold text-xs text-slate-800">
                    {testimonial.name[0]}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-heading font-extrabold text-slate-900">{testimonial.name}</span>
                    <span className="text-[10px] font-sans font-bold text-slate-600 leading-none mt-0.5">{testimonial.role}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Testimonial slider navigation arrow controllers */}
          <div className="flex gap-4 mt-8 relative z-20">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-white border-2 border-slate-900 flex items-center justify-center shadow-[2px_2px_0px_0px_#0F172A] hover:bg-[#FDE68A] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_#0F172A] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_#0F172A] transition-all duration-200 cursor-pointer"
              aria-label="Previous patient testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-slate-900" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-white border-2 border-slate-900 flex items-center justify-center shadow-[2px_2px_0px_0px_#0F172A] hover:bg-[#FDE68A] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_#0F172A] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_#0F172A] transition-all duration-200 cursor-pointer"
              aria-label="Next patient testimonial"
            >
              <ChevronRight className="w-5 h-5 text-slate-900" />
            </button>
          </div>
        </div>

      </div>


    </section>
  );
}
