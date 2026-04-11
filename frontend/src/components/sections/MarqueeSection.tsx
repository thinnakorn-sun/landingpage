"use client";

import { useLang } from "@/context/LangContext";
import { MARQUEE_TEXT, MARQUEE_SEPARATOR } from "@/constants";

export default function MarqueeSection() {
  const { lang } = useLang();
  
  // Duplicate the text to ensure it covers the screen width for smooth looping
  const content = Array(6).fill(`${MARQUEE_TEXT} ${MARQUEE_SEPARATOR} `).join("");

  return (
    <div className="py-12 bg-black overflow-hidden border-y border-white/5">
      <div className="flex whitespace-nowrap">
        <div className="animate-marquee flex items-center">
          <span className="text-[5vh] md:text-[8vh] font-black text-white px-4 tracking-tighter uppercase inline-block">
            {content}
          </span>
        </div>
        <div className="animate-marquee flex items-center" aria-hidden="true">
          <span className="text-[5vh] md:text-[8vh] font-black text-white px-4 tracking-tighter uppercase inline-block">
            {content}
          </span>
        </div>
      </div>
    </div>
  );
}
