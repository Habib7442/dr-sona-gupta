"use client";

import { useState } from "react";
import Preloader from "@/components/sections/preloader";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import { motion, AnimatePresence } from "framer-motion";

import Hero from "@/components/sections/hero";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Cinematic Entrance Loading Sequence */}
      <Preloader onComplete={() => setIsLoading(false)} />

      {/* Main luxury single-page layout structure */}
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col min-h-screen relative overflow-hidden bg-brand-cyan-950 text-brand-white-950 font-sans"
          >
            {/* Glowing blur mesh backgrounds mapped around layout sections */}
            <div className="glow-mesh glow-mesh-teal top-[-10%] left-[-20%] w-[600px] h-[600px] opacity-20" />
            <div className="glow-mesh glow-mesh-cyan top-[30%] right-[-10%] w-[500px] h-[500px] opacity-15" />
            <div className="glow-mesh glow-mesh-coral bottom-[15%] left-[5%] w-[450px] h-[450px] opacity-10" />

            {/* Sticky Glass Navbar */}
            <Navbar />

            {/* Page Sections Shell */}
            <main className="flex-1 z-10">
              
              {/* Symptom-Inspired Hero Landing Page */}
              <Hero />

              {/* Temporary Anchor targets to prevent routing bounce */}
              <div id="about" className="h-40 flex items-center justify-center text-brand-white-950/20 text-xs tracking-widest uppercase">About Area Placeholder</div>
              <div id="services" className="h-40 flex items-center justify-center text-brand-white-950/20 text-xs tracking-widest uppercase">Services Area Placeholder</div>
              <div id="conditions" className="h-40 flex items-center justify-center text-brand-white-950/20 text-xs tracking-widest uppercase">Conditions Area Placeholder</div>
              <div id="location" className="h-40 flex items-center justify-center text-brand-white-950/20 text-xs tracking-widest uppercase">Location Area Placeholder</div>
              <div id="contact" className="h-40 flex items-center justify-center text-brand-white-950/20 text-xs tracking-widest uppercase">Contact Area Placeholder</div>

            </main>

            {/* Luxury Brand Footer */}
            <Footer />

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
