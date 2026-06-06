export { en } from "./en";
export { ru } from "./ru";
export { hy } from "./hy";

export type Locale = "en" | "ru" | "hy";

export const locales: Record<Locale, string> = {
  en: "English",
  ru: "Russian",
  hy: "Armenian",
};
