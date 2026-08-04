# Handoff: Portafolio personal — Juan Rojas

## Overview
Portafolio one-page bilingüe (ES/EN, español por defecto) para Juan Rojas, Frontend Developer — React con enfoque Full-Stack + IA. Objetivo: impresionar a reclutadores tech. Secciones: Hero con foto y CTAs, franja de métricas, Stack, Proyectos destacados (Medaner como insignia + 4 tarjetas), Experiencia (timeline), Formación, Sobre mí, Contacto (banner rojo) y footer.

## About the Design Files
Los archivos de este paquete son **referencias de diseño creadas en HTML** — prototipos que muestran el look y comportamiento deseados, NO código de producción para copiar tal cual. La tarea es **recrear este diseño en el stack objetivo del usuario: React + TailwindCSS** (un solo componente de página, mobile-first, deploy en Vercel), usando patrones idiomáticos de ese stack.

`Portafolio Juan Rojas.dc.html` es el prototipo: el markup vive dentro de `<x-dc>` (estilos inline) y la lógica/copy bilingüe en la clase `Component` dentro del `<script>` (objeto `T` con `es`/`en`). Ignora la infraestructura del prototipo (`support.js`, `<x-dc>`, `sc-for`/`sc-if`, `image-slot`); replica el resultado visual y los datos.

## Fidelity
**High-fidelity (hifi).** Colores, tipografía, espaciados e interacciones son finales. Recrear pixel-perfect con Tailwind (extender el theme con los tokens de abajo).

