"use client";

import { useState } from "react";
import Preloader from "@/components/sections/preloader";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import { motion, AnimatePresence } from "framer-motion";

import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Services from "@/components/sections/services";
import Conditions from "@/components/sections/conditions";
import Trust from "@/components/sections/trust";
import Certificates from "@/components/sections/certificates";
import Location from "@/components/sections/location";
import ContactForm from "@/components/sections/contact-form";
import WhatsAppWidget from "@/components/ui/whatsapp-widget";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Cinematic Entrance Loading Sequence */}
      <Preloader onComplete={() => setIsLoading(false)} />

      {/* Main luxury single-page layout structure */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col min-h-screen relative overflow-hidden bg-[#F3F7F5] text-slate-900 font-sans"
        style={{
          overflow: isLoading ? "hidden" : "visible",
          height: isLoading ? "100vh" : "auto",
        }}
      >
        {/* Glowing blur mesh backgrounds mapped around layout sections */}
        <div className="glow-mesh glow-mesh-teal top-[-10%] left-[-20%] w-[600px] h-[600px] opacity-10 -z-10 pointer-events-none" />
        <div className="glow-mesh glow-mesh-cyan top-[30%] right-[-10%] w-[500px] h-[500px] opacity-10 -z-10 pointer-events-none" />
        <div className="glow-mesh glow-mesh-coral bottom-[15%] left-[5%] w-[450px] h-[450px] opacity-5 -z-10 pointer-events-none" />

        {/* Sticky Glass Navbar */}
        <Navbar />

        {/* Page Sections Shell */}
        <main className="flex-1">
          
          {/* Symptom-Inspired Hero Landing Page */}
          <Hero />

          {/* Asymmetrical Professional About Biography */}
          <About />

          {/* Floating 3x2 Glassmorphic Services Grid */}
          <Services />

          {/* Segmented Interactive Conditions Treated Tag Cloud */}
          <Conditions />

          {/* Premium 2x2 Trust Value Propositions */}
          <Trust />

          {/* Verified Professional Certificates Showcase */}
          <Certificates />

          {/* Detailed Clinical Logistics & Google Maps Iframe */}
          <Location />

          {/* Secure, Validated Callback Appointment Booking Form */}
          <ContactForm />

        </main>

        {/* Luxury Brand Footer */}
        <Footer />

        {/* Floating scroll-linked WhatsApp Direct Chat circular widget */}
        <WhatsAppWidget />

      </motion.div>
    </>
  );
}
