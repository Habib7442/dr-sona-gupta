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
      className="py-20 lg:py-32 px-6 relative overflow-hidden select-none bg-[#FAF8F5] text-slate-900 border-t-2 border-slate-900"
    >
      {/* Background Ambient Mesh Glows */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-brand-teal-500/5 blur-[130px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-brand-coral-500/5 blur-[130px] pointer-events-none z-0" />

      {/* Background Sparkles */}
      <motion.div
        animate={{ y: [0, 8, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-12 left-12 text-teal-500 w-6 h-6 pointer-events-none opacity-30 hidden sm:block"
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
            Clinical Logistics
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight leading-[1.15] text-slate-900 max-w-3xl"
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
            <div className="rounded-3xl p-6 sm:p-8 bg-[#FFFBEB] border-2 border-slate-900 shadow-[5px_5px_0px_0px_#0F172A] hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[8px_8px_0px_0px_#0F172A] transition-all duration-300 relative overflow-hidden flex-1 flex flex-col justify-between">
              {/* Background ambient light */}
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-brand-teal-500/5 blur-3xl pointer-events-none z-0" />

              <div className="relative z-10">
                <h3 className="text-xl font-heading font-extrabold text-slate-900 mb-6">OPD Timings & Logistics</h3>
                
                <div className="space-y-6">
                  {/* Practice Location */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white border-2 border-slate-900 flex items-center justify-center text-slate-800 shrink-0 shadow-[1.5px_1.5px_0px_0px_#0F172A]">
                      <MapPin className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="text-xs font-sans font-extrabold uppercase tracking-wider text-teal-600">Clinical Address</h4>
                      <p className="text-sm font-extrabold text-slate-900 mt-1 leading-snug">Valley Hospital & Research Centre</p>
                      <p className="text-xs text-slate-700 mt-0.5 font-bold">Meherpur, Silchar, Assam 788015</p>
                    </div>
                  </div>

                  {/* Schedule */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white border-2 border-slate-900 flex items-center justify-center text-slate-800 shrink-0 shadow-[1.5px_1.5px_0px_0px_#0F172A]">
                      <Clock className="w-5 h-5 text-teal-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xs font-sans font-extrabold uppercase tracking-wider text-teal-600">Operational Hours</h4>
                      <div className="grid grid-cols-2 gap-y-3 gap-x-4 mt-2 border-t border-slate-350 pt-2.5">
                        <div>
                          <span className="text-[10px] text-slate-500 uppercase tracking-widest block font-sans font-extrabold">Mon - Sat</span>
                          <span className="text-xs font-bold text-slate-800 mt-1 block font-sans">10:00 AM - 1:00 PM</span>
                          <span className="text-xs font-bold text-slate-800 block font-sans">4:00 PM - 7:00 PM</span>
                        </div>
                        <div>
                          <span className="text-[10px] text-slate-500 uppercase tracking-widest block font-sans font-extrabold">Sunday</span>
                          <span className="text-xs font-extrabold text-brand-coral-500 mt-1 block font-sans">Closed</span>
                          <span className="text-[10px] text-slate-600 block leading-snug font-sans mt-0.5 font-bold">Emergency Only</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Direct Hotlines */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white border-2 border-slate-900 flex items-center justify-center text-slate-800 shrink-0 shadow-[1.5px_1.5px_0px_0px_#0F172A]">
                      <Phone className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="text-xs font-sans font-extrabold uppercase tracking-wider text-teal-600">OPD Helpdesk</h4>
                      <div className="flex mt-1">
                        <a href="tel:8876226682" className="text-sm font-extrabold text-slate-800 hover:text-brand-teal-500 transition-colors duration-300">
                          +91 8876226682
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white border-2 border-slate-900 flex items-center justify-center text-slate-800 shrink-0 shadow-[1.5px_1.5px_0px_0px_#0F172A]">
                      <Mail className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="text-xs font-sans font-extrabold uppercase tracking-wider text-teal-600">Clinical Inquiries</h4>
                      <a href="mailto:guptasona2018@gmail.com" className="text-sm font-extrabold text-slate-800 hover:text-brand-teal-500 transition-colors duration-300 block mt-1">
                        guptasona2018@gmail.com
                      </a>
                    </div>
                  </div>

                </div>
              </div>

              {/* Bottom conversion shortcut */}
              <div className="mt-8 border-t border-slate-350 pt-6 flex items-center justify-between relative z-10">
                <span className="text-xs text-slate-500 font-sans font-bold">Need immediate assistance?</span>
                <a
                  href="#contact"
                  className="flex items-center gap-1.5 text-xs font-sans font-extrabold uppercase tracking-wider text-brand-teal-500 hover:text-slate-900 transition-colors group"
                >
                  <span>Book Visit</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Premium Google Maps Iframe (7/12 width) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 flex flex-col justify-stretch"
          >
            <div className="w-full h-[350px] lg:h-full rounded-3xl overflow-hidden border-2 border-slate-900 shadow-[5px_5px_0px_0px_#0F172A] hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[8px_8px_0px_0px_#0F172A] transition-all duration-300 relative bg-white p-1.5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.3257099580615!2d92.79325467393204!3d24.784298148303677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374e4a1fce9830ff%3A0xe8f449ce6f95394a!2sValley%20Hospital!5e0!3m2!1sen!2sin!4v1779716993631!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  borderRadius: "20px",
                  filter: "contrast(1.04) grayscale(0.05)",
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
