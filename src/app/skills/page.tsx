'use client'
import { useEffect } from 'react'

const SKILL_GROUPS = [
  {
    group: 'Frontend',
    color: '#6366F1',
    skills: [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 92 },
      { name: 'TypeScript', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'MUI / shadcn', level: 80 },
    ],
  },
  {
    group: 'Backend',
    color: '#00C896',
    skills: [
      { name: 'Node.js / NestJS', level: 82 },
      { name: 'Django / FastAPI', level: 78 },
      { name: 'ASP.NET Core / C#', level: 75 },
      { name: 'REST APIs / GraphQL', level: 85 },
    ],
  },
  {
    group: 'AI / LLM',
    color: '#F5A623',
    skills: [
      { name: 'Claude API (Anthropic)', level: 88 },
      { name: 'OpenAI API', level: 85 },
      { name: 'LangChain / RAG', level: 80 },
      { name: 'pgvector / Embeddings', level: 78 },
      { name: 'Semantic Kernel', level: 70 },
    ],
  },
  {
    group: 'Databases',
    color: '#EC4899',
    skills: [
      { name: 'PostgreSQL / Supabase', level: 88 },
      { name: 'MongoDB', level: 82 },
      { name: 'SQL Server', level: 72 },
      { name: 'SQLite', level: 85 },
    ],
  },
  {
    group: 'DevOps & Tools',
    color: '#8B5CF6',
    skills: [
      { name: 'Git / GitHub', level: 92 },
      { name: 'Docker', level: 75 },
      { name: 'Vercel / Render', level: 88 },
      { name: 'AWS (basics)', level: 65 },
      { name: 'GitHub Actions', level: 72 },
    ],
  },
  {
    group: 'Auth & Billing',
    color: '#06B6D4',
    skills: [
      { name: 'Clerk', level: 88 },
      { name: 'Auth0 / JWT', level: 82 },
      { name: 'Stripe', level: 80 },
    ],
  },
]

export default function SkillsPage() {
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
          <div className="gold-tag mb-4">04. Skills</div>
          <h1 className="font-display mb-4" style={{ fontSize: 'clamp(2.2rem,5vw,3.8rem)', color: '#fff' }}>
            Technologies I Work With
          </h1>
          <p className="text-sm max-w-xl" style={{ color: 'var(--mist)' }}>
            A versatile skill set to build modern, scalable and user-friendly products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_GROUPS.map(({ group, color, skills }, gi) => (
            <div key={group} className={`card p-6 reveal reveal-delay-${(gi % 3) + 1}`}>
              <h3 className="font-display text-base font-semibold mb-5 pb-3"
                style={{ color, borderBottom: `1px solid ${color}30` }}>
                {group}
              </h3>
              <div className="space-y-4">
                {skills.map(({ name, level }) => (
                  <div key={name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm" style={{ color: 'var(--silver)' }}>{name}</span>
                      <span className="text-xs font-mono" style={{ color }}>{level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
                      <div className="h-full rounded-full transition-all duration-700"
                        style={{ width: `${level}%`, background: `linear-gradient(90deg, ${color}cc, ${color})` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
