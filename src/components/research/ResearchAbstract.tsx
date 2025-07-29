'use client';

import React from 'react';
import { Brain, Code, Bug, Terminal, BarChart3 } from 'lucide-react';

export default function ResearchAbstract() {
  return (
    <section
      id="abstract"
      className="bg-[#16181A] py-12 sm:py-24 px-4 text-[#EFEFEF] flex justify-center rounded-4xl"
      data-background="dark"
    >
      <div className="max-w-5xl w-full space-y-8 sm:space-y-12">
        {/* Header */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-6 sm:mb-8">
          <div>
            <h5 className="uppercase tracking-wider text-gray-400 mb-2 font-semibold">Research</h5>
            <h2 className="text-[#EFEFEF] font-bold text-h2">Abstract</h2>
          </div>
        </div>

        {/* What is OptiMUS Card */}
        <div className="bg-[#202426] p-6 sm:p-10 rounded-lg shadow-md mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
            <div className="text-blue-400 p-4 bg-blue-400/10 rounded-lg">
              <Brain size={28} />
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-blue-400 text-lg">What is OptiMUS-0.3?</h3>
              <ul className="list-disc pl-5 text-base leading-relaxed space-y-3 text-gray-300">
                <li><strong>OptiMUS-0.3</strong> is an LLM agent that translates natural language into mixed-integer linear programs (MILP).</li>
                <li>It generates solver code and iteratively debugs itself for improved results.</li>
                <li>Designed to lower expertise barriers and democratize access to state-of-the-art optimization.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Contributions Grid - Three cards in one row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Natural Language → MILP Compiler */}
          <div className="bg-[#202426] p-8 rounded-lg flex flex-col items-start gap-4 h-full">
            <div className="text-blue-400 p-3 bg-blue-400/10 rounded-lg">
              <Code size={24} />
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-blue-400">Natural Language → MILP Compiler</h4>
              <p className="text-gray-300">Parses user intent into formal optimization primitives.</p>
            </div>
          </div>

          {/* Self-Reflexive Debugger */}
          <div className="bg-[#202426] p-8 rounded-lg flex flex-col items-start gap-4 h-full">
            <div className="text-blue-400 p-3 bg-blue-400/10 rounded-lg">
              <Bug size={24} />
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-blue-400">Self-Reflexive Debugger</h4>
              <p className="text-gray-300">Diagnoses and regenerates constraints for infeasible or sub-optimal models.</p>
            </div>
          </div>

          {/* Solver-Agnostic Codegen */}
          <div className="bg-[#202426] p-8 rounded-lg flex flex-col items-start gap-4 h-full">
            <div className="text-blue-400 p-3 bg-blue-400/10 rounded-lg">
              <Terminal size={24} />
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-blue-400">Solver-Agnostic Codegen</h4>
              <p className="text-gray-300">Outputs Python, Julia, or C++ for Gurobi, CPLEX, or open-source solvers.</p>
            </div>
          </div>
        </div>

        {/* Benchmark Results - With animated line graphs */}
        <div className="bg-[#202426] p-6 sm:p-12 rounded-xl">
          <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
            <div className="text-blue-400 p-4 bg-blue-400/10 rounded-lg">
              <BarChart3 size={32} />
            </div>
            <div className="flex-1 w-full">
              <h4 className="font-semibold mb-8 sm:mb-12 text-blue-400 text-xl sm:text-2xl">Benchmark Results</h4>
              <div className="space-y-12 sm:space-y-16">
                {/* Gap Reduction Graph */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-4">
                    <span className="text-base sm:text-lg text-gray-300">Gap Reduction</span>
                    <span className="text-xl sm:text-2xl font-bold text-blue-400">22%</span>
                  </div>
                  <div className="relative h-24 bg-[#1A1D1F] rounded-xl overflow-hidden">
                    <div className="absolute inset-0 flex items-center">
                      <svg className="w-full" height="96" viewBox="0 0 300 96">
                        <defs>
                          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#60A5FA" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M0,48 Q75,58 150,48 T300,48"
                          fill="none"
                          stroke="url(#line-gradient)"
                          strokeWidth="4"
                          className="animate-dash"
                          style={{
                            animation: 'dash 2s linear infinite',
                            strokeDasharray: '300',
                            strokeDashoffset: '300'
                          }}
                        />
                        <path
                          d="M0,48 Q75,58 150,48 T300,48"
                          fill="none"
                          stroke="#60A5FA"
                          strokeWidth="4"
                          strokeOpacity="0.3"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-gray-400">OR-Library test-set</p>
                </div>

                {/* Convergence Speed Graph */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-4">
                    <span className="text-base sm:text-lg text-gray-300">Faster Convergence</span>
                    <span className="text-xl sm:text-2xl font-bold text-blue-400">24%</span>
                  </div>
                  <div className="relative h-24 bg-[#1A1D1F] rounded-xl overflow-hidden">
                    <div className="absolute inset-0 flex items-center">
                      <svg className="w-full" height="96" viewBox="0 0 300 96">
                        <defs>
                          <linearGradient id="line-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#60A5FA" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M0,65 Q50,25 150,48 T300,35"
                          fill="none"
                          stroke="url(#line-gradient-2)"
                          strokeWidth="4"
                          className="animate-dash"
                          style={{
                            animation: 'dash 2.5s linear infinite',
                            strokeDasharray: '300',
                            strokeDashoffset: '300'
                          }}
                        />
                        <path
                          d="M0,65 Q50,25 150,48 T300,35"
                          fill="none"
                          stroke="#60A5FA"
                          strokeWidth="4"
                          strokeOpacity="0.3"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-gray-400">Two-stage stochastic problems</p>
                </div>

                {/* Generalization Description */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-4">
                    <span className="text-base sm:text-lg text-gray-300">Variable Count Scaling</span>
                    <span className="text-base sm:text-lg font-medium text-blue-400">Zero-shot generalization</span>
                  </div>
                  <div className="bg-[#1A1D1F] rounded-xl p-6 sm:p-8">
                    <div className="space-y-4">
                      <p className="text-gray-300 leading-relaxed">
                        OptiMUS-0.3 demonstrates remarkable adaptability across different problem sizes without requiring retraining. The model maintains consistent performance when:
                      </p>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start gap-3">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                          <span>Scaling from small test cases to large-scale industrial problems</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                          <span>Handling variable counts ranging from dozens to thousands</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                          <span>Processing constraints of varying complexity and interdependencies</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes dash {
            to {
              stroke-dashoffset: 0;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
