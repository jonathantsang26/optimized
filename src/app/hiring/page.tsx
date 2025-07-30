"use client"

import { useState, useEffect } from "react"
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import Link from 'next/link'
import Image from 'next/image'
import { Home, Briefcase, MapPin, Clock, ChevronDown, ChevronUp } from 'lucide-react'

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
    <main className="bg-white min-h-screen">
      <div className="max-w-5xl mx-auto py-24 px-4">
        {/* Home Button */}
        <Link 
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-gray-700 hover:text-blue-600 transition-colors rounded-lg border border-gray-200 hover:border-blue-400"
        >
          <Home size={18} />
          <span>Back to Home</span>
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h5 className="uppercase tracking-wider text-gray-500 mb-2 font-semibold">Careers</h5>
          <h2 className="text-gray-900 font-bold text-h2 mb-6">Join Our Team</h2>
          <p className="text-gray-600 max-w-3xl leading-relaxed">
            Help us build the future of AI-powered procurement. We value curiosity, velocity, and ownership. If you want to work on hard problems with real-world impact, we want to hear from you.
          </p>
        </div>

        {/* Open Roles */}
        <div className="space-y-6 mb-12">
          {ROLES.map((role, idx) => (
            <div
              key={role.title}
              className="bg-white rounded-xl border border-gray-200 p-6 transition-colors hover:border-blue-400 shadow-sm"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{role.title}</h3>
                    <div className="flex items-center gap-4 text-gray-600">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-blue-600" />
                        <span>{role.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} className="text-blue-600" />
                        <span>{role.type}</span>
                      </div>
                    </div>
                  </div>
                  
                  <button
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    aria-expanded={openIndex === idx}
                    aria-controls={`role-details-${idx}`}
                  >
                    {openIndex === idx ? (
                      <>
                        <ChevronUp size={16} />
                        <span>Hide details</span>
                      </>
                    ) : (
                      <>
                        <ChevronDown size={16} />
                        <span>View details</span>
                      </>
                    )}
                  </button>

                  {openIndex === idx && (
                    <div
                      id={`role-details-${idx}`}
                      className="text-gray-600 animate-fade-in space-y-4"
                    >
                      <p>{role.description}</p>
                      <div>
                        <h4 className="text-gray-900 font-medium mb-2">Requirements</h4>
                        <ul className="space-y-2">
                          {role.requirements.map((req, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                <a
                  href={role.apply}
                  className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Briefcase size={18} />
                  <span>Apply Now</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Expertise Carousel */}
        <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
          <h3 className="text-gray-900 font-semibold text-xl mb-6">Our Team Comes From</h3>
          <div ref={sliderRef} className="keen-slider h-96 md:h-[32rem]">
            <style jsx>{`
              .keen-slider .keen-slider__slide {
                transition-timing-function: cubic-bezier(.17,.98,1,.99) !important;
                transition-duration: 0.3s !important;
              }
            `}</style>
            {ALL_LOGOS.map((src, i) => (
              <div key={i} className="keen-slider__slide flex items-center justify-center">
                <Image
                  src={src}
                  alt="Company logo"
                  width={160}
                  height={96}
                  className="h-16 md:h-20 w-auto object-contain opacity-70 hover:opacity-100 transition duration-300"
                  priority={i < 4}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-gray-50 rounded-xl border border-gray-200 p-8 text-center shadow-sm">
          <h3 className="text-gray-900 font-semibold text-xl mb-4">Don&apos;t see your role?</h3>
          <p className="text-gray-600">
            We&apos;re always looking for exceptional people. If you think you can help us, email us at{" "}
            <a
              href="mailto:careers@optimizedhq.com"
              className="text-blue-600 hover:text-blue-700 transition-colors"
            >
              careers@optimizedhq.com
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}
