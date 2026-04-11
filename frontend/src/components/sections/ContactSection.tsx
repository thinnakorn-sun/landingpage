"use client";

import { motion } from "framer-motion";
import { Share2, PlayCircle, Camera, Mail, Phone, ExternalLink } from "lucide-react";
import { useLang } from "@/context/LangContext";
import { SOCIAL_LINKS, BRAND_EMAIL, CONTACT_HEADING } from "@/constants";

export default function ContactSection() {
  const { t } = useLang();

  const socialItems = [
    { id: "fb", label: "Facebook", icon: Share2, href: SOCIAL_LINKS.facebook, detail: "@pinahx" },
    { id: "yt", label: "YouTube", icon: PlayCircle, href: SOCIAL_LINKS.youtube, detail: "/pinahx" },
    { id: "ig", label: "Instagram", icon: Camera, href: SOCIAL_LINKS.instagram, detail: "@pinahx" },
    { id: "ln", label: "LINE", icon: Mail, href: SOCIAL_LINKS.line, detail: "PINAHX Official" },
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#FF6B35] mb-6 block">
              05 — GET IN TOUCH
            </span>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter text-black leading-none mb-8">
              {t(CONTACT_HEADING)}
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed max-w-sm mb-12 font-medium">
              {t({
                th: "พร้อมที่จะเติบโตไปกับเราหรือยัง? ติดต่อเราได้ทุกช่องทางเพื่อเริ่มโปรเจคของคุณ",
                en: "Ready to grow with us? Contact us through any channel to start your project.",
              })}
            </p>

            <a
              href={`mailto:${BRAND_EMAIL}`}
              className="inline-flex items-center gap-4 text-xl md:text-2xl font-black text-black hover:text-[#FF6B35] transition-colors border-b-2 border-black hover:border-[#FF6B35] pb-2 group"
            >
              {BRAND_EMAIL}
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-100 border border-gray-100">
            {socialItems.map((item, idx) => (
              <motion.a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 flex flex-col group hover:bg-black transition-all duration-500"
              >
                <div className="flex items-center justify-between mb-8">
                  <item.icon className="w-8 h-8 text-black group-hover:text-white transition-colors" />
                  <span className="text-[10px] text-gray-300 font-bold group-hover:text-[#FF6B35] transition-colors uppercase tracking-widest">
                    CONNECT
                  </span>
                </div>
                <h3 className="text-xl font-black text-black group-hover:text-white transition-colors uppercase tracking-tight">
                  {item.label}
                </h3>
                <span className="text-xs text-gray-400 group-hover:text-gray-500 transition-colors uppercase tracking-widest mt-1">
                  {item.detail}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
