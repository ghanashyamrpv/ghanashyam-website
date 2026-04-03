import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="page-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>
      <div style={{ textAlign: 'center', padding: '24px' }}>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '72px',
          fontWeight: '400',
          color: 'var(--rule)',
          display: 'block',
          lineHeight: 1,
          marginBottom: '24px',
        }}>404</span>
        <h1 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>Page not found</h1>
        <p style={{ color: 'var(--ink-3)', marginBottom: '32px', fontFamily: 'var(--font-sans)' }}>
          This page doesn't exist or was moved.
        </p>
        <Link href="/" className="btn btn-primary">← Back to home</Link>
      </div>
    </main>
  )
}