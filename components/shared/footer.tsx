import { Phone, Mail, MapPin, Award, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#040E14] border-t border-white/5 pt-20 pb-10 text-brand-white-950 relative overflow-hidden select-none">
      {/* Background glow trace in footer */}
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-brand-teal-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-brand-coral-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Col 1: Identity & Credentials Summary */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <a href="#home" className="flex flex-col group w-fit">
              <span className="text-2xl font-heading font-bold tracking-[0.1em] text-brand-white-950 uppercase group-hover:text-brand-teal-400 transition-colors duration-300">
                Sona Gupta
              </span>
              <span className="text-xs font-sans tracking-[0.2em] uppercase text-brand-teal-400 font-medium">
                Audiologist & Speech Therapist
              </span>
            </a>
            
            <p className="text-sm font-sans text-brand-white-950/60 max-w-sm mt-2 leading-relaxed">
              Providing premium, compassionate, evidence-based speech pathology and clinical audiology services for families, children, and elderly patients across Assam and the Northeast.
            </p>

            <div className="flex items-center gap-2.5 mt-4 px-4 py-2 bg-white/5 border border-white/10 rounded-full w-fit">
              <Award className="w-4.5 h-4.5 text-brand-teal-400" />
              <span className="text-[11px] font-sans font-semibold tracking-wider text-brand-teal-400 uppercase">
                RCI Certified Specialist
              </span>
            </div>
          </div>

          {/* Col 2: Clinic Location Logistics */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-heading font-semibold tracking-widest text-brand-white-950 uppercase">
              Location details
            </h4>
            
            <div className="flex gap-3 text-sm text-brand-white-950/60 leading-relaxed mt-2">
              <MapPin className="w-5 h-5 text-brand-teal-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-brand-white-950/80">Valley Hospital & Research Centre</p>
                <p>Meherpur, Silchar - 788015</p>
                <p>Barak Valley, Assam, India</p>
              </div>
            </div>
          </div>

          {/* Col 3: Direct Contact Shortcuts */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-heading font-semibold tracking-widest text-brand-white-950 uppercase">
              Quick contact
            </h4>

            <div className="flex flex-col gap-3.5 mt-2">
              <a 
                href="tel:8876226682"
                className="flex items-center gap-3 text-sm text-brand-white-950/60 hover:text-brand-teal-400 transition-colors duration-300"
              >
                <Phone className="w-4.5 h-4.5 text-brand-teal-400" />
                <span>8876226682</span>
              </a>

              <a 
                href="mailto:guptasona2018@gmail.com"
                className="flex items-center gap-3 text-sm text-brand-white-950/60 hover:text-brand-teal-400 transition-colors duration-300"
              >
                <Mail className="w-4.5 h-4.5 text-brand-teal-400" />
                <span className="truncate">guptasona2018@gmail.com</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright details */}
        <div className="border-t border-white/5 pt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs font-sans text-brand-white-950/40 text-center sm:text-left">
            &copy; {currentYear} Sona Gupta Deb Purkayastha. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-sans text-brand-white-950/30 uppercase tracking-widest">
              Designed by Locallify
            </span>
            
            <a 
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="p-2.5 rounded-full bg-white/5 hover:bg-brand-teal-500 hover:text-brand-cyan-950 border border-white/10 hover:border-brand-teal-500 transition-all duration-300 group"
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
