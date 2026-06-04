import { Phone, Mail, MapPin, Award, ArrowUp } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#E2EBE7] border-t-4 border-slate-900 pt-20 pb-10 text-slate-900 relative overflow-hidden select-none">
      {/* Background glow trace in footer */}
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-glow-teal pointer-events-none" />
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-glow-coral pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Col 1: Identity & Credentials Summary */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <a href="#home" className="flex items-center gap-3 group w-fit">
              <div className="relative w-10 h-10 shrink-0 rounded-full border-2 border-slate-900 overflow-hidden bg-white p-0.5 shadow-[1.5px_1.5px_0px_0px_#0F172A]">
                <Image
                  src="/logo.png"
                  alt="Dr. Sona Gupta Deb Purkayastha Brand Logo"
                  fill
                  sizes="40px"
                  className="object-contain rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-heading font-extrabold tracking-[0.1em] text-slate-900 uppercase group-hover:text-teal-600 transition-colors duration-300">
                  Sona Gupta
                </span>
                <span className="text-xs font-sans tracking-[0.2em] uppercase text-teal-600 font-bold">
                  Audiologist & Speech Therapist
                </span>
              </div>
            </a>
            
            <p className="text-sm font-sans text-slate-700 max-w-sm mt-2 leading-relaxed font-semibold">
              Providing premium, compassionate, evidence-based speech pathology and clinical audiology services for families, children, and elderly patients across Assam and the Northeast.
            </p>

            <div className="flex items-center gap-2.5 mt-4 px-4 py-2 bg-[#FFFBEB] border-2 border-slate-900 rounded-full w-fit shadow-[2px_2px_0px_0px_#0F172A] hover:translate-y-[-1px] transition-all duration-200 cursor-pointer">
              <Award className="w-4.5 h-4.5 text-amber-600" />
              <span className="text-[10px] font-sans font-extrabold tracking-wider text-slate-800 uppercase">
                RCI Certified Specialist
              </span>
            </div>
          </div>

          {/* Col 2: Clinic Location Logistics */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-heading font-extrabold tracking-widest text-slate-900 uppercase">
              Location details
            </h4>
            
            <div className="flex gap-3 text-sm text-slate-700 leading-relaxed mt-2 font-semibold">
              <MapPin className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-extrabold text-slate-900">Valley Hospital & Research Centre</p>
                <p>Meherpur, Silchar - 788015</p>
                <p>Barak Valley, Assam, India</p>
              </div>
            </div>
          </div>

          {/* Col 3: Direct Contact Shortcuts */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-heading font-extrabold tracking-widest text-slate-900 uppercase">
              Quick contact
            </h4>

            <div className="flex flex-col gap-3.5 mt-2 font-semibold">
              <a 
                href="tel:8876226682"
                className="flex items-center gap-3 text-sm text-slate-700 hover:text-teal-600 transition-colors duration-300"
              >
                <Phone className="w-4.5 h-4.5 text-teal-600" />
                <span>8876226682</span>
              </a>

              <a 
                href="mailto:guptasona2018@gmail.com"
                className="flex items-center gap-3 text-sm text-slate-700 hover:text-teal-600 transition-colors duration-300"
              >
                <Mail className="w-4.5 h-4.5 text-teal-600" />
                <span className="truncate">guptasona2018@gmail.com</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright details */}
        <div className="border-t-2 border-slate-900/10 pt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs font-sans text-slate-600 text-center sm:text-left font-bold">
            &copy; {currentYear} Sona Gupta Deb Purkayastha. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-sans text-slate-700 uppercase tracking-widest font-extrabold">
              Designed by Locallify
            </span>
            
            <a 
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="p-2.5 rounded-full bg-white text-slate-900 border-2 border-slate-900 shadow-[2px_2px_0px_0px_#0F172A] hover:bg-[#FDE68A] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_#0F172A] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_#0F172A] transition-all duration-200 group"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
