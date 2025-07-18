'use client';

import React from 'react';

export default function ResearchBenchmarks() {
  return (
    <section
      id="results"
      className="bg-[#16181A] py-20 px-4 text-[#EFEFEF] flex justify-center"
      data-background="dark"
    >
      <div className="max-w-5xl w-full space-y-8">
        {/* SECTION HEADER */}
        <div className="mb-8">
          <h2 className="text-[#EFEFEF] font-bold text-2xl">Benchmarks & Ablations</h2>
        </div>
        <hr className="border-[#394B59] mb-8" />
        <div className="bg-[#202426] p-8 rounded-lg shadow-md">
          <h3 className="font-semibold mb-2 text-blue-400">Performance Overview</h3>
          <p className="text-lg leading-relaxed text-gray-300">
            Self-reflection corrects <strong>41%</strong> of modeling errors and advanced heuristics cut solution time dramatically on structured problems.
          </p>
        </div>
      </div>
    </section>
  );
}
