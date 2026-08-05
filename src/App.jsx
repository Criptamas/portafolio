import { useEffect, useRef, useState } from 'react'
import { T, flagshipTags } from './content'

/* ----------------------------- Icons (Lucide) ----------------------------- */
const svgBase = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}
const ArrowUpRight = ({ size = 15 }) => (
  <svg width={size} height={size} {...svgBase} aria-hidden="true">
    <path d="M7 7h10v10" />
    <path d="M7 17 17 7" />
  </svg>
)
const Download = ({ size = 15 }) => (
  <svg width={size} height={size} {...svgBase} aria-hidden="true">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" x2="12" y1="15" y2="3" />
  </svg>
)
const GitHub = ({ size = 15 }) => (
  <svg width={size} height={size} {...svgBase} aria-hidden="true">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)
const Linkedin = ({ size = 15 }) => (
  <svg width={size} height={size} {...svgBase} aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)
const Mail = ({ size = 15 }) => (
  <svg width={size} height={size} {...svgBase} aria-hidden="true">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)
const IconMenu = ({ size = 20 }) => (
  <svg width={size} height={size} {...svgBase} aria-hidden="true">
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
)
const IconX = ({ size = 20 }) => (
  <svg width={size} height={size} {...svgBase} aria-hidden="true">
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
)

/* -------------------------- Reveal-on-scroll wrap -------------------------- */
function Reveal({ children, className = '' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduce =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || !('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true)
            io.disconnect()
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(el)
    const failsafe = setTimeout(() => setVisible(true), 1400) // never stay hidden
    return () => {
      io.disconnect()
      clearTimeout(failsafe)
    }
  }, [])
  return (
    <div ref={ref} className={`reveal${visible ? ' is-visible' : ''} ${className}`}>
      {children}
    </div>
  )
}

/* ----------------------------- Image with slot ---------------------------- */
function ImageSlot({ src, alt, label, className = '' }) {
  const [failed, setFailed] = useState(false)
  // Handle already-complete (cached) broken images that never fire load/error.
  const checkNode = (node) => {
    if (node && node.complete && node.naturalWidth === 0) setFailed(true)
  }
  if (failed || !src) {
    return (
      <div className={`${className} flex items-center justify-center bg-shot p-4 text-center`}>
        <span className="kicker text-ink-60">{label}</span>
      </div>
    )
  }
  return (
    <img
      ref={checkNode}
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      onLoad={(e) => {
        // Dev servers (and misconfigured hosts) may return 200 HTML for a
        // missing asset, which fires `load` instead of `error`. Guard on it.
        if (e.currentTarget.naturalWidth === 0) setFailed(true)
      }}
      className={`${className} block h-full w-full object-cover`}
    />
  )
}

/* --------------------------------- Rule ----------------------------------- */
const Rule = () => <hr className="m-0 h-[2px] border-0 bg-divider" />

