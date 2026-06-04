"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const MARQUEE_IMAGES = [
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
  "/assets/gallery/consultation.webp",
];

export default function GalleryMarquee() {
  // Duplicate the list once to allow seamless looping infinite carousel
  const duplicatedImages = [...MARQUEE_IMAGES, ...MARQUEE_IMAGES];

  return (
    <section className="py-24 relative overflow-hidden select-none bg-[#FAF8F5] border-t-2 border-slate-900">
      {/* Background Ambient glows */}
      <div className="absolute top-[10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-glow-teal pointer-events-none z-0" />
      <div className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-glow-coral pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight text-slate-900 leading-none">
              Explore Our Clinic <span className="text-brand-coral-500">& Facilities.</span>
            </h2>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-slate-900 text-xs font-sans font-extrabold border-2 border-slate-900 shadow-[3px_3px_0px_0px_#0F172A] hover:bg-slate-50 hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_#0F172A] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_#0F172A] transition-all duration-200 group cursor-pointer"
          >
            <span>View Full Gallery</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>

      {/* Infinite scrolling track container */}
      <div className="relative w-full overflow-hidden flex py-10 z-10 bg-slate-50/50 border-y-2 border-slate-900/5">
        {/* Gradient overlays to fade out the edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#FAF8F5] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#FAF8F5] to-transparent z-20 pointer-events-none" />

        {/* Scrolling wrapper track */}
        <div className="animate-marquee-ltr flex gap-16 pr-16">
          {duplicatedImages.map((src, idx) => (
            <div
              key={`${src}-${idx}`}
              className="clinic-photo flex-shrink-0 w-[240px] sm:w-[320px] aspect-[4/3] transform hover:scale-[1.03] transition-transform duration-300 select-none"
            >
              <div className="relative w-full h-full overflow-hidden rounded-lg">
                <Image
                  src={src}
                  alt={`Clinic and patient care facility photo ${(idx % MARQUEE_IMAGES.length) + 1}`}
                  fill
                  sizes="(max-width: 640px) 240px, 320px"
                  className="object-cover"
                />
                {/* Glossy glass reflection overlays */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/20 pointer-events-none z-10" />
                {/* Static light reflection glare */}
                <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.25)_0%,rgba(255,255,255,0.05)_30%,transparent_60%)] pointer-events-none z-10" />
                {/* Dynamic sheen sweep on hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.02)_25%,rgba(255,255,255,0.22)_50%,rgba(255,255,255,0.02)_75%,transparent_100%)] pointer-events-none z-10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
