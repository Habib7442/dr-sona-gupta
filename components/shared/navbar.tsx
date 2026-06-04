"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Conditions", href: "#conditions" },
  { label: "Location", href: "#location" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const next = window.scrollY > 40;
      setIsScrolled((prev) => (prev === next ? prev : next));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 w-full z-40 transition-all duration-300 ease-in-out border-b flex items-center justify-between px-6 sm:px-12 lg:px-16 bg-[#F3F7F5]/85 backdrop-blur-md",
          isScrolled 
            ? "h-16 border-slate-250/80 shadow-[0_4px_30px_rgba(0,0,0,0.015)] bg-[#F3F7F5]/90" 
            : "h-20 border-transparent"
        )}
      >
        {/* Logo Brand Branding */}
        <a 
          href="#home" 
          onClick={(e) => handleAnchorClick(e, "#home")}
          className="flex items-center gap-2.5 select-none group cursor-pointer"
        >
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 shrink-0 rounded-full border-2 border-slate-900 overflow-hidden bg-white p-0.5 shadow-[1.5px_1.5px_0px_0px_#0F172A]">
            <Image
              src="/logo.png"
              alt="Dr. Sona Gupta Deb Purkayastha Brand Logo"
              fill
              sizes="(max-width: 640px) 32px, 40px"
              className="object-contain rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-xl font-heading font-extrabold tracking-[0.06em] text-slate-900 uppercase group-hover:text-brand-teal-500 transition-colors duration-300">
              Sona Gupta
            </span>
            <span className="text-[8px] sm:text-[10px] font-sans tracking-[0.12em] uppercase text-brand-teal-500 font-extrabold leading-none mt-0.5">
              Audiologist & Therapist
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleAnchorClick(e, link.href)}
              className="text-xs font-sans font-extrabold text-slate-700 hover:text-brand-teal-500 py-2 px-4 transition-all duration-200 select-none rounded-full hover:bg-slate-900/5"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Header Action Button (Coral CTA) */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:8876226682"
            className="flex items-center gap-2 text-xs font-sans font-extrabold text-brand-teal-500 hover:text-brand-teal-500/80 transition-colors duration-300 px-3 py-2"
          >
            <Phone className="w-4.5 h-4.5" />
            <span>Call 8876226682</span>
          </a>
          <a
            href="#contact"
            onClick={(e) => handleAnchorClick(e, "#contact")}
            className="px-5 py-2.5 rounded-full bg-brand-coral-500 hover:bg-brand-coral-600 text-white text-xs font-sans font-extrabold tracking-wider transition-all duration-250 hover:shadow-md hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            Book Appointment
          </a>
        </div>

        {/* Mobile Menu Trigger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 rounded-full border border-slate-200 bg-white text-slate-800 hover:bg-slate-50 transition-all duration-200 focus:outline-none cursor-pointer"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </motion.header>

      {/* Mobile Drawer Overlay Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 lg:hidden bg-[#F3F7F5]/98 backdrop-blur-2xl"
          >
            <div className="flex flex-col h-full pt-24 sm:pt-32 px-8 pb-10">
              <nav className="flex flex-col gap-6 text-center">
                {NAV_LINKS.map((link, index) => (
                  <motion.a
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    className="text-2xl font-heading font-bold tracking-wide text-slate-800 hover:text-brand-teal-500 transition-colors duration-300"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <div className="mt-auto flex flex-col gap-4">
                <motion.a
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  href="tel:8876226682"
                  className="flex items-center justify-center gap-3 py-3 border border-slate-200 rounded-full text-slate-800 text-base font-sans font-semibold hover:bg-slate-50 transition-colors"
                >
                  <Phone className="w-5 h-5 text-brand-teal-500" />
                  <span>Call 8876226682</span>
                </motion.a>
                
                <motion.a
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.5 }}
                  href="#contact"
                  onClick={(e) => handleAnchorClick(e, "#contact")}
                  className="py-4 rounded-full bg-brand-coral-500 hover:bg-brand-coral-600 text-white text-center text-base font-sans font-bold tracking-wide shadow-lg shadow-brand-coral-500/10 transition-all active:scale-95"
                >
                  Book Appointment
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
