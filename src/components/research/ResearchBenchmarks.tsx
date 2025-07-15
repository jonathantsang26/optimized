'use client';

import React from 'react';
import {
  Card,
  Callout,
  Divider,
  H2,
  H5,
  Text,
} from '@blueprintjs/core';
export default function ResearchBenchmarks() {
  return (
    <section
      id="results"
      className="relative bg-[#202426] pb-32 pt-24 text-[#F5F8FA] overflow-hidden"
      data-background="dark"
    >
      {/* blurred radial decorations */}
      <div className="pointer-events-none absolute -top-24 -left-32 h-96 w-96 rounded-full bg-[#48AFF0]/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-120px] right-[-80px] h-[420px] w-[420px] rounded-full bg-[#137CBD]/25 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6">
        {/* SECTION HEADER */}
        <header className="mb-8">
          <H5 className="uppercase tracking-wider text-[#CED9E0]">Research</H5>
          <H2 className="text-[#F5F8FA] font-semibold flex items-center gap-2">
            <span className="font-mono text-base text-[#5C7080] select-none">{'{'}2{'}'}</span>
            Benchmarks & Ablations
          </H2>
        </header>

        <Divider className="!border-[#394B59] mb-8" />

        {/* RESULT SUMMARY */}
        <Card
          elevation={2}
          className="bg-[#293742] p-12 space-y-8 rounded-lg shadow-md backdrop-blur-sm"
        >
          <Callout
            intent="primary"
            icon="timeline-line-chart"
            title="Performance Overview"
            className="!text-[#F5F8FA]"
          >
            <Text className="text-lg leading-relaxed">
              Self‑reflection corrects&nbsp;<strong>41 %</strong> of modeling errors and advanced
              heuristics cut solution time dramatically on structured problems.
            </Text>
          </Callout>

          {/* CHART PLACEHOLDER */}
          <Card
            interactive={false}
            elevation={1}
            className="flex items-center justify-center h-64 bg-[#202B33] border border-[#394B59] italic text-[#8A9BA8]"
          >
            [Interactive chart coming&nbsp;soon]
          </Card>
        </Card>
      </div>
    </section>
  );
}
