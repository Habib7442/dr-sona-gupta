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
      <header className="fixed top-0 left-0 right-0 z-40 px-2 sm:px-6 py-1.5 sm:py-4 pointer-events-none flex justify-center">
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "w-full max-w-6xl pointer-events-auto transition-all duration-300 ease-in-out border-2 border-slate-900 shadow-[2px_2px_0px_0px_#0F172A] sm:shadow-[4px_4px_0px_0px_#0F172A] rounded-full px-3.5 sm:px-6 flex items-center justify-between bg-white/95 backdrop-blur-md",
            isScrolled ? "h-11 sm:h-16" : "h-13 sm:h-20"
          )}
        >
          {/* Logo Brand Branding */}
          <a 
            href="#home" 
            onClick={(e) => handleAnchorClick(e, "#home")}
            className="flex flex-col select-none group"
          >
            <span className="text-xs sm:text-lg md:text-xl font-heading font-extrabold tracking-[0.06em] sm:tracking-[0.08em] text-slate-900 uppercase group-hover:text-teal-600 transition-colors duration-300">
              Sona Gupta
            </span>
            <span className="text-[6.5px] sm:text-[9px] md:text-[10px] font-sans tracking-[0.08em] sm:tracking-[0.15em] uppercase text-teal-600 font-extrabold leading-none mt-0.5">
              Audiologist & Therapist
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className="text-xs font-sans font-extrabold text-slate-700 hover:text-slate-900 py-1.5 px-3.5 border-2 border-transparent hover:border-slate-900 hover:bg-[#E2EBE7] rounded-full transition-all duration-200 select-none"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Action Button (Coral CTA) */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:8876226682"
              className="flex items-center gap-2 text-xs font-sans font-extrabold text-teal-600 hover:text-teal-700 transition-colors duration-300 px-3 py-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call 8876226682</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => handleAnchorClick(e, "#contact")}
              className="px-5 py-2 rounded-full bg-[#F26A36] text-white text-xs font-sans font-extrabold tracking-wider border-2 border-slate-900 shadow-[2px_2px_0px_0px_#0F172A] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[3px_3px_0px_0px_#0F172A] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_#0F172A] transition-all duration-200 cursor-pointer"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Trigger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-1.5 sm:p-2 rounded-full border-2 border-slate-900 bg-white text-slate-800 hover:bg-slate-50 shadow-[1.5px_1.5px_0px_0px_#0F172A] active:translate-x-[0.5px] active:translate-y-[0.5px] active:shadow-[0.5px_0.5px_0px_0px_#0F172A] transition-all duration-200 focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-3.5 h-3.5 sm:w-5 sm:h-5" /> : <Menu className="w-3.5 h-3.5 sm:w-5 sm:h-5" />}
          </button>
        </motion.div>
      </header>

      {/* Mobile Drawer Overlay Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 lg:hidden bg-white/98 backdrop-blur-2xl"
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
                    className="text-2xl font-heading font-bold tracking-wide text-slate-800 hover:text-teal-600 transition-colors duration-300"
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
                  <Phone className="w-5 h-5 text-teal-600" />
                  <span>Call 8876226682</span>
                </motion.a>
                
                <motion.a
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.5 }}
                  href="#contact"
                  onClick={(e) => handleAnchorClick(e, "#contact")}
                  className="py-4 rounded-full bg-[#F26A36] hover:bg-[#D85623] text-white text-center text-base font-sans font-bold tracking-wide shadow-lg shadow-[#F26A36]/10 transition-all active:scale-95"
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
