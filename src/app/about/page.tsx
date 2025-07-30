'use client'

import Link from 'next/link'
import { Home, Target, Users, Zap } from 'lucide-react'
import '@/app/globals.css'

export default function AboutPage() {
  return (
    <main className="bg-[#16181A] min-h-screen">
      <div className="max-w-5xl mx-auto py-24 px-4">
        {/* Home Button */}
        <Link 
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-white hover:text-blue-400 transition-colors rounded-lg border border-gray-700 hover:border-blue-400"
        >
          <Home size={18} />
          <span>Back to Home</span>
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h5 className="uppercase tracking-wider text-gray-400 mb-2 font-semibold">About Us</h5>
          <h2 className="text-white font-bold text-h2 mb-6">About Optimized AI</h2>
          <p className="text-gray-300 max-w-3xl leading-relaxed">
            AI tooling for faster, smarter procurement decisions.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-[#202426] p-8 rounded-xl border border-gray-700">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-400/10 rounded-lg">
                <Target size={24} className="text-blue-400" />
              </div>
              <h3 className="font-semibold text-xl text-white">Mission</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Turn natural‑language specs into provably correct optimization models, giving teams a repeatable edge in cost, speed, and resilience.
            </p>
          </div>

          <div className="bg-[#202426] p-8 rounded-xl border border-gray-700">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-400/10 rounded-lg">
                <Users size={24} className="text-blue-400" />
              </div>
              <h3 className="font-semibold text-xl text-white">Culture</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Open research, zero tracking, and relentless focus on real‑world impact. We publish benchmarks, share code, and measure ourselves by customer results.
            </p>
          </div>
        </div>

        {/* Capabilities Section */}
        <div className="bg-[#202426] p-8 rounded-xl border border-gray-700">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-blue-400/10 rounded-lg">
              <Zap size={24} className="text-blue-400" />
            </div>
            <h3 className="font-semibold text-xl text-white">Capabilities</h3>
          </div>
          <ul className="grid md:grid-cols-2 gap-4">
            <li className="flex items-center gap-2 text-gray-300">
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
              <span>Data harmonization & canonicalization</span>
            </li>
            <li className="flex items-center gap-2 text-gray-300">
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
              <span>LLM‑driven attribute enrichment</span>
            </li>
            <li className="flex items-center gap-2 text-gray-300">
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
              <span>Commodity classification</span>
            </li>
            <li className="flex items-center gap-2 text-gray-300">
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
              <span>AI‑powered sourcing workflows</span>
            </li>
            <li className="flex items-center gap-2 text-gray-300">
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
              <span>Bid scoring & decision optimization</span>
            </li>
            <li className="flex items-center gap-2 text-gray-300">
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
              <span>Predictive risk analytics</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}
