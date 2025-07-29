'use client';

import React from 'react';
import { ArrowRight, GitBranch, Code2, RefreshCw } from 'lucide-react';

/**
 * <ResearchPipeline /> — Research pipeline section
 */
export default function ResearchPipeline() {
  return (
    <section
      id="pipeline"
      className="bg-[#16181A] py-12 sm:py-24 px-4 text-[#EFEFEF]"
    >
      <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
        {/* Header */}
        <div>
          <h5 className="uppercase tracking-wider text-gray-400 mb-2 font-semibold">Research</h5>
          <h2 className="text-[#EFEFEF] font-bold text-h2 mb-4 sm:mb-6">OptiMUS Pipeline</h2>
          <p className="text-gray-300 max-w-5xl leading-relaxed text-sm sm:text-base">
            OptiMUS‑0.3 turns a plain‑language business question into an executable optimization model through a fully automated, five‑stage flow. First, it pinpoints every numeric parameter mentioned in the brief, stores them in a structured state, and replaces raw numbers with symbolic names for clarity. Next, a connection graph links each variable to the clauses (constraints and objective) where it appears, letting later agents focus only on the relevant context.
          </p>
        </div>

        {/* Pipeline Process */}
        <div className="bg-[#202426] p-4 sm:p-8 rounded-xl border border-gray-700">
          <div className="space-y-6 sm:space-y-8">
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              The system then drafts precise LaTeX for variables, objective, and constraints; converts each clause into runnable <code className="px-1 py-0.5 bg-gray-800 text-gray-100 rounded text-xs sm:text-sm">gurobipy</code> snippets; and stitches the pieces into a single script. If the script raises an error, an iterative debug loop regenerates only the faulty fragments until the model runs cleanly.
            </p>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              Throughout, reflective prompts and confidence checks catch unit mismatches, missing bounds, or hallucinated API calls before they reach production — an approach that cuts modeling mistakes dramatically.
            </p>
          </div>
        </div>

        {/* Pipeline Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div className="bg-[#202426] p-4 sm:p-6 rounded-xl border border-gray-700">
            <div className="flex items-center gap-3 sm:gap-4 mb-3">
              <div className="p-2 sm:p-3 bg-blue-400/10 rounded-lg">
                <GitBranch className="text-blue-400 w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h4 className="font-semibold text-base sm:text-lg">Parameter Extraction</h4>
            </div>
            <p className="text-sm sm:text-base text-gray-400">Parameter & clause extraction via connection-graph attention</p>
          </div>
          <div className="bg-[#202426] p-4 sm:p-6 rounded-xl border border-gray-700">
            <div className="flex items-center gap-3 sm:gap-4 mb-3">
              <div className="p-2 sm:p-3 bg-blue-400/10 rounded-lg">
                <ArrowRight className="text-blue-400 w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h4 className="font-semibold text-base sm:text-lg">LaTeX Generation</h4>
            </div>
            <p className="text-sm sm:text-base text-gray-400">Formal LaTeX generation of variables, objectives & constraints</p>
          </div>
          <div className="bg-[#202426] p-4 sm:p-6 rounded-xl border border-gray-700">
            <div className="flex items-center gap-3 sm:gap-4 mb-3">
              <div className="p-2 sm:p-3 bg-blue-400/10 rounded-lg">
                <Code2 className="text-blue-400 w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h4 className="font-semibold text-base sm:text-lg">Code Synthesis</h4>
            </div>
            <p className="text-sm sm:text-base text-gray-400">Executable <code className="px-1 py-0.5 bg-gray-800 text-gray-100 rounded text-xs sm:text-sm">gurobipy</code> code synthesis</p>
          </div>
          <div className="bg-[#202426] p-4 sm:p-6 rounded-xl border border-gray-700">
            <div className="flex items-center gap-3 sm:gap-4 mb-3">
              <div className="p-2 sm:p-3 bg-blue-400/10 rounded-lg">
                <RefreshCw className="text-blue-400 w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h4 className="font-semibold text-base sm:text-lg">Self-Reflection</h4>
            </div>
            <p className="text-sm sm:text-base text-gray-400">Self-reflection & automatic regeneration on low-confidence clauses</p>
          </div>
        </div>
      </div>
    </section>
  );
}
