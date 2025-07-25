'use client'

import React, { useEffect, useState } from 'react';
import '@/app/globals.css';
import { motion } from 'framer-motion';
import { Database, ShieldCheck, Search, Zap } from 'lucide-react';
import Link from 'next/link';
import PilotResultsScroll from '@/components/PilotResultsScroll';
import Footer from '@/components/Footer';
import { useIsMobile } from '@/components/useIsMobile';


export default function TheSolutionPage() {
  const isMobile = useIsMobile();
  const [currentAgent, setCurrentAgent] = useState(1);
  const word = '《Direct》'.split('');

  const agents = [
    {
      id: 1,
      title: "Clean & Match",
      description: "Agents reconcile Bill of Materials (BOM) SKUs, Purchase Order (PO) lines, and supplier catalogs. They collapse duplicate part numbers, harmonize specifications, and align suppliers to create a unified, accurate dataset."
    },
    {
      id: 2,
      title: "Price-Guard",
      description: "Agents cross-check every PO line against master agreements and global price breaks. They flag discrepancies in real-time, preventing overpayments and ensuring compliance with negotiated terms."
    },
    {
      id: 3,
      title: "Opportunity Hunt",
      description: "Agents identify consolidation opportunities, such as sourcing the same part from multiple suppliers. They also highlight savings from Minimum Order Quantity (MOQ) or batch breaks and suggest engineered alternatives for better value."
    },
    {
      id: 4,
      title: "Auto-Action",
      description: "For each identified issue or opportunity, agents generate automated workflows. This includes drafting supplier emails, creating SAP change requests, or initiating e-Auctions&mdash;all without requiring buyer intervention, enabling seamless value recovery."
    }
  ];

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
      section.classList.add('fade-in-up', `stagger-${(index % 3) + 1}`);
      setTimeout(() => {
        section.classList.add('visible');
      }, 100);
    });
  }, []);

  return (
    <div className="cs-page">
      <header className={`fixed w-full top-0 z-40 flex items-center justify-between ${isMobile ? 'px-4 py-2' : 'px-6 py-3'} backdrop-blur-md bg-[#16181A]/70`}>
        <div className={`flex items-center ${isMobile ? 'gap-3' : 'gap-6'}`}>
          <Link href="/" className={`${isMobile ? 'text-sm' : 'text-base'} font-semibold tracking-tight hover:text-blue-400 transition-colors`}>← Home</Link>
          <a href="" className={`${isMobile ? 'text-sm' : 'text-base'} font-semibold tracking-tight`}>Optimized</a>
        </div>
      </header>
      
      <section className={`cs-hero min-h-screen flex items-center justify-center ${isMobile ? 'px-4' : 'px-20'}`}>
        <div className="relative z-10">
          <h1 className={`${isMobile ? 'text-3xl' : 'text-d1'} text-center font-semibold leading-tight tracking-tight`}>
            {word.map((ch, i) => (
              <motion.span key={i} initial={{ y: 96, clipPath: 'inset(0% 0% 100% 0%)' }} animate={{ y: 0, clipPath: 'inset(0% 0% 0% 0%)' }} transition={{ delay: i * 0.05, duration: 0.6, ease: 'easeOut' }} className="inline-block">{ch}</motion.span>
            ))}
          </h1>
          <p className={`pt-4 ${isMobile ? 'text-lg' : 'text-h3'} text-center`}>A Case Study in Streamlined Direct Materials Management with AI Agents</p>
        </div>
      </section>

      <PilotResultsScroll />

      <section className={`cs-agents-section ${isMobile ? 'h-auto' : 'h-3/4'} relative`}>
        {isMobile ? (
          // Mobile version - only timeline
          <div className="bg-[#474747] p-6 rounded-xl">
            <h2 className="text-2xl font-semibold mb-8 text-center">Agent Execution Timeline</h2>
            <div className="timeline-container">
              <div className="timeline-step">
                <div className="timeline-icon">
                  <Database size={24} />
                </div>
                <h3 className="timeline-title">Clean & Match</h3>
                <p className="timeline-description">Harmonizes data across BOMs, POs, and catalogs</p>
              </div>

              <div className="timeline-step">
                <div className="timeline-icon">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="timeline-title">Price-Guard</h3>
                <p className="timeline-description">Validates pricing against agreements</p>
              </div>

              <div className="timeline-step">
                <div className="timeline-icon">
                  <Search size={24} />
                </div>
                <h3 className="timeline-title">Opportunity Hunt</h3>
                <p className="timeline-description">Identifies consolidation and savings opportunities</p>
              </div>

              <div className="timeline-step">
                <div className="timeline-icon">
                  <Zap size={24} />
                </div>
                <h3 className="timeline-title">Auto-Action</h3>
                <p className="timeline-description">Automates workflows for value recovery</p>
              </div>
            </div>
          </div>
        ) : (
          // Desktop version - full content
          <div className="flex flex-row h-full">
            <nav className="w-1/4 min-w-[300px] bg-[#474747] backdrop-blur-sm pt-20 pb-12 px-12" 
                 style={{ borderRadius: '40px 0 0 40px' }}>
              <h2 className="text-h2 font-semibold mb-12">Our Agents</h2>
              <ul className="flex flex-col gap-10">
                {agents.map((agent) => (
                  <li key={agent.id}>
                    <button
                      onClick={() => setCurrentAgent(agent.id)}
                      className={`text-left w-full px-4 py-5 rounded-xl text-lg transition-colors ${
                        currentAgent === agent.id
                          ? "bg-blue-500/20 text-white"
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      <span className="block text-sm text-blue-400 mb-2">Agent {agent.id}</span>
                      {agent.title}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            <main className="w-1/2 pt-20 pb-12 mx-auto bg-[#474747] px-12"
                  style={{ borderRadius: '0 40px 40px 0' }}>
              <div className="mx-auto">
                <h2 className="text-h2 font-semibold mb-8">Key Agent Teammates and Their Functions</h2>
                <p className="text-base mb-8">Optimized&apos;s AI agents handle critical aspects of direct materials management through targeted automation:</p>

                <div className="flex flex-col gap-10 pb-20">
                  {agents.map((agent) => (
                    <div
                      key={agent.id}
                      className={`transition-all duration-500 ${
                        currentAgent === agent.id
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 translate-x-8 absolute top-0 left-0 right-0 pointer-events-none"
                      }`}
                    >
                      <h3 className="text-h2 font-semibold mb-6">
                        {agent.id}. {agent.title}
                      </h3>
                      <p className="text-base">{agent.description}</p>
                    </div>
                  ))}
                </div>
                <section className="agent-timeline">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                  >
                    <h2 className="text-h2 font-semibold">Agent Execution Timeline</h2>
                    <p className="text-base max-w-2xl mx-auto mt-4">Our intelligent agents work in sequence to optimize your direct materials management process</p>
                  </motion.div>

                  <div className="timeline-container">
                    <motion.div 
                      className="timeline-step"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                    >
                      <div className="timeline-icon">
                        <Database size={32} />
                      </div>
                      <h3 className="timeline-title">Clean & Match</h3>
                      <p className="timeline-description">Harmonizes data across BOMs, POs, and catalogs</p>
                    </motion.div>

                    <motion.div 
                      className="timeline-step"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <div className="timeline-icon">
                        <ShieldCheck size={32} />
                      </div>
                      <h3 className="timeline-title">Price-Guard</h3>
                      <p className="timeline-description">Validates pricing against agreements</p>
                    </motion.div>

                    <motion.div 
                      className="timeline-step"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <div className="timeline-icon">
                        <Search size={32} />
                      </div>
                      <h3 className="timeline-title">Opportunity Hunt</h3>
                      <p className="timeline-description">Identifies consolidation and savings opportunities</p>
                    </motion.div>

                    <motion.div 
                      className="timeline-step"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <div className="timeline-icon">
                        <Zap size={32} />
                      </div>
                      <h3 className="timeline-title">Auto-Action</h3>
                      <p className="timeline-description">Automates workflows for value recovery</p>
                    </motion.div>
                  </div>
                </section>
              </div>
            </main>
          </div>
        )}
      </section>

      <section className={`${isMobile ? 'h-auto py-20' : 'h-1/4'} flex ${isMobile ? 'w-full px-4' : 'w-1/2'} mx-auto rounded-full`}>
        <div className={`w-full pt-20${isMobile ? ' mt-16' : ''}`}>
          <h2 className={`text-h2 font-semibold ${isMobile ? 'mb-6 text-2xl' : 'mb-4'}`}>Pilot Results: Proven Impact in 12 Weeks</h2>
          <p className={`${isMobile ? 'text-lg leading-relaxed' : 'text-base'} ${isMobile ? 'mb-8' : 'mb-6'}`}>
            During the 12-week pilot, the Agents scanned <strong>1.8 million PO lines</strong> across <strong>five plants</strong>, delivering actionable insights and substantial savings:
          </p>
          <div className={`grid ${isMobile ? 'grid-cols-1 gap-6' : 'grid-cols-2 gap-6'}`}>
            {isMobile ? (
              // Mobile version without animations
              <>
                <div className="bg-[#2c2f33]/80 rounded-xl p-8 shadow-md">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-lg bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full">Tail Spend</span>
                  </div>
                  <div className="text-3xl font-bold text-white">
                    5.2% Direct Tail Spend Leakage Identified
                  </div>
                  <p className="text-lg mt-4">Uncovered issues like missed volume discounts, price creep, and duplicate SKUs, highlighting areas for immediate cost recovery.</p>
                </div>

                <div className="bg-[#2c2f33]/80 rounded-xl p-8 shadow-md">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-lg bg-red-500/20 text-red-300 px-3 py-1 rounded-full">Risk Alert</span>
                  </div>
                  <div className="text-3xl font-bold text-white">
                    47 Critical Parts with Spec Drift Detected
                  </div>
                  <p className="text-lg mt-4">Flagged parts at risk of causing production line downtime due to specification inconsistencies, enabling proactive mitigation.</p>
                </div>

                <div className="bg-[#2c2f33]/80 rounded-xl p-8 shadow-md mb-12">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-lg bg-green-500/20 text-green-300 px-3 py-1 rounded-full">Savings</span>
                  </div>
                  <div className="text-3xl font-bold text-white">
                    €4.7 Million Consolidation Upside
                  </div>
                  <p className="text-lg mt-4">Opportunities realized by shifting <strong>380 SKUs</strong> to preferred suppliers and blanket orders, streamlining procurement and reducing costs.</p>
                </div>
              </>
            ) : (
              // Desktop version with animations
              <>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-[#2c2f33]/80 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-[1.02] hover:-translate-y-1"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-h4 bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full">Tail Spend</span>
                  </div>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-h2 font-bold text-white"
                  >
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      5.2%
                    </motion.span> Direct Tail Spend Leakage Identified
                  </motion.div>
                  <p className="text-base mt-2">Uncovered issues like missed volume discounts, price creep, and duplicate SKUs, highlighting areas for immediate cost recovery.</p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-[#2c2f33]/80 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-[1.02] hover:-translate-y-1"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-h3 bg-red-500/20 text-red-300 px-3 py-1 rounded-full">Risk Alert</span>
                  </div>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-h2 font-bold text-white"
                  >
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      47
                    </motion.span> Critical Parts with Spec Drift Detected
                  </motion.div>
                  <p className="text-base mt-2">Flagged parts at risk of causing production line downtime due to specification inconsistencies, enabling proactive mitigation.</p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-[#2c2f33]/80 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-[1.02] hover:-translate-y-1 md:col-span-2"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-h4 bg-green-500/20 text-green-300 px-3 py-1 rounded-full">Savings</span>
                  </div>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-h2 font-bold text-white"
                  >
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      €4.7 Million
                    </motion.span> Consolidation Upside
                  </motion.div>
                  <p className="text-base">Opportunities realized by shifting <strong>380 SKUs</strong> to preferred suppliers and blanket orders, streamlining procurement and reducing costs.</p>
                </motion.div>
              </>
            )}
          </div>
        </div>
      </section>
      <div className="bg-[#16181A] pt-20">
        <Footer />
      </div>
    </div>
  );
}