"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail, ChevronRight } from "lucide-react";

export default function Location() {
  const containerVariants = {
    hidden: {},
    visible: {
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
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      id="location"
      className="py-20 lg:py-32 px-6 relative overflow-hidden select-none bg-brand-cyan-950 text-brand-white-950 border-t border-white/5"
    >
      {/* Background Ambient Mesh Glows */}
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
            Clinical Logistics
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight leading-[1.15] text-brand-white-950 max-w-3xl"
          >
            Consultation Hours & <br className="hidden sm:inline" />
            <span className="text-brand-coral-500">Clinical Location.</span>
          </motion.h2>
        </div>

        {/* 50/50 Split Grid (Logistics vs Map) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch max-w-7xl mx-auto"
        >
          {/* LEFT COLUMN: Detailed Logistics Card (5/12 width) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="rounded-3xl p-6 sm:p-8 bg-brand-cyan-900/30 border border-white/5 relative overflow-hidden flex-1 flex flex-col justify-between">
              {/* Background ambient light */}
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-brand-teal-500/5 blur-3xl pointer-events-none z-0" />

              <div className="relative z-10">
                <h3 className="text-xl font-heading font-bold text-brand-white-950 mb-6">OPD Timings & Logistics</h3>
                
                <div className="space-y-6">
                  {/* Practice Location */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-teal-500/10 border border-brand-teal-500/20 flex items-center justify-center text-brand-teal-400 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-brand-teal-400">Clinical Address</h4>
                      <p className="text-sm font-semibold text-brand-white-950 mt-1 leading-snug">Valley Hospital & Research Centre</p>
                      <p className="text-xs text-brand-white-950/60 mt-0.5">Meherpur, Silchar, Assam 788015</p>
                    </div>
                  </div>

                  {/* Schedule */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-teal-500/10 border border-brand-teal-500/20 flex items-center justify-center text-brand-teal-400 shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-brand-teal-400">Operational Hours</h4>
                      <div className="grid grid-cols-2 gap-y-3 gap-x-4 mt-2 border-t border-white/5 pt-2.5">
                        <div>
                          <span className="text-[10px] text-brand-white-950/40 uppercase tracking-widest block font-sans font-bold">Mon - Sat</span>
                          <span className="text-xs font-semibold text-brand-white-950 mt-1 block font-sans">10:00 AM - 1:00 PM</span>
                          <span className="text-xs font-semibold text-brand-white-950 block font-sans">4:00 PM - 7:00 PM</span>
                        </div>
                        <div>
                          <span className="text-[10px] text-brand-white-950/40 uppercase tracking-widest block font-sans font-bold">Sunday</span>
                          <span className="text-xs font-semibold text-brand-coral-500 mt-1 block font-sans">Closed</span>
                          <span className="text-[10px] text-brand-white-950/40 block leading-snug font-sans mt-0.5">Emergency Only</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Direct Hotlines */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-teal-500/10 border border-brand-teal-500/20 flex items-center justify-center text-brand-teal-400 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-brand-teal-400">OPD Helpdesk</h4>
                      <div className="flex mt-1">
                        <a href="tel:8876226682" className="text-sm font-semibold text-brand-white-950 hover:text-brand-teal-400 transition-colors duration-300">
                          +91 8876226682
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-teal-500/10 border border-brand-teal-500/20 flex items-center justify-center text-brand-teal-400 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-brand-teal-400">Clinical Inquiries</h4>
                      <a href="mailto:guptasona2018@gmail.com" className="text-sm font-semibold text-brand-white-950 hover:text-brand-teal-400 transition-colors duration-300 block mt-1">
                        guptasona2018@gmail.com
                      </a>
                    </div>
                  </div>

                </div>
              </div>

              {/* Bottom conversion shortcut */}
              <div className="mt-8 border-t border-white/5 pt-6 flex items-center justify-between relative z-10">
                <span className="text-xs text-brand-white-950/50 font-sans">Need immediate assistance?</span>
                <a
                  href="#contact"
                  className="flex items-center gap-1.5 text-xs font-sans font-bold uppercase tracking-wider text-brand-teal-400 hover:text-brand-white-950 transition-colors group"
                >
                  <span>Book Visit</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Premium Dark-Themed Google Maps Iframe (7/12 width) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 flex flex-col justify-stretch"
          >
            <div className="w-full h-[350px] lg:h-full rounded-3xl overflow-hidden border border-white/5 shadow-2xl relative bg-brand-cyan-900/40 backdrop-blur-md p-1.5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.3257099580615!2d92.79325467393204!3d24.784298148303677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374e4a1fce9830ff%3A0xe8f449ce6f95394a!2sValley%20Hospital!5e0!3m2!1sen!2sin!4v1779716993631!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  borderRadius: "20px",
                  filter: "contrast(1.1) brightness(0.9) grayscale(0.2) invert(0.9) hue-rotate(180deg)",
                }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="relative z-10"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
