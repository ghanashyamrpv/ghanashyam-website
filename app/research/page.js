export const metadata = { title: 'Research' }

const research = [
  {
    type: 'Research',
    title: 'Statistical Modelling in Interdisciplinary Contexts',
    abstract: 'Exploring how statistical frameworks adapt and evolve when applied across different scientific disciplines. This work examines case studies in biology, economics, and social sciences, focusing on the assumptions that transfer and those that require rethinking.',
    year: '2024',
    status: 'Ongoing',
    tags: ['Statistics', 'Interdisciplinary', 'Modelling'],
  },
  {
    type: 'Research',
    title: 'Probabilistic Inference Methods',
    abstract: 'A comprehensive survey of modern approaches to both Bayesian and frequentist inference, with focus on practical applications and comparative analysis of their assumptions, strengths, and limitations in real-world research settings.',
    year: '2024',
    status: 'Ongoing',
    tags: ['Bayesian', 'Inference', 'Probability'],
  },
]

const projects = [
  {
    type: 'Project',
    title: 'Data Analysis Pipeline',
    abstract: 'A reproducible, modular workflow for cleaning, analysing, and visualising real-world datasets. Built with Python, designed for academic research use, and structured around best practices for reproducibility.',
    year: '2024',
    status: 'Completed',
    tags: ['Python', 'Reproducibility', 'Data'],
    github: 'https://github.com/ghanashyamrpv',
  },
  {
    type: 'Project',
    title: 'Statistical Visualisation Toolkit',
    abstract: 'A collection of clean, publication-ready statistical plot templates covering distribution plots, regression diagnostics, and Bayesian posterior visualisations. Designed for clarity in academic papers.',
    year: '2024',
    status: 'Completed',
    tags: ['Visualisation', 'Python', 'R'],
    github: 'https://github.com/ghanashyamrpv',
  },
]

function WorkItem({ item }) {
  return (
    <div style={{
      borderBottom: '1px solid var(--rule)',
      padding: '32px 0',
    }}>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '12px', flexWrap: 'wrap' }}>
        <span className="tag">{item.type}</span>
        {item.tags.map(t => (
          <span key={t} style={{
            fontSize: '11px', fontFamily: 'var(--font-sans)',
            color: 'var(--ink-4)', padding: '2px 8px',
            border: '1px solid var(--rule)', borderRadius: '100px',
          }}>{t}</span>
        ))}
        <span style={{ marginLeft: 'auto', fontSize: '12px', color: 'var(--ink-4)', fontFamily: 'var(--font-sans)' }}>
          {item.year} · <span style={{ color: item.status === 'Ongoing' ? 'var(--accent)' : 'var(--ink-4)', fontWeight: item.status === 'Ongoing' ? '600' : '400' }}>{item.status}</span>
        </span>
      </div>

      <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: 'var(--ink)' }}>
        {item.title}
      </h3>

      <p style={{ fontSize: '14px', color: 'var(--ink-3)', lineHeight: 1.75, maxWidth: '680px', margin: 0 }}>
        {item.abstract}
      </p>

      {item.github && (
        <a href={item.github} target="_blank" rel="noopener noreferrer" style={{
          display: 'inline-flex', alignItems: 'center', gap: '6px',
          marginTop: '14px', fontSize: '13px', color: 'var(--accent)',
          fontFamily: 'var(--font-sans)', fontWeight: '600',
          textDecoration: 'none',
        }}>
          View on GitHub ↗
        </a>
      )}
    </div>
  )
}

export default function Research() {
  return (
    <main className="page-wrapper">
      <section style={{ padding: 'clamp(48px,7vw,88px) 24px 0' }}>
        <div className="container-narrow">
          <span className="eyebrow">My work</span>
          <h1 style={{ marginBottom: '16px' }}>Research &amp; Projects</h1>
          <p style={{ fontSize: '17px', color: 'var(--ink-3)', maxWidth: '560px', fontFamily: 'var(--font-serif)', fontStyle: 'italic', marginBottom: 0 }}>
            A record of my research work and technical projects. Centred around
            statistics and its applications.
          </p>
          <div className="rule" />
        </div>
      </section>

      {/* Research */}
      <section style={{ padding: '8px 24px 0' }}>
        <div className="container-narrow">
          <h2 style={{ fontSize: '1.1rem', fontFamily: 'var(--font-sans)', fontWeight: '600', color: 'var(--ink-3)', marginBottom: '4px', letterSpacing: '0.02em' }}>
            Research
          </h2>
          {research.map((item, i) => <WorkItem key={i} item={item} />)}
        </div>
      </section>

      {/* Projects */}
      <section style={{ padding: '48px 24px 100px' }}>
        <div className="container-narrow">
          <h2 style={{ fontSize: '1.1rem', fontFamily: 'var(--font-sans)', fontWeight: '600', color: 'var(--ink-3)', marginBottom: '4px', letterSpacing: '0.02em' }}>
            Projects
          </h2>
          {projects.map((item, i) => <WorkItem key={i} item={item} />)}
        </div>
      </section>
    </main>
  )
}