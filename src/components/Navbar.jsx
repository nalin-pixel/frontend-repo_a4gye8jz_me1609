import { useState, useEffect } from 'react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'My Work', href: '#work' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact Me', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors ${
      scrolled ? 'bg-black/70 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#home" className="text-xl font-semibold tracking-wide text-white">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-blue-400 to-emerald-400">
            Refky
          </span>
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-white/80 hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gradient-to-r after:from-fuchsia-400 after:via-blue-400 after:to-emerald-400 hover:after:w-full after:transition-all"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 shadow-[0_0_20px_rgba(99,102,241,0.25)] hover:shadow-[0_0_35px_rgba(16,185,129,0.45)] transition-shadow"
        >
          Let’s talk
        </a>
      </nav>
    </header>
  )
}
