'use client'
export const dynamic = 'force-dynamic'

export default function Contact() {
  return (
    <main className="page-wrapper">
      <section style={{ padding: 'clamp(48px,7vw,88px) 24px 100px' }}>
        <div className="container-narrow" style={{ maxWidth: '620px' }}>
          <span className="eyebrow">Say hello</span>
          <h1 style={{ marginBottom: '16px' }}>Get in touch</h1>
          <p style={{ fontSize: '17px', color: 'var(--ink-3)', fontFamily: 'var(--font-serif)', fontStyle: 'italic', marginBottom: '48px' }}>
            Whether it's a research collaboration, feedback on a tutorial,
            or a question about statistics — I'd love to hear from you.
          </p>

          <div className="rule" />

          {/* Contact options */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '32px' }}>
            {[
              {
                icon: '✉',
                label: 'Email',
                value: 'ghanashyamrpv@gmail.com',
                href: 'https://mail.google.com/mail/?view=cm&to=ghanashyamrpv@gmail.com&su=Hello from ghanashyam.dev',
                note: 'Best for research inquiries and collaborations',
              },
              {
                icon: '⌥',
                label: 'GitHub',
                value: 'github.com/ghanashyamrpv',
                href: 'https://github.com/ghanashyamrpv',
                note: 'Code, projects and contributions',
              },
            ].map(item => (
              <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'flex', gap: '18px', alignItems: 'flex-start',
                  padding: '20px 24px',
                  background: 'var(--paper-2)',
                  border: '1px solid var(--rule)',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--accent)'
                  e.currentTarget.style.boxShadow = 'var(--shadow)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--rule)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <span style={{
                  width: '40px', height: '40px',
                  background: 'var(--accent-dim)',
                  border: '1px solid var(--accent-mid)',
                  borderRadius: '8px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '18px', flexShrink: 0, color: 'var(--accent)',
                  fontFamily: 'var(--font-serif)',
                }}>{item.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '11px', color: 'var(--accent)', fontFamily: 'var(--font-sans)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '3px' }}>
                    {item.label}
                  </div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontWeight: '600', fontSize: '15px', color: 'var(--ink)', marginBottom: '3px' }}>
                    {item.value}
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--ink-4)', fontFamily: 'var(--font-sans)' }}>
                    {item.note}
                  </div>
                </div>
                <span style={{ color: 'var(--ink-4)', fontSize: '16px', marginTop: '2px' }}>↗</span>
              </a>
            ))}
          </div>

          {/* Note */}
          <div style={{
            marginTop: '32px',
            padding: '16px 20px',
            background: 'var(--accent-dim)',
            border: '1px solid var(--accent-mid)',
            borderRadius: '8px',
            fontSize: '13px',
            color: 'var(--ink-3)',
            fontFamily: 'var(--font-sans)',
            lineHeight: 1.65,
          }}>
            <strong style={{ color: 'var(--accent)' }}>Note:</strong> I'm a student so response times vary.
            I'll get back to you as soon as I can!
          </div>
        </div>
      </section>
    </main>
  )
}