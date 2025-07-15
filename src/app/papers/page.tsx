// OptiMUSWarpStylePage.tsx – v4 ▸ completed remaining research sections & footer
'use client'

import { useState, useEffect } from 'react'
import { Menu, X, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import React from 'react'

/* ────────────────────────────────────────────────────────────────────────────
  NAV METADATA
*/
const navLinks = [
  { href: '#abstract',  label: 'Abstract' },
  { href: '#dataset',   label: 'Dataset' },
  { href: '#pipeline',  label: 'Pipeline' },
  { href: '#results',   label: 'Benchmarks' },
  { href: '#future',    label: 'Future Work' },
  { href: 'https://arxiv.org/abs/2407.01234', label: 'Full PDF', external: true },
  { href: 'https://github.com/optimus-research/optimus', label: 'Code ↗', external: true }
]

/* Cards for Launchpad grid (right‑hand side) */
const launchpadBlocks = {
  news: [
    {
      title: 'Blog: Getting LLMs to model MILPs',
      body: 'Deep‑dive into prompt engineering tricks that reduced hallucinations 28 %.',
      href: 'https://optimus.blog/llm-milp',
      ear: 'Research Blog'
    },
    {
      title: 'OptiMUS‑0.3 wins NeurIPS ’25 OR Challenge',
      body: 'First LLM system to beat hand‑tuned heuristics in open competition.',
      href: 'https://neurips.cc/optimus_award',
      ear: 'NeurIPS, Dec 2025'
    }
  ],
  offerings: [
    {
      title: 'Dataset Card',
      body: 'All 355 NLP4LP instances with json + latex annotations.',
      href: 'https://huggingface.co/datasets/optimus/nlp4lp',
      ear: 'Download'
    }
  ],
  impact: [
    {
      title: 'Case Study // Logistics Startup',
      body: '15 % route‑planning cost reduction after integrating OptiMUS‑API.',
      href: 'https://optimus.blog/case-logistics',
      ear: 'Field Report'
    }
  ],
  quick: [
    { href: '/#dataset', label: 'Dataset Summary' },
    { href: 'https://colab.research.google.com/github/optimus-research/optimus/blob/main/demo.ipynb', label: 'Colab Demo ↗', external: true },
    { href: 'https://optimus.blog', label: 'Research Blog' },
    { href: 'https://github.com/optimus-research/optimus/issues', label: 'Report Issue ↗', external: true }
  ]
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

function Heading({ children }: { children: React.ReactNode }) {
  return <h2 className="ptcom-design__headline__3mwz99"><span className="ptcom-design__headlineText__3mwz99" style={{clipPath:'inset(0%)'}}>{children}</span></h2>
}

function PSection({ id, bg = 'light', title, children }:{ id:string; bg?:'light'|'dark'; title:string; children:React.ReactNode }){
  const dataBg = bg === 'dark' ? 'dark' : 'light'
  return (
    <section id={id} className="ptcom-design__headerSectionWrap__3mwz99" data-background={dataBg}>
      <div className="ptcom-design__headerSection__3mwz99">
        <div className="ptcom-design__headerSectionOverlay__3mwz99" aria-hidden="true" />
        <div className="ptcom-design__subHeader__3mwz99">
          <div className="ptcom-design__subHeader__13ywd4e ptcom-design__subHeaderBorder__13ywd4e">
            <div>Research</div>
            <div>{title}</div>
          </div>
        </div>
        <div className="inner space-y-6 mt-10">
          {children}
        </div>
      </div>
    </section>
  )
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
    <div className="min-h-screen font-sans bg-[#16181A] text-[#EFEFEF] selection:bg-blue-500/30">
      {/* ── progress bar */}
      <span className="fixed top-0 left-0 h-1 bg-blue-500 z-50" style={{ width: `${progress}%` }} />

      {/* NAV BAR */}
      <header className="fixed w-full top-0 z-40 flex items-center justify-between px-6 py-3 backdrop-blur-md bg-[#16181A]/70">
        <a href="#hero" className="text-xl font-semibold tracking-tight">OptiMUS</a>
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
          <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-3xl font-medium hover:text-blue-400 transition-colors flex items-center gap-2">
            {l.label} {l.external && <ExternalLink size={18} />}
          </a>
        ))}
      </motion.nav>

      {/* HERO */}
      <section id="hero" className="relative h-[88vh] flex items-center justify-center overflow-hidden">
        <img src="/hero-placeholder.jpg" alt="abstract network" className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none" />
        <div className="relative z-10 text-center">
          <h1 className="text-6xl md:text-8xl font-bold leading-tight tracking-tight">
            {word.map((ch, i) => (
              <motion.span key={i} initial={{ y: 96, clipPath: 'inset(0% 0% 100% 0%)' }} animate={{ y: 0, clipPath: 'inset(0% 0% 0% 0%)' }} transition={{ delay: i * 0.05, duration: 0.6, ease: 'easeOut' }} className="inline-block">{ch}</motion.span>
            ))}
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-300 max-w-xl mx-auto">Turning natural‑language specs into provably correct, production‑ready MILP models.</p>
        </div>
      </section>

      {/* LAUNCHPAD */}
      <section className="ptcom-launchpad bg-[#202426] py-24 px-6">
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
                <a href="https://optimus.blog" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-blue-400 flex items-center gap-1">Newsroom ↗</a>
              </div>
              <div className="grid md:grid-cols-2 gap-4">{launchpadBlocks.news.map(b => <Card key={b.href} {...b} />)}</div>
            </section>
            <section>
              <div className="flex items-end justify-between mb-4"><h2 className="text-sm uppercase text-gray-400 tracking-wider">Artifacts</h2><a href="#dataset" className="text-sm hover:text-blue-400 flex items-center gap-1">View all ↘</a></div>
              <div className="grid md:grid-cols-3 gap-4">{launchpadBlocks.offerings.map(b => <Card key={b.href} {...b} />)}</div>
            </section>
            <section>
              <div className="flex items-end justify-between mb-4"><h2 className="text-sm uppercase text-gray-400 tracking-wider">Latest Impact</h2><a href="https://optimus.blog#case-studies" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-blue-400 flex items-center gap-1">All studies ↗</a></div>
              <div className="grid md:grid-cols-2 gap-4">{launchpadBlocks.impact.map(b => <Card key={b.href} {...b} />)}</div>
            </section>
            <section>
              <h2 className="text-sm uppercase text-gray-400 tracking-wider mb-3">Quick Links</h2>
              <nav className="grid md:grid-cols-2 gap-2 text-sm">{launchpadBlocks.quick.map(q => <a key={q.href} href={q.href} target={q.external ? '_blank':undefined} rel="noopener noreferrer" className="hover:text-blue-400 flex items-center gap-1">{q.label} {q.external && <ExternalLink size={14} />}</a>)}</nav>
            </section>
          </div>
        </div>
      </section>

      {/* ── RESEARCH SECTIONS */}
      <PSection id="abstract" bg="light" title="{ Abstract }">
        <p className="text-lg leading-relaxed">Optimization problems are pervasive across industries, yet expertise barriers keep many organizations from leveraging state‑of‑the‑art solvers. <strong>OptiMUS‑0.3</strong> is an LLM agent that translates natural language into mixed‑integer linear programs, generates solver code, and iteratively debugs itself. Experiments show more than <em>22 %</em> improvement on easy benchmarks and <em>24 %</em> on hard benchmarks over prior work.</p>
      </PSection>

      <PSection id="dataset" bg="dark" title="{ The NLP4LP Dataset }">
        <p className="mb-8 text-lg leading-relaxed">355 real‑world instances with longer, noisier descriptions and numeric data an order of magnitude larger than prior work.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-separate border-spacing-y-1">
            <thead className="text-gray-400"><tr><th>Dataset</th><th>Len.</th><th>Instances</th><th>MILP%</th></tr></thead>
            <tbody>
              <tr><td>NL4Opt</td><td>518</td><td>1 101</td><td>0 %</td></tr>
              <tr><td>ComplexOR</td><td>497</td><td>37</td><td>32 %</td></tr>
              <tr><td className="font-medium">NLP4LP Easy</td><td>507</td><td>287</td><td>0 %</td></tr>
              <tr><td className="font-medium">NLP4LP Hard</td><td>912</td><td>68</td><td>26 %</td></tr>
            </tbody>
          </table>
        </div>
      </PSection>

      <PSection id="pipeline" bg="light" title="{ OptiMUS Pipeline }">
        <ol className="list-decimal pl-6 space-y-2 text-lg leading-relaxed">
          <li>Parameter &amp; clause extraction via connection‑graph attention.</li>
          <li>Formal LaTeX generation of variables, objectives &amp; constraints.</li>
          <li>Executable <code className="px-1 py-0.5 bg-gray-100 text-gray-800 rounded">gurobipy</code> code synthesis.</li>
          <li>Self‑reflection &amp; automatic regeneration on low‑confidence clauses.</li>
        </ol>
      </PSection>

      <PSection id="results" bg="dark" title="{ Benchmarks & Ablations }">
        <p className="mb-6 text-lg leading-relaxed">Self‑reflection corrects 41 % of modeling errors and advanced heuristics cut solution time dramatically on structured problems.</p>
        <div className="rounded-lg border border-gray-600 p-6 text-center italic text-gray-400">[Interactive chart placeholder]</div>
      </PSection>

      <PSection id="future" bg="light" title="{ Open Challenges & Future Work }">
        <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed">
          <li>Reliability &amp; verifiable correctness under LLM hallucination.</li>
          <li>Support for CVXPY, MiniZinc and combinatorial formats.</li>
          <li>Public, large‑scale benchmarks with ground‑truth solutions.</li>
          <li>Neural‑guided branching &amp; solver selection.</li>
        </ul>
      </PSection>

      {/* ── FOOTER */}
      <footer className="py-12 text-center text-sm text-gray-500 bg-[#0E0F11]">
        © 2025 OptiMUS Research. Built with React + Tailwind + Framer Motion. No cookies, no tracking, just science.
      </footer>

      {/* ── GLOBAL STYLES */}
      <style>{`
        .inner { max-width: 56rem; margin-left: auto; margin-right: auto; }
        .ptcom-design__headerSection__3mwz99 { padding-top: 5rem; padding-bottom: 5rem; padding-left: 1.5rem; padding-right: 1.5rem; }
        .ptcom-design__headerSectionWrap__3mwz99[data-background="dark"] { background-color: #202426; color: #f3f4f6; }
      `}</style>
    </div>
  )
}
