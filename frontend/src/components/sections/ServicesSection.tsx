"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/LangContext";
import { SERVICES } from "@/constants";

const serviceFacebookLinks: Record<
  string,
  { cta: string; links: { label: string; href: string }[] }
> = {
  "digital-products": {
    cta: "Shop Now",
    links: [
      {
        label: "www.facebook.com/groups/earntify",
        href: "https://www.facebook.com/groups/earntify",
      },
    ],
  },
  "digital-content-writing": {
    cta: "Join Us",
    links: [
      {
        label: "www.facebook.com/dealreview.hub",
        href: "https://www.facebook.com/dealreview.hub",
      },
      {
        label: "www.facebook.com/lovedfirststory",
        href: "https://www.facebook.com/lovedfirststory",
      },
    ],
  },
  "pinahx-products": {
    cta: "Shop Now",
    links: [
      {
        label: "www.facebook.com/groups/urban.select",
        href: "https://www.facebook.com/groups/urban.select",
      },
      {
        label: "www.facebook.com/groups/crystelle",
        href: "https://www.facebook.com/groups/crystelle",
      },
      {
        label: "www.facebook.com/aichixproparts",
        href: "https://www.facebook.com/aichixproparts",
      },
    ],
  },
  "ai-advertising": {
    cta: "Explore Our Work",
    links: [
      {
        label: "www.facebook.com/groups/aivatar",
        href: "https://www.facebook.com/groups/aivatar",
      },
    ],
  },
};

export default function ServicesSection() {
  const { t } = useLang();

  return (
    <section id="services" className="bg-white py-12 scroll-mt-24 md:py-24">
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

              <div className="mt-auto pt-6">
                <div className="mb-4 flex flex-col items-start gap-1.5">
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-black/75 transition-colors group-hover:text-white">
                    {serviceFacebookLinks[service.id]?.cta}
                  </p>
                  {serviceFacebookLinks[service.id]?.links.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-medium text-gray-500 underline decoration-transparent transition-colors hover:text-[#FF6B35] hover:decoration-[#FF6B35] group-hover:text-gray-400"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
                <div className="w-8 h-[2px] bg-gray-200 group-hover:bg-[#FF6B35] group-hover:w-12 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
