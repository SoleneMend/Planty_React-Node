import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

import type { Lang } from "../data/types";

type LanguageContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLanguage] = useState<Lang>(() => {
    const saved = localStorage.getItem("language");
    return saved === "en" ? "en" : "fr";
  });

  const setLang = (newLang: Lang) => {
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage doit être utilisé dans LanguageProvider");
  }

  return context;
}
