import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#insights', label: 'Insights' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#about', label: 'About' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/20 bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/40 shadow-sm">
          <div className="flex h-14 items-center justify-between px-4">
            <a href="#hero" className="text-sm font-semibold tracking-tight text-gray-900">
              <span className="mr-2 rounded-md bg-gray-900 px-2 py-1 text-white">FB</span>
              Flames Blue — Motorsport & Aviation
            </a>
            <div className="hidden gap-6 md:flex">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="text-sm text-gray-700 hover:text-gray-900">
                  {l.label}
                </a>
              ))}
            </div>
            <button
              className="inline-flex items-center justify-center rounded-md p-2 md:hidden"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
          {open && (
            <div className="border-t border-white/30 px-4 py-3 md:hidden">
              <div className="flex flex-col gap-2">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="rounded-md px-2 py-2 text-sm text-gray-800 hover:bg-white"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
