"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/LangContext";
import {
  WHAT_WE_CREATE_BLOCKS,
  WWC_SECTION_TITLE,
  WWC_SECTION_SUBTITLE,
} from "@/constants";

export default function WhatWeCreateSection() {
  const { t } = useLang();

  return (
    <section className="py-24 bg-white border-t border-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter text-black leading-none mb-4">
              {t(WWC_SECTION_TITLE)}
            </h2>
            <p className="text-gray-400 text-sm font-bold tracking-[0.2em] uppercase">
              {t(WWC_SECTION_SUBTITLE)}
            </p>
          </div>

          <div className="space-y-10 text-gray-600 text-base md:text-lg font-medium leading-relaxed">
            {WHAT_WE_CREATE_BLOCKS.map((block, blockIndex) => (
              <div key={block.id}>
                <h3 className="text-sm font-black uppercase tracking-widest text-black mb-4">
                  {t(block.title)}
                </h3>
                <div className="space-y-4">
                  {block.paragraphs.map((para, i) => (
                    <p key={i}>{t(para)}</p>
                  ))}
                </div>
                {blockIndex === 0 ? (
                  <div className="h-px w-full bg-gray-200 my-10 relative">
                    <div className="absolute left-0 top-0 h-full w-12 bg-[#FF6B35]" />
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
