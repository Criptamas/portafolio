// All copy is bilingual (ES default / EN). Source of truth for the whole page.
export const T = {
  es: {
    nav: { stack: 'Stack', proyectos: 'Proyectos', experiencia: 'Experiencia', sobre: 'Sobre mí', contacto: 'Contacto' },
    hero: {
      role: 'Frontend Developer — React · Full-Stack + IA',
      value:
        'Construyo productos reales de punta a punta: interfaces en React y back-ends en Node, con un flujo de trabajo aumentado por IA para diseñar, construir y enviar más rápido.',
      avail: 'Disponible para proyectos y posiciones',
      loc: 'Falcón, Venezuela · Remoto',
      ctaProjects: 'Ver proyectos',
      ctaCv: 'Descargar CV',
    },
    stats: [
      { n: '2022', l: 'Programando desde' },
      { n: '5', l: 'Productos en producción' },
      { n: '×2', l: 'Simulaciones de equipo · No-Country' },
    ],
    sec: { stack: 'Stack / tecnologías', proyectos: 'Proyectos destacados', exp: 'Experiencia', formacion: 'Formación', sobre: 'Sobre mí' },
    stackGroups: [
      { name: 'Frontend', chips: ['React', 'AstroJS', 'JavaScript (ES6+)', 'TailwindCSS', 'HTML5', 'CSS3'] },
      { name: 'Backend', note: 'Deploy en Vercel y Render.', chips: ['Node.js', 'Express', 'APIs REST', 'Web scraping', 'Cron jobs', 'Supabase', 'Firebase'] },
      { name: 'Desarrollo aumentado con IA', note: 'Diseño, construyo y envío productos completos con un flujo asistido por IA.', chips: ['Claude Code', 'ChatGPT', 'Gemini', 'OpenCode'] },
      { name: 'Herramientas', chips: ['Git', 'GitHub', 'Vercel', 'Netlify'] },
    ],
    flagship: {
      kicker: 'Proyecto insignia',
      context: 'Super-app para Punto Fijo (Falcón), con dominio propio y usuarios reales.',
      desc: 'Comercios locales sin canal digital → delivery de tiendas, viajes en mototaxi/taxi y marketplace con seguimiento de pedidos, en una sola plataforma.',
      live: 'Ver en vivo',
    },
    projects: [
      { kicker: 'Full-stack · usuarios reales', title: 'Animalitos Hoy (Batacazo)', desc: 'Resultados de lotería dispersos y tardíos → frontend en React y backend completo: scraper, API REST y un job horario que publica resultados en tiempo real.', tags: ['React', 'Node', 'Express', 'Scraping', 'API', 'Cron', 'IA'], live: 'https://batacazo.vercel.app/', code: 'https://github.com/Criptamas' },
      { kicker: 'Prueba técnica · React', title: 'Tabla de usuarios interactiva', desc: 'Prueba técnica para posición React: tabla de usuarios con filtro por país, orden alfabético, coloreado dinámico de celdas y eliminar/restaurar filas.', tags: ['React', 'JS', 'Tablas', 'Filtros'], live: 'https://react-prueba-a1cqg89b6-criptamas-projects.vercel.app/', code: 'https://github.com/Criptamas/proto-prueba' },
      { kicker: 'Primer proyecto pagado', title: 'Punto Flash', desc: 'Menú impreso y pedidos por WhatsApp → catálogo digital de comidas para un restaurante de Falcón.', tags: ['JavaScript', 'CSS'], live: 'https://punto-flash-web-site.vercel.app/', code: 'https://github.com/Criptamas/PuntoFlashWebSite' },
      { kicker: 'Cliente · música', title: 'Landing Mystik', desc: 'Banda sin presencia web → landing page para la banda emo-pop Mystik.', tags: ['JavaScript', 'HTML', 'CSS', 'Landing'], live: 'https://mystik-rockband.netlify.app/', code: 'https://github.com/Criptamas/mystik-landing' },
    ],
    moreGithub: 'Ver más en GitHub',
    timeline: [
      { date: '2022 — HOY', title: 'Desarrollador freelance · proyectos para clientes', desc: 'Medaner, Animalitos Hoy, Punto Flash y Mystik: de la idea al deploy en producción.' },
      { date: '2024', title: 'No-Country · simulaciones laborales en equipo (×2)', desc: 'Trabajo colaborativo en un flujo real de desarrollo: sprints, revisión de código y entregas en equipo.' },
    ],
    formacion: { courses: ['Fundamentos de JavaScript', 'Manipulación del DOM', 'ReactJS', 'HTML y CSS'], note: 'Más certificaciones próximamente.', link: 'Ver perfil de aprendizaje ↗' },
    about:
      'Empecé a programar en 2022 y pasé rápido de aprender a entregar: productos reales, para clientes reales, en producción. Hoy construyo full-stack —interfaces en React, back-ends en Node— con un flujo aumentado por IA que me permite cubrir más terreno con la misma calidad: del primer boceto al deploy.',
    close: { l1: 'Disponible ahora.', l2: 'Construyamos algo real.', cv: 'Descargar CV' },
    footer: '© 2026 Juan Rojas — Falcón, Venezuela · Remoto',
  },
  en: {
    nav: { stack: 'Stack', proyectos: 'Projects', experiencia: 'Experience', sobre: 'About', contacto: 'Contact' },
    hero: {
      role: 'Frontend Developer — React · Full-Stack + AI',
      value:
        'I build real products end to end: React interfaces and Node back-ends, with an AI-augmented workflow to design, build and ship faster.',
      avail: 'Available for projects and roles',
      loc: 'Falcón, Venezuela · Remote',
      ctaProjects: 'View projects',
      ctaCv: 'Download CV',
    },
    stats: [
      { n: '2022', l: 'Coding since' },
      { n: '5', l: 'Products in production' },
      { n: '×2', l: 'Team simulations · No-Country' },
    ],
    sec: { stack: 'Stack / technologies', proyectos: 'Selected projects', exp: 'Experience', formacion: 'Learning', sobre: 'About me' },
    stackGroups: [
      { name: 'Frontend', chips: ['React', 'AstroJS', 'JavaScript (ES6+)', 'TailwindCSS', 'HTML5', 'CSS3'] },
      { name: 'Backend', note: 'Deployed on Vercel and Render.', chips: ['Node.js', 'Express', 'REST APIs', 'Web scraping', 'Cron jobs', 'Supabase', 'Firebase'] },
      { name: 'AI-augmented development', note: 'I design, build and ship complete products with an AI-assisted workflow.', chips: ['Claude Code', 'ChatGPT', 'Gemini', 'OpenCode'] },
      { name: 'Tools', chips: ['Git', 'GitHub', 'Vercel', 'Netlify'] },
    ],
    flagship: {
      kicker: 'Flagship project',
      context: 'A super-app for Punto Fijo (Falcón), on its own domain, with real users.',
      desc: 'Local businesses with no digital channel → store delivery, mototaxi/taxi rides and a marketplace with order tracking — one platform.',
      live: 'View live',
    },
    projects: [
      { kicker: 'Full-stack · real users', title: 'Animalitos Hoy (Batacazo)', desc: 'Scattered, delayed lottery results → React frontend and a complete backend: scraper, REST API and an hourly job publishing results in real time.', tags: ['React', 'Node', 'Express', 'Scraping', 'API', 'Cron', 'AI'], live: 'https://batacazo.vercel.app/', code: 'https://github.com/Criptamas' },
      { kicker: 'Technical challenge · React', title: 'Interactive users table', desc: 'Technical challenge for a React role: users table with country filter, alphabetical sorting, dynamic cell coloring and delete/restore rows.', tags: ['React', 'JS', 'Tables', 'Filters'], live: 'https://react-prueba-a1cqg89b6-criptamas-projects.vercel.app/', code: 'https://github.com/Criptamas/proto-prueba' },
      { kicker: 'First paid project', title: 'Punto Flash', desc: 'Printed menu and WhatsApp orders → a digital food catalog for a restaurant in Falcón.', tags: ['JavaScript', 'CSS'], live: 'https://punto-flash-web-site.vercel.app/', code: 'https://github.com/Criptamas/PuntoFlashWebSite' },
      { kicker: 'Client · music', title: 'Landing Mystik', desc: 'A band with no web presence → landing page for the emo-pop band Mystik.', tags: ['JavaScript', 'HTML', 'CSS', 'Landing'], live: 'https://mystik-rockband.netlify.app/', code: 'https://github.com/Criptamas/mystik-landing' },
    ],
    moreGithub: 'More on GitHub',
    timeline: [
      { date: '2022 — NOW', title: 'Freelance developer · client projects', desc: 'Medaner, Animalitos Hoy, Punto Flash and Mystik: from idea to production deploy.' },
      { date: '2024', title: 'No-Country · team work simulations (×2)', desc: 'Collaborative work in a real development flow: sprints, code review and team delivery.' },
    ],
    formacion: { courses: ['JavaScript Fundamentals', 'DOM Manipulation', 'ReactJS', 'HTML & CSS'], note: 'More certifications on the way.', link: 'View learning profile ↗' },
    about:
      'I started coding in 2022 and moved fast from learning to shipping: real products, for real clients, in production. Today I build full-stack — React interfaces, Node back-ends — with an AI-augmented workflow that lets me cover more ground at the same quality: from first sketch to deploy.',
    close: { l1: 'Available now.', l2: "Let's build something real.", cv: 'Download CV' },
    footer: '© 2026 Juan Rojas — Falcón, Venezuela · Remote',
  },
}

// Flagship tags depend on language (IA vs AI).
export const flagshipTags = (lang) => [
  'React',
  'Node',
  'Express',
  'Supabase / Firebase',
  'Marketplace',
  lang === 'es' ? 'IA' : 'AI',
]
