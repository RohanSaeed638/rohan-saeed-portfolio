'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const LINKS = [
  { href: '/',           label: 'Home'       },
  { href: '/about',      label: 'About'      },
  { href: '/projects',   label: 'Projects'   },
  { href: '/experience', label: 'Experience' },
  { href: '/blog',       label: 'Blog'       },
  { href: '/contact',    label: 'Contact'    },
]

export default function Nav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(10,10,12,0.92)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(14px)' : 'none',
        }}
      >
        <div className="container flex items-center justify-between h-14">
          {/* Logo */}
          {/* <Link href="/" className="flex items-center gap-2.5 group">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-all group-hover:scale-110"
              style={{ background: 'var(--gold)', color: 'var(--ink)', fontFamily: 'var(--font-clash)' }}
            >
              RS
            </div>
            <span className="text-sm font-semibold text-white hidden sm:block">Rohan Saeed</span>
          </Link> */}
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/rs-logo.png"
                alt="Rohan Saeed Logo"
                fill
                priority
                sizes="36px"
                className="object-contain"
              />
            </div>

            <span className="hidden text-sm font-semibold text-white sm:block">
              Rohan Saeed
            </span>
          </Link>
          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-1">
            {LINKS.map(({ href, label }) => {
              const active = pathname === href
              return (
                <Link key={href} href={href}
                  className="px-3 py-1.5 rounded-lg text-sm transition-all relative"
                  style={{
                    color: active ? 'var(--gold)' : 'rgba(200,200,212,0.7)',
                    fontWeight: active ? 500 : 400,
                  }}
                  onMouseEnter={e => { if (!active) (e.currentTarget as HTMLElement).style.color = '#fff' }}
                  onMouseLeave={e => { if (!active) (e.currentTarget as HTMLElement).style.color = 'rgba(200,200,212,0.7)' }}
                >
                  {active && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full" style={{ background: 'var(--gold)' }} />
                  )}
                  {label}
                </Link>
              )
            })}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            {/* Social icons */}
            <a href="https://github.com/RohanSaeed0411" target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:bg-white/5"
              style={{ color: 'var(--mist)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#fff' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--mist)' }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
            <a href="https://linkedin.com/in/rohan-saeed-b54752227" target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:bg-white/5"
              style={{ color: 'var(--mist)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#fff' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--mist)' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <Link href="/contact" className="btn-gold" style={{ padding: '7px 16px', fontSize: '12px' }}>
              Let&apos;s Talk →
            </Link>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setOpen(!open)} aria-label="Menu">
            <span className="w-5 h-0.5 bg-white rounded transition-all" style={{ transform: open ? 'rotate(45deg) translateY(6px)' : '' }} />
            <span className="w-5 h-0.5 bg-white rounded transition-all" style={{ opacity: open ? 0 : 1 }} />
            <span className="w-5 h-0.5 bg-white rounded transition-all" style={{ transform: open ? 'rotate(-45deg) translateY(-6px)' : '' }} />
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t px-6 py-4 space-y-1" style={{ background: 'rgba(10,10,12,0.98)', borderColor: 'var(--line)' }}>
            {LINKS.map(({ href, label }) => (
              <Link key={href} href={href} onClick={() => setOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-sm"
                style={{ color: pathname === href ? 'var(--gold)' : 'rgba(200,200,212,0.7)' }}
              >{label}</Link>
            ))}
            <div className="pt-3">
              <Link href="/contact" onClick={() => setOpen(false)} className="btn-gold w-full justify-center">Let&apos;s Talk →</Link>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
