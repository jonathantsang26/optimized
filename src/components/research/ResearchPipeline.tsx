'use client';

import React from 'react';

/**
 * <ResearchPipeline /> — Palantir‑style section (LIGHT)
 *
 * Converts the original Tailwind layout into BlueprintJS components and
 * stylistic guidelines used across the Palantir design system.
 */
export default function ResearchPipeline() {
  return (
    <section
      id="pipeline"
      className="bg-[#16181A] py-20 px-4 text-[#EFEFEF] flex justify-center"
      data-background="light"
    >
      <div className="max-w-5xl w-full space-y-8">
        {/* SECTION HEADER */}
        <div className="mb-8">
          <h2 className="text-[#EFEFEF] font-bold text-2xl">OptiMUS Pipeline</h2>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          OptiMUS‑0.3 turns a plain‑language business question into an executable optimization model through a fully automated, five‑stage flow. First, it pinpoints every numeric parameter mentioned in the brief, stores them in a structured state, and replaces raw numbers with symbolic names for clarity. Next, a connection graph links each variable to the clauses (constraints and objective) where it appears, letting later agents focus only on the relevant context.<br/><br/>
          The system then drafts precise LaTeX for variables, objective, and constraints; converts each clause into runnable <code className="px-1 py-0.5 bg-gray-800 text-gray-100 rounded">gurobipy</code> snippets; and stitches the pieces into a single script. If the script raises an error, an iterative debug loop regenerates only the faulty fragments until the model runs cleanly.<br/><br/>
          Throughout, reflective prompts and confidence checks catch unit mismatches, missing bounds, or hallucinated API calls before they reach production — an approach that cuts modeling mistakes dramatically.
        </p>
        <hr className="border-[#394B59] mb-8" />
        <div className="bg-[#202426] p-8 rounded-lg shadow-md">
          <h3 className="font-semibold mb-2 text-blue-400">End-to-end automation</h3>
          <ol className="pl-6 space-y-2 text-lg leading-relaxed list-decimal text-gray-300">
            <li>Parameter & clause extraction via connection-graph attention.</li>
            <li>Formal LaTeX generation of variables, objectives & constraints.</li>
            <li>Executable <code className="px-1 py-0.5 bg-gray-800 text-gray-100 rounded">gurobipy</code> code synthesis.</li>
            <li>Self-reflection & automatic regeneration on low-confidence clauses.</li>
          </ol>
        </div>
      </div>
    </section>
  );
}
