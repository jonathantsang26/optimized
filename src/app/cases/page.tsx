'use client'

import React, { useEffect, useState } from 'react';
import '@/app/globals.css';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import PilotResultsScroll from '@/components/PilotResultsScroll';


export default function TheSolutionPage() {
  const [open, setOpen] = useState(false);
  const word = '《Direct》'.split('');
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
      section.classList.add('fade-in-up', `stagger-${(index % 3) + 1}`);
      setTimeout(() => {
        section.classList.add('visible');
      }, 100); // Small delay to trigger transition
    });
  }, []);

  return (
    <div className="cs-page">
      <header className="fixed w-full top-0 z-40 flex items-center justify-between px-6 py-3 backdrop-blur-md bg-[#16181A]/70">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-base font-semibold tracking-tight hover:text-blue-400 transition-colors">← Home</Link>
          <a href="" className="text-base font-semibold tracking-tight">Optimized</a>
        </div>
        <button aria-label="toggle menu" onClick={() => setOpen(!open)} className="p-2 rounded hover:bg-white/10">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>
      
      <section className="cs-hero h-screen flex items-center justify-center">
        <div className="relative z-10">
          <h1 className="text-d1 text-center font-semibold leading-tight tracking-tight">
            {word.map((ch, i) => (
              <motion.span key={i} initial={{ y: 96, clipPath: 'inset(0% 0% 100% 0%)' }} animate={{ y: 0, clipPath: 'inset(0% 0% 0% 0%)' }} transition={{ delay: i * 0.05, duration: 0.6, ease: 'easeOut' }} className="inline-block">{ch}</motion.span>
            ))}
          </h1>
          <p className="pt-4 text-h4 text-center">Streamlined Direct Materials Management with AI Agents</p>
        </div>
      </section>

      <PilotResultsScroll />

      <section className="cs-agents-section">
        <h2 className="text-h2 font-semibold">Key Agent Teammates and Their Functions</h2>
        <p className="text-base">Optimized’s AI agents handle critical aspects of direct materials management through targeted automation:</p>
        <div className="pt-5 cs-agents-list">
          <div className="feature-card cs-agent-card">
            <h3 className="text-h3 font-semibold">1. Clean & Match</h3>
            <p className="text-base">Agents reconcile Bill of Materials (BOM) SKUs, Purchase Order (PO) lines, and supplier catalogs. They collapse duplicate part numbers, harmonize specifications, and align suppliers to create a unified, accurate dataset.</p>
          </div>
          <div className="feature-card cs-agent-card">
            <h3 className="text-h3 font-semibold">2. Price-Guard</h3>
            <p className="text-base">Agents cross-check every PO line against master agreements and global price breaks. They flag discrepancies in real-time, preventing overpayments and ensuring compliance with negotiated terms.</p>
          </div>
          <div className="feature-card cs-agent-card">
            <h3 className="text-h3 font-semibold">3. Opportunity Hunt</h3>
            <p className="text-base">Agents identify consolidation opportunities, such as sourcing the same part from multiple suppliers. They also highlight savings from Minimum Order Quantity (MOQ) or batch breaks and suggest engineered alternatives for better value.</p>
          </div>
          <div className="feature-card cs-agent-card">
            <h3 className="text-h3 font-semibold">4. Auto-Action</h3>
            <p className="text-base">For each identified issue or opportunity, agents generate automated workflows. This includes drafting supplier emails, creating SAP change requests, or initiating e-Auctions—all without requiring buyer intervention, enabling seamless value recovery.</p>
          </div>
        </div>
      </section>

      <section className="cs-results-section">
        <h2 className="text-h2 font-semibold">Pilot Results: Proven Impact in 12 Weeks</h2>
        <p className="text-base">During the 12-week pilot, the Agents scanned <strong>1.8 million PO lines</strong> across <strong>five plants</strong>, delivering actionable insights and substantial savings:</p>
        <div className="pt-4 cs-results-list">
          <div className="feature-card cs-result-item">
            <strong className="text-h3 font-bold">5.2% Direct Tail Spend Leakage Identified</strong>
            <p className="text-base">Uncovered issues like missed volume discounts, price creep, and duplicate SKUs, highlighting areas for immediate cost recovery.</p>
          </div>
          <div className="feature-card cs-result-item">
            <strong className="text-h3 font-bold">47 Critical Parts with Spec Drift Detected</strong>
            <p className="text-base">Flagged parts at risk of causing production line downtime due to specification inconsistencies, enabling proactive mitigation.</p>
          </div>
          <div className="feature-card cs-result-item">
            <strong className="text-h3 font-bold">€4.7 Million Consolidation Upside</strong>
            <p className="text-base">Opportunities realized by shifting <strong>380 SKUs</strong> to preferred suppliers and blanket orders, streamlining procurement and reducing costs.</p>
          </div>
        </div>
      </section>

      <section className="cs-why-section">
        <h2 className="text-h2 font-semibold">Why Optimized’s AI Platform?</h2>
        <ul className="pb-5 pt-4 cs-why-list">
          <li className="feature-card cs-why-item"><strong className="font-bold">Efficiency Gains</strong>: Automates tedious manual processes, freeing buyers for strategic tasks.</li>
          <li className="feature-card cs-why-item"><strong className="font-bold">Cost Savings</strong>: Real-time discrepancy detection and opportunity hunting drive measurable financial benefits.</li>
          <li className="feature-card cs-why-item"><strong className="font-bold">Risk Reduction</strong>: Ensures spec harmony and critical part oversight to prevent downtime and supply disruptions.</li>
          <li className="feature-card cs-why-item"><strong className="font-bold">Scalability</strong>: Proven in a multi-plant pilot, ready for enterprise-wide deployment.</li>
        </ul>
        <a href="https://www.optimized-ai.com/contact" className="btn-primary">Contact Us Today</a>
      </section>

      <footer className="cs-footer">
        <p className="text-s1">This case study demonstrates the transformative power of AI in direct materials management. Results based on a real-world 12-week pilot.</p>
      </footer>
    </div>
  );
};
