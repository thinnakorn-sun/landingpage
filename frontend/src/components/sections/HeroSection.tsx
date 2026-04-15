"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/LangContext";
import { HERO_HEADLINE, HERO_SUB, HERO_CTA, HERO_BULLETS } from "@/constants";
import WorkUpdatesPanel from "@/components/sections/WorkUpdatesPanel";
import type { HeadlineTone } from "@/types";

function toneClass(tone: HeadlineTone): string {
  if (tone === "muted") return "text-gray-300";
  if (tone === "accent") return "text-[#FF6B35]";
  return "text-black";
}

export default function HeroSection() {
  const { lang, t } = useLang();
  const lines = HERO_HEADLINE[lang];

  return (
    <section
      id="hero"
      className="relative scroll-mt-28 overflow-hidden border-b border-gray-50 bg-white pb-16 pt-[7.5rem] md:scroll-mt-32 md:pb-20 md:pt-44 lg:pt-48"
    >
      <div className="pointer-events-none absolute inset-0 z-0 opacity-20">
        <div className="absolute right-[10%] top-[20%] h-[40vw] w-[40vw] rounded-full border border-black/[0.05]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="max-w-4xl">
          {/* หัวข้อหลัก — โลโก้แบรนด์อยู่ที่ Navbar เท่านั้น */}
          <motion.h1
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className={[
              "mb-8 text-[11vw] font-black leading-[0.92] tracking-tighter sm:text-[9vw] lg:mb-10 lg:text-[5.25rem]",
              lang === "en" ? "uppercase" : "normal-case",
            ].join(" ")}
          >
            {lines.map((seg, i) => (
              <span key={i} className="block">
                <span className={toneClass(seg.tone)}>{seg.text}</span>
              </span>
            ))}
          </motion.h1>

          {/* ย่อหน้า */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15 }}
            className="mb-8 max-w-2xl text-base font-medium leading-relaxed text-gray-500 sm:text-lg md:mb-10"
          >
            {t(HERO_SUB)}
          </motion.p>

          {/* CTA ไป WHAT WE CREATE */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.25 }}
            className="mb-10 md:mb-12"
          >
            <a
              href="#what-we-create"
              className={[
                "inline-flex items-center justify-center bg-black px-8 py-4 text-[10px] font-bold tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#FF6B35]",
                lang === "en" ? "uppercase" : "",
              ].join(" ")}
            >
              {t(HERO_CTA)}
            </a>
          </motion.div>

          {/* รายการบริการ (คอลัมน์เดียว) */}
          <motion.ul
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.35 }}
            className="max-w-xl space-y-3"
          >
            {HERO_BULLETS.map((bullet, i) => (
              <li key={i} className="group flex items-center gap-4">
                <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF6B35] transition-transform group-hover:scale-150" />
                <span
                  className={[
                    "text-xs font-black text-black/80 transition-colors group-hover:text-black sm:text-sm",
                    lang === "en"
                      ? "uppercase tracking-widest"
                      : "tracking-wide",
                  ].join(" ")}
                >
                  {t(bullet)}
                </span>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>

      {/* แบนเนอร์ + OUR WORK */}
      <WorkUpdatesPanel />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 1 }}
        className="absolute bottom-6 right-6 hidden items-center gap-6 md:flex lg:bottom-10 lg:right-10"
      >
        <span className="text-[9px] font-black uppercase tracking-[0.6em] text-gray-300">
          SCROLL
        </span>
        <div className="relative h-px w-12 overflow-hidden bg-gradient-to-r from-gray-200 to-transparent">
          <motion.div
            animate={{ x: [-48, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute left-0 top-0 h-full w-1/2 bg-[#FF6B35]"
          />
        </div>
      </motion.div>
    </section>
  );
}
