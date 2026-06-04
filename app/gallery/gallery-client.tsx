"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import WhatsAppWidget from "@/components/ui/whatsapp-widget";

const GALLERY_IMAGES = [
  "/assets/gallery/1.webp",
  "/assets/gallery/2.webp",
  "/assets/gallery/3.webp",
  "/assets/gallery/4.webp",
  "/assets/gallery/5.webp",
  "/assets/gallery/6.webp",
  "/assets/gallery/7.webp",
  "/assets/gallery/8.webp",
  "/assets/gallery/9.webp",
  "/assets/gallery/10.webp",
  "/assets/gallery/11.webp",
  "/assets/gallery/12.webp",
  "/assets/gallery/13.webp",
  "/assets/gallery/14.webp",
  "/assets/gallery/15.webp",
  "/assets/gallery/16.webp",
  "/assets/gallery/17.webp",
  "/assets/gallery/18.webp",
  "/assets/gallery/19.webp",
  "/assets/gallery/consultation.webp",
];

export default function GalleryClient() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  // Prevent background scrolling when image lightbox overlay is open
  useEffect(() => {
    if (activeImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeImage]);

  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden bg-[#F3F7F5] text-slate-900 font-sans">
      {/* Background Ambient Mesh Glows */}
      <div className="glow-mesh glow-mesh-teal top-[-10%] left-[-20%] w-[600px] h-[600px] opacity-10 -z-10 pointer-events-none" />
      <div className="glow-mesh glow-mesh-cyan top-[35%] right-[-10%] w-[500px] h-[500px] opacity-10 -z-10 pointer-events-none" />
      <div className="glow-mesh glow-mesh-coral bottom-[15%] left-[5%] w-[450px] h-[450px] opacity-5 -z-10 pointer-events-none" />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 pt-32 sm:pt-36 lg:pt-44 pb-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Header section with back button */}
          <div className="flex flex-col items-start gap-4 mb-16">
            <Link
              href="/#about"
              className="inline-flex items-center gap-1.5 text-xs font-sans font-extrabold uppercase tracking-wider text-brand-teal-500 hover:text-slate-900 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
              <span>Back to home</span>
            </Link>

            <div className="px-3.5 py-1.5 rounded-full bg-[#E0F2FE] border-2 border-slate-900 text-[10px] font-sans font-extrabold tracking-widest text-slate-800 uppercase shadow-[2px_2px_0px_0px_#0F172A]">
              Visual Showcase
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold tracking-tight text-slate-900 max-w-3xl leading-[1.1]">
              Clinical Environment & <span className="text-brand-coral-500">Facilities.</span>
            </h1>
            
            <p className="text-sm sm:text-base text-slate-650 leading-relaxed font-sans max-w-2xl mt-2 font-medium">
              Explore the diagnostic testing equipment, consultation rooms, audiometric treatment suites, and pediatric intervention spaces at Valley Hospital, Silchar.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 sm:gap-8 justify-items-stretch">
            {GALLERY_IMAGES.map((src, idx) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: Math.min(idx * 0.05, 0.5) }}
                onClick={() => setActiveImage(src)}
                className="clinic-photo w-full transform hover:scale-[1.03] hover:rotate-[-0.5deg] hover:shadow-xl transition-all duration-300 group cursor-pointer select-none"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                  <Image
                    src={src}
                    alt={`Dr. Sona Gupta clinical environment photo ${idx + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 300px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Glossy glass reflection overlays */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/20 pointer-events-none z-10" />
                  {/* Static light reflection glare */}
                  <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.25)_0%,rgba(255,255,255,0.05)_30%,transparent_60%)] pointer-events-none z-10" />
                  {/* Dynamic sheen sweep on hover */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.02)_25%,rgba(255,255,255,0.22)_50%,rgba(255,255,255,0.02)_75%,transparent_100%)] pointer-events-none z-10" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </main>

      {/* Footer & WhatsApp Widget */}
      <Footer />
      <WhatsAppWidget />

      {/* Lightbox Expander Overlay */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setActiveImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-5xl w-full bg-white border-4 border-slate-900 rounded-[32px] p-4 sm:p-6 shadow-[8px_8px_0px_0px_#0F172A] flex flex-col gap-4 cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 p-2 rounded-full border-2 border-slate-900 bg-white text-slate-800 hover:bg-slate-50 shadow-[2px_2px_0px_0px_#0F172A] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_#0F172A] transition-all duration-200 focus:outline-none cursor-pointer z-10"
                aria-label="Close image lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Photo Display Frame */}
              <div className="border-2 border-slate-900 rounded-2xl overflow-hidden bg-slate-50 shadow-[3px_3px_0px_0px_#0F172A] flex items-center justify-center relative aspect-[4/3] w-full max-w-4xl mx-auto">
                <Image
                  src={activeImage}
                  alt="Full-size clinical facility photo display"
                  fill
                  sizes="(max-width: 1024px) 100vw, 960px"
                  className="object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
