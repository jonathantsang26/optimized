// OptiMUSWarpStylePage.tsx – v4 ▸ completed remaining research sections & footer
'use client'

import { useState, useEffect } from 'react'
import { Menu, X, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import ResearchAbstract from '@/components/research/ResearchAbstract';
import ResearchDataset from '@/components/research/ResearchDataset';
import ResearchPipeline from '@/components/research/ResearchPipeline';
import ResearchBenchmarks from '@/components/research/ResearchBenchmarks';
import ResearchFutureWork from '@/components/research/ResearchFutureWork';

/* ────────────────────────────────────────────────────────────────────────────
  NAV METADATA
*/
const navLinks = [
  { href: '#abstract',  label: 'Abstract' },
  { href: '#dataset',   label: 'Dataset' },
  { href: '#pipeline',  label: 'Pipeline' },
  { href: '#results',   label: 'Benchmarks' },
  { href: '#future',    label: 'Future Work' },
  { href: 'https://arxiv.org/pdf/2407.19633', label: 'Full PDF', external: true },
  { href: 'https://github.com/teshnizi/OptiMUS', label: 'Code ↗', external: true }
]

/* Cards for Launchpad grid (right‑hand side) */
const launchpadBlocks = {
  news: [
    {
      title: 'Paper: Getting LLMs to model MILPs',
      body: 'Deep‑dive into prompt engineering tricks that reduced hallucinations 28 %.',
      href: 'https://arxiv.org/pdf/2407.19633',
      ear: 'Research Paper'
    },
    {
      title: 'OptiMUS‑0.3 ICML 2024 @ Austria ',
      body: 'Developed a new method to generate MILP models from natural language specifications.',
      href: 'https://icml.cc/media/PosterPDFs/ICML%202024/33771.png?t=1721427021.3340716',
      ear: 'ICML, July 2024'
    }
  ],
  offerings: [
    {
      title: 'V0.3: LLMs at Scale ',
      body: '+ RAG and large-scale optimization techniques.',
      href: 'https://arxiv.org/abs/2407.19633',
      ear: 'Download'
    },
    {
      title: 'V0.2: Scalable [MILP] Solvers and LLMs',
      body: 'Scalable agent-based implementation. Suitable for large and complicated tasks.',
      href: 'https://arxiv.org/pdf/2402.10172',
      ear: 'Download'
    },
    {
      title: 'V0.1: MIP Solvers and LLMs',
      body: 'Sequential work-flow implementation. Suitable for small and medium-sized problems',
      href: 'https://arxiv.org/pdf/2310.06116',
      ear: 'Download'
    }
  ],

  impact: [
    {
      title: 'Case Study // Direct Materials',
      body: '$4.7 M consolidation upside by optimizing 380+ SKUs',
      href: '/cases',
      ear: 'Field Report'
    }
  ],
}

/* ────────────────────────────────────────────────────────────────────────────
  SMALL HELPERS
*/
function useScrollProgress() {
  const [p, setP] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement
      setP((scrollTop / (scrollHeight - clientHeight)) * 100)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return p
}
function Card({ title, body, href, ear }: { title: string; body: string; href: string; ear: string }) {
  return (
    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
       className="group block rounded-lg border border-white/10 hover:border-blue-400 transition-colors p-4 bg-white/5">
      <header className="text-xs uppercase tracking-wide text-gray-400 mb-2">{ear}</header>
      <h3 className="font-semibold mb-1 group-hover:text-blue-400 transition-colors">{title}</h3>
      <p className="text-sm text-gray-300 leading-snug">{body}</p>
      <span className="mt-3 inline-flex items-center gap-1 text-blue-400 text-sm">{href.includes('http') ? '↗' : '↳'}<span className="sr-only">open</span></span>
    </a>
  )
}

/* ────────────────────────────────────────────────────────────────────────────
  MAIN COMPONENT
*/
export default function OptiMUSWarpStylePage() {
  const progress = useScrollProgress()
  const [open, setOpen] = useState(false)
  const word = 'OptiMUS‑0.3'.split('')

  return (
    <div className="min-h-screen font-sans text-[#EFEFEF] selection:bg-blue-500/30">
      {/* ── progress bar */}
      <span className="fixed top-0 left-0 h-1 bg-blue-500 z-50" style={{ width: `${progress}%` }} />

      {/* NAV BAR */}
      <header className="fixed w-full top-0 z-40 flex items-center justify-between px-6 py-3 backdrop-blur-md bg-[#16181A]/70">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-base font-semibold tracking-tight hover:text-blue-400 transition-colors">← Home</Link>
          <a href="" className="text-base font-bold tracking-tight">Optimized</a>
        </div>
        <button aria-label="toggle menu" onClick={() => setOpen(!open)} className="p-2 rounded hover:bg-white/10">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {/* Mobile nav */}
      <motion.nav
        initial={{ x: '100%' }}
        animate={{ x: open ? 0 : '100%' }}
        transition={{ type: 'spring', stiffness: 260, damping: 30 }}
        className="fixed inset-0 z-30 bg-[#0E0F11]/90 backdrop-blur-lg p-8 flex flex-col gap-6"
      >
        {navLinks.map(l => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-h2x font-medium hover:text-blue-400 transition-colors flex items-center gap-2">
            {l.label} {l.external && <ExternalLink size={18} />}
          </a>
        ))}
      </motion.nav>

      {/* HERO */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center">
          <h1 className="text-d1 font-bold leading-tight tracking-tight">
            {word.map((ch, i) => (
              <motion.span key={i} initial={{ y: 96, clipPath: 'inset(0% 0% 100% 0%)' }} animate={{ y: 0, clipPath: 'inset(0% 0% 0% 0%)' }} transition={{ delay: i * 0.05, duration: 0.6, ease: 'easeOut' }} className="inline-block">{ch}</motion.span>
            ))}
          </h1>
          <p className="mt-4 text-h4 text-gray-300 max-w-xl mx-auto">Turning natural‑language specs into provably correct, production‑ready MILP models.</p>
        </div>
        {/* Scroll Indicator */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-8 z-20 flex flex-col items-center animate-bounce select-none">
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white opacity-90 drop-shadow-lg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
          <span className="mt-2 text-white text-sm opacity-90 tracking-wide drop-shadow"></span>
        </div>
      </section>

      {/* LAUNCHPAD */}
      <section className="ptcom-launchpad bg-[#202426] px-6 min-h-screen flex flex-col justify-center relative">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[220px_1fr] gap-10">
          {/* LEFT NAV */}
          <article>
            <h2 className="text-sm uppercase text-gray-400 mb-4 tracking-wider">Navigation</h2>
            <ul className="space-y-2">
              {navLinks.map(l => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-blue-400 flex items-center gap-1">{l.label} {l.external && <ExternalLink size={14} />}</a>
                </li>
              ))}
            </ul>
          </article>

          {/* RIGHT GRID */}
          <div className="space-y-16">
            <section>
              <div className="flex items-end justify-between mb-4">
                <h2 className="text-sm uppercase text-gray-400 tracking-wider">Latest News</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">{launchpadBlocks.news.map(b => <Card key={b.href} {...b} />)}</div>
            </section>
            <section>
              <div className="flex items-end justify-between mb-4"><h2 className="text-sm uppercase text-gray-400 tracking-wider">Artifacts</h2></div>
              <div className="grid md:grid-cols-3 gap-4">{launchpadBlocks.offerings.map(b => <Card key={b.href} {...b} />)}</div>
            </section>
            <section>
              <div className="flex items-end justify-between mb-4"><h2 className="text-sm uppercase text-gray-400 tracking-wider">Case Studies</h2></div>
              <div className="grid md:grid-cols-2 gap-4">{launchpadBlocks.impact.map(b => <Card key={b.href} {...b} />)}</div>
            </section>
          </div>
        </div>
      </section>

      {/* ── RESEARCH SECTIONS */}
      <ResearchAbstract />
      <ResearchDataset />
      <ResearchPipeline />
      <ResearchBenchmarks />
      <ResearchFutureWork />

      {/* ── FOOTER */}
      <footer className="py-12 text-center text-sm text-gray-500 bg-[#0E0F11]">
        © 2025 OptiMUS Research. Built with React + Tailwind + Framer Motion. No cookies, no tracking, just science.
      </footer>

      {/* ── GLOBAL STYLES */}
      <style jsx global>{`
        .inner { @apply max-w-4xl mx-auto; }
        .ptcom-design__headerSection__3mwz99 { @apply py-20 px-6; }
        .ptcom-design__headerSectionWrap__3mwz99[data-background="dark"] { @apply bg-[#202426] text-gray-100; }
      `}</style>
    </div>
  )
}
