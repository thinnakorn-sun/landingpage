"use client";

import Image from "next/image";
import { useLang } from "@/context/LangContext";
import { PARTNER_TRUSTED } from "@/constants";

const PARTNERS = [
  { id: 1, src: "/partners/p1.jpg", alt: "Oshikawa Gasket Products" },
  { id: 2, src: "/partners/p2.jpg", alt: "J-Smile" },
  { id: 3, src: "/partners/p3.jpg", alt: "L Halftone" },
  { id: 4, src: "/partners/p4.jpg", alt: "Deal Review Hub" },
  { id: 5, src: "/partners/p5.jpg", alt: "AichiX Pro Parts" },
  { id: 6, src: "/partners/p6.jpg", alt: "HourClass Fasttrack Skills" },
];

export default function PartnerMarquee() {
  const { t } = useLang();
  const duplicatedPartners = [...PARTNERS, ...PARTNERS, ...PARTNERS];

  return (
    <section className="py-20 bg-white overflow-hidden border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h2 className="text-sm md:text-base font-semibold tracking-[0.2em] text-gray-400 uppercase">
          {t(PARTNER_TRUSTED)}
        </h2>
      </div>

      <div className="flex whitespace-nowrap relative w-full group">
        <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center justify-around min-w-full">
          {duplicatedPartners.map((partner, index) => (
            <div
              key={`partner-1-${index}`}
              className="flex-shrink-0 mx-8 md:mx-16 relative h-20 w-36 md:h-28 md:w-48 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 150px, 300px"
              />
            </div>
          ))}
        </div>

        <div className="animate-marquee flex items-center justify-around min-w-full" aria-hidden="true">
          {duplicatedPartners.map((partner, index) => (
            <div
              key={`partner-2-${index}`}
              className="flex-shrink-0 mx-8 md:mx-16 relative h-20 w-36 md:h-28 md:w-48 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 150px, 300px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
