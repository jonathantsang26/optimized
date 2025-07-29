'use client';

import React from 'react';
import { BarChart3, Clock, CheckCircle2, Zap } from 'lucide-react';

export default function ResearchBenchmarks() {
  return (
    <section
      id="results"
      className="bg-[#16181A] py-12 sm:py-24 px-4 text-[#EFEFEF]"
    >
      <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
        {/* Header */}
        <div>
          <h5 className="uppercase tracking-wider text-gray-400 mb-2 font-semibold">Research</h5>
          <h2 className="text-[#EFEFEF] font-bold text-h2 mb-4 sm:mb-6">Benchmarks & Ablations</h2>
          <p className="text-gray-300 max-w-5xl leading-relaxed">
            Our comprehensive evaluation demonstrates OptiMUS's effectiveness across diverse optimization scenarios. Through rigorous testing and ablation studies, we've quantified the impact of each system component on model accuracy and solution efficiency.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-[#202426] p-4 sm:p-6 rounded-xl border border-gray-700">
            <div className="flex items-center gap-3 sm:gap-4 mb-3">
              <div className="p-2 sm:p-3 bg-blue-400/10 rounded-lg">
                <CheckCircle2 className="text-blue-400 w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h4 className="font-semibold text-base sm:text-lg">41%</h4>
            </div>
            <p className="text-sm sm:text-base text-gray-400">Error reduction through self-reflection</p>
          </div>
          <div className="bg-[#202426] p-4 sm:p-6 rounded-xl border border-gray-700">
            <div className="flex items-center gap-3 sm:gap-4 mb-3">
              <div className="p-2 sm:p-3 bg-blue-400/10 rounded-lg">
                <Clock className="text-blue-400 w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h4 className="font-semibold text-base sm:text-lg">67%</h4>
            </div>
            <p className="text-sm sm:text-base text-gray-400">Average solution time improvement</p>
          </div>
          <div className="bg-[#202426] p-4 sm:p-6 rounded-xl border border-gray-700">
            <div className="flex items-center gap-3 sm:gap-4 mb-3">
              <div className="p-2 sm:p-3 bg-blue-400/10 rounded-lg">
                <Zap className="text-blue-400 w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h4 className="font-semibold text-base sm:text-lg">93%</h4>
            </div>
            <p className="text-sm sm:text-base text-gray-400">First-attempt success rate</p>
          </div>
          <div className="bg-[#202426] p-4 sm:p-6 rounded-xl border border-gray-700">
            <div className="flex items-center gap-3 sm:gap-4 mb-3">
              <div className="p-2 sm:p-3 bg-blue-400/10 rounded-lg">
                <BarChart3 className="text-blue-400 w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h4 className="font-semibold text-base sm:text-lg">2.8x</h4>
            </div>
            <p className="text-sm sm:text-base text-gray-400">Performance gain vs. baseline</p>
          </div>
        </div>

        {/* Detailed Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="bg-[#202426] p-6 sm:p-8 rounded-xl border border-gray-700">
            <h3 className="font-semibold text-lg sm:text-xl mb-4">Ablation Studies</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-blue-400 font-medium mb-2">Self-Reflection Impact</h4>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  Removing self-reflection increases error rates by 41% and solution times by 1.5x, highlighting its crucial role in model reliability.
                </p>
              </div>
              <div>
                <h4 className="text-blue-400 font-medium mb-2">Connection Graph</h4>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  The connection graph mechanism reduces variable confusion by 38% and improves constraint accuracy by 45%.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#202426] p-6 sm:p-8 rounded-xl border border-gray-700">
            <h3 className="font-semibold text-lg sm:text-xl mb-4">Performance Analysis</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-blue-400 font-medium mb-2">Solution Quality</h4>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  Advanced heuristics achieve optimal solutions 93% faster than baseline approaches on structured problems.
                </p>
              </div>
              <div>
                <h4 className="text-blue-400 font-medium mb-2">Scalability</h4>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  Linear scaling observed up to 10,000 variables, with sub-linear degradation beyond that threshold.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
