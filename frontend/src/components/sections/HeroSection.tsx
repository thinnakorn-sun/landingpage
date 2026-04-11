"use client";

import { motion } from "framer-motion";
import NextImage from "next/image";
import { useLang } from "@/context/LangContext";
import { HERO_TAGLINE, HERO_SUB, HERO_CTA, HERO_BULLETS } from "@/constants";

export default function HeroSection() {
  const { t } = useLang();

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 overflow-hidden border-b border-gray-50 scroll-mt-24">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-[20%] right-[10%] w-[40vw] h-[40vw] border-[1px] border-black/[0.05] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="relative h-20 w-64 md:h-28 md:w-80">
              <NextImage
                src="/logo.jpg"
                alt="PINAHX Logo"
                fill
                className="object-contain object-left mix-blend-multiply"
                priority
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[12vw] sm:text-[10vw] lg:text-[7rem] font-black leading-[0.85] tracking-tighter text-black uppercase mb-10"
          >
            NOT JUST <br />
            CONTENT <br />
            <span className="text-gray-300">IT&apos;S YOUR</span> <br />
            <span className="text-[#FF6B35]">GROWTH</span>
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p className="text-base sm:text-lg text-gray-500 mb-8 whitespace-pre-line leading-relaxed font-medium">
                {t(HERO_SUB)}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a
                  href="#gallery"
                  className="px-8 py-4 bg-black text-white text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-[#FF6B35] transition-all duration-300"
                >
                  {t(HERO_CTA)}
                </a>
              </div>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-3"
            >
              {HERO_BULLETS.map((bullet, i) => (
                <li key={i} className="flex items-center gap-4 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B35] group-hover:scale-150 transition-transform" />
                  <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-black/80 group-hover:text-black transition-colors">
                    {t(bullet)}
                  </span>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>

        {/* Static Black Image Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 w-full max-w-5xl relative aspect-video"
        >
          <NextImage
            src="/hero-bg.jpg"
            alt="PINAHX Digital Studio"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>


      {/* Scroll indicator (Moved to bottom right to avoid overlap) */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 right-10 hidden md:flex items-center gap-6"
      >
        <span className="text-[9px] font-black tracking-[0.6em] uppercase text-gray-300">SCROLL</span>
        <div className="w-12 h-px bg-gradient-to-r from-gray-200 to-transparent relative overflow-hidden">
          <motion.div
            animate={{ x: [-48, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute top-0 left-0 h-full w-1/2 bg-[#FF6B35]"
          />
        </div>
      </motion.div>
    </section>
  );
}
