'use client'
import { useState } from 'react'
import Link from 'next/link'

const NAV_ITEMS = [
  { href: '/research', label: 'Research' },
  { href: '/hiring', label: 'Hiring' }, 
  { href: '/about', label: 'About' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  const closeAllDropdowns = () => {
    setOpen(false)
  }

  return (
    <header
      className="fixed left-1/2 -translate-x-1/2 mt-4 md:mt-6 z-50 transition-all duration-300 ease-out bg-white/30 backdrop-blur-sm rounded-full px-3 md:px-4 py-2 shadow-md max-w-4xl w-[98%] md:w-[95%] border border-white/10"
      style={{ top: 'var(--announcement-height, 0px)' }}
    >
      {/* Main navigation bar */}
      <div className="mx-auto flex max-w-6xl items-center justify-between px-2 py-2 lg:px-4 lg:py-2">
        {/* Logo */}
        <Link 
          href="/" 
          className="group flex items-center space-x-1 transition-all duration-300 hover:scale-105"
        >
          <div className="relative">
            <div className="h-5 w-5 md:h-6 md:w-6 rounded-md bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-black font-bold text-xs">O</span>
            </div>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-md blur opacity-100 group-hover:opacity-30 transition duration-300"></div>
          </div>
          <span className="text-base md:text-lg font-bold bg-gradient-to-r from-black to-gray-500 bg-clip-text text-transparent header-text">
            Optimized
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden lg:block" aria-label="Primary Navigation">
          <ul className="flex items-center space-x-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.href} className="relative group">
                  <a
                    href={item.href}
                    className="text-xs font-medium text-black hover:text-white transition-colors duration-200 py-1 header-text hover:drop-shadow-[0_2px_12px_rgba(0,0,0,1)]"
                    onClick={closeAllDropdowns}
                  >
                    {item.label}
                  </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop actions */}
        <div className="hidden lg:flex items-center space-x-2">
          {/* Get Started button */}
          <Link
            href="/get-started"
            className="relative inline-flex h-8 items-center justify-center rounded-full px-4 text-xs font-semibold text-white transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-0 hover:opacity-30 transition duration-300"></div>
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden relative p-2 text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-controls="mobile-nav"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <div className="relative w-6 h-6 flex flex-col justify-center items-center">
            <span className={`block h-0.5 w-6 bg-current rounded transition-all duration-300 ${open ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-current rounded transition-all duration-300 my-0.5 ${open ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-current rounded transition-all duration-300 ${open ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden absolute top-full left-0 right-0 mt-2 transition-all duration-300 ease-out">
          <nav
            id="mobile-nav"
            className="mx-2 rounded-2xl bg-black/90 backdrop-blur border border-white/10 shadow-xl"
            aria-label="Mobile Navigation"
          >
            <div className="p-4">
              <ul className="space-y-3">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                      <a
                        href={item.href}
                        className="block text-base font-medium text-gray-300 hover:text-white transition-colors duration-200 py-3 px-2 rounded-lg hover:bg-white/10"
                        onClick={closeAllDropdowns}
                      >
                        {item.label}
                      </a>
                  </li>
                ))}
              </ul>
              {/* Mobile actions */}
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="flex items-center justify-between mb-3">
                </div>
                <Link
                  href="/get-started"
                  className="relative block w-full rounded-full px-4 py-3 text-center text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
                  onClick={closeAllDropdowns}
                >
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-0 hover:opacity-30 transition duration-300"></div>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
