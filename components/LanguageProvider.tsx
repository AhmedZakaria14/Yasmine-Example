'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, Language } from '@/lib/i18n/translations';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: keyof typeof translations['ar']) => string;
  dir: 'ltr' | 'rtl';
}

const defaultContext: LanguageContextType = {
  lang: 'ar',
  setLang: () => {},
  t: (key) => translations['ar'][key] || key,
  dir: 'rtl',
};

const LanguageContext = createContext<LanguageContextType>(defaultContext);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const lang: Language = 'ar';
  const setLang = () => {};

  const t = (key: keyof typeof translations['ar']) => {
    return translations[lang][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, dir: 'rtl' }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
