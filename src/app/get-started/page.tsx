'use client'

import { useState } from 'react'

export default function GetStartedPage() {
  const [form, setForm] = useState({
    Name: '',
    Email: '',
    Company: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  // Replace with your Google Apps Script endpoint
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
      if (!res.ok) throw new Error('Submission failed')
      setSubmitted(true)
    } catch {
      setError('There was a problem submitting your request. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-black to-purple-900 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-xl bg-white/10 backdrop-blur rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-white mb-2">Get Started</h1>
        <p className="text-gray-200 mb-8">Fill out the form and our team will be in touch soon.</p>
        {submitted ? (
          <div className="text-green-400 text-lg font-semibold py-12 text-center">
            Thank you! Your submission has been received.
          </div>
        ) : (
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
            </div>
            <div>
              <label className="block text-white font-medium mb-1">
                Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="Name"
                required
                value={form.Name}
                onChange={handleChange}
                className="w-full rounded px-3 py-2 bg-white/80 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-white font-medium mb-1">
                Business Email Address <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                name="Email"
                required
                value={form.Email}
                onChange={handleChange}
                className="w-full rounded px-3 py-2 bg-white/80 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            
            <div>
              <label className="block text-white font-medium mb-1">
                Company / Institution <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="Company"
                required
                value={form.Company}
                onChange={handleChange}
                className="w-full rounded px-3 py-2 bg-white/80 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            {error && <div className="text-red-400 text-sm">{error}</div>}
            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3 rounded bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-lg hover:from-blue-600 hover:to-purple-700 transition-all disabled:opacity-60"
            >
              {submitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        )}
      </div>
    </main>
  )
}
