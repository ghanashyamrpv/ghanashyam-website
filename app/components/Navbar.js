'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from './ThemeProvider'

const NAV = [
  { href: '/',          label: 'Home' },
  { href: '/research',  label: 'Research' },
  { href: '/tutorials', label: 'Tutorials' },
  { href: '/contact',   label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const { theme, toggle } = useTheme()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        height: '64px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 24px',
        background: scrolled ? 'var(--paper)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--rule)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'all 0.3s',
      }}>
        {/* Logo — Σ mark */}
        <Link href="/" style={{
          textDecoration: 'none',
          display: 'flex', alignItems: 'center', gap: '10px',
        }}>
          <span style={{
            width: '32px', height: '32px',
            background: 'var(--accent)',
            color: '#fff',
            borderRadius: '6px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--font-serif)',
            fontWeight: '700',
            fontSize: '18px',
            lineHeight: 1,
            flexShrink: 0,
          }}>Σ</span>
          <span style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: '600',
            fontSize: '15px',
            color: 'var(--ink)',
            letterSpacing: '-0.01em',
          }}>Ghanashyam</span>
        </Link>

        {/* Desktop nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }} className="desk-nav">
          {NAV.map(n => (
            <Link key={n.href} href={n.href} style={{
              padding: '6px 14px',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: pathname === n.href ? '600' : '400',
              color: pathname === n.href ? 'var(--accent)' : 'var(--ink-3)',
              background: pathname === n.href ? 'var(--accent-dim)' : 'transparent',
              textDecoration: 'none',
              transition: 'all 0.15s',
              fontFamily: 'var(--font-sans)',
            }}>
              {n.label}
            </Link>
          ))}

          {/* Theme toggle */}
          <button onClick={toggle} title="Toggle theme" style={{
            marginLeft: '8px',
            width: '34px', height: '34px',
            borderRadius: '6px',
            border: '1px solid var(--rule)',
            background: 'var(--paper-2)',
            color: 'var(--ink-3)',
            cursor: 'pointer',
            fontSize: '16px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.2s',
          }}>
            {theme === 'light' ? '◐' : '◑'}
          </button>
        </div>

        {/* Mobile right */}
        <div style={{ display: 'none', alignItems: 'center', gap: '8px' }} className="mob-nav">
          <button onClick={toggle} style={{
            width: '34px', height: '34px', borderRadius: '6px',
            border: '1px solid var(--rule)', background: 'var(--paper-2)',
            color: 'var(--ink-3)', cursor: 'pointer', fontSize: '16px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>{theme === 'light' ? '◐' : '◑'}</button>
          <button onClick={() => setOpen(!open)} style={{
            width: '34px', height: '34px', borderRadius: '6px',
            border: '1px solid var(--rule)', background: 'var(--paper-2)',
            color: 'var(--ink-2)', cursor: 'pointer', fontSize: '18px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>{open ? '✕' : '☰'}</button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: 'fixed', top: '64px', left: 0, right: 0, zIndex: 199,
          background: 'var(--paper)',
          borderBottom: '1px solid var(--rule)',
          padding: '12px 16px 20px',
          display: 'flex', flexDirection: 'column', gap: '4px',
        }}>
          {NAV.map(n => (
            <Link key={n.href} href={n.href} style={{
              padding: '12px 16px', borderRadius: '6px',
              fontSize: '16px', fontFamily: 'var(--font-sans)',
              color: pathname === n.href ? 'var(--accent)' : 'var(--ink-2)',
              background: pathname === n.href ? 'var(--accent-dim)' : 'transparent',
              textDecoration: 'none',
            }}>{n.label}</Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 600px) {
          .desk-nav { display: none !important; }
          .mob-nav  { display: flex !important; }
        }
      `}</style>
    </>
  )
}