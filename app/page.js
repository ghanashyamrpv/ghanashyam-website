import Link from 'next/link'

const recentWork = [
  {
    type: 'Research',
    title: 'Statistical Modelling in Interdisciplinary Contexts',
    desc: 'How statistical frameworks adapt when applied across scientific disciplines — case studies in biology, economics, and social sciences.',
    year: '2024', status: 'Ongoing', href: '/research',
  },
  {
    type: 'Tutorial',
    title: 'Understanding p-values without the confusion',
    desc: "A clear, honest explanation of what p-values actually mean, what they don't mean, and how to use them correctly.",
    year: '2024', status: 'Published', href: '/tutorials',
  },
  {
    type: 'Research',
    title: 'Probabilistic Inference Methods',
    desc: 'A survey of modern approaches to Bayesian and frequentist inference with focus on practical applications.',
    year: '2024', status: 'Ongoing', href: '/research',
  },
]

export default function Home() {
  return (
    <main className="page-wrapper">
      <style>{`
        .work-row:hover { background: var(--paper-3) !important; }
        .hover-card:hover { box-shadow: var(--shadow); border-color: var(--ink-3) !important; transform: translateY(-2px); }
      `}</style>

      {/* Hero */}
      <section style={{ padding: 'clamp(60px,8vw,100px) 24px clamp(48px,6vw,72px)' }}>
        <div className="container-narrow">
          <span className="eyebrow fade-1">Statistics · Research · Tutorials</span>
          <h1 className="fade-2" style={{ marginBottom: '20px' }}>Ghanashyam<br />R P V</h1>
          <p className="fade-3" style={{ fontSize: 'clamp(16px,2vw,19px)', color: 'var(--ink-3)', lineHeight: 1.75, maxWidth: '560px', marginBottom: '32px', fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400 }}>
            Statistics researcher and student exploring interdisciplinary problems.
            I document my research and share knowledge through tutorials and writing.
          </p>
          <div className="fade-4" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/research" className="btn btn-primary">View Research</Link>
            <Link href="/tutorials" className="btn btn-outline">Browse Tutorials</Link>
          </div>
          <div style={{ borderTop: '1px solid var(--rule)', marginTop: '56px' }} className="fade-5" />
        </div>
      </section>

      {/* Recent work */}
      <section style={{ padding: '0 24px 80px' }}>
        <div className="container-narrow">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '28px', flexWrap: 'wrap', gap: '8px' }}>
            <h2 style={{ fontSize: '1.3rem' }}>Recent Work</h2>
            <Link href="/research" style={{ fontSize: '13px', color: 'var(--accent)', textDecoration: 'none', fontFamily: 'var(--font-sans)' }}>All research →</Link>
          </div>
          <div style={{ border: '1px solid var(--rule)', borderRadius: '10px', overflow: 'hidden' }}>
            {recentWork.map((item, i) => (
              <Link key={i} href={item.href} className="work-row" style={{
                display: 'flex', gap: '20px', alignItems: 'flex-start',
                padding: '20px 24px', background: 'var(--paper-2)',
                borderBottom: i < recentWork.length - 1 ? '1px solid var(--rule)' : 'none',
                textDecoration: 'none', transition: 'background 0.15s',
              }}>
                <div style={{ paddingTop: '3px', flexShrink: 0 }}><span className="tag">{item.type}</span></div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3 style={{ fontSize: '15px', fontFamily: 'var(--font-sans)', fontWeight: '600', marginBottom: '4px', color: 'var(--ink)' }}>{item.title}</h3>
                  <p style={{ fontSize: '13px', color: 'var(--ink-3)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                </div>
                <div style={{ flexShrink: 0, textAlign: 'right' }}>
                  <span style={{ fontSize: '12px', color: 'var(--ink-4)', fontFamily: 'var(--font-sans)', display: 'block' }}>{item.year}</span>
                  <span style={{ fontSize: '11px', color: item.status === 'Ongoing' ? 'var(--ink)' : 'var(--ink-4)', fontFamily: 'var(--font-sans)', fontWeight: '600' }}>{item.status}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tutorial series */}
      <section style={{ padding: '0 24px 80px' }}>
        <div className="container-narrow">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '28px', flexWrap: 'wrap', gap: '8px' }}>
            <h2 style={{ fontSize: '1.3rem' }}>Tutorial Series</h2>
            <Link href="/tutorials" style={{ fontSize: '13px', color: 'var(--accent)', textDecoration: 'none', fontFamily: 'var(--font-sans)' }}>All tutorials →</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px' }}>
            {[
              { title: 'Statistics Fundamentals', count: '6 chapters', desc: 'Probability, distributions, hypothesis testing — built from the ground up.', tag: 'Beginner' },
              { title: 'Bayesian Methods', count: '4 chapters', desc: 'Intuition-first approach to Bayesian reasoning and inference.', tag: 'Intermediate' },
              { title: 'Python for Research', count: '5 chapters', desc: 'Practical statistical analysis using pandas, scipy, and statsmodels.', tag: 'Beginner' },
            ].map(s => (
              <Link key={s.title} href="/tutorials" style={{ textDecoration: 'none' }}>
                <div className="card hover-card" style={{ height: '100%', transition: 'all 0.2s' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                    <span className="tag">{s.tag}</span>
                    <span style={{ fontSize: '11px', color: 'var(--ink-4)', fontFamily: 'var(--font-sans)' }}>{s.count}</span>
                  </div>
                  <h3 style={{ fontSize: '15px', fontFamily: 'var(--font-sans)', fontWeight: '600', marginBottom: '6px', color: 'var(--ink)' }}>{s.title}</h3>
                  <p style={{ fontSize: '13px', color: 'var(--ink-3)', margin: 0, lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '0 24px 100px' }}>
        <div className="container-narrow">
          <div style={{ background: 'var(--paper-2)', border: '1px solid var(--rule)', borderLeft: '3px solid var(--ink)', borderRadius: '10px', padding: 'clamp(24px,4vw,40px)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <h3 style={{ fontFamily: 'var(--font-sans)', marginBottom: '6px' }}>Open to collaboration</h3>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--ink-3)' }}>Research collaborations, feedback on tutorials, or just a conversation about statistics.</p>
            </div>
            <Link href="/contact" className="btn btn-primary" style={{ flexShrink: 0 }}>Get in touch →</Link>
          </div>
        </div>
      </section>
    </main>
  )
}