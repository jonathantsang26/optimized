import React from 'react'
import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="relative py-100 bg-gray-50 text-black text-center overflow-hidden">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Optimize Your Workflow?</h2>
        <p className="text-lg md:text-xl mb-8 text-gray-700 font-medium">
          Discover how our AI-driven solutions can transform your procurement and operations. Get in touch or try a demo today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/get-started">
            <span className="inline-block px-8 py-4 rounded-full bg-blue-600 text-white font-bold text-lg shadow hover:bg-blue-700 transition-all duration-200">Get Started</span>
          </Link>
          <a href="mailto:info@optimizedhq.com" className="inline-block px-8 py-4 rounded-full border-2 border-blue-600 text-blue-600 font-semibold text-lg hover:bg-blue-50 transition-all duration-200">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
} 