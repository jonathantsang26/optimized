'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useIsMobile } from './useIsMobile'

const NAV_ITEMS = [
  { href: '/research', label: 'Research' },
  { href: '/hiring', label: 'Team' },
  { href: '/about', label: 'About' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const isMobile = useIsMobile(512)
  return (
    <header className="fixed left-1/2 -translate-x-1/2 top-0 z-50 w-full bg-black/90 shadow-lg px-4 md:px-8 py-3">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        {/* Logo */}
        <span className="text-h2 font-bold text-white">
          optimized
        </span>
        {/* Desktop Navigation (>=512px) */}
        {!isMobile && (
          <nav>
            <ul className="flex gap-6 md:gap-8">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white text-base hover:text-blue-400 font-medium transition-colors duration-200">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
        {/* Hamburger for <512px */}
        {isMobile && !menuOpen && (
          <button
            className="p-2 text-white hover:text-blue-400 focus:outline-none"
            aria-label="Open menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
              <rect y="5" width="24" height="2" rx="1" fill="currentColor" />
              <rect y="11" width="24" height="2" rx="1" fill="currentColor" />
              <rect y="17" width="24" height="2" rx="1" fill="currentColor" />
            </svg>
          </button>
        )}
      </div>
      {/* Fullscreen Mobile Drawer */}
      {isMobile && menuOpen && (
        <>
          {/* Background overlay */}
          <div
            className="fixed inset-0 z-[10000] bg-black/50 w-screen h-screen left-0 top-0"
            onClick={() => setMenuOpen(false)}
          />
          {/* Menu content */}
          <div
            className="fixed inset-0 z-[10001] flex items-center justify-center w-screen h-screen left-0 top-0"
            onClick={() => setMenuOpen(false)}
          >
            <nav className="w-full h-full items-center justify-center relative" onClick={e => e.stopPropagation()}>
              {/* Close button */}
              <button
                className="absolute top-1 right-4 text-white hover:text-blue-400 text-5xl p-3 focus:outline-none"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
              >
                &times;
              </button>
              <ul className="flex flex-col gap-10 items-center w-full mt-70 ">
                {NAV_ITEMS.map((item, idx) => (
                  <li key={item.href} className={idx === 0 ? 'mt-24' : ''}>
                    <Link href={item.href} className="block text-white text-2xl font-semibold hover:text-blue-400 transition-colors duration-200" onClick={() => setMenuOpen(false)}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </>
      )}
    </header>
  )
}
