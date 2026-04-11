"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import type { Lang, BilingualText } from "@/types";

// ── Types ──────────────────────────────────────────────────
interface LangContextValue {
  lang: Lang;
  toggleLang: () => void;
  t: (text: BilingualText) => string;
}

// ── Context ────────────────────────────────────────────────
const LangContext = createContext<LangContextValue | undefined>(undefined);

// ── Provider ───────────────────────────────────────────────
export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("th");

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "th" ? "en" : "th"));
  }, []);

  /** Translate a bilingual text object to the current language */
  const t = useCallback(
    (text: BilingualText): string => text[lang],
    [lang]
  );

  return (
    <LangContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

// ── Hook ───────────────────────────────────────────────────
export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within <LangProvider>");
  return ctx;
}
