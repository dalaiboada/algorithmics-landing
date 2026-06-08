import { ui } from "./ui";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return "es";
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: string): string {
    const keys = key.split(".");
    let current: any = ui[lang];

    for (const k of keys) {
      if (current && current[k] !== undefined) {
        current = current[k];
      } else {
        let fallback: any = ui["es"];
        for (const fk of keys) {
          fallback = fallback?.[fk];
        }
        return fallback || key;
      }
    }

    return typeof current === "string" ? current : key;
  };
}
