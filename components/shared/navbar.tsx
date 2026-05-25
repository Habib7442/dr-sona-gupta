"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
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
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
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
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out",
          isScrolled 
            ? "h-20 bg-brand-cyan-900/75 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20" 
            : "h-24 bg-transparent border-b border-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
          {/* Logo Brand Branding */}
          <a 
            href="#home" 
            onClick={(e) => handleAnchorClick(e, "#home")}
            className="flex flex-col select-none group"
          >
            <span className="text-xl md:text-2xl font-heading font-bold tracking-[0.1em] text-brand-white-950 uppercase group-hover:text-brand-teal-400 transition-colors duration-300">
              Sona Gupta
            </span>
            <span className="text-[10px] md:text-xs font-sans tracking-[0.2em] uppercase text-brand-teal-400 font-medium">
              Audiologist & Therapist
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className="relative text-sm font-sans font-medium text-brand-white-950/70 hover:text-brand-white-950 transition-colors duration-300 py-2 select-none group"
              >
                {link.label}
                {/* Custom glowing underline indicator on hover */}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-teal-400 transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            ))}
          </nav>

          {/* Header Action Button (Coral CTA) */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:8876226682"
              className="flex items-center gap-2 text-sm font-sans font-medium text-brand-teal-400 hover:text-brand-teal-500 transition-colors duration-300 px-3 py-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => handleAnchorClick(e, "#contact")}
              className="px-6 py-2.5 rounded-full bg-brand-coral-500 hover:bg-brand-coral-600 text-brand-white-950 text-sm font-sans font-semibold tracking-wide transition-all duration-300 shadow-md shadow-brand-coral-500/10 hover:shadow-brand-coral-500/20 active:scale-95"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Trigger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-brand-white-950/80 hover:text-brand-white-950 hover:bg-white/5 transition-all duration-300 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer Overlay Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 lg:hidden bg-brand-cyan-950/95 backdrop-blur-2xl"
          >
            <div className="flex flex-col h-full pt-32 px-8 pb-10">
              <nav className="flex flex-col gap-6 text-center">
                {NAV_LINKS.map((link, index) => (
                  <motion.a
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    className="text-2xl font-heading font-medium tracking-wide text-brand-white-950 hover:text-brand-teal-400 transition-colors duration-300"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <div className="mt-auto flex flex-col gap-4">
                <motion.a
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 0.7, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  href="tel:8876226682"
                  className="flex items-center justify-center gap-3 py-3 border border-white/10 rounded-full text-brand-white-950 text-base font-sans font-medium hover:bg-white/5 transition-colors"
                >
                  <Phone className="w-5 h-5 text-brand-teal-400" />
                  <span>Call 8876226682</span>
                </motion.a>
                
                <motion.a
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.5 }}
                  href="#contact"
                  onClick={(e) => handleAnchorClick(e, "#contact")}
                  className="py-4 rounded-full bg-brand-coral-500 hover:bg-brand-coral-600 text-brand-white-950 text-center text-base font-sans font-semibold tracking-wide shadow-lg shadow-brand-coral-500/10 transition-all active:scale-95"
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
