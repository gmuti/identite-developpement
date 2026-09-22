"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { translations } from "@/content/translations";

const STORAGE_KEY = "id-locale";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [locale, setLocaleState] = useState("fr");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "fr" || saved === "en") setLocaleState(saved);
    } catch (e) {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  function setLocale(next) {
    setLocaleState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch (e) {}
  }

  const value = {
    locale,
    setLocale,
    toggleLocale: () => setLocale(locale === "fr" ? "en" : "fr"),
    t: translations[locale]
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
