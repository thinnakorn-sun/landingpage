"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLang } from "@/context/LangContext";
import {
  WORK_UPDATES_TITLE,
  WORK_UPDATES_LEAD,
  WORK_UPDATES_JA_EMPHASIS,
} from "@/copy/workUpdates";
import { SOCIAL_LINKS } from "@/constants";

function FacebookLink() {
  return (
    <a
      href={SOCIAL_LINKS.facebook}
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-[#FF6B35] underline decoration-[#FF6B35]/55 underline-offset-[3px] transition-colors hover:text-orange-300 hover:decoration-orange-300"
    >
      facebook.com/pinahx
    </a>
  );
}

export default function WorkUpdatesPanel() {
  const { lang, t } = useLang();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.65 }}
      className="relative z-10 mt-14 w-full scroll-mt-28 shadow-[0_24px_80px_rgba(0,0,0,0.12)] md:mt-20 md:scroll-mt-32"
    >
      <div className="w-full">
        <Image
          src="/pinahx-banner-main.png"
          alt="PINAHX Digital Studio — banner"
          width={1920}
          height={1080}
          className="block h-auto w-full"
          priority
        />
      </div>

      <section
        id="work-updates"
        aria-labelledby="work-updates-heading"
        className="border-t border-gray-100 bg-white px-5 py-10 sm:px-8 sm:py-12 md:px-12 md:py-14"
      >
        <div className="mx-auto max-w-3xl">
          <h2
            id="work-updates-heading"
            className="mb-6 text-left text-4xl font-black uppercase tracking-tighter leading-none text-black sm:mb-8 sm:text-5xl md:text-6xl"
          >
            {t(WORK_UPDATES_TITLE)}
          </h2>

          <div className="text-left text-base leading-[1.85] text-neutral-700 sm:text-lg md:text-xl">
            {lang === "ja" ? (
              <div className="space-y-4">
                <p>
                  <strong className="font-bold text-black">
                    {WORK_UPDATES_JA_EMPHASIS}
                  </strong>
                </p>
                <p>
                  <FacebookLink />
                </p>
              </div>
            ) : lang === "th" ? (
              <div className="space-y-4">
                <p>{t(WORK_UPDATES_LEAD)}</p>
                <p>
                  <FacebookLink />
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <p>{t(WORK_UPDATES_LEAD)}</p>
                <p>
                  <FacebookLink />
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
