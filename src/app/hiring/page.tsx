"use client"

import { useState } from "react"

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

export default function HiringPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      <section className="max-w-3xl mx-auto px-4 py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Join Optimized</h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8">
          Help us build the future of AI-powered procurement.<br />
          <span className="text-blue-600 font-semibold">We&apos;re hiring!</span>
        </p>
        <p className="text-md text-gray-500 mb-2">
          We value curiosity, velocity, and ownership. If you want to work on hard problems with real-world impact, we want to hear from you.
        </p>
      </section>

      {/* Expertise / Trusted By Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
            Expertise from
          </h2>
          <div className="relative overflow-hidden">
            <div
              className="flex gap-12 animate-scroll-x items-center justify-center w-max"
              style={{
                animation: "scroll-x 24s linear infinite",
              }}
            >
              {/* eslint-disable @next/next/no-img-element */}
              {[
                "/berkeley.png",
                "/bcg.png",
                "/nasa.png",
                "/stanford.png",
                "/voith.png",
                "/maersk.png",
                "/gap.png",
                "/adp.png",
                "/sony.png"
              ].concat([
                "/berkeley.png",
                "/bcg.png",
                "/nasa.png",
                "/stanford.png",
                "/voith.png",
                "/maersk.png",
                "/gap.png",
                "/adp.png",
                "/sony.png"
              ]).map((src, i) => (
                <div key={i} className="flex-shrink-0 flex items-center justify-center h-32 w-60">
                  <img
                    src={src}
                    alt="Expertise logo"
                    className="h-28 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            {/* Custom keyframes for horizontal scroll */}
            <style jsx>{`
              @keyframes scroll-x {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              @media (max-width: 640px) {
                .animate-scroll-x {
                  gap: 2rem;
                }
              }
            `}</style>
          </div>
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-4 pb-24">
        <h2 className="text-3xl font-semibold mb-8 text-center">Open Roles</h2>
        <div className="space-y-8">
          {ROLES.map((role, idx) => (
            <div
              key={role.title}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg transition hover:border-blue-400"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{role.title}</h3>
                  <div className="text-sm text-gray-500 mt-1">
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
                className="mt-4 text-blue-600 hover:underline text-sm"
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

      <section className="max-w-2xl mx-auto px-4 pb-24 text-center">
        <h2 className="text-2xl font-semibold mb-4">Don&apos;t see your role?</h2>
        <p className="text-gray-600 mb-4">
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
