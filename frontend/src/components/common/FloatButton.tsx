"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, X } from "lucide-react";
import { useState } from "react";
import { useScrolled } from "@/hooks/useScrolled";
import { SOCIAL_LINKS, telHref } from "@/constants";

export default function FloatButton() {
  const scrolled = useScrolled(300);
  const [open, setOpen] = useState(false);
  const tel = telHref();

  return (
    <AnimatePresence>
      {scrolled && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-8 right-8 z-[60] flex flex-col items-end gap-3"
        >
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex flex-col items-end gap-2"
              >
                {tel ? (
                  <a
                    href={tel}
                    className="flex items-center gap-2 rounded-full border border-gray-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-widest text-black shadow-xl transition-colors hover:bg-[#FF6B35] hover:text-white"
                  >
                    <Phone size={14} /> Call
                  </a>
                ) : null}
                <a
                  href={SOCIAL_LINKS.line}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full bg-[#06C755] px-4 py-2 text-xs font-bold uppercase tracking-widest text-white shadow-xl transition-transform hover:scale-105"
                >
                  <MessageCircle size={14} /> LINE
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className={`flex h-14 w-14 transform items-center justify-center rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 ${
              open ? "bg-black text-white" : "bg-[#FF6B35] text-white"
            }`}
            aria-expanded={open}
            aria-label={open ? "Close contact menu" : "Open contact menu"}
          >
            {open ? <X /> : <MessageCircle />}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
