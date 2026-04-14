"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/LangContext";
import { GALLERY_HEADING, BRAND_TAGLINE, BRAND_MANIFESTO } from "@/constants";

export default function BrandSection() {
  const { t } = useLang();

  return (
    <section
      id="about"
      className="scroll-mt-24 border-b border-gray-50 bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-black leading-tight mb-8"
          >
            {t(GALLERY_HEADING)}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-500 text-base sm:text-lg font-medium leading-relaxed mb-6"
          >
            {t(BRAND_TAGLINE)}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-600 text-sm sm:text-base font-medium leading-relaxed"
          >
            {t(BRAND_MANIFESTO)}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
