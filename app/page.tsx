'use client'

import { useEffect, useRef, useState } from 'react'
import {
  ArrowUp,
  ArrowUpRight,
  AtSign,
  BookOpen,
  BriefcaseBusiness,
  Check,
  Code2,
  Copy,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  MapPin,
  Menu,
  Monitor,
  Send,
  Sparkles,
  Terminal,
  Trophy,
  Wrench,
  X,
} from 'lucide-react'

const EMAIL = 'josephxeno.contact@gmail.com'
const GITHUB_PROFILE = 'https://github.com/X3N0Xeno'
const LINKEDIN = 'https://www.linkedin.com/in/josephxeno'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

const skills = [
  { title: 'Languages', icon: Code2, items: ['Kotlin', 'Java', 'C#', 'C++', 'Python', 'GDScript', 'SQL'] },
  { title: 'Frameworks & Engines', icon: Monitor, items: ['Android Studio (MVP)', 'Django', 'JavaFX', '.NET WinForms', 'Godot Engine'] },
  { title: 'Tools & Databases', icon: Wrench, items: ['MySQL', 'SQLite', 'Git', 'GitHub', 'XML', 'Vercel', 'Figma'] },
  { title: 'Core Concepts', icon: Terminal, items: ['OOP', 'Data Structures & Algorithms', 'Systems Simulation', 'UI/UX Design'] },
]

interface Project {
  number: string
  title: string
  subtitle: string
  description: string
  tech: string[]
  highlights: string[]
  githubUrl?: string
  liveUrl?: string
}

// Swap githubUrl for the exact repo (e.g. `${GITHUB_PROFILE}/DeleGate`) and add liveUrl where a demo exists.
const projects: Project[] = [
  { number: '01', title: 'DeleGate', subtitle: 'Project & Production Tracker', description: 'A focused operations workspace for teams that need clarity from brief to delivery.', tech: ['Python', 'Django', 'SQLite / PostgreSQL'], highlights: ['Workflow coordination', 'Role-based authentication', 'Responsive management dashboards'], githubUrl: GITHUB_PROFILE },
  { number: '02', title: 'StashRaid', subtitle: 'Android Study & Notes App', description: 'An offline-first study companion built to make revision fast, searchable, and frictionless.', tech: ['Kotlin', 'Android Studio', 'XML'], highlights: ['MVP architecture', 'Offline persistence', 'Rapid revision indexing'], githubUrl: GITHUB_PROFILE },
  { number: '03', title: 'WildFEAST', subtitle: 'Online Canteen Ordering System', description: 'A dual-portal ordering experience connecting campus merchants and hungry students.', tech: ['Java', 'JavaFX', 'MySQL'], highlights: ['Merchant / student portals', 'Relational database schema', 'Live JDBC order queues'], githubUrl: GITHUB_PROFILE },
  { number: '04', title: 'Project Equinox', subtitle: 'SeasonFuzzy · Systems Simulation Engine', description: 'A visual simulation engine exploring how fuzzy logic can model changing weather systems.', tech: ['C#', 'Windows Forms'], highlights: ['Multi-variable weather dynamics', 'Fuzzy logic simulation', 'Real-time visualization'], githubUrl: GITHUB_PROFILE },
  { number: '05', title: 'Encore & Revelation', subtitle: '2D Interactive Games', description: 'A pair of expressive game experiments where sound, movement, and world-building meet.', tech: ['Godot Engine', 'GDScript'], highlights: ['Rhythm-synchronized mechanics', 'Tilemap collision physics', 'Custom level editors'], githubUrl: GITHUB_PROFILE },
]

const leadership = [
  ['2024–2025', 'DOST Scholars’ Association CIT-U', 'Creatives Committee Member & Director for Events and Logistics'],
  ['2024–2025', 'DOST SA SIETE', 'SPARKS Collective Member · Regional'],
  ['2024–Present', 'START - DOST', 'Member · National'],
]

