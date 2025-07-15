'use client';

import React from 'react';
import {
  Card,
  H2,
  H5,
  Tag,
  Callout,
  Divider,
  HTMLTable,
  AnchorButton,
} from '@blueprintjs/core';

export default function ResearchDataset() {
  const keywords = ['Dataset', 'NLP', 'MILP', 'Benchmark'];

  const rows = [
    { name: 'NL4Opt', len: 518, inst: 1101, milp: '0 %' },
    { name: 'ComplexOR', len: 497, inst: 37, milp: '32 %' },
    { name: 'NLP4LP Easy', len: 507, inst: 287, milp: '0 %' },
    { name: 'NLP4LP Hard', len: 912, inst: 68, milp: '26 %' },
  ];

  return (
    <section
      id="dataset"
      className="bg-[#202B33] py-20 px-4 text-[#CED9E0] flex justify-center"
      data-background="dark"
    >
      <div className="max-w-5xl w-full space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <H5 className="uppercase tracking-wider text-[#8A9BA8] mb-1">
              Research
            </H5>
            <H2 className="text-[#F5F8FA]">The NLP4LP Dataset</H2>
          </div>
          <div className="flex flex-wrap gap-2">
            {keywords.map((k) => (
              <Tag key={k} minimal round>
                {k}
              </Tag>
            ))}
          </div>
        </div>

        {/* Content Card */}
        <Card elevation={2} className="bg-[#293742] p-10 space-y-6">
          <p className="leading-relaxed text-lg">
            <strong>NLP4LP</strong> contains 355 real‑world optimization
            instances with longer, noisier natural‑language descriptions and an
            order‑of‑magnitude more numerical data than prior corpora. It serves
            as the primary benchmark for <em>OptiMUS‑0.3</em> and future
            language‑to‑MILP systems.
          </p>

          <Callout
            intent="primary"
            icon="database"
            title="Why it matters"
            className="space-y-2"
          >
            <ul className="bp4-list bp4-list-disc pl-5">
              <li>Real procurement, logistics & scheduling scenarios—no toy text</li>
              <li>Maintains original numeric scales (no down‑sampling)</li>
              <li>Split into <strong>Easy</strong> & <strong>Hard</strong> to
              stress‑test scaling</li>
            </ul>
          </Callout>

          <Divider className="!border-[#394B59]" />

          {/* Dataset Table */}
          <HTMLTable
            interactive
            striped
            className="w-full text-sm"
          >
            <thead>
              <tr>
                <th>Dataset</th>
                <th>Len.</th>
                <th>Instances</th>
                <th>MILP&nbsp;%</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.name} className="text-[#CED9E0]">
                  <td className={r.name.startsWith('NLP4LP') ? 'font-semibold' : ''}>{r.name}</td>
                  <td>{r.len}</td>
                  <td>{r.inst.toLocaleString()}</td>
                  <td>{r.milp}</td>
                </tr>
              ))}
            </tbody>
          </HTMLTable>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-6 flex-wrap">
            <AnchorButton
              icon="download"
              large
              intent="success"
              text="Download CSV"
              href="/datasets/nlp4lp.csv"
            />
            <AnchorButton
              icon="eye-open"
              large
              minimal
              text="Browse Samples"
              href="#samples"
            />
          </div>
        </Card>
      </div>
    </section>
  );
}
