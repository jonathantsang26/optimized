// OptiMUS About Page
'use client'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import GlobalStyles from '@/components/GlobalStyles'

export default function AboutPage() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main className="min-h-screen bg-gradient-to-br pt-24 from-blue-950 via-black to-purple-950 text-white font-sans">
        <section className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Optimized AI</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Advancing global logistics and procurement through open research, data-centric models, and collaborative AI innovation.
          </p>
          <div className="text-md text-gray-400 mb-10 max-w-2xl mx-auto">
            <p className="mb-4">
              <span className="font-semibold text-blue-400">Optimized AI</span> is dedicated to transforming procurement and supply chain operations with cutting-edge artificial intelligence. Our mission is to turn natural-language specifications into provably correct, production-ready optimization models, enabling organizations to make smarter, faster, and more reliable decisions.
            </p>
            <p className="mb-4">
              We combine the latest advances in large language models (LLMs), machine learning, and operations research to automate and enhance every stage of the procurement process—from data harmonization and attribute enrichment to risk analytics and multi-objective decision optimization.
            </p>
            <p className="mb-4">
              Our research-driven approach is trusted by leading organizations in aerospace, automotive, logistics, and beyond. We believe in open science, transparent benchmarks, and building tools that empower both technical and business teams.
            </p>
            <p>
              <span className="font-semibold text-blue-400">No cookies, no tracking, just science.</span> We are committed to privacy, transparency, and delivering real-world impact through AI.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-12 text-left">
            <div>
              <h2 className="text-2xl font-semibold mb-2 text-blue-300">What We Do</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-200">
                <li>Automated data harmonization & canonicalization</li>
                <li>Attribute enrichment via hybrid ML/LLM pipelines</li>
                <li>Transformer-based commodity classification</li>
                <li>AI-driven sourcing & quotation workflows</li>
                <li>Multi-objective bid scoring & decision optimization</li>
                <li>Predictive risk and obsolescence analytics</li>
                <li>Human-in-the-loop continuous learning</li>
                <li>End-to-end procurement telemetry</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2 text-blue-300">Our Values</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-200">
                <li>Open research and transparent benchmarks</li>
                <li>Collaboration with industry and academia</li>
                <li>Privacy-first, user-centric design</li>
                <li>Real-world impact and measurable results</li>
                <li>Continuous innovation and learning</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
} 