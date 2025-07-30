'use client'

import { useState } from 'react'
import { Mail, Building2, User, ArrowRight, Home } from 'lucide-react'
import Link from 'next/link'

export default function GetStartedPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const SHEETS_ENDPOINT = '/api/file'

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    try {
      const res = await fetch(SHEETS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Submission failed');
      }
      setSubmitted(true)
    } catch (error) {
      setError(error instanceof Error ? error.message : 'There was a problem submitting your request. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className="bg-[#16181A] min-h-screen">
      <div className="max-w-5xl mx-auto py-24 px-4">
        {/* Home Button */}
        <Link 
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-white hover:text-blue-400 transition-colors rounded-lg border border-gray-700 hover:border-blue-400"
        >
          <Home size={18} />
          <span>Back to Home</span>
        </Link>
        {/* Header */}
        <div className="mb-12">
          <h5 className="uppercase tracking-wider text-gray-400 mb-2 font-semibold">Get Started</h5>
          <h2 className="text-white font-bold text-h2 mb-6">Apply Our Research</h2>
          <p className="text-gray-300 max-w-5xl leading-relaxed">
            Join leading organizations in leveraging AI-powered optimization.
          </p>
        </div>

        {/* Form Section */}
        <div className="bg-[#202426] rounded-xl border border-gray-700 p-8 md:p-12">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
              <div className="p-4 bg-green-400/10 rounded-full">
                <ArrowRight size={32} className="text-green-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Thank You!</h3>
              <p className="text-gray-300">Your submission has been received. We'll be in touch soon.</p>
            </div>
          ) : (
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div>
                <label className="flex items-center text-white font-medium mb-2 gap-2">
                  <User size={18} className="text-blue-400" />
                  Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-lg px-4 py-3 bg-[#16181A] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="flex items-center text-white font-medium mb-2 gap-2">
                  <Mail size={18} className="text-blue-400" />
                  Business Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-lg px-4 py-3 bg-[#16181A] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label className="flex items-center text-white font-medium mb-2 gap-2">
                  <Building2 size={18} className="text-blue-400" />
                  Company / Institution <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="company"
                  required
                  value={form.company}
                  onChange={handleChange}
                  className="w-full rounded-lg px-4 py-3 bg-[#16181A] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  placeholder="Enter your organization name"
                />
              </div>

              {error && (
                <div className="bg-red-400/10 text-red-400 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold text-lg transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {submitting ? 'Submitting...' : 'Get Started'}
                {!submitting && <ArrowRight size={20} />}
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  )
}
