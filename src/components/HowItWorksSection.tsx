// src/components/how‑it‑works/HowItWorksSection.tsx
import React, { useRef, useEffect } from 'react'

/* ------------------------------------------------------------------ */
/*  DATA                                                              */
/* ------------------------------------------------------------------ */

interface Step {
  id: number
  headline: string
  blurb: string
  detail: string
  video: string
}

const STEPS: Step[] = [
  {
    id: 1,
    headline: 'Collect Datasets',
    blurb: 'Multi‑source Data Integration',
    detail:
      'Aggregate supply‑chain data from ERP systems, IoT sensors, and external APIs for rich, unified analysis.',
    video: '/videos/how1New.mp4',
  },
  {
    id: 2,
    headline: 'Train Models',
    blurb: 'Advanced AI Development',
    detail:
      'Develop and fine‑tune machine‑learning models using SOTA architectures for demand forecasting and risk assessment.',
    video: '/videos/how2.mp4',
  },
  {
    id: 3,
    headline: 'Benchmark',
    blurb: 'Performance Validation',
    detail:
      'Validate model performance against industry benchmarks and stress‑test results with rigorous protocols.',
    video: '/videos/how3.mp4',
  },
  {
    id: 4,
    headline: 'Monitor',
    blurb: 'Real‑time Insights',
    detail:
      'Stay informed with smart alerts, detect delays early, and keep cost & supplier data synced with your ERP.',
    video: '/videos/how4.mp4',
  },
]

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                         */
/* ------------------------------------------------------------------ */

export default function HowItWorksSection() {
  /* simple fade / slide‑in when a card enters viewport */
  const cardRefs = useRef<Array<HTMLDivElement | null>>([])

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add('is-visible')
        })
      },
      { threshold: 0.25 },
    )

    cardRefs.current.forEach(el => el && io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section
      id="explain"
      className="relative w-full bg-[#f9fafb] px-4 md:px-12 lg:px-24 py-32"
    >
      <div className="mx-auto max-w-7xl gap-y-16 lg:flex lg:gap-x-20">
        {/* ------------------------------------------------------------------
            LEFT (sticky) – headline & paragraph
        ------------------------------------------------------------------ */}
        <div className="lg:w-[36rem] lg:pr-0">
          <div className="sticky top-20 md:top-150 space-y-10 lg:max-w-md text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-left">
              Procurement Automation
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-gray-600 text-left">
              Optimized integrates with your existing systems and uses AI trained
              on supply‑chain workflows to automate everything
              from proactively checking orders to running an entire RFQ process
              for&nbsp;you.
            </p>
          </div>
        </div>

        {/* ------------------------------------------------------------------
            RIGHT – scrolling cards
        ------------------------------------------------------------------ */}
        <div className="flex flex-col gap-16 min-w-0 flex-1">
          {STEPS.map((step, idx) => (
            <article
              /* eslint-disable-next-line react/no-array-index-key */
              key={step.id}
              ref={(el: HTMLDivElement | null) => {
                cardRefs.current[idx] = el
              }}
              className={
                `opacity-0 translate-y-12 pointer-events-none
                transition-all duration-700 ease-out will-change-transform
                [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0 [&.is-visible]:pointer-events-auto
                border border-gray-200 rounded-2xl overflow-hidden shadow w-full max-w-5xl self-center`
              }
              style={{ transitionDelay: `${idx * 300}ms` }}
            >
              {/* video */}
              <div className="relative w-full aspect-[2/1] bg-gray-200">
                <video
                  src={step.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>

              {/* copy */}
              <div className="space-y-7 p-16 bg-white">
                <div className="flex items-center gap-3">
                  <span className="text-xl font-semibold tracking-widest text-gray-400">
                    {step.id.toString().padStart(2, '0')}
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-r from-blue-600 to-purple-500" />
                </div>

                <h3 className="text-4xl md:text-5xl font-bold text-gray-900">
                  {step.headline}
                </h3>

                <p className="text-blue-600 font-semibold text-2xl md:text-3xl">{step.blurb}</p>

                <p className="text-gray-600 leading-relaxed">{step.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
