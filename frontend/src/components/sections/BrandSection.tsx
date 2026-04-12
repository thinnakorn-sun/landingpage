"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/LangContext";
import { GALLERY_HEADING, BRAND_TAGLINE, BRAND_MANIFESTO } from "@/constants";

export default function BrandSection() {
  const { t } = useLang();

  const brands = [
    { name: "PACIFIC PARK", id: 1 },
    { name: "MIS MAMO", id: 2 },
    { name: "BRAND C", id: 3 },
    { name: "BRAND D", id: 4 },
  ];

  return (
    <section id="about" className="py-24 bg-white border-b border-gray-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 mb-24 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
          {brands.map((brand) => (
            <div key={brand.id} className="text-xl md:text-2xl font-black tracking-tighter text-black uppercase">
              {brand.name}
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center">
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
