"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Phone, X } from "lucide-react";
import { useState } from "react";
import { useScrolled } from "@/hooks/useScrolled";

export default function FloatButton() {
  const scrolled = useScrolled(300);
  const [open, setOpen] = useState(false);

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
                <a
                  href="tel:#"
                  className="bg-white text-black px-4 py-2 rounded-full text-xs font-bold tracking-widest shadow-xl border border-gray-100 flex items-center gap-2 hover:bg-[#FF6B35] hover:text-white transition-colors uppercase"
                >
                  <Phone size={14} /> Call Us
                </a>
                <a
                  href="#"
                  className="bg-[#25D366] text-white px-4 py-2 rounded-full text-xs font-bold tracking-widest shadow-xl flex items-center gap-2 hover:scale-105 transition-transform uppercase"
                >
                  <MessageSquare size={14} /> WhatsApp
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={() => setOpen(!open)}
            className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 ${
              open ? "bg-black text-white" : "bg-[#FF6B35] text-white"
            }`}
          >
            {open ? <X /> : <MessageSquare />}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
