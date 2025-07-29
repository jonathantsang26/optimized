'use client';

import React from 'react';
import { Brain, Code2, Database, GitBranch, Microscope, ShieldCheck } from 'lucide-react';

export default function ResearchFutureWork() {
  return (
    <section
      id="future"
      className="bg-[#16181A] py-24 px-4 text-[#EFEFEF]"
    >
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div>
          <h5 className="uppercase tracking-wider text-gray-400 mb-2 font-semibold">Research</h5>
          <h2 className="text-[#EFEFEF] font-bold text-h2 mb-6">Open Challenges & Future Work</h2>
          <p className="text-gray-300 max-w-5xl leading-relaxed">
            While OptiMUS demonstrates promising results, several exciting research directions remain to be explored. Our future work focuses on enhancing reliability, expanding platform support, and pushing the boundaries of AI-driven optimization.
          </p>
        </div>

        {/* Research Directions Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#202426] p-8 rounded-xl border border-gray-700">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-400/10 rounded-lg">
                <ShieldCheck size={24} className="text-blue-400" />
              </div>
              <h3 className="font-semibold text-xl">Reliability & Verification</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Developing robust mechanisms to ensure model reliability and verifiable correctness under LLM hallucination, with a focus on:
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                <span>Formal verification of generated constraints</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                <span>Runtime safety checks and validation</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                <span>Uncertainty quantification in solutions</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#202426] p-8 rounded-xl border border-gray-700">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-400/10 rounded-lg">
                <Code2 size={24} className="text-blue-400" />
              </div>
              <h3 className="font-semibold text-xl">Platform Integration</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Expanding support for additional optimization frameworks and tools:
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                <span>CVXPY integration for convex optimization</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                <span>MiniZinc support for constraint programming</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                <span>Combinatorial optimization formats</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#202426] p-8 rounded-xl border border-gray-700">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-400/10 rounded-lg">
                <Database size={24} className="text-blue-400" />
              </div>
              <h3 className="font-semibold text-xl">Benchmark Development</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Creating comprehensive benchmarking resources:
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                <span>Public, large-scale optimization datasets</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                <span>Ground-truth solutions for validation</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                <span>Standardized evaluation metrics</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#202426] p-8 rounded-xl border border-gray-700">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-400/10 rounded-lg">
                <Brain size={24} className="text-blue-400" />
              </div>
              <h3 className="font-semibold text-xl">Advanced AI Integration</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Leveraging AI to enhance optimization performance:
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                <span>Neural-guided branching strategies</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                <span>Intelligent solver selection</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                <span>Learning-based parameter tuning</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
