"use client";

import Image from "next/image";
import { Share2, Camera, MessageCircle, Phone, PlayCircle, Mail } from "lucide-react";
import { useLang } from "@/context/LangContext";
import {
  BRAND_NAME,
  COPYRIGHT_YEAR,
  POLICY_LINKS,
  ABOUT_TEXT,
  ABOUT_CTA,
  SOCIAL_LINKS,
  BRAND_EMAIL,
  telHref,
} from "@/constants";

const iconBtn =
  "flex h-[3.25rem] w-[3.25rem] shrink-0 items-center justify-center rounded-full border border-white/40 text-white transition-all duration-300 hover:border-white/70 hover:bg-white/[0.06] hover:scale-[1.03] md:h-14 md:w-14";

export default function Footer() {
  const { t } = useLang();
  const tel = telHref();
  const policiesRow1 = POLICY_LINKS.slice(0, 3);
  const policiesRow2 = POLICY_LINKS.slice(3);

  const socialRow = [
    { key: "line", href: SOCIAL_LINKS.line, Icon: MessageCircle, label: "LINE", ext: true },
    ...(tel
      ? [{ key: "tel", href: tel, Icon: Phone, label: "Call", ext: false as const }]
      : []),
    ...(SOCIAL_LINKS.instagram
      ? [
          {
            key: "ig",
            href: SOCIAL_LINKS.instagram,
            Icon: Camera,
            label: "Instagram",
            ext: true as const,
          },
        ]
      : []),
    { key: "fb", href: SOCIAL_LINKS.facebook, Icon: Share2, label: "Facebook", ext: true },
    { key: "yt", href: SOCIAL_LINKS.youtube, Icon: PlayCircle, label: "YouTube", ext: true },
  ];

  return (
    <footer
      id="contact"
      className="scroll-mt-28 border-t border-white/[0.07] bg-black text-white md:scroll-mt-32"
    >
      <div className="mx-auto max-w-2xl px-6 py-20 text-center md:max-w-3xl md:py-28">
        <div className="mb-10 flex justify-center md:mb-12">
          <div className="relative h-[4.25rem] w-60 md:h-[4.75rem] md:w-64">
            <Image
              src="/logo.svg"
              alt={BRAND_NAME}
              fill
              sizes="(max-width: 768px) 240px, 260px"
              className="object-contain object-center brightness-0 invert"
            />
          </div>
        </div>

        <p className="mx-auto mb-14 max-w-lg text-[0.9375rem] font-normal leading-[1.85] text-neutral-400 md:mb-16 md:text-base">
          {t(ABOUT_TEXT)}
        </p>

        <h2 className="mb-10 text-xl font-bold tracking-wide text-white md:mb-12 md:text-2xl">
          {t(ABOUT_CTA)}
        </h2>

        <div className="mx-auto mb-14 flex max-w-lg flex-col items-center justify-center gap-10 sm:max-w-none sm:flex-row sm:gap-12 md:mb-16 md:gap-16">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-end sm:gap-5">
            {socialRow.map(({ key, href, Icon, label, ext }) => (
              <a
                key={key}
                href={href}
                {...(ext ? { target: "_blank", rel: "noopener noreferrer" as const } : {})}
                className={iconBtn}
                aria-label={label}
              >
                <Icon className="h-[1.35rem] w-[1.35rem] md:h-6 md:w-6" strokeWidth={1.65} />
              </a>
            ))}
          </div>

          <a
            href={SOCIAL_LINKS.line}
            target="_blank"
            rel="noopener noreferrer"
            className="group shrink-0 rounded-2xl bg-white p-2.5 shadow-[0_12px_40px_rgba(0,0,0,0.35)] ring-1 ring-black/5 transition-transform duration-300 hover:scale-[1.02]"
            aria-label="LINE"
          >
            <div className="relative flex h-36 w-36 items-center justify-center rounded-xl bg-neutral-100 md:h-40 md:w-40">
              <div
                className="absolute inset-3 rounded-md border border-dashed border-neutral-300 bg-white"
                aria-hidden
              />
              <div className="relative z-[1] flex flex-col items-center gap-1">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-500">
                  LINE
                </span>
                <span className="text-sm font-black tracking-tight text-neutral-900">
                  {BRAND_NAME}
                </span>
              </div>
            </div>
          </a>
        </div>

        <a
          href={`mailto:${BRAND_EMAIL}`}
          className="mx-auto mb-14 inline-flex items-center gap-2 text-sm font-medium text-neutral-500 transition-colors hover:text-white md:mb-16"
        >
          <Mail className="h-4 w-4 shrink-0 opacity-70" strokeWidth={1.75} />
          {BRAND_EMAIL}
        </a>

        <p className="mb-10 text-xs text-neutral-500 md:text-sm">
          © {COPYRIGHT_YEAR} {BRAND_NAME}
        </p>

        <nav
          className="mx-auto max-w-lg space-y-2 text-[10px] leading-relaxed text-neutral-500 md:max-w-2xl md:text-[11px]"
          aria-label="Legal"
        >
          <div className="flex flex-wrap items-center justify-center gap-y-1">
            {policiesRow1.map((link, i) => (
              <span key={link.id} className="inline-flex items-center">
                {i > 0 ? (
                  <span className="select-none px-1.5 text-neutral-600 md:px-2" aria-hidden>
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
          </div>
          <div className="flex flex-wrap items-center justify-center gap-y-1">
            {policiesRow2.map((link, i) => (
              <span key={link.id} className="inline-flex items-center">
                {i > 0 ? (
                  <span className="select-none px-1.5 text-neutral-600 md:px-2" aria-hidden>
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
          </div>
        </nav>
      </div>
    </footer>
  );
}
