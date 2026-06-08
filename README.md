# Algorithmics Landing

Landing page for Algorithmics Altavista — International School of Programming.

## Stack

- **Astro** — static site generation + view transitions
- **Tailwind CSS** — utility-first styling
- **TypeScript**
- **i18n** — Español / English with dynamic language switching

## 🌐 Languages

Full Spanish and English support with separate translation files in `src/config/i18n/dictionaries/`:

- `es/esGlobal.json` — shared texts (nav, footer, buttons, errors)
- `es/esHome.json` — home page texts (slider, features, courses, testimonials, contact)
- `en/enGlobal.json` — English equivalents (global)
- `en/enHome.json` — English equivalents (home)

Keys are resolved server-side with `useTranslations()` and client-side with the `data-i18n` attribute, enabling language switching without page reload.

## 📁 Structure

```
src/
├── components/         # Reusable blocks (Navbar, HeroSlider, ContactForm...)
├── config/
│   └── i18n/
│       ├── dictionaries/   # Translation JSON files
│       ├── ui.ts           # Dictionary merge per language
│       └── utils.ts        # useTranslations() and getLangFromUrl()
├── layouts/            # Layout.astro with ViewTransitions
├── pages/
│   ├── index.astro     # Redirect to /{lang}/
│   └── [lang]/         # Pages per language (index, terms, privacy...)
├── scripts/            # Client code (slider, translations)
└── styles/             # Global styles
```

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

---

# Algorithmics Landing

Landing page de Algorithmics Altavista — Escuela Internacional de Programación.

## Stack

- **Astro** — static site generation + view transitions
- **Tailwind CSS** — utility-first styling
- **TypeScript**
- **i18n** — Español / English con cambio dinámico sin recarga

## 🌐 Idiomas

Soporte completo para Español e Inglés con traducciones separadas en `src/config/i18n/dictionaries/`:

- `es/esGlobal.json` — textos compartidos (nav, footer, botones, errores)
- `es/esHome.json` — textos de la página principal (slider, features, cursos, testimonios, contacto)
- `en/enGlobal.json` — equivalentes en inglés (globales)
- `en/enHome.json` — equivalentes en inglés (home)

Las claves se resuelven en servidor con `useTranslations()` y en cliente con el atributo `data-i18n`, permitiendo cambiar de idioma sin recargar la página.

## 📁 Estructura

```
src/
├── components/         # Bloques reutilizables (Navbar, HeroSlider, ContactForm...)
├── config/
│   └── i18n/
│       ├── dictionaries/   # JSON de traducciones
│       ├── ui.ts           # Merge de diccionarios por idioma
│       └── utils.ts        # useTranslations() y getLangFromUrl()
├── layouts/            # Layout.astro con ViewTransitions
├── pages/
│   ├── index.astro     # Redirección a /{lang}/
│   └── [lang]/         # Páginas por idioma (index, términos, aviso de privacidad...)
├── scripts/            # Código cliente (slider, traducciones)
└── styles/             # Estilos globales
```

## Desarrollo

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```
