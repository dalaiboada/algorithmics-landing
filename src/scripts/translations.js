import esGlobal from "../config/i18n/dictionaries/es/esGlobal.json";
import esHome from "../config/i18n/dictionaries/es/esHome.json";
import enGlobal from "../config/i18n/dictionaries/en/enGlobal.json";
import enHome from "../config/i18n/dictionaries/en/enHome.json";

export const translations = {
  es: { ...esGlobal, ...esHome },
  en: { ...enGlobal, ...enHome },
};
