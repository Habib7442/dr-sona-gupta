"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ShieldCheck, CheckCircle2, Bookmark, ExternalLink, X } from "lucide-react";

interface CertificateItem {
  id: string;
  title: string;
  subtitle: string;
  authority: string;
  date: string;
  location: string;
  status: string;
  insigniaColor: string; // HSL/Hex for insignia glow
  logoType: "rci" | "meera" | "vidyarthi" | "oticon";
  image: string; // Path to real certificate webp file
}

const CERTIFICATES_DATA: CertificateItem[] = [
  {
    id: "cert-oticon",
    title: "Oticon Authorised Fitting Centre",
    subtitle: "Official Clinical Partner & Authorised Hearing Solutions Provider",
    authority: "Oticon Hearing Solutions Pvt. Ltd.",
    date: "May 2024 - April 2026",
    location: "Silchar, Assam",
    status: "Active License",
    insigniaColor: "from-[#088395] to-[#0D9488]",
    logoType: "oticon",
    image: "/assets/certificates/1.webp",
  },
  {
    id: "cert-cre",
    title: "RCI Continuous Rehabilitation Education (CRE)",
    subtitle: "National Seminar on Cerebral Palsy Update 2018",
    authority: "Composite Regional Centre (CRC) for Persons with Disabilities, Guwahati Medical College (Govt. of India)",
    date: "July 7-8, 2018",
    location: "Ri-Bhoi, Meghalaya",
    status: "RCI Certified",
    insigniaColor: "from-[#0D9488] to-[#059669]",
    logoType: "rci",
    image: "/assets/certificates/2.webp",
  },
  {
    id: "cert-meera",
    title: "Oral Motor, Sensory & Speech Intervention",
    subtitle: "Workshop on Oral Motor, Oral Sensory issues & Speech Difficulties in children with Neurodevelopmental Disorders",
    authority: "MEERA Foundation & SOCH Kolkata",
    date: "August 31, 2019",
    location: "Kolkata, West Bengal",
    status: "Certified Course Completion",
    insigniaColor: "from-[#F26A36] to-[#E26D5C]",
    logoType: "meera",
    image: "/assets/certificates/3.webp",
  },
  {
    id: "cert-vidyarthi",
    title: "Neurodevelopmental Speech Specialist Course",
    subtitle: "Clinical Workshop on Speech Difficulties in Neurodevelopmental Disorders",
    authority: "Vidyarthi, SOCH Kolkata & Mom's Belief",
    date: "August 31, 2019",
    location: "Kolkata, West Bengal",
    status: "Certified Course Completion",
    insigniaColor: "from-[#088395] to-[#E26D5C]",
    logoType: "vidyarthi",
    image: "/assets/certificates/4.webp",
  },
];

const CERT_STYLES: Record<string, { bg: string, tagBg: string, graphicBg: string, ribbonBg: string }> = {
  "cert-oticon": {
    bg: "bg-[#E0F2FE]", // Soft blue
    tagBg: "bg-[#BAE6FD] border-slate-900 text-sky-900",
    graphicBg: "bg-white border-slate-900",
    ribbonBg: "bg-[#088395]"
  },
  "cert-cre": {
    bg: "bg-[#ECFDF5]", // Soft mint green
    tagBg: "bg-[#A7F3D0] border-slate-900 text-emerald-900",
    graphicBg: "bg-white border-slate-900",
    ribbonBg: "bg-[#0D9488]"
  },
  "cert-meera": {
    bg: "bg-[#FFF1F2]", // Soft pink
    tagBg: "bg-[#FECDD3] border-slate-900 text-rose-900",
    graphicBg: "bg-white border-slate-900",
    ribbonBg: "bg-[#F26A36]"
  },
  "cert-vidyarthi": {
    bg: "bg-[#FEF3C7]", // Soft gold
    tagBg: "bg-[#FDE68A] border-slate-900 text-amber-900",
    graphicBg: "bg-white border-slate-900",
    ribbonBg: "bg-[#F26A36]"
  }
};

export default function Certificates() {
  const [activeCert, setActiveCert] = useState<CertificateItem | null>(null);

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
      id="certificates"
      className="py-20 lg:py-32 px-6 relative overflow-hidden select-none bg-[#F3F7F5] text-slate-900 border-t-2 border-slate-900"
    >
      {/* Background Soft Glows */}
      <div className="absolute top-[30%] left-[-10%] w-[500px] h-[500px] rounded-full bg-brand-teal-500/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[-10%] w-[450px] h-[450px] rounded-full bg-brand-coral-500/5 blur-[125px] pointer-events-none z-0" />

      {/* Decorative sparkles */}
      <motion.div
        animate={{ y: [0, -10, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-12 left-12 text-[#F26A36] w-6 h-6 pointer-events-none opacity-30 hidden sm:block"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10 mb-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="px-3.5 py-1.5 rounded-full bg-[#E0F2FE] border-2 border-slate-900 text-[10px] font-sans font-extrabold tracking-widest text-slate-800 uppercase mb-4 shadow-[2px_2px_0px_0px_#0F172A]"
          >
            Credentials & Achievements
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight leading-[1.15] max-w-3xl"
          >
            Verified Professional <br className="hidden sm:inline" />
            <span className="text-[#F26A36]">Qualifications & Licensures.</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base text-slate-650 leading-relaxed font-sans max-w-2xl mt-4 font-medium"
          >
            Every certification represents rigorous clinical training, national registrations, and clinical excellence verified by governing healthcare boards.
          </motion.p>
        </div>

        {/* 2x2 Certificate Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {CERTIFICATES_DATA.map((cert) => {
            const style = CERT_STYLES[cert.id] || {
              bg: "bg-white",
              tagBg: "bg-slate-100 border-slate-900 text-slate-800",
              graphicBg: "bg-white border-slate-900",
              ribbonBg: "bg-slate-500"
            };

            return (
              <motion.div
                key={cert.id}
                variants={cardVariants}
                onClick={() => setActiveCert(cert)}
                className="relative rounded-[24px] p-2 bg-white border-2 border-slate-900 shadow-[5px_5px_0px_0px_#0F172A] hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[8px_8px_0px_0px_#0F172A] hover:rotate-[-0.5deg] transition-all duration-300 group cursor-pointer aspect-[4/3] flex items-center justify-center overflow-hidden"
              >
                {/* Full-width Certificate Image */}
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-contain rounded-2xl bg-[#FAF8F5] border border-slate-100 transition-transform duration-500"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Full-screen Certificate Modal */}
      <AnimatePresence>
        {activeCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setActiveCert(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-4xl w-full bg-white border-4 border-slate-900 rounded-[32px] p-4 sm:p-6 shadow-[8px_8px_0px_0px_#0F172A] flex flex-col gap-4 cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveCert(null)}
                className="absolute top-4 right-4 p-2 rounded-full border-2 border-slate-900 bg-white text-slate-800 hover:bg-slate-50 shadow-[2px_2px_0px_0px_#0F172A] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_#0F172A] transition-all duration-200 focus:outline-none cursor-pointer z-10"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Certificate Image Frame */}
              <div className="border-2 border-slate-900 rounded-2xl overflow-hidden bg-slate-50 shadow-[3px_3px_0px_0px_#0F172A] flex items-center justify-center">
                <img
                  src={activeCert.image}
                  alt={activeCert.title}
                  className="w-full h-auto max-h-[80vh] object-contain mx-auto"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
