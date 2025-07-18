import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useIsMobile } from './useIsMobile'

interface TestimonialCard {
  org: string
  quote: string
  image: string
  person: string
  role: string
}

const TESTIMONIALS: TestimonialCard[] = [
  {
    org: 'Global Industrial OEM',
    quote: 'My buyers spend most of the week stitching RFQs and spreadsheets—strategic work never happens.',
    image: '',
    person: 'Michael K.',
    role: 'Director of Supply Chain',
  },
  {
    org: 'Tier 1 Automotive Supplier',
    quote: 'We discover a supplier slipped only when the line grinds to a halt—rush freight starts burning cash.',
    image: '',
    person: 'Deepak P.',
    role: 'VP Procurement',
  },
  {
    org: 'Medical Device OEM',
    quote: 'One drawing change triggers days of email ping-pong; wrong-rev parts end up as expensive scrap.',
    image: '',
    person: 'Sarah G.',
    role: 'Head of Strategic Sourcing',
  },
  {
    org: 'Aerospace Tier-2',
    quote: 'It takes us three weeks to normalise bids because every supplier sends a different template.',
    image: '',
    person: 'Luis R.',
    role: 'Sourcing Manager',
  },
  {
    org: 'Consumer Electronics',
    quote: 'Forecast swings kill us—we have zero visibility into which suppliers can flex and which cannot.',
    image: '',
    person: 'Emma S.',
    role: 'Planning Director',
  },
]

export default function TestimonialsWithCTASection() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const duplicatedTestimonials = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS]
  const isMobile = useIsMobile(768)

  useEffect(() => {
    const wrap = wrapRef.current
    if (!wrap) return

    const handleMouseEnter = () => {
      wrap.style.animationPlayState = 'paused'
    }
    const handleMouseLeave = () => {
      wrap.style.animationPlayState = 'running'
    }
    wrap.addEventListener('mouseenter', handleMouseEnter)
    wrap.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      wrap.removeEventListener('mouseenter', handleMouseEnter)
      wrap.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <section className="pt-20 pb-40 top-10 overflow-hidden bg-[#f2f2f2]">
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">
          What Our Partners Say
        </h2>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
          Leading companies trust us to transform their procurement operations
        </p>
      </div>
      <div className="relative mb-24">
        <div
          ref={wrapRef}
          className="carousel-track flex"
          style={{ '--rotation-duration': '10s' } as React.CSSProperties}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div key={index} className="carousel-card group">
              <p className="text-blue-600 text-xs uppercase tracking-widest mb-4 font-medium">
                {testimonial.org}
              </p>
              <blockquote className="text-gray-800 text-lg leading-relaxed mb-6">
                &quot;{testimonial.quote}&quot;
              </blockquote>
              <div className="border-t border-gray-200 pt-4">
                <p className="text-gray-900 font-medium">{testimonial.person}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full px-0 text-center">
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-12 bg-[#f2f2f2] rounded-2xl p-24 mt-10">
          {/* Left: CTA text and button */}
          <div className="flex-1 flex flex-col gap-6">
            <h2 className="text-4xl md:text-5xl font-bold text-black text-center">Ready to Optimize?</h2>
            <div className="flex justify-center w-full">
              <Link href="/get-started">
                <span className="inline-block px-8 py-4 rounded-full bg-blue-600 text-white font-bold text-lg shadow hover:bg-blue-700 transition-all duration-200">Contact Us</span>
              </Link>
            </div>
          </div>
          {/* Right: Large image */}
          {!isMobile && (
            <div className="flex-1 flex justify-center h-full min-h-[20rem]">
              <Image src="/aiDriven.jpg" alt="AI Driven" width={600} height={400} className="w-full h-full rounded-xl object-cover shadow-md" />
            </div>
          )}
        </div>
      </div>
    </section>
  )
} 