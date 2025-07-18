'use client';

import React from 'react';

export default function ResearchAbstract() {
  return (
    <section
      id="abstract"
      className="bg-[#16181A] py-20 px-4 text-[#EFEFEF] flex justify-center"
      data-background="dark"
    >
      <div className="max-w-5xl w-full space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-2">
          <div>
            <h5 className="uppercase tracking-wider text-gray-400 mb-1 font-semibold">Research</h5>
            <h2 className="text-[#EFEFEF] font-bold text-h3">Abstract</h2>
          </div>
        </div>
        <div className="bg-[#202426] p-8 rounded-lg shadow-md space-y-6">
          <div>
            <h3 className="font-semibold mb-2 text-blue-400">What is OptiMUS-0.3?</h3>
            <ul className="list-disc pl-5 text-base leading-relaxed space-y-1 text-gray-300">
              <li><strong>OptiMUS-0.3</strong> is an LLM agent that translates natural language into mixed-integer linear programs (MILP).</li>
              <li>It generates solver code and iteratively debugs itself for improved results.</li>
              <li>Designed to lower expertise barriers and democratize access to state-of-the-art optimization.</li>
            </ul>
          </div>
          <hr className="border-[#394B59]" />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h4 className="text-base text-blue-400">Key Contributions</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-300">
                <li><strong>Natural Language → MILP Compiler:</strong> Parses user intent into formal optimization primitives.</li>
                <li><strong>Self-Reflexive Debugger:</strong> Diagnoses and regenerates constraints for infeasible or sub-optimal models.</li>
                <li><strong>Solver-Agnostic Codegen:</strong> Outputs Python, Julia, or C++ for Gurobi, CPLEX, or open-source solvers.</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-blue-400">Benchmark Highlights</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-300">
                <li><strong>22%</strong> avg. gap reduction on OR-Library test-set</li>
                <li><strong>24%</strong> faster convergence on two-stage stochastic problems</li>
                <li>Zero-shot generalization to unseen variable counts</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
