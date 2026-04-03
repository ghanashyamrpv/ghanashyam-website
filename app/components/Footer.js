import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--rule)',
      padding: '40px 24px',
      marginTop: '80px',
    }}>
      <div style={{
        maxWidth: '1080px', margin: '0 auto',
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'flex-start', flexWrap: 'wrap', gap: '32px',
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
            <span style={{
              width: '28px', height: '28px',
              background: 'var(--accent)', color: '#fff',
              borderRadius: '5px', display: 'flex', alignItems: 'center',
              justifyContent: 'center', fontFamily: 'var(--font-serif)',
              fontWeight: '700', fontSize: '15px',
            }}>Σ</span>
            <span style={{ fontFamily: 'var(--font-serif)', fontWeight: '600', fontSize: '14px', color: 'var(--ink)' }}>
              Ghanashyam R P V
            </span>
          </div>
          <p style={{ fontSize: '13px', color: 'var(--ink-4)', margin: 0, maxWidth: '240px', lineHeight: 1.6 }}>
            Statistics researcher & student. Documenting work, sharing knowledge.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-4)', marginBottom: '12px', fontFamily: 'var(--font-sans)' }}>
              Site
            </div>
            {[
              { label: 'Home', href: '/' },
              { label: 'Research', href: '/research' },
              { label: 'Tutorials', href: '/tutorials' },
              { label: 'Contact', href: '/contact' },
            ].map(l => (
              <div key={l.label} style={{ marginBottom: '8px' }}>
                <Link href={l.href} style={{ fontSize: '14px', color: 'var(--ink-3)', textDecoration: 'none', fontFamily: 'var(--font-sans)' }}>
                  {l.label}
                </Link>
              </div>
            ))}
          </div>
          <div>
            <div style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-4)', marginBottom: '12px', fontFamily: 'var(--font-sans)' }}>
              Links
            </div>
            {[
              { label: 'GitHub', href: 'https://github.com/ghanashyamrpv' },
              { label: 'Email', href: 'https://mail.google.com/mail/?view=cm&to=ghanashyam@ghanashyam.dev' },
            ].map(l => (
              <div key={l.label} style={{ marginBottom: '8px' }}>
                <a href={l.href} target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: 'var(--ink-3)', textDecoration: 'none', fontFamily: 'var(--font-sans)' }}>
                  {l.label} ↗
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{
        maxWidth: '1080px', margin: '32px auto 0',
        paddingTop: '20px', borderTop: '1px solid var(--rule)',
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', flexWrap: 'wrap', gap: '8px',
      }}>
        <span style={{ fontSize: '12px', color: 'var(--ink-4)', fontFamily: 'var(--font-sans)' }}>
          © {new Date().getFullYear()} Ghanashyam R P V · ghanashyam.dev
        </span>
        <span style={{ fontSize: '12px', color: 'var(--ink-4)', fontFamily: 'var(--font-sans)' }}>
          Built with Next.js · Hosted on Vercel
        </span>
      </div>
    </footer>
  )
}