export async function generateStaticParams() {
  const series = [
    { slug: 'statistics-fundamentals', chapters: 6 },
    { slug: 'bayesian-methods', chapters: 4 },
    { slug: 'python-for-research', chapters: 5 },
  ]
  return series.flatMap(s =>
    Array.from({ length: s.chapters }, (_, i) => ({
      series: s.slug,
      chapter: String(i + 1),
    }))
  )
}

import Link from 'next/link'
import { use } from 'react'

export default function ChapterPage({ params }) {
  const { series, chapter } = use(params)

  return (
    <main className="page-wrapper">
      <div style={{ padding: 'clamp(32px,5vw,64px) 24px 100px' }}>
        <div className="container-narrow">

          {/* Breadcrumb */}
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '32px', flexWrap: 'wrap' }}>
            <Link href="/tutorials" style={{ fontSize: '13px', color: 'var(--ink-4)', textDecoration: 'none', fontFamily: 'var(--font-sans)' }}>Tutorials</Link>
            <span style={{ color: 'var(--ink-4)', fontSize: '13px' }}>›</span>
            <span style={{ fontSize: '13px', color: 'var(--ink-3)', fontFamily: 'var(--font-sans)', textTransform: 'capitalize' }}>{series.replace(/-/g, ' ')}</span>
            <span style={{ color: 'var(--ink-4)', fontSize: '13px' }}>›</span>
            <span style={{ fontSize: '13px', color: 'var(--ink)', fontFamily: 'var(--font-sans)' }}>Chapter {chapter}</span>
          </div>

          <span className="eyebrow">Chapter {chapter}</span>
          <h1 style={{ marginBottom: '12px' }}>Sample Chapter Title</h1>
          <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--ink-3)', fontSize: '17px', marginBottom: '40px' }}>
            This is where your tutorial content lives. Write it as an MDX file and it will render here with full math support.
          </p>

          <hr />

          <div style={{ marginTop: '32px' }}>
            <h2>How math will look</h2>
            <p>When you install KaTeX, inline and block equations render beautifully.</p>
            <pre><code>{`// Inline: $\\bar{x} = \\frac{1}{n}\\sum_{i=1}^{n} x_i$\n// Block:\n// $$P(A|B) = \\frac{P(B|A)P(A)}{P(B)}$$`}</code></pre>

            <h2>How figures will look</h2>
            <figure>
              <div style={{ width: '100%', aspectRatio: '16/7', background: 'var(--paper-3)', border: '1px solid var(--rule)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--ink-4)', fontSize: '14px', fontFamily: 'var(--font-sans)' }}>
                Your figure / chart goes here
              </div>
              <figcaption>Figure 1: Caption describing the figure.</figcaption>
            </figure>

            <h2>How code will look</h2>
            <pre><code>{`import numpy as np\nimport scipy.stats as stats\n\ndata = np.array([2.3, 4.1, 3.8, 5.2, 4.7])\nmean = np.mean(data)\nci = stats.t.interval(0.95, df=len(data)-1, loc=mean, scale=stats.sem(data))\nprint(f"Mean: {mean:.2f}, 95% CI: ({ci[0]:.2f}, {ci[1]:.2f})")`}</code></pre>
          </div>

          <hr />

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px', gap: '12px', flexWrap: 'wrap' }}>
            <Link href={`/tutorials/${series}/${Math.max(1, parseInt(chapter)-1)}`} className="btn btn-outline" style={{ fontSize: '13px' }}>← Previous chapter</Link>
            <Link href={`/tutorials/${series}/${parseInt(chapter)+1}`} className="btn btn-primary" style={{ fontSize: '13px' }}>Next chapter →</Link>
          </div>

          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <Link href="/tutorials" style={{ fontSize: '13px', color: 'var(--ink-4)', textDecoration: 'none', fontFamily: 'var(--font-sans)' }}>↩ Back to all tutorials</Link>
          </div>

        </div>
      </div>
    </main>
  )
}