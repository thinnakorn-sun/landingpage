"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from "react";
import type { Lang, L10nString } from "@/types";

export const LANG_OPTIONS: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "th", label: "TH" },
  { code: "zh", label: "中文" },
  { code: "ja", label: "日本語" },
  { code: "ko", label: "한국어" },
];

const HTML_LANG: Record<Lang, string> = {
  en: "en",
  th: "th",
  zh: "zh-Hans",
  ja: "ja",
  ko: "ko",
};

interface LangContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (text: L10nString) => string;
}

const LangContext = createContext<LangContextValue | undefined>(undefined);

function syncDocumentLang(lang: Lang) {
  if (typeof document === "undefined") return;
  document.documentElement.lang = HTML_LANG[lang];
  document.documentElement.setAttribute("data-lang", lang);
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    syncDocumentLang(next);
  }, []);

  useEffect(() => {
    syncDocumentLang(lang);
  }, [lang]);

  const t = useCallback((text: L10nString): string => text[lang], [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within <LangProvider>");
  return ctx;
}
