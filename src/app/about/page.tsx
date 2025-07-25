'use client'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Link from 'next/link'
import '@/app/globals.css'

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white text-gray-900 font-sans pt-24">
        <section className="max-w-5xl mx-auto px-4 md:px-8 py-20 md:py-28">
          <div className="bg-white/80 rounded-2xl shadow-xl border border-gray-200 p-8 md:p-16">
            <div className="mb-8">
              <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors font-medium">
                ← Back to Home
              </Link>
            </div>
            <h1 className="text-h1 md:text-d1 font-display font-bold mb-6 text-blue-700 text-center">About Optimized AI</h1>
            <p className="text-h2 md:text-h2 text-gray-700 mb-10 text-center">
              AI tooling for faster, smarter procurement decisions.
            </p>
            <div className="grid md:grid-cols-2 gap-12 text-left mb-12">
              <div>
                <h2 className="text-h2 font-display font-semibold mb-3 text-blue-700">Mission</h2>
                <p className="text-base leading-relaxed text-gray-700">
                  Turn natural‑language specs into provably correct optimization models, giving teams a repeatable edge in cost, speed, and resilience.
                </p>
              </div>
              <div>
                <h2 className="text-h2 font-display font-semibold mb-3 text-blue-700">Culture</h2>
                <p className="text-base leading-relaxed text-gray-700">
                  Open research, zero tracking, and relentless focus on real‑world impact. We publish benchmarks, share code, and measure ourselves by customer results.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h2 className="text-h2 font-display font-semibold mb-4 text-blue-700">Capabilities</h2>
                <ul className="list-disc pl-5 space-y-1 text-base text-gray-700">
                  <li>Data harmonization & canonicalization</li>
                  <li>LLM‑driven attribute enrichment</li>
                  <li>Commodity classification</li>
                  <li>AI‑powered sourcing workflows</li>
                  <li>Bid scoring & decision optimization</li>
                  <li>Predictive risk analytics</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
