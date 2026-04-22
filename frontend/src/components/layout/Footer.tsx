"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { Mail, Phone } from "lucide-react";
import { useLang } from "@/context/LangContext";
import {
  BRAND_NAME,
  COPYRIGHT_YEAR,
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

const phoneNumber = "0987418874";
const phoneDisplay = "098-741-8874";
const whatsappNumber = "66987418874";
const officeAddress =
  "Level 17 Alma Link Building, No. 25 Chidlom Road, Ploenchit, Lumpini, Pathumwan, Bangkok 10330";
const officeMapHref =
  "https://www.google.com/maps/search/?api=1&query=Level+17+Alma+Link+Building%2C+No.+25+Chidlom+Road%2C+Ploenchit%2C+Lumpini%2C+Pathumwan%2C+Bangkok+10330";

/**
 * ลำดับตามสเก็ตช์ลูกค้า (บน → ล่าง):
 * แบรนด์ → ข้อความแนะนำ → Contact us → ไอคอน 3 ปุ่ม → กล่อง LINE → อีเมล → © → ลิงก์นโยบายแถวเดียว
 */
export default function Footer() {
  const { lang, t } = useLang();

  return (
    <footer
      id="contact"
      className="scroll-mt-28 border-t border-white/[0.07] bg-black text-white md:scroll-mt-32"
    >
      <div className="mx-auto flex w-full max-w-lg flex-col items-center px-6 py-20 text-center antialiased md:max-w-2xl md:py-28 lg:max-w-3xl">
        {/* 1. โลโก้แบรนด์ */}
        <header className="mb-8 flex w-full justify-center md:mb-10">
          <Image
            src="/logo-footer.svg"
            alt="PINAHX Digital Studio"
            width={520}
            height={138}
            className="h-auto w-48 object-contain sm:w-52 md:w-56"
            priority
          />
        </header>

        {/* 2. ข้อความแนะนำ (เต็มความกว้างในกรอบ) */}
        <p
          className={[
            "mb-10 w-full text-pretty text-[0.9375rem] font-normal leading-[1.85] text-neutral-400 md:mb-12 md:max-w-none md:text-base",
            lang === "zh" ? "md:whitespace-nowrap md:text-[0.95rem]" : "",
          ].join(" ")}
        >
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
          <a
            href={`tel:${phoneNumber}`}
            className="group relative flex h-[3.75rem] w-[3.75rem] shrink-0 items-center justify-center rounded-full border border-emerald-400/45 bg-gradient-to-b from-emerald-400/28 to-emerald-900/18 text-emerald-300 shadow-[0_6px_24px_rgba(0,0,0,0.35)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-110 hover:border-emerald-300/70 hover:from-emerald-400/38 hover:to-emerald-900/28 hover:shadow-[0_12px_40px_rgba(16,185,129,0.35)] active:translate-y-0 active:scale-[1.02] md:h-16 md:w-16"
            aria-label={`Call ${phoneNumber}`}
          >
            <Phone className="h-7 w-7 drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)] transition-transform duration-300 group-hover:scale-105 md:h-8 md:w-8" />
          </a>
        </div>

        {/* 5. QR ทั้ง 3 ช่อง: WhatsApp | LINE | WeChat */}
        <div className="mb-10 grid w-full max-w-xl grid-cols-1 gap-4 sm:grid-cols-2 md:mb-12 md:max-w-none md:grid-cols-3 md:gap-6">
          <div className="flex flex-col items-center">
            <p className="mb-2 text-[10px] font-black uppercase tracking-[0.22em] text-neutral-300 md:text-xs">
              WHATSAPP
            </p>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-[13.5rem] items-center justify-center rounded-2xl border border-white/10 bg-white p-3 shadow-[0_16px_50px_rgba(0,0,0,0.45)] transition-transform hover:scale-[1.02] sm:w-[12.5rem] md:w-auto md:p-5"
              aria-label="WhatsApp QR code"
            >
              <Image
                src="/whatsapp-qr.png"
                alt="WhatsApp QR code"
                width={220}
                height={220}
                className="h-36 w-36 rounded-xl object-contain sm:h-32 sm:w-32 md:h-52 md:w-52"
                sizes="(max-width: 640px) 144px, (max-width: 768px) 128px, 220px"
              />
            </a>
          </div>

          <div className="flex flex-col items-center sm:col-span-2 md:col-span-1">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.35em] text-[#06C755]">
              LINE
            </p>
            <a
              href={SOCIAL_LINKS.line}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-[13.5rem] flex-col items-center rounded-2xl border border-white/10 bg-white p-3 shadow-[0_16px_50px_rgba(0,0,0,0.45)] transition-transform hover:scale-[1.02] sm:w-[26rem] md:w-auto md:p-5"
              aria-label="LINE — scan QR code to add friend"
            >
              <Image
                src="/pinahx-line-qr.png"
                alt="LINE QR code — PINAHX"
                width={220}
                height={220}
                className="h-36 w-36 rounded-xl object-contain sm:h-32 sm:w-32 md:h-52 md:w-52"
                sizes="(max-width: 640px) 144px, (max-width: 768px) 128px, 220px"
              />
            </a>
          </div>

          <div className="flex flex-col items-center">
            <p className="mb-2 text-[10px] font-black uppercase tracking-[0.22em] text-neutral-300 md:text-xs">
              WECHAT
            </p>
            <div
              className="inline-flex w-[13.5rem] items-center justify-center rounded-2xl border border-white/10 bg-white p-3 shadow-[0_16px_50px_rgba(0,0,0,0.45)] sm:w-[12.5rem] md:w-auto md:p-5"
              aria-label="WeChat QR code"
            >
              <Image
                src="/wechat-qr.png"
                alt="WeChat QR code"
                width={220}
                height={220}
                className="h-36 w-36 rounded-xl object-contain sm:h-32 sm:w-32 md:h-52 md:w-52"
                sizes="(max-width: 640px) 144px, (max-width: 768px) 128px, 220px"
              />
            </div>
          </div>
        </div>

        {/* 6. อีเมล */}
        <a
          href={`mailto:${BRAND_EMAIL}`}
          className="mb-8 inline-flex items-center justify-center gap-2.5 text-sm font-medium text-neutral-400 transition-colors hover:text-white md:mb-10 md:text-base"
        >
          <Mail className="h-4 w-4 shrink-0 opacity-80" strokeWidth={1.75} />
          {BRAND_EMAIL}
        </a>

        <p className="mb-8 text-sm font-medium text-neutral-400 md:mb-10 md:text-base">
          {phoneDisplay} (Thailand)
        </p>

        {/* 7. © */}
        <p className="mb-8 text-xs text-neutral-500 md:mb-10 md:text-sm">
          © {COPYRIGHT_YEAR} {BRAND_NAME}
        </p>

        <a
          href={officeMapHref}
          target="_blank"
          rel="noopener noreferrer"
          className="max-w-3xl text-center text-xs font-medium leading-relaxed text-neutral-500 transition-colors hover:text-neutral-300 md:text-sm"
        >
          {officeAddress}
        </a>

      </div>
    </footer>
  );
}
