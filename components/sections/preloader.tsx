"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Lock scroll during entrance animation
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isVisible]);

  useEffect(() => {
    // End the preloader animation after 2.8 seconds total
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  // Tell the parent layout the preloader is done once it finishes fading out
  const handleAnimationEnd = () => {
    onComplete();
  };

  // 15 soundwave bar elements with individual animation heights to represent audiology
  const barVariants = {
    initial: { scaleY: 0.1, opacity: 0.3 },
    animate: (i: number) => ({
      scaleY: [0.1, 1.2, 0.2, 1.5, 0.1],
      opacity: [0.3, 1, 0.5, 1, 0.3],
      transition: {
        duration: 1.6,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut" as const,
        delay: i * 0.08,
      },
    }),
  };

  return (
    <AnimatePresence onExitComplete={handleAnimationEnd}>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F3F7F5] text-slate-900 select-none"
        >
          {/* Subtle glowing mesh behind preloader */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-teal-500/10 blur-[100px] pointer-events-none" />

          <div className="flex flex-col items-center justify-center z-10 max-w-md px-6">
            {/* Pulsing Audiology Soundwave Graphic */}
            <div className="flex items-center gap-1.5 h-16 mb-8 justify-center w-full">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={barVariants}
                  initial="initial"
                  animate="animate"
                  className="w-1 rounded-full bg-gradient-to-t from-teal-600 to-teal-500 origin-center"
                  style={{
                    height: "48px",
                  }}
                />
              ))}
            </div>

            {/* Doctor's Branding Text with Letter Spacing */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl md:text-3xl font-heading font-bold text-center tracking-[0.18em] uppercase text-slate-900 mb-3"
            >
              Sona Gupta
            </motion.h2>

            {/* Subtle Specialty Label */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.85, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs md:text-sm font-sans font-bold text-center tracking-[0.25em] uppercase text-teal-600"
            >
              Audiologist & Speech Therapist
            </motion.p>

            {/* Decorative fine-line border loading indicator */}
            <div className="w-48 h-[2px] bg-slate-200 mt-10 relative overflow-hidden rounded-full">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 2.2, ease: "easeInOut", repeat: 0 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-600 to-transparent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
