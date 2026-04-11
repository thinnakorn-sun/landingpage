"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/LangContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_HEADING, FAQ_ITEMS } from "@/constants";

export default function FaqSection() {
  const { t } = useLang();

  return (
    <section id="faq" className="py-24 bg-black text-white scroll-mt-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#FF6B35] mb-4 block">
            04 — COMMON QUESTIONS
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-4">
            {t(FAQ_HEADING)}
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion className="w-full space-y-4">
            {FAQ_ITEMS.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border border-white/10 px-8 py-2 hover:border-[#FF6B35]/50 transition-colors bg-[#0A0A0A]"
              >
                <AccordionTrigger className="text-sm md:text-base font-bold uppercase tracking-widest text-left hover:no-underline hover:text-[#FF6B35] transition-colors py-4">
                  {t(faq.question)}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-gray-400 leading-relaxed pb-6">
                  {t(faq.answer)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
