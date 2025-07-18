'use client';

import React from 'react';

// ---------------------------------------------
// <ResearchFutureWork /> — section ❹ (LIGHT)
// ---------------------------------------------
export default function ResearchFutureWork() {
  return (
    <section
      id="future"
      className="bg-[#16181A] py-20 px-4 text-[#EFEFEF] flex justify-center"
      data-background="light"
    >
      <div className="max-w-5xl w-full space-y-8">
        {/* SECTION HEADER */}
        <div className="mb-8">
          <h5 className="uppercase tracking-wider text-gray-400 font-semibold">Research</h5>
          <h2 className="text-[#EFEFEF] font-bold text-2xl">Open Challenges & Future Work</h2>
        </div>
        <hr className="border-[#394B59] mb-8" />
        <div className="bg-[#202426] p-8 rounded-lg shadow-md">
          <h3 className="font-semibold mb-2 text-blue-400">High-impact directions</h3>
          <ul className="pl-5 space-y-1 text-lg leading-relaxed list-disc text-gray-300">
            <li>Reliability & verifiable correctness under LLM hallucination.</li>
            <li>Support for CVXPY, MiniZinc and combinatorial formats.</li>
            <li>Public, large-scale benchmarks with ground-truth solutions.</li>
            <li>Neural-guided branching & solver selection.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
