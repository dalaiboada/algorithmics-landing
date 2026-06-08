// src/config/i18n/ui.ts
import esGlobal from "./dictionaries/es/esGlobal.json";
import esHome from "./dictionaries/es/esHome.json";

import enGlobal from "./dictionaries/en/enGlobal.json";
import enHome from "./dictionaries/en/enHome.json";

export const ui = {
  es: {
    ...esGlobal,
    ...esHome,
  },
  en: {
    ...enGlobal,
    ...enHome,
  },
} as const;
