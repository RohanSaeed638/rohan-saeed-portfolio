'use client'
import Link from 'next/link'
import { useEffect } from 'react'
import Image from "next/image";

const STATS = [
  { val: '2+',   label: 'Years Experience' },
  { val: '8+',   label: 'Projects Completed' },
  { val: '3+',   label: 'Companies / Clients' },
  { val: '100%', label: 'Commitment' },
]

const PROJECTS = [
  {
    title: 'Finance AI Assistant',
    desc: 'AI-powered personal finance assistant that helps users understand transactions, track spending, analyze financial patterns, and get intelligent insights through a conversational interface.',
    tags: ['Next.js', 'FastAPI', 'PostgreSQL', 'AI', 'LLM'],
    href: '/projects',
    gradient: 'from-emerald-600/20 to-teal-900/20',
  },
  {
    title: 'Uraan AI',
    desc: 'Personalized AI career roadmaps with learning phases, tasks, and curated resources to help learners achieve their goals.',
    tags: ['Next.js', 'FastAPI', 'PostgreSQL'],
    href: '/projects',
    gradient: 'from-violet-600/20 to-purple-900/20',
  },
  {
    title: 'Ravaan Labs',
    desc: 'Brand website and CRM for managing leads, clients and projects. Full business management platform.',
    tags: ['Next.js', 'FastAPI', 'Resend'],
    href: '/projects',
    gradient: 'from-blue-600/20 to-indigo-900/20',
  },
]

const INTERESTS = [
  { icon: '🤖', label: 'AI & LLMs' },
  { icon: '📦', label: 'Product Development' },
  { icon: '🏗️', label: 'Clean Architecture' },
  { icon: '🎨', label: 'System Design' },
  { icon: '📚', label: 'Reading & Learning' },
]

