'use client'
import { useState } from 'react'
import Link from 'next/link'

const NAV_ITEMS = [
  { href: '/research', label: 'Research' },
  { href: '/hiring', label: 'Hiring' }, 
  { href: '/about', label: 'About' },
]

const DESKTOP_MENU_ITEMS = [
  { href: '/research', label: 'Research' },
  { href: '/hiring', label: 'Team' }, 
  { href: '/about', label: 'About' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false)

  const closeAllDropdowns = () => {
    setOpen(false)
    setDesktopMenuOpen(false)
  }

  return (
    <>
      {/* Desktop Header */}
      <header
        className="hidden md:block fixed left-1/2 -translate-x-1/2 mt-4 md:mt-6 z-50 transition-all duration-300 ease-out bg-white/30 backdrop-blur-sm rounded-full px-4 md:px-6 py-3 shadow-2xl max-w-4xl w-[98%] md:w-[95%] border border-white/10"
        style={{ top: 'var(--announcement-height, 0px)' }}
      >
        {/* Main navigation bar */}
        <div className="mx-auto flex max-w-6xl items-center justify-between px-3 py-3 lg:px-6 lg:py-3">
          {/* Logo */}
          <span className="text-lg md:text-xl font-bold bg-black 0 bg-clip-text text-transparent header-text">
            optimized
          </span>

          {/* Desktop menu toggle */}
          <div className="hidden lg:block">
            <button
              className="relative p-2 text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-controls="desktop-menu"
              aria-expanded={desktopMenuOpen}
              onClick={() => setDesktopMenuOpen((prev) => !prev)}
            >
              <div className="relative w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block h-0.5 w-6 bg-current rounded transition-all duration-300 ${desktopMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-current rounded transition-all duration-300 my-0.5 ${desktopMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-current rounded transition-all duration-300 ${desktopMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>
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
              </div>
            </nav>
          </div>
        )}

        {/* Desktop menu dropdown */}
        {desktopMenuOpen && (
          <div className="hidden lg:block absolute top-full right-0 mt-2 transition-all duration-300 ease-out z-50">
            <nav
              id="desktop-menu"
              className="mx-2 rounded-2xl bg-white/80 backdrop-blur border border-gray-200 shadow-2xl min-w-[220px] p-2"
              aria-label="Desktop Menu"
              style={{ boxShadow: '0 12px 48px 0 rgba(0,0,0,0.32), 0 2px 8px 0 rgba(59,130,246,0.14)' }}
            >
              <div className="p-2">
                <ul className="space-y-2">
                  {DESKTOP_MENU_ITEMS.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        className="block text-base font-semibold text-gray-800 hover:text-blue-700 transition-colors duration-200 py-2 px-4 rounded-xl hover:bg-blue-50 focus:bg-blue-100 focus:outline-none"
                        onClick={closeAllDropdowns}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Mobile Top Bar */}
      <div className="flex md:hidden fixed top-0 left-0 right-0 z-50 items-center justify-between bg-white/90 shadow px-3 py-2">
        {/* Hamburger menu button */}
        <button
          className="p-2 text-gray-700 hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-controls="mobile-nav"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">Open menu</span>
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span className={`block h-0.5 w-6 bg-current rounded transition-all duration-300 ${open ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-current rounded transition-all duration-300 my-0.5 ${open ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-current rounded transition-all duration-300 ${open ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </button>
        {/* Get Started button (mobile only) */}
        <Link
          href="/get-started"
          className="md:hidden relative inline-flex items-center justify-center px-2 py-1 text-xs bg-white/30 backdrop-blur-sm border border-white/10 shadow font-semibold text-black rounded-full"
        >
          <span className="relative z-10">Get&nbsp;Started</span>
        </Link>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/60" onClick={closeAllDropdowns}>
          <nav
            id="mobile-nav"
            className="absolute top-12 left-2 right-2 mx-2 rounded-2xl bg-white text-black border border-gray-200 shadow-xl"
            aria-label="Mobile Navigation"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-4">
              <ul className="space-y-3">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="block text-base font-medium text-gray-800 hover:text-blue-600 transition-colors duration-200 py-3 px-2 rounded-lg hover:bg-gray-100"
                      onClick={closeAllDropdowns}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      )}

      {/* Floating Get Started Button (desktop only) */}
      <div
        className="fixed z-40 flex justify-center transition-all duration-300 ease-out md:flex"
        style={{
          // Responsive: top aligns with where header would be at each breakpoint
          top: 'calc(var(--announcement-height, 0px) + 2.9rem)', 
          right: '14rem',
        }}
      >
        <Link
          href="/get-started"
          className="rounded-full hidden md:inline-flex items-center justify-center px-4 py-2 md:px-6 md:py-3 text-sm md:text-base bg-white/30 backdrop-blur-sm border border-white/10 font-semibold"
          style={{ boxShadow: '0 8px 32px 0 rgba(0,0,0,0.28)' }}
        >
          <span className="relative z-10 text-black">Get&nbsp;Started</span>
        </Link>
      </div>
      {/* Responsive adjustment for larger screens */}
      <style jsx>{`
        @media (min-width: 768px) {
          .md\:get-started-pos {
            top: calc(var(--announcement-height, 0px) + 2rem) !important;
            right: 4rem !important;
          }
        }
        @media (min-width: 1024px) {
          .lg\:get-started-pos {
            top: calc(var(--announcement-height, 0px) + 2.9rem) !important;
            right: 15.5rem !important;
          }
        }
      `}</style>
    </>
  )
}
