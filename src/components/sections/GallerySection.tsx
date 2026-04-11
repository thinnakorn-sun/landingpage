"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/LangContext";
import { GALLERY_HEADING, GALLERY_SUB, GALLERY_ITEMS } from "@/constants";

export default function GallerySection() {
  const { t } = useLang();

  return (
    <section id="gallery" className="py-24 bg-[#F9F9F9] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#FF6B35] mb-4 block">
            02 — OUR WORK
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-black leading-none mb-6">
            {t(GALLERY_HEADING)}
          </h2>
          <p className="text-gray-400 text-xs font-bold tracking-[0.2em] uppercase">
            {t(GALLERY_SUB)}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative overflow-hidden group aspect-[4/5] ${
                index === 0 ? "lg:col-span-2 lg:aspect-[16/9]" : ""
              }`}
            >
              {/* Placeholder instead of real image */}
              <div className="absolute inset-0 bg-gray-200 group-hover:bg-black transition-colors duration-700 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-12 h-[1px] bg-black group-hover:bg-[#FF6B35] mb-6 transition-colors duration-500" />
                <span className="text-sm font-black uppercase text-black group-hover:text-white transition-colors tracking-widest mb-2">
                  {t(item.alt)}
                </span>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  VIEW PROJECT
                </span>
              </div>

              {/* In a real scenario, an <img> would be here */}
              {/* <Image src={item.src} alt={t(item.alt)} layout="fill" objectFit="cover" className="transition-transform duration-1000 group-hover:scale-110" /> */}
              
              {/* Overlay line decorative */}
              <div className="absolute top-0 left-0 w-full h-full border-[1px] border-white/0 group-hover:border-white/10 transition-all duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
