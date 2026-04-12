"use client";

import { useLang } from "@/context/LangContext";
import { MARQUEE_TEXT, MARQUEE_SEPARATOR } from "@/constants";

export default function MarqueeSection() {
  const { lang, t } = useLang();

  const phrase = `${t(MARQUEE_TEXT)} ${MARQUEE_SEPARATOR} `;
  const content = Array(6).fill(phrase).join("");
  const marqueeCase = lang === "en" ? "uppercase" : "normal-case";

  return (
    <div className="py-12 bg-black overflow-hidden border-y border-white/5">
      <div className="flex whitespace-nowrap">
        <div className="animate-marquee flex items-center">
          <span
            className={`text-[5vh] md:text-[8vh] font-black text-white px-4 tracking-tighter inline-block ${marqueeCase}`}
          >
            {content}
          </span>
        </div>
        <div className="animate-marquee flex items-center" aria-hidden="true">
          <span
            className={`text-[5vh] md:text-[8vh] font-black text-white px-4 tracking-tighter inline-block ${marqueeCase}`}
          >
            {content}
          </span>
        </div>
      </div>
    </div>
  );
}
