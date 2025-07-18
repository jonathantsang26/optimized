'use client'
import Link from 'next/link'

const NAV_ITEMS = [
  { href: '/research', label: 'Research' },
  { href: '/hiring', label: 'Team' },
  { href: '/about', label: 'About' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
]

export default function Header() {
  return (
    <header className="fixed left-1/2 -translate-x-1/2 top-0 z-50 w-full bg-black/90 shadow-lg px-4 md:px-8 py-3">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        {/* Logo */}
        <span className="text-lg md:text-xl font-bold text-white header-text">
          optimized
        </span>
        {/* Navigation */}
        <nav>
          <ul className="flex gap-6 md:gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white hover:text-blue-400 font-medium transition-colors duration-200">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
