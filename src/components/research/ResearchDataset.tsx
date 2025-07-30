'use client';

import React, { useState } from 'react';
import { Database, Search, Code2, ArrowRight } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const exampleTestCase = {
  title: "Multi-Commodity Flow Optimization",
  description: "Optimize the flow of multiple commodities through a network while respecting capacity constraints and minimizing total cost.",
  parameters: [
    {
      name: "num_commodities",
      type: "integer",
      value: 3,
      description: "Number of different commodities"
    },
    {
      name: "num_nodes",
      type: "integer",
      value: 5,
      description: "Number of nodes in the network"
    },
    {
      name: "capacity_constraint",
      type: "float",
      value: 100.0,
      description: "Maximum flow capacity per edge"
    }
  ],
  solution: `The solution employs a multi-commodity flow MILP formulation where:
1. Each commodity has its own flow variables
2. Capacity constraints are shared across commodities
3. Flow conservation is enforced at each node
4. Total cost is minimized across all flows`,
  optimus_code: `# Define the optimization model
model = Model("multi_commodity_flow")

# Decision variables
flow = model.addVars(commodities, nodes, nodes, 
                     vtype=GRB.CONTINUOUS, 
                     name="flow")

# Objective: Minimize total cost
model.setObjective(
    sum(cost[i,j] * flow[k,i,j] 
        for k in commodities
        for i,j in edges),
    GRB.MINIMIZE)

# Capacity constraints
for i,j in edges:
    model.addConstr(
        sum(flow[k,i,j] for k in commodities) <= capacity[i,j],
        f"capacity_{i}_{j}")

# Flow conservation
for k in commodities:
    for i in nodes:
        model.addConstr(
            sum(flow[k,i,j] for j in adj[i]) -
            sum(flow[k,j,i] for j in adj[i]) ==
            demand[k,i],
            f"flow_cons_{k}_{i}")

model.optimize()`
};

