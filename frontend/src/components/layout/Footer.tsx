"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { Mail } from "lucide-react";
import { useLang } from "@/context/LangContext";
import {
  BRAND_NAME,
  COPYRIGHT_YEAR,
  POLICY_LINKS,
  ABOUT_TEXT,
  ABOUT_CTA,
  SOCIAL_LINKS,
  BRAND_EMAIL,
} from "@/constants";

const socialBtnBase =
  "group relative flex h-[3.75rem] w-[3.75rem] shrink-0 items-center justify-center rounded-full border shadow-[0_6px_24px_rgba(0,0,0,0.35)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-110 hover:shadow-[0_14px_36px_rgba(0,0,0,0.45)] active:translate-y-0 active:scale-[1.02] md:h-16 md:w-16";

const socialBtnTone: Record<"youtube" | "instagram" | "facebook", string> = {
  youtube:
    "border-[#ff3b3b]/45 bg-gradient-to-b from-[#ff3b3b]/25 to-[#8b0000]/15 text-[#ff4d4d] hover:border-[#ff6b6b]/70 hover:from-[#ff3b3b]/35 hover:to-[#8b0000]/25 hover:shadow-[0_12px_40px_rgba(255,59,59,0.35)]",
  instagram:
    "border-pink-400/40 bg-gradient-to-br from-[#833ab4]/25 via-[#fd1d1d]/15 to-[#fcb045]/20 text-[#f77737] hover:border-pink-300/55 hover:from-[#833ab4]/35 hover:via-[#fd1d1d]/25 hover:to-[#fcb045]/30 hover:shadow-[0_12px_40px_rgba(253,29,29,0.28)]",
  facebook:
    "border-[#1877f2]/45 bg-gradient-to-b from-[#1877f2]/28 to-[#0d47a1]/18 text-[#5aa7ff] hover:border-[#42a5ff]/70 hover:from-[#1877f2]/38 hover:to-[#0d47a1]/28 hover:shadow-[0_12px_40px_rgba(24,119,242,0.35)]",
};

const socialIcons: {
  key: string;
  href: string;
  icon: IconDefinition;
  label: string;
  tone: keyof typeof socialBtnTone;
}[] = [
  {
    key: "yt",
    href: SOCIAL_LINKS.youtube,
    icon: faYoutube,
    label: "YouTube",
    tone: "youtube",
  },
  {
    key: "ig",
    href: SOCIAL_LINKS.instagram,
    icon: faInstagram,
    label: "Instagram",
    tone: "instagram",
  },
  {
    key: "fb",
    href: SOCIAL_LINKS.facebook,
    icon: faFacebook,
    label: "Facebook",
    tone: "facebook",
  },
];

/**
 * ลำดับตามสเก็ตช์ลูกค้า (บน → ล่าง):
 * แบรนด์ → ข้อความแนะนำ → Contact us → ไอคอน 3 ปุ่ม → กล่อง LINE → อีเมล → © → ลิงก์นโยบายแถวเดียว
 */
export default function Footer() {
  const { t } = useLang();

  return (
    <footer
      id="contact"
      className="scroll-mt-28 border-t border-white/[0.07] bg-black text-white md:scroll-mt-32"
    >
      <div className="mx-auto flex w-full max-w-lg flex-col items-center px-6 py-20 text-center antialiased md:max-w-2xl md:py-28 lg:max-w-3xl">
        {/* 1. PINAHX + DIGITAL STUDIO (แบบเดิมเฉพาะฟุตเตอร์) */}
        <header className="mb-8 md:mb-10">
          <p className="text-4xl font-black leading-none tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {BRAND_NAME}
          </p>
          <p className="mt-2.5 text-[9px] font-medium uppercase tracking-[0.42em] text-neutral-400 md:mt-3 md:text-[10px]">
            DIGITAL STUDIO
          </p>
        </header>

        {/* 2. ข้อความแนะนำ (เต็มความกว้างในกรอบ) */}
        <p className="mb-10 w-full max-w-xl text-pretty text-[0.9375rem] font-normal leading-[1.85] text-neutral-400 md:mb-12 md:max-w-2xl md:text-base">
          {t(ABOUT_TEXT)}
        </p>

        {/* 3. Contact us */}
        <h2 className="mb-6 text-xl font-bold tracking-wide text-white md:mb-8 md:text-2xl">
          {t(ABOUT_CTA)}
        </h2>

        {/* 4. ไอคอนโซเชียล 3 วง — แถวเดียวกลาง */}
        <div className="mb-8 flex w-full flex-wrap items-center justify-center gap-6 md:mb-10 md:gap-8">
          {socialIcons.map(({ key, href, icon, label, tone }) => (
            <a
              key={key}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${socialBtnBase} ${socialBtnTone[tone]}`}
              aria-label={label}
            >
              <FontAwesomeIcon
                icon={icon}
                className="h-7 w-7 drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)] transition-transform duration-300 group-hover:scale-105 md:h-8 md:w-8"
              />
            </a>
          ))}
        </div>

        {/* 5. กล่อง LINE (ป้าย + QR) */}
        <div className="mb-10 flex w-full flex-col items-center md:mb-12">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.35em] text-[#06C755]">
            LINE
          </p>
          <a
            href={SOCIAL_LINKS.line}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-col items-center rounded-2xl border border-white/10 bg-white p-4 shadow-[0_16px_50px_rgba(0,0,0,0.45)] transition-transform hover:scale-[1.02] md:p-5"
            aria-label="LINE — scan QR code to add friend"
          >
            <Image
              src="/pinahx-line-qr.png"
              alt="LINE QR code — PINAHX"
              width={220}
              height={220}
              className="h-44 w-44 rounded-xl object-contain sm:h-48 sm:w-48 md:h-52 md:w-52"
              sizes="(max-width: 768px) 176px, 220px"
            />
          </a>
        </div>

        {/* 6. อีเมล */}
        <a
          href={`mailto:${BRAND_EMAIL}`}
          className="mb-8 inline-flex items-center justify-center gap-2.5 text-sm font-medium text-neutral-400 transition-colors hover:text-white md:mb-10 md:text-base"
        >
          <Mail className="h-4 w-4 shrink-0 opacity-80" strokeWidth={1.75} />
          {BRAND_EMAIL}
        </a>

        {/* 7. © */}
        <p className="mb-8 text-xs text-neutral-500 md:mb-10 md:text-sm">
          © {COPYRIGHT_YEAR} {BRAND_NAME}
        </p>

        {/* 8. ลิงก์นโยบาย — แถวเดียว (wrap บนมือถือ) */}
        <nav
          className="flex w-full max-w-3xl flex-wrap items-center justify-center gap-y-2 text-center text-[10px] leading-relaxed text-neutral-500 md:text-[11px]"
          aria-label="Legal"
        >
          {POLICY_LINKS.map((link, i) => (
            <span key={link.id} className="inline-flex items-center">
              {i > 0 ? (
                <span
                  className="select-none px-2 text-neutral-600 md:px-2.5"
                  aria-hidden
                >
                  |
                </span>
              ) : null}
              <a
                href={link.href}
                className="whitespace-nowrap px-0.5 transition-colors hover:text-neutral-300"
              >
                {t(link.label)}
              </a>
            </span>
          ))}
        </nav>
      </div>
    </footer>
  );
}