/* --------------------------------- App ------------------------------------ */
export default function App() {
  const [lang, setLang] = useState('es')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    try {
      const saved = localStorage.getItem('jr-portfolio-lang')
      if (saved === 'es' || saved === 'en') setLang(saved)
    } catch {
      /* ignore */
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const changeLang = (l) => {
    setLang(l)
    try {
      localStorage.setItem('jr-portfolio-lang', l)
    } catch {
      /* ignore */
    }
  }

  const t = T[lang]

  const navLinks = [
    { href: '#stack', label: t.nav.stack },
    { href: '#proyectos', label: t.nav.proyectos },
    { href: '#experiencia', label: t.nav.experiencia },
    { href: '#sobre-mi', label: t.nav.sobre },
    { href: '#contacto', label: t.nav.contacto },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* -------------------------------- Nav -------------------------------- */}
      <header className="site-header">
        <nav className="nav" aria-label={lang === 'es' ? 'Principal' : 'Main'}>
          <span className="nav-brand">Juan Rojas</span>
          {navLinks.map((l) => (
            <a key={l.href} className="nav-link" href={l.href}>
              {l.label}
            </a>
          ))}
          <button
            type="button"
            className="nav-toggle"
            aria-label={
              menuOpen
                ? lang === 'es'
                  ? 'Cerrar menú'
                  : 'Close menu'
                : lang === 'es'
                  ? 'Abrir menú'
                  : 'Open menu'
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <IconX /> : <IconMenu />}
          </button>
          <div className="seg" role="group" aria-label="Idioma / Language">
            <button
              type="button"
              className="seg-opt"
              aria-pressed={lang === 'es'}
              onClick={() => changeLang('es')}
            >
              ES
            </button>
            <button
              type="button"
              className="seg-opt"
              aria-pressed={lang === 'en'}
              onClick={() => changeLang('en')}
            >
              EN
            </button>
          </div>
        </nav>
        {menuOpen && (
          <div id="mobile-menu" className="nav-mobile">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            ))}
          </div>
        )}
      </header>

      <main className="mx-auto w-full max-w-[1200px] px-[clamp(20px,5vw,64px)]">
        {/* ------------------------------- Hero ------------------------------ */}
        <section
          id="inicio"
          className="flex flex-wrap items-stretch gap-x-[clamp(32px,5vw,72px)] gap-y-12 pt-[clamp(48px,8vw,100px)] pb-[clamp(40px,6vw,72px)]"
        >
          <div className="flex min-w-0 flex-[1_1_520px] flex-col items-start gap-[26px]">
            <div className="flex flex-wrap items-center gap-4">
              <span className="pill">
                <span className="pill-dot" aria-hidden="true" />
                {t.hero.avail}
              </span>
              <span className="text-[12px] uppercase tracking-[0.08em] text-ink-62">
                {t.hero.loc}
              </span>
            </div>
            <div className="flex flex-col gap-[14px]">
              <h1 className="ml-[-0.058em] text-[clamp(46px,7vw,88px)] font-extrabold leading-[1.02] tracking-[-0.02em]">
                Juan Rojas
              </h1>
              <p className="text-[clamp(17px,2.2vw,22px)] font-semibold leading-[1.3]">
                {t.hero.role}
              </p>
            </div>
            <p className="max-w-[56ch] text-[17px] leading-[1.65] text-ink-80">
              {t.hero.value}
            </p>
            <div className="flex flex-wrap gap-3">
              <a className="btn btn-primary" href="#proyectos">
                {t.hero.ctaProjects}
              </a>
              <a
                className="btn btn-secondary"
                href="/files/mi-hoja-de-vida.pdf"
                download="mi-hoja-de-vida.pdf"
              >
                <Download />
                {t.hero.ctaCv}
              </a>
              <a
                className="btn btn-ghost"
                href="https://github.com/Criptamas"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHub />
                GitHub
              </a>
              <a
                className="btn btn-ghost"
                href="https://www.linkedin.com/in/criptamas/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin />
                LinkedIn
              </a>
            </div>
          </div>
          <figure className="m-0 grow-0 basis-full border-2 border-divider bg-surface min-[700px]:min-w-[250px] min-[700px]:basis-[320px]">
            <ImageSlot
              src="/juan-rojas.jpg"
              alt="Juan Rojas"
              label="Tu foto → public/juan-rojas.jpg"
              className="aspect-[4/5] w-full"
            />
          </figure>
        </section>

        <Rule />
        {/* ------------------------------ Métricas --------------------------- */}
        <Reveal>
          <section
            aria-label={lang === 'es' ? 'Métricas' : 'Metrics'}
            className="flex flex-col gap-y-6 py-[clamp(28px,4vw,44px)] min-[700px]:flex-row min-[700px]:flex-wrap min-[700px]:gap-x-[clamp(40px,6vw,88px)] min-[700px]:gap-y-7"
          >
            {t.stats.map((s) => (
              <div key={s.l} className="flex flex-col gap-[10px]">
                <p className="text-[clamp(32px,3.4vw,46px)] font-extrabold leading-none tabular-nums text-accent">
                  {s.n}
                </p>
                <p className="text-[12px] uppercase tracking-[0.08em] text-ink-70">{s.l}</p>
              </div>
            ))}
          </section>
        </Reveal>
        <Rule />

        {/* ------------------------------- Stack ----------------------------- */}
        <Reveal>
          <section id="stack" className="py-[clamp(44px,7vw,80px)]">
            <h2 className="sec-h">
              <span className="sec-num">02</span> — {t.sec.stack}
            </h2>
            <div className="flex flex-col">
              {t.stackGroups.map((g) => (
                <div
                  key={g.name}
                  className="grid grid-cols-1 gap-x-[clamp(20px,4vw,48px)] gap-y-3 border-t-2 border-divider py-6 min-[700px]:grid-cols-[minmax(140px,220px)_minmax(0,1fr)]"
                >
                  <div className="flex flex-col gap-[6px]">
                    <h3 className="text-[15px] font-semibold">{g.name}</h3>
                    {g.note && (
                      <p className="text-[13px] leading-[1.5] text-ink-60">{g.note}</p>
                    )}
                  </div>
                  <div className="flex flex-wrap content-start gap-2">
                    {g.chips.map((c) => (
                      <span key={c} className="chip">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Reveal>
        <Rule />

        {/* ----------------------------- Proyectos --------------------------- */}
        <Reveal>
          <section id="proyectos" className="py-[clamp(44px,7vw,80px)]">
            <h2 className="sec-h">
              <span className="sec-num">03</span> — {t.sec.proyectos}
            </h2>
            <div className="grid gap-[2px] border-2 border-divider bg-divider">
              {/* Flagship */}
              <article className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] bg-surface">
                <div className="flex flex-col items-start gap-4 p-[clamp(24px,4vw,40px)]">
                  <span className="kicker text-accent">{t.flagship.kicker}</span>
                  <h3 className="text-[clamp(26px,3vw,36px)] font-extrabold tracking-[-0.015em]">
                    Medaner
                  </h3>
                  <p className="text-[15px] font-semibold leading-[1.5]">{t.flagship.context}</p>
                  <p className="max-w-[52ch] text-[15px] leading-[1.6] text-ink-75">
                    {t.flagship.desc}
                  </p>
                  <div className="flex flex-wrap gap-[6px]">
                    {flagshipTags(lang).map((c) => (
                      <span key={c} className="chip-sm">
                        {c}
                      </span>
                    ))}
                  </div>
                  <a
                    className="btn btn-primary mt-[6px]"
                    href="https://www.medaner.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.flagship.live}
                    <ArrowUpRight />
                  </a>
                </div>
                <div className="relative min-h-[300px] bg-shot">
                  <ImageSlot
                    src="/medaner.jpg"
                    alt="Medaner"
                    label="Captura de Medaner → public/medaner.jpg"
                    className="absolute inset-0"
                  />
                </div>
              </article>

              {/* Secondary projects */}
              <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] gap-[2px]">
                {t.projects.map((p) => (
                  <article key={p.title} className="card">
                    <span className="kicker text-accent-700">{p.kicker}</span>
                    <h3 className="text-[21px] font-extrabold tracking-[-0.015em]">{p.title}</h3>
                    <p className="text-[14px] leading-[1.6] text-ink-75">{p.desc}</p>
                    <div className="flex flex-wrap gap-[6px]">
                      {p.tags.map((c) => (
                        <span key={c} className="chip-sm">
                          {c}
                        </span>
                      ))}
                    </div>
                    <div className="mt-[6px] flex gap-5">
                      <a className="link-cta" href={p.live} target="_blank" rel="noopener noreferrer">
                        Live
                        <ArrowUpRight size={13} />
                      </a>
                      <a className="link-cta" href={p.code} target="_blank" rel="noopener noreferrer">
                        Code
                        <ArrowUpRight size={13} />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className="mt-6">
              <a
                className="btn btn-secondary"
                href="https://github.com/Criptamas?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.moreGithub}
                <ArrowUpRight />
              </a>
            </div>
          </section>
        </Reveal>
        <Rule />

        {/* ---------------------------- Experiencia -------------------------- */}
        <Reveal>
          <section id="experiencia" className="py-[clamp(44px,7vw,80px)]">
            <h2 className="sec-h">
              <span className="sec-num">04</span> — {t.sec.exp}
            </h2>
            <div className="flex flex-col">
              {t.timeline.map((e) => (
                <div
                  key={e.date}
                  className="grid grid-cols-1 gap-x-[clamp(20px,4vw,48px)] gap-y-2 border-t-2 border-divider py-[26px] min-[700px]:grid-cols-[minmax(120px,200px)_minmax(0,1fr)]"
                >
                  <p className="text-[15px] font-extrabold tabular-nums">{e.date}</p>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[18px] tracking-[-0.01em]">{e.title}</h3>
                    <p className="max-w-[64ch] text-[14px] leading-[1.6] text-ink-70">{e.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Reveal>
        <Rule />

        {/* ----------------------------- Formación --------------------------- */}
        <Reveal>
          <section id="formacion" className="py-[clamp(44px,7vw,80px)]">
            <h2 className="sec-h">
              <span className="sec-num">05</span> — {t.sec.formacion}
            </h2>
            <div className="grid grid-cols-1 gap-x-[clamp(20px,4vw,48px)] gap-y-3 border-t-2 border-divider pt-[26px] min-[700px]:grid-cols-[minmax(140px,220px)_minmax(0,1fr)]">
              <h3 className="text-[15px] font-semibold">Platzi</h3>
              <div className="flex flex-col items-start gap-4">
                <div className="flex flex-wrap gap-2">
                  {t.formacion.courses.map((c) => (
                    <span key={c} className="chip">
                      {c}
                    </span>
                  ))}
                </div>
                <p className="text-[13px] leading-[1.6] text-ink-60">
                  {t.formacion.note}{' '}
                  <a
                    href="https://www.linkedin.com/in/criptamas/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold"
                  >
                    {t.formacion.link}
                  </a>
                </p>
              </div>
            </div>
          </section>
        </Reveal>
        <Rule />

        {/* ------------------------------ Sobre mí --------------------------- */}
        <Reveal>
          <section id="sobre-mi" className="py-[clamp(44px,7vw,80px)]">
            <h2 className="sec-h">
              <span className="sec-num">06</span> — {t.sec.sobre}
            </h2>
            <p className="max-w-[62ch] text-[clamp(17px,1.7vw,20px)] leading-[1.7] text-ink-88">
              {t.about}
            </p>
          </section>
        </Reveal>
      </main>

      {/* ------------------------------ Contacto ----------------------------- */}
      <section id="contacto" className="bg-accent text-bg">
        <div className="mx-auto flex max-w-[1200px] flex-col items-start gap-9 px-[clamp(20px,5vw,64px)] py-[clamp(56px,8vw,96px)]">
          <h3 className="ml-[-0.058em] text-[clamp(34px,4.4vw,58px)] font-extrabold leading-[1.06] tracking-[-0.015em]">
            <span className="block">{t.close.l1}</span>
            <span className="block">{t.close.l2}</span>
          </h3>
          <div className="flex flex-wrap gap-3">
            <a className="btn btn-onaccent" href="mailto:criptamas@gmail.com">
              <Mail />
              criptamas@gmail.com
            </a>
            <a
              className="btn btn-onaccent"
              href="https://www.linkedin.com/in/criptamas/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="btn btn-onaccent"
              href="https://github.com/Criptamas"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              className="btn btn-onaccent"
              href="/files/mi-hoja-de-vida.pdf"
              download="mi-hoja-de-vida.pdf"
            >
              <Download />
              {t.close.cv}
            </a>
          </div>
        </div>
      </section>

      <footer className="mx-auto w-full max-w-[1200px] px-[clamp(20px,5vw,64px)] py-7 text-[13px] text-ink-65">
        {t.footer}
      </footer>
    </div>
  )
}
