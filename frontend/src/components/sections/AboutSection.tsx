"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/LangContext";
import { ABOUT_TEXT, ABOUT_CTA } from "@/constants";

const VISION_TITLE = {
  en: "Our vision",
  th: "วิสัยทัศน์ของเรา",
  zh: "我们的愿景",
  ja: "私たちのビジョン",
  ko: "비전",
} as const;

export default function AboutSection() {
  const { lang, t } = useLang();

  return (
    <section id="about-vision" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-y-0 left-[10%] w-px bg-gray-50 pointer-events-none" />
      <div className="absolute inset-y-0 left-[50%] w-px bg-gray-50 pointer-events-none" />
      <div className="absolute inset-y-0 right-[10%] w-px bg-gray-50 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#FF6B35] mb-8"
          >
            03 — OUR VISION
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl font-black text-black leading-tight tracking-tighter uppercase mb-10"
          >
            {VISION_TITLE[lang]}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 max-w-3xl text-base text-neutral-600 leading-relaxed md:text-lg"
          >
            {t(ABOUT_TEXT)}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-4 text-xs font-black tracking-widest uppercase text-black"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full border border-gray-200 group-hover:bg-black group-hover:border-black transition-all duration-500">
                <span className="text-xl group-hover:text-white transition-colors">→</span>
              </div>
              <span className="group-hover:text-[#FF6B35] transition-colors">{t(ABOUT_CTA)}</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