const honors = [
  ['Robotics Mentor', 'RoboQuest 2023 · 6th Place Team'],
  ['2nd Place', 'CESAFI Robotics Cup · 2023'],
  ['1st Place', 'Division Science, Technology, and Math Fair · LIKHA 2022'],
  ['2nd Place', 'Regional Science, Technology, and Math Fair · LIKHA 2022'],
  ['3rd Place', 'National Virtual Robotics Competition · 2021'],
]

const terminalLines = [
  <>
    <span className="text-slate-600">const</span> <span className="text-cyan-300">location</span> ={' '}
    <span className="text-amber-300">&quot;Cebu, PH&quot;</span>
  </>,
  <>
    <span className="text-slate-600">const</span> <span className="text-cyan-300">focus</span> = [
  </>,
  <span key="focus" className="pl-5 text-amber-300">
    &quot;build&quot;, &quot;learn&quot;, &quot;ship&quot;
  </span>,
  <>]</>,
  <>&nbsp;</>,
  <span key="c1" className="text-slate-600">{'// always curious,'}</span>,
  <span key="c2" className="text-slate-600">{'// always iterating'}</span>,
]

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.28em] text-cyan-400">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-100 md:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-slate-400">{description}</p>}
    </div>
  )
}

function CopyEmailButton({ variant }: { variant: 'icon' | 'pill' }) {
  const [copied, setCopied] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current)
    }
  }, [])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      if (timer.current) clearTimeout(timer.current)
      timer.current = setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard unavailable (insecure context / denied): fall back to the mail client.
      window.location.href = `mailto:${EMAIL}`
    }
  }

  const Icon = copied ? Check : Copy

  return (
    <span className="relative inline-flex">
      <button
        type="button"
        onClick={handleCopy}
        aria-label={copied ? 'Email address copied' : 'Copy email address'}
        className={
          variant === 'icon'
            ? 'transition-colors hover:text-cyan-300 focus-visible:text-cyan-300'
            : 'inline-flex items-center gap-2 rounded-md border border-white/15 px-5 py-3.5 font-mono text-xs text-slate-200 transition-all hover:border-cyan-400/50 hover:text-cyan-300'
        }
      >
        {variant === 'pill' && <span>{EMAIL}</span>}
        <Icon size={variant === 'icon' ? 17 : 15} className={copied ? 'text-cyan-300' : undefined} />
      </button>
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-cyan-400 px-2.5 py-1 font-mono text-[10px] font-bold text-[#041014] transition-all duration-200 ${
          copied ? 'translate-y-0 opacity-100' : 'translate-y-1 opacity-0'
        }`}
      >
        Copied to clipboard!
      </span>
      <span role="status" className="sr-only">
        {copied ? 'Copied to clipboard!' : ''}
      </span>
    </span>
  )
}

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)

  const closeMenu = () => setMobileMenuOpen(false)

  // Smooth anchor scrolling (respects reduced-motion) without needing to touch layout.tsx.
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const root = document.documentElement
    const previous = root.style.scrollBehavior
    root.style.scrollBehavior = reduce ? 'auto' : 'smooth'
    return () => {
      root.style.scrollBehavior = previous
    }
  }, [])

  // Close on Escape and lock body scroll while the slide-over is open.
  useEffect(() => {
    if (!mobileMenuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false)
    }
    document.addEventListener('keydown', onKey)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
    }
  }, [mobileMenuOpen])

  // Reveal the back-to-top button after scrolling past the hero.
  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <main id="top" className="min-h-screen overflow-x-clip bg-[#05070a] text-slate-100 selection:bg-cyan-400 selection:text-[#05070a]">
      <div className="pointer-events-none fixed inset-0 opacity-40 [background-image:linear-gradient(rgba(148,163,184,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.04)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="pointer-events-none fixed left-1/2 top-[-18rem] h-[32rem] w-[48rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#05070a]/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8" aria-label="Main navigation">
          <a href="#top" className="font-mono text-sm font-bold tracking-tight text-white">
            <span className="text-cyan-400">./</span>xeno<span className="text-slate-500">.dev</span>
          </a>
          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map(({ label, href }) => (
              <a key={href} href={href} className="font-mono text-xs text-slate-400 transition-colors hover:text-cyan-300">
                {label}
              </a>
            ))}
          </div>
          <a
            href={`mailto:${EMAIL}`}
            className="hidden items-center gap-2 rounded-full border border-cyan-400/30 px-4 py-2 font-mono text-xs text-cyan-300 transition-all hover:border-cyan-300 hover:bg-cyan-300/10 sm:flex"
          >
            Let&apos;s talk <ArrowUpRight size={14} />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="rounded-md p-1 text-slate-300 transition-colors hover:text-cyan-300 md:hidden"
            aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {/* Mobile slide-over */}
      <div
        className={`fixed inset-0 z-40 transition-[visibility] duration-300 md:hidden ${mobileMenuOpen ? 'visible' : 'invisible'}`}
      >
        <div
          onClick={closeMenu}
          aria-hidden="true"
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
        />
        <aside
          id="mobile-menu"
          aria-label="Mobile navigation"
          className={`absolute right-0 top-0 flex h-full w-72 max-w-[85%] flex-col border-l border-white/10 bg-[#05070a] p-6 shadow-2xl shadow-cyan-950/30 transition-transform duration-300 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="mb-8 flex items-center justify-between">
            <span className="font-mono text-sm font-bold text-white">
              <span className="text-cyan-400">./</span>menu
            </span>
            <button
              type="button"
              onClick={closeMenu}
              aria-label="Close navigation"
              className="rounded-md p-1 text-slate-400 transition-colors hover:text-cyan-300"
            >
              <X size={20} />
            </button>
          </div>
          <div className="flex flex-col">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={closeMenu}
                className="border-b border-white/10 py-4 font-mono text-sm text-slate-300 transition-colors hover:text-cyan-300"
              >
                {label}
              </a>
            ))}
          </div>
          <a
            href={`mailto:${EMAIL}`}
            onClick={closeMenu}
            className="mt-auto inline-flex items-center justify-center gap-2 rounded-md bg-cyan-400 px-5 py-3 font-mono text-xs font-bold text-[#041014] transition-all hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.22)]"
          >
            Let&apos;s talk <ArrowUpRight size={15} />
          </a>
        </aside>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <section id="about" className="grid min-h-[calc(100vh-73px)] scroll-mt-20 items-center gap-16 py-20 lg:grid-cols-[1.25fr_0.75fr] lg:py-24">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1.5 font-mono text-xs text-cyan-300">
              <span className="size-1.5 animate-pulse rounded-full bg-cyan-400" /> Available for meaningful builds
            </div>
            <p className="mb-5 font-mono text-sm text-slate-500">Hello, I&apos;m</p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-white sm:text-7xl lg:text-8xl">
              Joseph Xeno<br />
              <span className="text-cyan-400">O. Banzon</span>
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-8 text-slate-300">
              Computer Science Student &amp; DOST Scholar <span className="text-slate-600">|</span> Software Engineer
            </p>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-400">
              Building scalable web applications, native Android experiences, and simulation systems.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md bg-cyan-400 px-5 py-3 font-mono text-xs font-bold text-[#041014] transition-all hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.22)]"
              >
                View Projects <ArrowUpRight size={15} />
              </a>
              <a
                href="/resume.pdf"
                download="Joseph_Xeno_Banzon_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-white/15 px-5 py-3 font-mono text-xs text-slate-200 transition-all hover:border-cyan-400/50 hover:text-cyan-300"
              >
                <Download size={15} /> Download Resume
              </a>
            </div>
            <div className="mt-10 flex items-center gap-5 text-slate-500">
              <a aria-label="GitHub" href={GITHUB_PROFILE} target="_blank" rel="noreferrer" className="transition-colors hover:text-cyan-300">
                <Code2 size={19} />
              </a>
              <a aria-label="LinkedIn" href={LINKEDIN} target="_blank" rel="noreferrer" className="transition-colors hover:text-cyan-300">
                <BriefcaseBusiness size={19} />
              </a>
              <a aria-label="Email" href={`mailto:${EMAIL}`} className="transition-colors hover:text-cyan-300">
                <AtSign size={19} />
              </a>
              <CopyEmailButton variant="icon" />
              <span className="h-px w-16 bg-white/15" />
              <span className="font-mono text-xs text-slate-600">CEBU, PH</span>
            </div>
          </div>

          <div className="hidden justify-end lg:flex">
            <div className="relative w-full max-w-xs overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] shadow-2xl shadow-cyan-950/20">
              <div className="flex items-center gap-4 border-b border-white/10 bg-white/[0.02] px-4 py-3">
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="size-2.5 rounded-full bg-red-500/80" />
                  <span className="size-2.5 rounded-full bg-yellow-400/80" />
                  <span className="size-2.5 rounded-full bg-green-500/80" />
                </div>
                <span className="font-mono text-[10px] text-slate-500">profile.sys</span>
                <span className="ml-auto text-cyan-400">●</span>
              </div>
              <div className="p-5 pt-6 font-mono text-xs leading-6">
                {terminalLines.map((line, i) => (
                  <div key={i} className="grid grid-cols-[1.5rem_1fr] gap-3">
                    <span aria-hidden="true" className="select-none text-right text-[10px] leading-6 text-slate-700">{i + 1}</span>
                    <span>{line}</span>
                  </div>
                ))}
                <div className="grid grid-cols-[1.5rem_1fr] gap-3">
                  <span aria-hidden="true" className="select-none text-right text-[10px] leading-6 text-slate-700">{terminalLines.length + 1}</span>
                  <span className="flex items-center">
                    <span className="text-cyan-400">&gt;</span>
                    <span className="inline-block w-2 h-4 bg-cyan-400 animate-pulse ml-1" />
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 border-t border-white/10 px-5 py-4 text-[10px] text-slate-600">
                <MapPin size={12} className="text-cyan-400" /> 10.3157° N, 123.8854° E
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="scroll-mt-20 border-t border-white/10 py-24">
          <SectionHeading eyebrow="01 / toolkit" title="A practical, curious toolkit." description="From low-level logic to polished interfaces, I like understanding the full shape of a problem and building the right system around it." />
          <div className="grid gap-4 sm:grid-cols-2">
            {skills.map(({ title, icon: Icon, items }) => (
              <div key={title} className="group rounded-xl border border-white/10 bg-white/[0.025] p-6 transition-all hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/[0.03]">
                <div className="mb-6 flex items-center gap-3">
                  <Icon size={18} className="text-cyan-400" />
                  <h3 className="font-mono text-sm text-slate-200">{title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span key={item} className="rounded-md border border-white/10 px-2.5 py-1.5 font-mono text-[11px] text-slate-400 transition-colors group-hover:border-white/15 group-hover:text-slate-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="scroll-mt-20 border-t border-white/10 py-24">
          <SectionHeading eyebrow="02 / selected work" title="Things I've built." description="A selection of academic and personal projects where I turned ideas into working systems." />
          <div className="grid gap-4 lg:grid-cols-2">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className={`group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.025] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-[0_0_25px_rgba(34,211,238,0.08)] ${
                  index === projects.length - 1 ? 'lg:col-span-2' : ''
                }`}
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-400/[0.07] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-mono text-xs text-cyan-400">{project.number}</span>
                    {(project.githubUrl || project.liveUrl) && (
                      <div className="flex items-center gap-3">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${project.title} source code on GitHub`}
                            className="rounded-md p-1 text-slate-500 transition-all hover:scale-110 hover:text-cyan-300 focus-visible:text-cyan-300"
                          >
                            <Github size={17} />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${project.title} live demo`}
                            className="rounded-md p-1 text-slate-500 transition-all hover:scale-110 hover:text-cyan-300 focus-visible:text-cyan-300"
                          >
                            <ExternalLink size={17} />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                  <h3 className="mt-9 text-2xl font-medium text-white">{project.title}</h3>
                  <p className="mt-1 font-mono text-xs text-cyan-400/80">{project.subtitle}</p>
                  <p className="mt-5 max-w-xl text-sm leading-6 text-slate-400">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="rounded-full bg-cyan-400/10 px-2.5 py-1 font-mono text-[10px] text-cyan-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <ul className="mt-6 grid grid-cols-1 gap-2 border-t border-white/10 pt-5 text-xs text-slate-400 md:grid-cols-3">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2">
                        <span className="mt-1 text-cyan-400">→</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="scroll-mt-20 border-t border-white/10 py-24">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow="03 / involvement" title="Beyond the code." description="Leadership and community work that shaped how I collaborate, communicate, and show up for a team." />
              <div className="flex flex-col gap-0">
                {leadership.map(([date, org, role]) => (
                  <div key={org} className="grid grid-cols-[100px_1fr] gap-4 border-b border-white/10 py-5 first:border-t">
                    <span className="font-mono text-[11px] text-cyan-400">{date}</span>
                    <div>
                      <h3 className="text-sm font-medium text-slate-200">{org}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-500">{role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div id="education" className="scroll-mt-24">
              <SectionHeading eyebrow="04 / education" title="Where I'm learning." />
              <div className="flex flex-col gap-4">
                <div className="rounded-xl border border-white/10 bg-white/[0.025] p-6">
                  <GraduationCap className="mb-8 text-cyan-400" size={22} />
                  <h3 className="text-lg text-slate-100">Cebu Institute of Technology – University</h3>
                  <p className="mt-2 text-sm text-slate-400">BS Computer Science · 2024 – Present</p>
                  <span className="mt-4 inline-flex rounded-full bg-cyan-400/10 px-2.5 py-1 font-mono text-[10px] text-cyan-300">DOST Scholar</span>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.025] p-6">
                  <BookOpen className="mb-8 text-cyan-400" size={22} />
                  <h3 className="text-lg text-slate-100">CIT-U Senior High School</h3>
                  <p className="mt-2 text-sm text-slate-400">STEM Track · 2022 – 2024</p>
                  <span className="mt-4 inline-flex rounded-full bg-white/10 px-2.5 py-1 font-mono text-[10px] text-slate-300">Graduated with Honors</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 py-24">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <SectionHeading eyebrow="05 / recognition" title="Milestones along the way." />
            </div>
            <div className="grid gap-3">
              {honors.map(([title, detail]) => (
                <div key={detail} className="flex items-start gap-4 rounded-lg border border-white/10 bg-white/[0.02] p-4">
                  <Trophy size={17} className="mt-0.5 shrink-0 text-amber-300" />
                  <div>
                    <p className="text-sm font-medium text-slate-200">{title}</p>
                    <p className="mt-1 text-xs text-slate-500">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 border-t border-white/10 py-28 text-center">
          <Sparkles className="mx-auto mb-6 text-cyan-400" size={22} />
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-400">Have a project in mind?</p>
          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Let&apos;s make something<br />
            <span className="text-cyan-400">worth shipping.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-slate-400">
            Whether it&apos;s a product idea, a systems problem, or a chance to learn together — my inbox is open.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-md bg-cyan-400 px-6 py-3.5 font-mono text-xs font-bold text-[#041014] transition-all hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.22)]"
            >
              Get in touch <Send size={15} />
            </a>
            <CopyEmailButton variant="pill" />
          </div>
        </section>
      </div>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p className="font-mono text-[11px] text-slate-600">© {new Date().getFullYear()} Joseph Xeno O. Banzon</p>
          <div className="flex items-center gap-5">
            <a href={GITHUB_PROFILE} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-slate-500 transition-colors hover:text-cyan-300">
              <Code2 size={16} />
            </a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-slate-500 transition-colors hover:text-cyan-300">
              <BriefcaseBusiness size={16} />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 font-mono text-[10px] text-slate-400 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
            >
              Email me <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
      </footer>

      <a
        href="#top"
        aria-label="Back to top"
        tabIndex={showBackToTop ? 0 : -1}
        className={`fixed bottom-6 right-6 z-30 inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-[#05070a]/80 text-slate-400 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.12)] ${
          showBackToTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
        }`}
      >
        <ArrowUp size={16} />
      </a>
    </main>
  )
}