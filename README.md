# Portafolio — Juan Rojas

Portafolio personal one-page, bilingüe (ES/EN), de **Juan Rojas** — Frontend Developer (React) con enfoque Full-Stack + IA.

**Stack:** [Vite](https://vite.dev) · [React 19](https://react.dev) · [TailwindCSS 4](https://tailwindcss.com)

## Requisitos

- Node.js **20+** (probado con Node 24)

## Desarrollo

```bash
npm install
npm run dev
```

Abre la URL que muestra Vite (por defecto `http://localhost:5173`).

## Scripts

| Comando           | Descripción                                    |
| ----------------- | ---------------------------------------------- |
| `npm run dev`     | Servidor de desarrollo con hot reload          |
| `npm run build`   | Build de producción en `dist/`                 |
| `npm run preview` | Sirve localmente el build de producción        |

## Assets a completar

Coloca estos archivos y aparecen automáticamente (mientras no existan, se muestra un placeholder):

| Archivo                            | Uso                                  |
| ---------------------------------- | ------------------------------------ |
| `public/juan-rojas.jpg`            | Foto de retrato del hero (a color)   |
| `public/medaner.jpg`               | Captura del proyecto Medaner         |
| `public/files/mi-hoja-de-vida.pdf` | CV descargable (botón "Descargar CV")|

## Estructura

```
index.html            → HTML raíz + SEO/OG + favicon + fuente Archivo
src/
  main.jsx            → punto de entrada React
  App.jsx             → página completa (todas las secciones)
  content.js          → copy bilingüe ES/EN (objeto T)
  index.css           → Tailwind + tokens del sistema "Modernist"
design/               → prototipo de referencia + handoff (no se despliega)
public/               → assets estáticos
```

## Deploy en Vercel

1. Sube el repo a GitHub.
2. En Vercel: **New Project** → importa el repo.
3. Framework preset: **Vite** (autodetectado). Build: `npm run build`, Output: `dist`.

## Idioma

El toggle ES/EN persiste la preferencia en `localStorage` (`jr-portfolio-lang`) y actualiza `document.documentElement.lang`. Español por defecto.
