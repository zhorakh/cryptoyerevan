"use client";

import { useLocale } from "../providers/LocaleProvider";
import { Locale, locales } from "../locales";
import "./LanguageSwitcher.css";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();

  return (
    <div className="language-switcher">
      {(Object.keys(locales) as Locale[]).map((key) => (
        <button
          key={key}
          className={`lang-btn ${locale === key ? "active" : ""}`}
          onClick={() => setLocale(key)}
        >
          {key.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
