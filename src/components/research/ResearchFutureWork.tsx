'use client';

import React from 'react';
import {
  Card,
  Callout,
  Divider,
  H2,
  H5,
} from '@blueprintjs/core';

// ---------------------------------------------
// <ResearchFutureWork /> — section ❹ (LIGHT)
// ---------------------------------------------
export default function ResearchFutureWork() {
  return (
    <section
      id="future"
      className="relative bg-[#F5F8FA] pb-32 pt-24 text-[#202426] overflow-hidden"
      data-background="light"
    >
      {/* blurred radial decorations */}
      <div className="pointer-events-none absolute -top-24 -left-32 h-96 w-96 rounded-full bg-[#48AFF0]/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-120px] right-[-80px] h-[420px] w-[420px] rounded-full bg-[#137CBD]/25 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6">
        {/* SECTION HEADER */}
        <header className="mb-8">
          <H5 className="uppercase tracking-wider text-[#8A9BA8]">Research</H5>
          <H2 className="text-[#202426] font-semibold flex items-center gap-2">
            <span className="font-mono text-base text-[#8A9BA8] select-none">{'{'}4{'}'}</span>
            Open Challenges & Future Work
          </H2>
        </header>

        <Divider className="!border-[#A7B6C2] mb-8" />

        {/* FUTURE WORK LIST */}
        <Card
          elevation={2}
          className="bg-[#FFFFFF] p-12 space-y-8 rounded-lg shadow-md backdrop-blur-sm"
        >
          <Callout
            intent="warning"
            icon="lightbulb"
            title="High-impact directions"
            className="!text-[#202426]"
          >
            <ul className="bp4-list bp4-list-disc pl-5 space-y-1 text-lg leading-relaxed">
              <li>Reliability & verifiable correctness under LLM hallucination.</li>
              <li>Support for CVXPY, MiniZinc and combinatorial formats.</li>
              <li>Public, large-scale benchmarks with ground-truth solutions.</li>
              <li>Neural-guided branching & solver selection.</li>
            </ul>
          </Callout>
        </Card>
      </div>
    </section>
  );
}
