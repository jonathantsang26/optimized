'use client';

import React from 'react';
import {
  Card,
  H2,
  H5,
  Tag,
  Callout,
  Divider,
} from '@blueprintjs/core';

export default function ResearchAbstract() {
  const keywords = ['LLM', 'MILP', 'Autonomous Debugging'];

  return (
    <section
      id="abstract"
      className="bg-[#202B33] py-20 px-4 text-[#CED9E0] flex justify-center"
      data-background="dark"
    >
      <div className="max-w-4xl w-full space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-2">
          <div>
            <H5 className="uppercase tracking-wider text-[#8A9BA8] mb-1">Research</H5>
            <H2 className="text-[#F5F8FA]">Abstract</H2>
          </div>
          <div className="flex flex-wrap gap-2">
            {keywords.map((k) => (
              <Tag key={k} minimal round>
                {k}
              </Tag>
            ))}
          </div>
        </div>

        <Card elevation={2} className="bg-[#293742] p-10 space-y-6 rounded-lg shadow-md">
          <Callout intent="primary" icon="info-sign" title="What is OptiMUS-0.3?" className="!text-[#F5F8FA]">
            <ul className="bp4-list bp4-list-disc pl-5 text-lg leading-relaxed">
              <li><strong>OptiMUS-0.3</strong> is an LLM agent that translates natural language into mixed-integer linear programs (MILP).</li>
              <li>It generates solver code and iteratively debugs itself for improved results.</li>
              <li>Designed to lower expertise barriers and democratize access to state-of-the-art optimization.</li>
            </ul>
          </Callout>

          <Divider className="!border-[#394B59]" />

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <H5>Key Contributions</H5>
              <ul className="bp4-list bp4-list-disc pl-5 space-y-1">
                <li><strong>Natural Language → MILP Compiler:</strong> Parses user intent into formal optimization primitives.</li>
                <li><strong>Self-Reflexive Debugger:</strong> Diagnoses and regenerates constraints for infeasible or sub-optimal models.</li>
                <li><strong>Solver-Agnostic Codegen:</strong> Outputs Python, Julia, or C++ for Gurobi, CPLEX, or open-source solvers.</li>
              </ul>
            </div>
            <Callout
              intent="success"
              icon="chart"
              title="Benchmark Highlights"
              className="h-full flex flex-col justify-center"
            >
              <ul className="bp4-list bp4-list-disc pl-5 space-y-1">
                <li><strong>22 %</strong> avg. gap reduction on OR-Library test-set</li>
                <li><strong>24 %</strong> faster convergence on two-stage stochastic problems</li>
                <li>Zero-shot generalization to unseen variable counts</li>
              </ul>
            </Callout>
          </div>
        </Card>
      </div>
    </section>
  );
}
