'use client'
import { useEffect } from 'react'

const EXPERIENCE = [
  {
    company: 'NorthBay Solutions',
    role: 'Software Engineer',
    period: 'Dec 2024 — Present',
    type: 'Full-time',
    logo: 'N',
    logoColor: '#6366F1',
    desc: 'Working on Intelligize platform with AI features for SEC filings, API maintenance and multi-tenant architecture.',
    bullets: [
      'Integrated OpenLLM and Claude Sonnet (Anthropic API) for document analysis workflows',
      'Maintained and extended backend services in a large-scale multi-tenant ASP.NET application',
      'Built AI-powered search and summarisation features for legal-tech enterprise platform',
      'Worked within Agile team using Jira, Git, and CI/CD pipelines',
    ],
    tags: ['React', 'Node.js', 'GraphQL', 'AWS', 'C#', 'ASP.NET', 'Claude API', 'OpenLLM'],
    current: true,
  },
  {
    company: 'Arbisoft',
    role: 'Software Engineer (Tutor Maintainer)',
    period: '2023 — 2024',
    type: 'Full-time',
    logo: 'A',
    logoColor: '#F5A623',
    desc: 'Maintained and customized Open edX deployments, handled updates, stability improvements and integrations.',
    bullets: [
      'Maintained Tutor — Open edX deployment platform serving thousands of learners',
      'Delivered custom edtech solutions including Discord integration for social learning',
      'Built Next.js frontend features for platforms with thousands of daily active users',
      'Handled dependency upgrades, stability improvements, and customer-specific integrations',
    ],
    tags: ['Django', 'Open edX', 'DevOps', 'Python', 'Next.js'],
    current: false,
  },
  {
    company: 'Freelance / Personal Projects',
    role: 'Full-Stack Developer',
    period: '2022 — Present',
    type: 'Freelance',
    logo: 'F',
    logoColor: '#00C896',
    desc: 'Built various full-stack projects including Uraan AI, Ravaan Labs and an e-commerce store.',
    bullets: [
      'Built SalesFlow CRM — full-stack Next.js + Supabase CRM with Stripe billing',
      'Built SupportAI — RAG-powered customer support SaaS using Claude API and pgvector',
      'Developed Uraan AI — career roadmap platform with AI-generated learning paths',
      'Delivered client projects via Fiverr covering Next.js, AI integrations, and CRM systems',
    ],
    tags: ['Next.js', 'FastAPI', 'MongoDB', 'React', 'TypeScript'],
    current: true,
  },
]

const EDUCATION = [
  {
    school: 'FAST-NUCES Islamabad',
    degree: 'Bachelor of Science — Computer Science',
    period: '2019 — 2023',
    gpa: "Dean's Honour List × 3",
    logo: 'F',
    logoColor: '#8B5CF6',
  },
]

export default function ExperiencePage() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <main className="pt-24 pb-20">
      <div className="container">
        <div className="mb-14">
          <div className="gold-tag mb-4">03. Experience</div>
          <h1 className="font-display mb-4" style={{ fontSize: 'clamp(2.2rem,5vw,3.8rem)', color: '#fff' }}>
            My Professional Journey
          </h1>
          <p className="text-sm" style={{ color: 'var(--mist)' }}>A journey of learning, building and creating impact.</p>
        </div>

        {/* Timeline */}
        <div className="relative mb-16">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px" style={{ background: 'var(--line)' }} />

          <div className="space-y-8">
            {EXPERIENCE.map(({ company, role, period, type, logo, logoColor, desc, bullets, tags, current }, i) => (
              <div key={company} className={`reveal reveal-delay-${i + 1} relative pl-16`}>
                {/* Timeline dot */}
                <div className="absolute left-0 top-1 w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold z-10"
                  style={{ background: logoColor + '20', border: `1px solid ${logoColor}40`, color: logoColor }}>
                  {logo}
                </div>

                {/* Card */}
                <div className="card p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="font-display text-lg text-white">{company}</h3>
                      <p className="text-sm font-medium" style={{ color: logoColor }}>{role}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                      <span className="text-xs px-2.5 py-1 rounded-full"
                        style={{ background: 'rgba(255,255,255,0.06)', color: 'var(--mist)', border: '1px solid var(--line)' }}>
                        {period}
                      </span>
                      {current && (
                        <span className="text-xs px-2.5 py-1 rounded-full flex items-center gap-1"
                          style={{ background: 'rgba(0,200,150,0.1)', color: '#00C896', border: '1px solid rgba(0,200,150,0.3)' }}>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Active
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--mist)' }}>{desc}</p>

                  <ul className="space-y-2 mb-4">
                    {bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm" style={{ color: 'var(--silver)' }}>
                        <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: logoColor }} />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {tags.map(t => <span key={t} className="tech-tag">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="reveal">
          <h2 className="font-display text-2xl mb-6 text-white">Education</h2>
          {EDUCATION.map(({ school, degree, period, gpa, logo, logoColor }) => (
            <div key={school} className="card p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold flex-shrink-0"
                style={{ background: logoColor + '20', border: `1px solid ${logoColor}40`, color: logoColor }}>
                {logo}
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-lg text-white">{school}</h3>
                    <p className="text-sm" style={{ color: 'var(--mist)' }}>{degree}</p>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full flex-shrink-0"
                    style={{ background: 'rgba(255,255,255,0.06)', color: 'var(--mist)', border: '1px solid var(--line)' }}>
                    {period}
                  </span>
                </div>
                <div className="mt-2">
                  <span className="text-xs px-2.5 py-1 rounded-full"
                    style={{ background: 'rgba(245,166,35,0.12)', color: 'var(--gold)', border: '1px solid rgba(245,166,35,0.3)' }}>
                    🏆 {gpa}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
