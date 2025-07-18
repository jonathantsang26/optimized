'use client';

import React from 'react';

export default function ResearchDataset() {
  const rows = [
    { name: 'NL4Opt', len: 518, inst: 1101, milp: '0%' },
    { name: 'ComplexOR', len: 497, inst: 37, milp: '32%' },
    { name: 'NLP4LP Easy', len: 507, inst: 287, milp: '0%' },
    { name: 'NLP4LP Hard', len: 912, inst: 68, milp: '26%' },
  ];

  return (
    <section
      id="dataset"
      className="bg-[#16181A] py-20 px-4 text-[#EFEFEF] flex justify-center"
      data-background="dark"
    >
      <div className="max-w-5xl w-full space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-[#EFEFEF] font-bold text-2xl">The NLP4LP Dataset</h2>
          </div>
        </div>
        <div className="bg-[#202426] p-8 rounded-lg shadow-md space-y-6">
          <p className="leading-relaxed text-lg text-gray-300">
            <strong>NLP4LP</strong> contains 355 real-world optimization instances with longer, noisier natural-language descriptions and an order-of-magnitude more numerical data than prior corpora. It serves as the primary benchmark for <em>OptiMUS-0.3</em> and future language-to-MILP systems.
          </p>
          <div>
            <h4 className="font-semibold mb-2 text-blue-400">Why it matters</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-300">
              <li>Real procurement, logistics & scheduling scenarios—no toy text</li>
              <li>Maintains original numeric scales (no down-sampling)</li>
              <li>Split into <strong>Easy</strong> & <strong>Hard</strong> to stress-test scaling</li>
            </ul>
          </div>
          <hr className="border-[#394B59]" />
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="bg-[#222C36] text-blue-400">
                  <th className="py-2 px-3">Dataset</th>
                  <th className="py-2 px-3">Len.</th>
                  <th className="py-2 px-3">Instances</th>
                  <th className="py-2 px-3">MILP %</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.name} className="text-[#EFEFEF]">
                    <td className={r.name.startsWith('NLP4LP') ? 'font-semibold text-blue-400' : ''}>{r.name}</td>
                    <td>{r.len}</td>
                    <td>{r.inst.toLocaleString()}</td>
                    <td>{r.milp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex gap-4 pt-6 flex-wrap">
            <a
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors"
              href="/datasets/nlp4lp.csv"
              download
            >
              Download CSV
            </a>
            <a
              className="inline-block bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded transition-colors"
              href="#samples"
            >
              Browse Samples
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
