"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "en" | "ar";
type Bi = { en: string; ar?: string } | string;

// UI chrome strings. We'll add more keys per section as we localize them.
const dict = {
  en: {
    langName: "العربية", // label shows the OTHER language to switch to
    nav: { services: "Services", why: "Why Us", watch: "Watch", results: "Results", faq: "FAQ", blog: "Blog" },
    cta: { book: "Book a service", services: "View services & pricing", callNow: "Call now", whatsapp: "WhatsApp" },
  },
  ar: {
    langName: "English",
    nav: { services: "خدماتنا", why: "لماذا نحن", watch: "شاهد", results: "النتائج", faq: "الأسئلة", blog: "المدونة" },
    cta: { book: "احجز خدمة", services: "الخدمات والأسعار", callNow: "اتصل الآن", whatsapp: "واتساب" },
  },
} as const;

type Dict = (typeof dict)["en"];

type Ctx = {
  lang: Lang;
  dir: "ltr" | "rtl";
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: Dict;
  tr: (v: Bi) => string;
};

const LangContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const saved = (localStorage.getItem("lang") as Lang) || "en";
    setLang(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    localStorage.setItem("lang", lang);
  }, [lang]);

  const value: Ctx = {
    lang,
    dir: lang === "ar" ? "rtl" : "ltr",
    setLang,
    toggle: () => setLang((p) => (p === "en" ? "ar" : "en")),
    t: dict[lang] as Dict,
    tr: (v: Bi) => (typeof v === "string" ? v : v[lang] ?? v.en),
  };

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside <LanguageProvider>");
  return ctx;
}