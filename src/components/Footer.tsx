'use client'

export default function Footer() {
  const legal = [
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
  ]

  return (
    <footer className="relative mb-3 px-4 pt-[100px] pb-16 text-gray-100 overflow-hidden">
      {/* Gradient backdrop */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-5">
        {/* Brand */}
        <div className="space-y-4 md:col-span-2">
          <div className="text-2xl font-bold tracking-tight">Optimized</div>
          <p className="max-w-xs text-sm text-gray-400">
            Applying the most important AI research in procurement
          </p>
        </div>

        {/* Research Links */}
        <div className="space-y-2">
          <h4 className="mb-4 text-lg font-semibold">Research</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#features" className="transition-colors hover:text-blue-400">
                Features
              </a>
            </li>
            <li>
              <a href="#how-it-works" className="transition-colors hover:text-blue-400">
                How&nbsp;It&nbsp;Works
              </a>
            </li>
            <li>
              <a href="/get-started" className="transition-colors hover:text-blue-400">
                Schedule&nbsp;Demo
              </a>
            </li>
          </ul>
        </div>

        {/* Company Links */}
        <div className="space-y-2">
          <h4 className="mb-4 text-lg font-semibold">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#about" className="transition-colors hover:text-blue-400">
                About
              </a>
            </li>
            <li>
              <a href="/hiring" className="transition-colors hover:text-blue-400">
                Careers
              </a>
            </li>
            <li>
              <a href="/research" className="transition-colors hover:text-blue-400">
                Research
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-3">
          <h4 className="mb-4 text-lg font-semibold">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <span className="text-blue-400">✉</span>
              <a
                href="mailto:contact@optimizedhq.com"
                className="transition-colors hover:text-blue-400"
              >
                contact@optimizedhq.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-400">📍</span>
              <span>New&nbsp;York,&nbsp;NY</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Legal */}
      <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-gray-500">
        <div className="mb-2 space-x-4">
          {legal.map(({ name, href }) => (
            <a key={name} href={href} className="transition-colors hover:text-blue-400">
              {name}
            </a>
          ))}
        </div>
        <p>© {new Date().getFullYear()} Optimized. All rights reserved.</p>
      </div>
    </footer>
  )
}
