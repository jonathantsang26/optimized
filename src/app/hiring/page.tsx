"use client"

import { useState, useEffect } from "react"
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

const ROLES = [
  {
    title: "AI Research Engineer",
    location: "Remote / New York",
    type: "Full-time",
    description: "Build and deploy cutting-edge AI models for procurement optimization. Collaborate with Stanford researchers and production teams.",
    requirements: [
      "Strong Python & ML background",
      "Experience with LLMs or optimization",
      "Startup mindset"
    ],
    apply: "mailto:careers@optimizedhq.com?subject=AI%20Research%20Engineer%20Application"
  },
  {
    title: "Full Stack Engineer",
    location: "Remote / New York",
    type: "Full-time",
    description: "Own features end-to-end, from backend APIs to beautiful UIs. Work closely with founders and customers.",
    requirements: [
      "React/Next.js, TypeScript, Node.js",
      "Product sense and UX focus",
      "Desire to ship fast and learn"
    ],
    apply: "mailto:careers@optimizedhq.com?subject=Full%20Stack%20Engineer%20Application"
  },
  {
    title: "Founding Product Designer",
    location: "Remote / New York",
    type: "Full-time / Contract",
    description: "Design intuitive, delightful experiences for complex workflows. Shape the product and brand from the ground up.",
    requirements: [
      "Portfolio of shipped SaaS or B2B work",
      "Systems thinking and prototyping skills",
      "Interest in AI and automation"
    ],
    apply: "mailto:careers@optimizedhq.com?subject=Founding%20Product%20Designer%20Application"
  }
]

const LOGOS = [
  "/berkeley.png",
  "/bcg.png",
  "/nasa.png",
  "/stanford.png",
]
const LOGOS2 = [
  "/voith.png",
  "/maersk.png",
  "/gap.png",
  "/adp.png",
]
const LOGOS3 = [
  "/sony.png",
  "/zara.png",
  "/huawei.png",
  "/boeing.png",
]

const ALL_LOGOS = [...LOGOS, ...LOGOS2, ...LOGOS3];

export default function HiringPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    vertical: true,
    slides: { perView: 4, spacing: 16 },
    drag: true,
    renderMode: 'performance',
    breakpoints: {
      '(max-width: 768px)': {
        slides: { perView: 3, spacing: 8 },
      },
    },
  })
  // Auto-scroll logic
  useEffect(() => {
    if (!slider.current) return
    const interval = setInterval(() => {
      slider.current?.next()
    }, 2500)
    return () => clearInterval(interval)
  }, [slider])

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto pt-16 pb-16 gap-12 px-4 md:px-8">
        {/* Main Content + Open Roles */}
        <section className="flex-1 flex flex-col items-center md:items-start">
          <div className="w-full text-center md:text-left flex flex-col justify-center items-center md:items-start">
            <div className="mb-6 w-full">
              <a href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors font-medium">
                ← Back to Home
              </a>
            </div>
            <h1 className="text-h1 md:text-d1 font-display font-bold mb-6">Join Us</h1>
            <p className="text-h3 md:text-h2 text-gray-700 mb-8">
              Help us build the future of AI-powered procurement.<br />
            </p>
            {/*<p className="text-h2 text-gray-500 mb-2">
              We value curiosity, velocity, and ownership. If you want to work on hard problems with real-world impact, we want to hear from you.
            </p>*/}
          </div>
          {/* Open Roles Section (now inside the right column) */}
          <section className="w-full max-w-2xl px-4 pb-24 pt-12">
            <h2 className="text-h2 font-display font-semibold mb-8 text-center md:text-left">Open Roles</h2>
            <div className="space-y-8">
              {ROLES.map((role, idx) => (
                <div
                  key={role.title}
                  className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg transition hover:border-blue-400"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <h3 className="text-h2 font-display font-bold text-gray-900">{role.title}</h3>
                      <div className="text-base text-gray-500 mt-1">
                        {role.location} &middot; {role.type}
                      </div>
                    </div>
                    <a
                      href={role.apply}
                      className="mt-3 md:mt-0 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg transition"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Apply
                    </a>
                  </div>
                  <button
                    className="mt-4 text-blue-600 hover:underline text-base"
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    aria-expanded={openIndex === idx}
                    aria-controls={`role-details-${idx}`}
                  >
                    {openIndex === idx ? "Hide details" : "Show details"}
                  </button>
                  {openIndex === idx && (
                    <div
                      id={`role-details-${idx}`}
                      className="mt-4 text-gray-700 animate-fade-in"
                    >
                      <p className="mb-3">{role.description}</p>
                      <ul className="list-disc list-inside text-gray-600 mb-2">
                        {role.requirements.map((req, i) => (
                          <li key={i}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </section>
        {/* Vertical Carousel */}
        <aside className="md:w-1/3 flex flex-col items-center md:items-start">
          <h2 className="text-h3 font-semibold mb-4 text-left w-full pl-2 md:pl-4">
            Expertise from
          </h2>
          <div ref={sliderRef} className="keen-slider hiring-carousel h-96 md:h-[54rem] w-56 md:w-64 bg-white rounded-2xl shadow border border-gray-200 overflow-hidden">
            <style jsx>{`
              .hiring-carousel,
              .hiring-carousel .keen-slider__slide {
                transition-timing-function: cubic-bezier(.17,.98,1,.99) !important;
                transition-duration: 0.3s !important;
              }
              @media (max-width: 768px) {
                .hiring-carousel .keen-slider__slide img {
                  filter: none !important;
                }
              }
            `}</style>
            {ALL_LOGOS.map((src, i) => (
              <div key={i} className="keen-slider__slide flex items-center justify-center h-24 md:h-28">
                <img
                  src={src}
                  alt="Expertise logo"
                  className="h-20 md:h-24 max-w-[8rem] md:max-w-[10rem] w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
                  loading="eager"
                />
              </div>
            ))}
          </div>
        </aside>
      </div>
      {/* Contact Section remains full width below */}
      <section className="max-w-2xl mx-auto px-4 pb-24 text-center">
        <h2 className="text-h2 font-display font-semibold mb-4">Don&apos;t see your role?</h2>
        <p className="text-base text-gray-600 mb-4">
          We&apos;re always looking for exceptional people. If you think you can help us, email us at{" "}
          <a
            href="mailto:careers@optimizedhq.com"
            className="text-blue-600 underline hover:text-blue-400"
          >
            careers@optimizedhq.com
          </a>
        </p>
      </section>

      
    </main>
  )
}
