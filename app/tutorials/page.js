import Link from 'next/link'

export const metadata = { title: 'Tutorials' }

const series = [
  {
    slug: 'statistics-fundamentals',
    title: 'Statistics Fundamentals',
    desc: 'A ground-up series on probability, distributions, and statistical inference. No shortcuts — built for real understanding.',
    level: 'Beginner',
    chapters: [
      { num: 1, title: 'What is probability?', time: '8 min' },
      { num: 2, title: 'Random variables and distributions', time: '12 min' },
      { num: 3, title: 'The normal distribution in depth', time: '10 min' },
      { num: 4, title: 'Hypothesis testing from scratch', time: '15 min' },
      { num: 5, title: 'Understanding p-values without the confusion', time: '8 min' },
      { num: 6, title: 'Confidence intervals: what they really mean', time: '7 min' },
    ],
    updated: 'Dec 2024', math: true,
  },
  {
    slug: 'bayesian-methods',
    title: 'Bayesian Methods',
    desc: 'Intuition-first approach to Bayesian reasoning. We build understanding before touching formulas.',
    level: 'Intermediate',
    chapters: [
      { num: 1, title: 'Bayes theorem explained simply', time: '6 min' },
      { num: 2, title: 'Prior, likelihood and posterior', time: '11 min' },
      { num: 3, title: 'Bayesian vs frequentist — a fair comparison', time: '9 min' },
      { num: 4, title: 'Markov Chain Monte Carlo (MCMC) introduction', time: '14 min' },
    ],
    updated: 'Nov 2024', math: true,
  },
  {
    slug: 'python-for-research',
    title: 'Python for Research',
    desc: 'Practical statistical analysis in Python using pandas, scipy, and statsmodels. Real datasets, working code.',
    level: 'Beginner',
    chapters: [
      { num: 1, title: 'Setting up your research environment', time: '7 min' },
      { num: 2, title: 'Data wrangling with pandas', time: '13 min' },
      { num: 3, title: 'Descriptive statistics and EDA', time: '10 min' },
      { num: 4, title: 'Statistical tests with scipy', time: '12 min' },
      { num: 5, title: 'Regression analysis with statsmodels', time: '14 min' },
    ],
    updated: 'Oct 2024', math: false,
  },
]

const levelStyle = {
  Beginner:     { bg: 'rgba(34,197,94,0.1)',  color: '#16a34a', border: 'rgba(34,197,94,0.25)' },
  Intermediate: { bg: 'rgba(234,179,8,0.1)',  color: '#b45309', border: 'rgba(234,179,8,0.25)' },
  Advanced:     { bg: 'rgba(239,68,68,0.1)',  color: '#dc2626', border: 'rgba(239,68,68,0.25)' },
}

export default function Tutorials() {
  return (
    <main className="page-wrapper">
      <style>{`
        .chapter-row:hover { background: var(--paper-3) !important; }
      `}</style>

      <section style={{ padding: 'clamp(48px,7vw,88px) 24px 0' }}>
        <div className="container-narrow">
          <span className="eyebrow">Learn with me</span>
          <h1 style={{ marginBottom: '16px' }}>Tutorials</h1>
          <p style={{ fontSize: '17px', color: 'var(--ink-3)', maxWidth: '560px', fontFamily: 'var(--font-serif)', fontStyle: 'italic', marginBottom: 0 }}>
            Practical, no-fluff tutorials on statistics and research methods.
            Organised into series — start from chapter 1, or jump to what you need.
          </p>
          <div className="rule" />
        </div>
      </section>

      <section style={{ padding: '8px 24px 100px' }}>
        <div className="container-narrow" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {series.map(s => {
            const ls = levelStyle[s.level]
            return (
              <div key={s.slug} style={{ border: '1px solid var(--rule)', borderRadius: '12px', overflow: 'hidden', background: 'var(--paper-2)' }}>
                <div style={{ padding: '28px', borderBottom: '1px solid var(--rule)' }}>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '12px', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '11px', fontFamily: 'var(--font-sans)', fontWeight: '600', padding: '3px 10px', borderRadius: '100px', background: ls.bg, color: ls.color, border: `1px solid ${ls.border}` }}>{s.level}</span>
                    {s.math && (
                      <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--ink-4)', padding: '3px 8px', border: '1px solid var(--rule)', borderRadius: '4px' }}>∑ Math</span>
                    )}
                    <span style={{ marginLeft: 'auto', fontSize: '12px', color: 'var(--ink-4)', fontFamily: 'var(--font-sans)' }}>Updated {s.updated}</span>
                  </div>
                  <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: '20px', fontWeight: '700', marginBottom: '8px', color: 'var(--ink)' }}>{s.title}</h2>
                  <p style={{ fontSize: '14px', color: 'var(--ink-3)', margin: 0, lineHeight: 1.65 }}>{s.desc}</p>
                </div>
                <div>
                  {s.chapters.map((ch, i) => (
                    <Link key={i} href={`/tutorials/${s.slug}/${ch.num}`} className="chapter-row" style={{
                      display: 'flex', alignItems: 'center', gap: '16px',
                      padding: '14px 28px',
                      borderBottom: i < s.chapters.length - 1 ? '1px solid var(--rule)' : 'none',
                      textDecoration: 'none', transition: 'background 0.15s',
                      background: 'transparent',
                    }}>
                      <span style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--paper-3)', border: '1px solid var(--rule)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--ink-4)', flexShrink: 0 }}>{ch.num}</span>
                      <span style={{ flex: 1, fontSize: '14px', color: 'var(--ink-2)', fontFamily: 'var(--font-sans)' }}>{ch.title}</span>
                      <span style={{ fontSize: '12px', color: 'var(--ink-4)', fontFamily: 'var(--font-sans)', flexShrink: 0 }}>{ch.time}</span>
                      <span style={{ color: 'var(--ink-4)', fontSize: '14px' }}>→</span>
                    </Link>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </main>
  )
}