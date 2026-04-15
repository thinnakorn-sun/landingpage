"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/LangContext";
import { SERVICES } from "@/constants";

export default function ServicesSection() {
  const { t } = useLang();

  return (
    <section id="services" className="py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 border border-gray-100">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-10 flex flex-col items-start transition-all duration-500 hover:bg-black group cursor-default"
            >
              <div className="text-4xl mb-8 group-hover:scale-110 transition-transform duration-500 filter grayscale group-hover:grayscale-0">
                {service.icon}
              </div>
              <h3 className="text-lg font-black uppercase text-black mb-4 leading-tight group-hover:text-white transition-colors tracking-tight">
                {t(service.title)}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">
                {t(service.description)}
              </p>

              <div className="mt-auto pt-8">
                <div className="w-8 h-[2px] bg-gray-200 group-hover:bg-[#FF6B35] group-hover:w-12 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