export default function ResearchDataset() {
  const [activeTab, setActiveTab] = useState<'overview' | 'parameters' | 'code'>('overview');

  return (
    <section id="dataset" className="bg-[#16181A] py-12 sm:py-24 px-4 text-[#EFEFEF]">
      <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
        {/* Header */}
        <div>
          <h5 className="uppercase tracking-wider text-gray-400 mb-2 font-semibold">Research</h5>
          <h2 className="text-[#EFEFEF] font-bold text-h2 mb-4 sm:mb-6">Dataset</h2>
          <p className="text-gray-300 max-w-5xl leading-relaxed text-sm sm:text-base">
            Our research dataset comprises a diverse collection of optimization problems, each carefully documented with natural language descriptions, formal parameters, and solution approaches, and verified by domain experts. Here&apos;s an example of how we structure our test cases:
          </p>
        </div>

        {/* Example Test Case */}
        <div className="bg-[#202426] rounded-xl overflow-hidden border border-gray-700">
          {/* Test Case Header */}
          <div className="p-4 sm:p-8 border-b border-gray-700">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{exampleTestCase.title}</h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{exampleTestCase.description}</p>
              </div>
              <div className="flex gap-2 sm:flex-shrink-0">
                <button 
                  onClick={() => setActiveTab('overview')}
                  className={`p-2 sm:px-4 sm:py-2 rounded-lg transition-colors ${
                    activeTab === 'overview' 
                      ? 'bg-blue-500 text-white' 
                      : 'text-gray-400 hover:bg-gray-700'
                  }`}
                >
                  <Database className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => setActiveTab('parameters')}
                  className={`p-2 sm:px-4 sm:py-2 rounded-lg transition-colors ${
                    activeTab === 'parameters' 
                      ? 'bg-blue-500 text-white' 
                      : 'text-gray-400 hover:bg-gray-700'
                  }`}
                >
                  <Search className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => setActiveTab('code')}
                  className={`p-2 sm:px-4 sm:py-2 rounded-lg transition-colors ${
                    activeTab === 'code' 
                      ? 'bg-blue-500 text-white' 
                      : 'text-gray-400 hover:bg-gray-700'
                  }`}
                >
                  <Code2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-4 sm:p-8">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-2 sm:mb-3">Problem Description</h4>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{exampleTestCase.description}</p>
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-2 sm:mb-3">Solution Approach</h4>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base whitespace-pre-line">{exampleTestCase.solution}</p>
                </div>
              </div>
            )}

            {activeTab === 'parameters' && (
              <div>
                <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-3 sm:mb-4">Parameters</h4>
                <div className="overflow-x-auto -mx-4 sm:mx-0">
                  <div className="min-w-[600px] sm:min-w-0 px-4 sm:px-0">
                    <table className="w-full">
                      <thead>
                        <tr className="text-left border-b border-gray-700">
                          <th className="pb-3 pr-6 text-sm font-medium text-gray-400">Name</th>
                          <th className="pb-3 pr-6 text-sm font-medium text-gray-400">Type</th>
                          <th className="pb-3 pr-6 text-sm font-medium text-gray-400">Value</th>
                          <th className="pb-3 text-sm font-medium text-gray-400">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        {exampleTestCase.parameters.map((param, index) => (
                          <tr key={index} className="border-b border-gray-700/50 last:border-0">
                            <td className="py-3 sm:py-4 pr-6 text-[#EFEFEF] font-medium text-sm sm:text-base">{param.name}</td>
                            <td className="py-3 sm:py-4 pr-6">
                              <span className="px-2 py-1 bg-blue-400/10 text-blue-400 rounded text-xs sm:text-sm">
                                {param.type}
                              </span>
                            </td>
                            <td className="py-3 sm:py-4 pr-6 font-mono text-[#EFEFEF] text-sm sm:text-base">{param.value}</td>
                            <td className="py-3 sm:py-4 text-gray-300 text-sm sm:text-base">{param.description}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'code' && (
              <div>
                <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-3 sm:mb-4">OptiMUS Code</h4>
                <div className="rounded-lg overflow-hidden">
                  <SyntaxHighlighter
                    language="python"
                    style={atomDark}
                    customStyle={{
                      margin: 0,
                      padding: '1rem',
                      background: '#1A1D1F',
                      fontSize: '0.75rem',
                      lineHeight: '1.25rem',
                      borderRadius: '0.5rem',
                    }}
                    className="sm:text-sm sm:leading-6"
                  >
                    {exampleTestCase.optimus_code}
                  </SyntaxHighlighter>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Dataset Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-[#202426] p-4 sm:p-6 rounded-xl border border-gray-700">
            <div className="flex items-center gap-3 sm:gap-4 mb-3">
              <div className="p-2 sm:p-3 bg-blue-400/10 rounded-lg">
                <Database className="text-blue-400 w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h4 className="font-semibold text-base sm:text-lg">1,000+</h4>
            </div>
            <p className="text-sm sm:text-base text-gray-400">Optimization problems in our dataset</p>
          </div>
          <div className="bg-[#202426] p-4 sm:p-6 rounded-xl border border-gray-700">
            <div className="flex items-center gap-3 sm:gap-4 mb-3">
              <div className="p-2 sm:p-3 bg-blue-400/10 rounded-lg">
                <Code2 className="text-blue-400 w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h4 className="font-semibold text-base sm:text-lg">15+</h4>
            </div>
            <p className="text-sm sm:text-base text-gray-400">Different optimization domains covered</p>
          </div>
          <div className="bg-[#202426] p-4 sm:p-6 rounded-xl border border-gray-700">
            <div className="flex items-center gap-3 sm:gap-4 mb-3">
              <div className="p-2 sm:p-3 bg-blue-400/10 rounded-lg">
                <ArrowRight className="text-blue-400 w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h4 className="font-semibold text-base sm:text-lg">98%</h4>
            </div>
            <p className="text-sm sm:text-base text-gray-400">Success rate on validation tests</p>
          </div>
        </div>
      </div>
    </section>
  );
}