## Requisitos de producto
- React + TailwindCSS, un solo componente de página, responsive mobile-first.
- Solo tema claro.
- Bilingüe ES/EN con toggle en el nav; español por defecto; preferencia persistida en `localStorage` (clave `jr-portfolio-lang`); actualizar `document.documentElement.lang`.
- Accesible WCAG AA: HTML semántico (`nav`, `main`, `section`, `article`, `footer`), `aria-pressed` en el toggle de idioma, focus visible (outline 2px `#ec3013` offset 2px), contraste AA.
- SEO: `<title>Juan Rojas — Frontend Developer · React · Full-Stack + IA</title>`, meta description, Open Graph (title/description/type) y favicon (cuadrado rojo #ec3013 con "JR" blanco).
- Listo para Vercel.

## Design Tokens (sistema "Modernist")
Estética: flat, arquitectónico, retícula visible, **cero border-radius en todo**, reglas fuertes de 2px, todo alineado a la izquierda (incluidos labels de botones), un solo acento rojo.

Colores:
- Fondo base: `#f3f2f2` · Superficies/tarjetas: `#fbfbfa` (aprox; superficie apenas más clara que el fondo)
- Texto: `#201e1d` · Texto secundario: texto al 60–80% de opacidad (via color-mix/opacity)
- Acento único: `#ec3013` (rojo) — usar con moderación: números de sección, botón primario, tag "disponible", banner de contacto. Para texto pequeño en acento usar un paso más oscuro (~`#a02008`).
- Divisores: `#201e1d` a ~15% — pero SIEMPRE en grosor 2px (nunca hairline 1px).

Tipografía: **Archivo** (Google Fonts) para TODO — headings weight 700–800 con letter-spacing -0.015em a -0.02em, body weight 400–600.
- H1 hero: clamp(46px, 7vw, 88px), line-height 1.02
- H2 sección: clamp(28px, 3.4vw, 40px) — formato "NN — Título" con el número en rojo
- Body: 14–17px, line-height 1.6–1.7
- Radios: 0px en todo. Sombras: ninguna.

## Screens / Layout (one-page, max-width 1200px, padding lateral clamp(20px,5vw,64px))
1. **Nav sticky** (top:0, fondo `#f3f2f2`, borde inferior 2px): marca "Juan Rojas" izquierda; links Stack/Proyectos/Experiencia/Sobre mí/Contacto (ocultos <700px); toggle segmentado ES|EN (opción activa: fondo `#201e1d`, texto claro).
2. **Hero** (flex wrap, gap 48–72px): columna izquierda — pill "Disponible para proyectos y posiciones" con punto rojo 8px pulsante (keyframe box-shadow expandiendo) + "Falcón, Venezuela · Remoto" en uppercase 12px; H1 "Juan Rojas"; rol en 17–22px semibold; propuesta de valor 17px máx 56ch; fila de botones: primario "Ver proyectos" (#ec3013, texto claro), secundario "Descargar CV" (borde 2px, icono download), ghost GitHub y LinkedIn (iconos Lucide). Columna derecha: foto 320px aspect-ratio 4/5 **a color** (sin filtro), borde 2px. Foto: pedirla al usuario.
3. **Métricas** (entre dos reglas 2px): "2022 / Programando desde", "5 / Productos en producción", "×2 / Simulaciones de equipo · No-Country" — número grande 32–46px rojo, label uppercase 12px.
4. **Stack**: filas grid `[220px | 1fr]` separadas por reglas 2px; izquierda nombre de grupo (+nota), derecha chips (borde 1px divisor, 12px). Grupos: Frontend (React, AstroJS, JavaScript ES6+, TailwindCSS, HTML5, CSS3) · Backend (Node.js, Express, APIs REST, Web scraping, Cron jobs, Supabase, Firebase — nota: deploy en Vercel y Render) · Desarrollo aumentado con IA (Claude Code, ChatGPT, Gemini, OpenCode) · Herramientas (Git, GitHub, Vercel, Netlify).
5. **Proyectos**: contenedor con borde 2px y gap 2px (la retícula se dibuja con el fondo divisor entre celdas). Tarjeta insignia Medaner a lo ancho (2 columnas: texto + captura a color; kicker rojo "Proyecto insignia", título 26–36px, contexto, problema→solución, tags, botón primario "Ver en vivo" → https://www.medaner.com/). Debajo, grid 2 col (1 col móvil) con 4 tarjetas: kicker, título 21px, descripción problema→solución, tags, links "Live ↗ / Code ↗" en rojo oscuro semibold:
   - Animalitos Hoy (Batacazo) — https://batacazo.vercel.app/ · https://github.com/Criptamas
   - Tabla de usuarios interactiva (prueba técnica React: filtro por país, orden alfabético, coloreado dinámico de celdas, eliminar/restaurar filas) — https://react-prueba-a1cqg89b6-criptamas-projects.vercel.app/ · https://github.com/Criptamas/proto-prueba
   - Punto Flash — https://punto-flash-web-site.vercel.app/ · https://github.com/Criptamas/PuntoFlashWebSite
   - Landing Mystik — https://mystik-rockband.netlify.app/ · https://github.com/Criptamas/mystik-landing
   Botón secundario "Ver más en GitHub" → https://github.com/Criptamas?tab=repositories
6. **Experiencia**: filas grid `[200px | 1fr]` con regla 2px superior; fecha bold ("2022 — HOY", "2024"); título 18px + descripción. (1) Freelance · proyectos para clientes — Medaner, Animalitos Hoy, Punto Flash y Mystik. (2) No-Country · simulaciones laborales en equipo ×2.
7. **Formación**: fila "Platzi" + chips (Fundamentos de JavaScript, Manipulación del DOM, ReactJS, HTML y CSS) + nota "Más certificaciones próximamente." + link "Ver perfil de aprendizaje".
8. **Sobre mí**: un párrafo 17–20px máx 62ch (copy en el prototipo, ES y EN).
9. **Contacto**: banner full-bleed fondo `#ec3013`, texto claro; titular 2 líneas "Disponible ahora. / Construyamos algo real."; botones ghost con borde claro: email criptamas@gmail.com, LinkedIn, GitHub, Descargar CV.
10. **Footer**: "© 2026 Juan Rojas — Falcón, Venezuela · Remoto", 13px atenuado.

## Interactions & Behavior
- Toggle ES/EN: estado `lang` + localStorage; TODO el copy cambia (objeto `T` completo en el prototipo — usarlo literal).
- Anchors con scroll suave (`scroll-behavior: smooth`).
- Hovers: links nav → rojo; botones según variante (primario oscurece, ghost tinte); links Live/Code subrayado on hover.
- Punto "disponible" con pulso infinito 1.8s.
- Opcional (pedido en el brief original): fade/slide-in al hacer scroll con IntersectionObserver, respetando `prefers-reduced-motion`.
- Links externos: `target="_blank" rel="noopener noreferrer"`. CV: `/files/mi-hoja-de-vida.pdf` con atributo `download`.

## State Management
- `lang: 'es' | 'en'` (useState + localStorage). Sin fetching: todo el contenido es estático en el objeto `T`.

## Assets
- Foto de retrato (hero) y captura de Medaner: las aporta el usuario (en el prototipo son slots drag-and-drop). **Mostrar a color** (decisión posterior al sistema base).
- Iconos: Lucide (download, arrow-up-right, github, linkedin, mail) como SVG inline stroke 2.
- Fuente: Archivo en Google Fonts.
- CV: `/files/mi-hoja-de-vida.pdf` (el usuario lo coloca en `public/files/`).

## Files
- `Portafolio Juan Rojas.dc.html` — prototipo completo. El objeto `T` en su `<script>` contiene TODO el copy final ES/EN: úsalo tal cual, no re-traducir.
