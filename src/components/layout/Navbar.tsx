"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/context/LangContext";
import { useScrolled } from "@/hooks/useScrolled";
import { NAV_LINKS } from "@/constants";

export default function Navbar() {
  const { lang, toggleLang, t } = useLang();
  const scrolled = useScrolled(30);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-white border-b border-gray-100"
          : "bg-white",
      ].join(" ")}
    >
      <nav className="max-w-7xl mx-auto px-6 h-20 md:h-32 flex items-center justify-between transition-all duration-500">
        {/* Logo */}
        <Link href="#hero" className={`relative transition-all duration-500 flex items-center ${scrolled ? "h-12 w-44 md:h-14 md:w-56" : "h-16 w-56 md:h-20 md:w-72"}`}>
          <Image
            src="/logo.jpg"
            alt="PINAHX Logo"
            fill
            className="object-contain object-left"
            sizes="(max-width: 768px) 200px, 400px"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                className="text-sm font-medium tracking-widest uppercase text-gray-500 hover:text-black transition-colors duration-200 relative group"
              >
                {t(link.label)}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-black group-hover:w-full transition-all duration-300" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-4">
          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className="hidden md:flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-gray-400 hover:text-black transition-colors"
            aria-label="Toggle language"
          >
            <span className={lang === "th" ? "text-black" : ""}>TH</span>
            <span className="text-gray-300">|</span>
            <span className={lang === "en" ? "text-black" : ""}>EN</span>
          </button>

          {/* CTA */}
          <Link
            href="#contact"
            className="hidden md:inline-flex items-center px-5 py-2 bg-black text-white text-xs font-semibold tracking-widest uppercase hover:bg-[#FF6B35] transition-colors duration-300"
          >
            {t({ th: "ติดต่อเรา", en: "Contact Us" })}
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((p) => !p)}
            className="md:hidden p-1 text-black"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-gray-100 px-6 pb-6 pt-4 flex flex-col gap-4"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={handleNavClick}
                className="text-sm font-semibold tracking-widest uppercase text-gray-600 hover:text-black transition-colors"
              >
                {t(link.label)}
              </Link>
            ))}
            <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
              <button
                onClick={toggleLang}
                className="text-xs font-semibold tracking-widest uppercase text-gray-400 hover:text-black transition-colors"
              >
                {lang === "th" ? "EN" : "TH"}
              </button>
              <Link
                href="#contact"
                onClick={handleNavClick}
                className="flex-1 text-center px-4 py-2 bg-black text-white text-xs font-semibold tracking-widest uppercase hover:bg-[#FF6B35] transition-colors"
              >
                {t({ th: "ติดต่อเรา", en: "Contact Us" })}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
