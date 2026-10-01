'use client'
import Link from 'next/link'
import { useEffect } from 'react'

const TRAITS = [
  { icon: '🧩', title: 'Problem Solver', desc: 'I enjoy turning complex problems into simple solutions.' },
  { icon: '🔁', title: 'Continuous Learner', desc: 'Always exploring new tech and better ways to build.' },
  { icon: '🎯', title: 'Product Mindset', desc: 'Focused on real-world impact and user value.' },
]

const FACTS = [
  { label: 'Location',   value: 'Based in Islamabad, Pakistan' },
  { label: 'Work',       value: 'Open to Freelance & Full-time' },
  { label: 'Interests',  value: 'Interested in AI, Product Design, Tech' },
]

export default function AboutPage() {
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
        {/* Header */}
        <div className="mb-16">
          <div className="gold-tag mb-4">01. About Me</div>
          <h1 className="font-display mb-5" style={{ fontSize: 'clamp(2.2rem,5vw,3.8rem)', color: '#fff' }}>
            A Software Engineer<br />
            <span style={{ color: 'var(--gold)' }}>with a Creative Mindset</span>
          </h1>
          <p className="text-base leading-relaxed max-w-2xl" style={{ color: 'var(--mist)' }}>
            I enjoy working at the intersection of technology and creativity. With a strong foundation in full-stack
            development, I build scalable web applications, explore AI-driven solutions, and constantly learn new
            technologies to solve meaningful problems.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left — bio details */}
          <div>
            {/* Quick facts */}
            <div className="card p-6 mb-6 reveal">
              <div className="space-y-4">
                {FACTS.map(({ label, value }) => (
                  <div key={label} className="flex items-center gap-4">
                    <span className="text-xs font-semibold uppercase tracking-widest w-24 flex-shrink-0"
                      style={{ color: 'var(--gold)' }}>{label}</span>
                    <span className="text-sm" style={{ color: 'var(--silver)' }}>{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trait cards */}
            <div className="grid grid-cols-1 gap-4">
              {TRAITS.map(({ icon, title, desc }, i) => (
                <div key={title} className={`card p-5 flex items-start gap-4 reveal reveal-delay-${i + 1}`}>
                  <span className="text-2xl">{icon}</span>
                  <div>
                    <div className="font-semibold text-white text-sm mb-1">{title}</div>
                    <div className="text-sm" style={{ color: 'var(--mist)' }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — longer bio */}
          <div className="reveal reveal-delay-2 space-y-5 text-sm leading-relaxed" style={{ color: 'var(--mist)' }}>
            <p>
              I&apos;m Rohan Saeed, a Software Engineer from Rawalpindi, Pakistan, holding a Bachelor&apos;s in
              Computer Science from <span className="text-white font-medium">FAST-NUCES Islamabad</span> (2019–2023),
              where I appeared on the Dean&apos;s Honour List three times.
            </p>
            <p>
              My professional journey includes building AI-powered features at{' '}
              <span className="text-white font-medium">Northbay Solutions</span> for an enterprise legal-tech platform,
              and maintaining large-scale edtech deployments at{' '}
              <span className="text-white font-medium">Arbisoft</span> on the Open edX ecosystem.
            </p>
            <p>
              I specialize in <span className="text-white font-medium">Next.js, TypeScript, Supabase, Claude API,
              and PostgreSQL</span> — and I&apos;m deeply interested in making AI useful, reliable, and accessible
              for real businesses.
            </p>
            <p>
              Outside of work, I build side projects, write about software, and think about the product decisions
              that make or break a good idea.
            </p>

            {/* Quote */}
            <div className="relative pl-6 py-2 my-6" style={{ borderLeft: '2px solid var(--gold)' }}>
              <p className="text-base italic leading-relaxed" style={{ color: 'var(--silver)' }}>
                "Good software is a combination of logic, creativity and empathy — built for people, not just systems."
              </p>
            </div>

            <div className="flex gap-3 pt-2">
              <Link href="/contact" className="btn-gold">Work with me →</Link>
              <Link href="/projects" className="btn-outline">See my work</Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-8" style={{ borderTop: '1px solid var(--line)' }}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-sm" style={{ color: 'var(--mist)' }}>© 2025 Rohan Saeed</span>
            <Link href="/experience" className="text-sm" style={{ color: 'var(--gold)' }}>View Experience →</Link>
          </div>
        </div>
      </div>
    </main>
  )
}
