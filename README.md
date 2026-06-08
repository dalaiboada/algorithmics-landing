# Algorithmics — Landing Page

Welcome to the official repository for the **Algorithmics Ciudad Guayana** institutional Landing Page! This is a modern, high-performance, bilingual website designed to showcase the academy's educational programs, methodologies, and tech-driven curriculum.

The platform blends an aesthetic user interface with interactive 3D elements to deliver an immersive and seamless user experience.

---

## Tech Stack

The project is built on a modern architecture geared towards client-side optimization and exceptional performance:

- **Framework:** [Astro](https://astro.build/) — Selected to achieve ultra-fast loading times utilizing its efficient Island Architecture and static site generation (SSG).
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) — For agile component development, full responsiveness, and a highly consistent design system.
- **3D Interaction:** Google's `<model-viewer>` — Native, lightweight rendering of 3D models (`.glb`) directly in the browser, configured with controlled auto-rotation and mobile touch optimization.
- **Internationalization (i18n):** Astro's native URL-based routing framework paired with modular, decoupled translation dictionaries (`/config/i18n`).
- **Type Safety:** TypeScript to ensure strict typing for language dictionaries and overall application logic.

---

## Key Features

- 🌐 **Full Bilingual Support:** Clean, URL-based localization routing (`/` for Spanish and `/en/` for English) using independent JSON dictionaries organized by view (`esGlobal`, `dev`, `home`).
- 📦 **Native 3D Models:** Integration of interactive tridimensional assets optimized for asset size, environment lighting, and mobile gesture handling (`touch-action`).
- ⚡ **Blazing Performance:** Full leverage of Astro's bundling capabilities to defer non-critical scripts and optimize local images and media.
- 📱 **100% Responsive Design:** Tailor-made layout adjustments scaling flawlessly from mobile devices up to ultra-wide desktop monitors.
- 🔄 **Fluid Navigation:** Beautiful, native-like view transitions integrated between sections leveraging Astro's client-side router capability.

---

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

---

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

# Algorithmics — Landing Page

¡Bienvenido al repositorio de la Landing Page institucional de **Algorithmics Ciudad Guayana**! Este proyecto es un sitio web moderno, bilingüe y de alto rendimiento diseñado para presentar la oferta educativa, metodologías y programas tecnológicos de la academia.

La plataforma combina un diseño de interfaz altamente estético con elementos tridimensionales interactivos para ofrecer una experiencia de usuario inmersiva y fluida.

---

## Stack Tecnológico

El proyecto está construido bajo una arquitectura moderna orientada al rendimiento y optimización de cara al cliente:

- **Framework:** [Astro](https://astro.build/) — Utilizado para lograr una carga ultra rápida gracias a su arquitectura de islas y renderizado estático eficiente.
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/) — Para un desarrollo de componentes visuales ágil, responsivo y con un sistema de diseño consistente.
- **Interactividad 3D:** Google `<model-viewer>` — Renderizado nativo y optimizado de modelos 3D (`.glb`) en el navegador, configurado con rotación controlada y adaptabilidad móvil.
- **Internacionalización (i18n):** Sistema de enrutamiento nativo por URL de Astro con diccionarios de traducción modulares y desacoplados (`/config/i18n`).
- **Tipado:** TypeScript para asegurar un manejo robusto de los diccionarios de idiomas y lógica del sitio.

---

## Características Principales

- 🌐 **Soporte Bilingüe Completo:** Enrutamiento limpio basado en URL (`/` para español y `/en/` para inglés) utilizando diccionarios JSON organizados modularmente por secciones (`esGlobal`, `dev`, `home`).
- 📦 **Modelos 3D Nativos:** Integración de assets tridimensionales interactivos optimizados en peso, iluminación y rendimiento móvil (`touch-action`).
- ⚡ **Rendimiento Óptimo:** Aprovechamiento total del empaquetado de Astro para diferir scripts innecesarios y optimizar imágenes y assets locales.
- 📱 **Diseño 100% Responsivo:** Interfaz adaptada meticulosamente desde dispositivos móviles hasta pantallas de escritorio.
- 🔄 **Navegación Fluida:** Transiciones estéticas integradas entre vistas utilizando las capacidades nativas de enrutamiento en el cliente de Astro.

---

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

---

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
