"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang, LANG_OPTIONS } from "@/context/LangContext";
import { useScrolled } from "@/hooks/useScrolled";
import { NAV_LINKS, NAV_CONTACT_CTA, BRAND_LOGO_SRC } from "@/constants";
import type { Lang } from "@/types";

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const scrolled = useScrolled(8);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 bg-white transition-[box-shadow,border-color] duration-300",
        scrolled
          ? "border-b border-neutral-200/90 shadow-[0_1px_0_rgba(0,0,0,0.03)]"
          : "border-b border-transparent",
      ].join(" ")}
    >
      <nav className="mx-auto flex h-[5.75rem] max-w-7xl items-center justify-between gap-6 px-5 md:h-[6.5rem] md:px-10">
        <Link
          href="#hero"
          className="flex shrink-0 items-center py-1"
          onClick={handleNavClick}
        >
          <div className="relative h-[3.1rem] w-[8.25rem] overflow-hidden sm:h-[3.4rem] sm:w-[9.25rem] md:h-[3.8rem] md:w-[10.5rem]">
            <Image
              src={BRAND_LOGO_SRC}
              alt="PINAHX Digital Studio"
              fill
              className="object-cover object-center scale-[1.45]"
              sizes="(max-width: 640px) 132px, (max-width: 1024px) 148px, 168px"
              priority
            />
          </div>
        </Link>

        <ul className="hidden items-center gap-9 md:flex md:gap-11">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                className="text-[15px] font-semibold tracking-[0.01em] text-neutral-800 transition-colors hover:text-black"
              >
                {t(link.label)}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 md:gap-3.5">
          <label className="hidden items-center gap-2 md:flex">
            <span className="sr-only">Language</span>
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as Lang)}
              className="max-w-[8.25rem] cursor-pointer rounded-lg border border-neutral-200 bg-white py-2.5 pl-3 pr-8 text-[13px] font-semibold text-neutral-700 transition-colors hover:border-neutral-400 focus:border-black focus:outline-none"
              aria-label="Language"
            >
              {LANG_OPTIONS.map((o) => (
                <option key={o.code} value={o.code}>
                  {o.label}
                </option>
              ))}
            </select>
          </label>

          <Link
            href="#contact"
            className="hidden rounded-lg bg-black px-5.5 py-2.5 text-[13px] font-bold uppercase tracking-[0.06em] text-white transition-colors hover:bg-neutral-800 md:inline-flex"
          >
            {t(NAV_CONTACT_CTA)}
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((p) => !p)}
            className="p-2 text-black md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-neutral-100 bg-white md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4 pb-5">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={handleNavClick}
                  className="py-2.5 text-sm font-medium text-neutral-700"
                >
                  {t(link.label)}
                </Link>
              ))}
              <div className="mt-2 flex flex-col gap-3 border-t border-neutral-100 pt-4">
                <label className="flex flex-col gap-1">
                  <span className="text-[10px] font-semibold uppercase tracking-wide text-neutral-500">
                    Language
                  </span>
                  <select
                    value={lang}
                    onChange={(e) => setLang(e.target.value as Lang)}
                    className="w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm font-medium text-neutral-800"
                  >
                    {LANG_OPTIONS.map((o) => (
                      <option key={o.code} value={o.code}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </label>
                <Link
                  href="#contact"
                  onClick={handleNavClick}
                  className="rounded-md bg-black py-2.5 text-center text-xs font-semibold uppercase tracking-wide text-white"
                >
                  {t(NAV_CONTACT_CTA)}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
