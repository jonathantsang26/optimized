'use client';

import React from 'react';
import {
  Card,
  Callout,
  Divider,
  H2,
  H5,
  OL,
} from '@blueprintjs/core';

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
            <span className="font-mono text-base text-[#8A9BA8] select-none">{'{'}1{'}'}</span>
            OptiMUS Pipeline
          </H2>
        </header>

        <Divider className="!border-[#A7B6C2] mb-8" />

        {/* PIPELINE STEPS */}
        <Card
          elevation={2}
          className="bg-[#FFFFFF] p-12 space-y-8 rounded-lg shadow-md backdrop-blur-sm"
        >
          <Callout
            intent="primary"
            icon="layout-linear"
            title="End‑to‑end automation"
            className="!text-[#202426]"
          >
            <OL className="pl-6 space-y-2 text-lg leading-relaxed">
              <li>Parameter & clause extraction via connection‑graph attention.</li>
              <li>Formal LaTeX generation of variables, objectives & constraints.</li>
              <li>
                Executable{' '}
                <code className="px-1 py-0.5 bg-gray-100 text-gray-800 rounded">
                  gurobipy
                </code>{' '}
                code synthesis.
              </li>
              <li>Self‑reflection & automatic regeneration on low‑confidence clauses.</li>
            </OL>
          </Callout>
        </Card>
      </div>
    </section>
  );
}