export default function HomePage() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <main>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-14">
        {/* Ambient glow blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="gold-glow w-[700px] h-[700px] -top-40 -right-40 opacity-20" />
          <div className="absolute top-0 left-0 w-full h-full"
            style={{ background: 'radial-gradient(ellipse 60% 50% at 70% 40%, rgba(245,166,35,0.06) 0%, transparent 70%)' }} />
          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-[0.025]"
            style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-56px)] py-20">
            {/* Left — text */}
            <div>
              <div className="gold-tag mb-6" style={{ animationDelay: '0s' }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--gold)' }} />
                Software Engineer · AI Enthusiast
              </div>

              <h1 className="font-display mb-6 leading-[1.05]"
                style={{ fontSize: 'clamp(2.6rem,5.5vw,4.2rem)', color: '#fff' }}>
                Building{' '}
                <span style={{ color: 'var(--gold)' }}>Scalable</span>
                <br />Products for a<br />
                <span className="italic" style={{ color: 'var(--gold)' }}>Smarter Tomorrow.</span>
              </h1>

              <p className="text-base leading-relaxed mb-8 max-w-lg" style={{ color: 'var(--mist)' }}>
                I&apos;m Rohan Saeed, a Software Engineer focused on building modern web applications, AI-powered solutions, and digital products that create real value.
              </p>

              {/* CTA row */}
              <div className="flex flex-wrap gap-3 mb-10">
                <Link href="/projects" className="btn-gold">
                  View My Work →
                </Link>
                <a href="/Rohan_Saeed_CV.pdf" download className="btn-outline">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  Download Resume
                </a>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-3">
                {[
                  { href: 'https://github.com/RohanSaeed638', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg> },
                  { href: 'https://linkedin.com/in/rohan-saeed-b54752227', icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
                  { href: 'https://x.com', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
                  { href: 'mailto:rohan.saeed.638@gmail.com', icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> },
                ].map(({ href, icon }, i) => (
                  <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg flex items-center justify-center border transition-all hover:-translate-y-0.5"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid var(--line)', color: 'var(--mist)' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--gold)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(245,166,35,0.4)' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--mist)'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--line)' }}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Right — photo + floating card */}
            <div className="relative flex justify-center lg:justify-end">
              {/* Glow behind photo */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-80 h-80 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, var(--gold) 0%, transparent 70%)' }} />
              </div>

              {/* Photo placeholder / frame */}
              <div className="relative w-72 h-80 lg:w-80 lg:h-96">
                
                 {/* Main image frame */}
                <div
                  className="absolute inset-0 rounded-2xl overflow-hidden"
                  style={{
                      background: "linear-gradient(135deg, #1C1C26 0%, #13131A 100%)",
                      border: "1px solid var(--line)",
                    }}
                  >
                    <Image
                      src="/profile_pic.png"
                      alt="Rohan Saeed"
                      fill
                      priority
                      sizes="(max-width: 1024px) 288px, 320px"
                      className="object-cover object-center"
                    />

                    {/* Subtle bottom gradient for visual integration */}
                    <div
                      className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(8,8,12,0.45) 0%, transparent 100%)",
                        }}
                    />
                  </div>
                {/* Floating ideas card */}
                <div className="absolute -right-6 bottom-8 rounded-xl p-4 w-40 shadow-xl"
                  style={{ background: 'var(--ink2)', border: '1px solid var(--line)' }}>
                  <div className="text-xs mb-2" style={{ color: 'var(--gold)' }}>Turning ideas into</div>
                  <div className="text-sm font-semibold text-white">useful products.</div>
                  <div className="mt-2 flex gap-1">
                    {['🤖', '⚡', '🛠️'].map((e, i) => (
                      <span key={i} className="text-lg">{e}</span>
                    ))}
                  </div>
                </div>

                {/* Floating availability badge */}
                <div className="absolute -left-4 top-4 rounded-xl px-3 py-2 flex items-center gap-2 shadow-xl"
                  style={{ background: 'var(--ink2)', border: '1px solid rgba(245,166,35,0.3)' }}>
                  <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#22C55E' }} />
                  <span className="text-xs font-medium text-white">Open to freelance</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10 border-t"
            style={{ borderColor: 'var(--line)' }}>
            {STATS.map(({ val, label }, i) => (
              <div key={i} className="text-center reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="font-display text-3xl font-bold mb-1" style={{ color: 'var(--gold)' }}>{val}</div>
                <div className="text-sm" style={{ color: 'var(--mist)' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section className="section" style={{ background: 'var(--ink2)', borderTop: '1px solid var(--line)' }}>
        <div className="container">
          <div className="reveal flex items-end justify-between mb-10">
            <div>
              <div className="gold-tag mb-3">Selected work</div>
              <h2 className="font-display text-3xl" style={{ color: '#fff' }}>Featured Projects</h2>
            </div>
            <Link href="/projects" className="text-sm hover:text-white transition-colors" style={{ color: 'var(--mist)' }}>
              View All →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {PROJECTS.map(({ title, desc, tags, href, gradient }, i) => (
              <Link href={href} key={title}
                className={`card reveal reveal-delay-${i + 1} block p-6 cursor-pointer group`}>
                {/* Gradient top */}
                <div className={`w-full h-28 rounded-xl mb-5 bg-gradient-to-br ${gradient} flex items-center justify-center border`}
                  style={{ borderColor: 'var(--line)' }}>
                  <span className="text-4xl opacity-50 group-hover:opacity-80 transition-opacity">
                    {['⚡', '🤖', '⚖️'][i]}
                  </span>
                </div>
                <h3 className="font-display text-lg mb-2 group-hover:text-yellow-400 transition-colors" style={{ color: '#fff' }}>{title}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--mist)' }}>{desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {tags.map(t => <span key={t} className="tech-tag">{t}</span>)}
                </div>
                <div className="mt-5 flex items-center gap-1.5 text-sm font-medium transition-colors group-hover:text-yellow-400" style={{ color: 'var(--gold)' }}>
                  Live Demo
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── MY INTERESTS ── */}
      <section className="section">
        <div className="container">
          <div className="reveal mb-10">
            <div className="gold-tag mb-3">What drives me</div>
            <h2 className="font-display text-3xl" style={{ color: '#fff' }}>My Interests</h2>
          </div>
          <div className="flex flex-wrap gap-3 reveal reveal-delay-1">
            {INTERESTS.map(({ icon, label }) => (
              <div key={label}
                className="flex items-center gap-2.5 px-5 py-3 rounded-xl border transition-all hover:-translate-y-0.5 cursor-default"
                style={{ background: 'var(--ink2)', border: '1px solid var(--line)', color: 'var(--silver)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(245,166,35,0.3)'; (e.currentTarget as HTMLElement).style.color = '#fff' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--line)'; (e.currentTarget as HTMLElement).style.color = 'var(--silver)' }}
              >
                <span className="text-xl">{icon}</span>
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-20" style={{ background: 'var(--ink2)', borderTop: '1px solid var(--line)' }}>
        <div className="container">
          <div className="reveal relative rounded-2xl p-12 text-center overflow-hidden"
            style={{ background: 'linear-gradient(135deg,rgba(245,166,35,0.08) 0%,rgba(99,102,241,0.06) 100%)', border: '1px solid rgba(245,166,35,0.15)' }}>
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at center, rgba(245,166,35,0.07) 0%, transparent 70%)' }} />
            <div className="gold-tag mb-4 justify-center">Ready to build?</div>
            <h2 className="font-display text-4xl mb-4 relative" style={{ color: '#fff' }}>Let&apos;s create something great</h2>
            <p className="text-base mb-8 max-w-lg mx-auto relative" style={{ color: 'var(--mist)' }}>
              I&apos;m open to freelance projects, full-time roles, and interesting collaborations. Let&apos;s talk.
            </p>
            <div className="flex justify-center gap-3 relative">
              <Link href="/contact" className="btn-gold">Let&apos;s Talk →</Link>
              <Link href="/projects" className="btn-outline">See My Work</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8" style={{ borderTop: '1px solid var(--line)' }}>
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm" style={{ color: 'var(--mist)' }}>© 2025 Rohan Saeed · Islamabad, Pakistan</span>
          <span className="text-sm" style={{ color: 'var(--mist)' }}>Built with Next.js & Tailwind CSS</span>
        </div>
      </footer>
    </main>
  )
}



{/* <div className="absolute inset-0 rounded-2xl overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, #1C1C26 0%, #13131A 100%)', border: '1px solid var(--line)' }}>

                  <div className="absolute inset-0 opacity-30"
                    style={{ background: 'radial-gradient(ellipse at 60% 30%, rgba(245,166,35,0.3) 0%, transparent 60%)' }} />
                  <div className="absolute bottom-0 left-0 right-0 h-1/2"
                    style={{ background: 'linear-gradient(to top, var(--ink) 0%, transparent 100%)' }} />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-8xl font-bold opacity-10 text-white">RS</span>
                  </div>

                  <div className="absolute top-6 right-5 text-right opacity-40">
                    <div className="font-display text-2xl text-white italic leading-tight">Rohan</div>
                    <div className="font-display text-2xl text-white italic leading-tight">Saeed</div>
                  </div>
                </div> */}