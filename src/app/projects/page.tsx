'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const ALL_PROJECTS = [
  {
    title: 'SalesFlow CRM',
    desc: 'Full-stack sales CRM with kanban pipeline, contacts management, activities, analytics, CSV export, and Stripe subscriptions.',
    tags: ['Next.js', 'Supabase', 'Clerk', 'Stripe', 'PostgreSQL'],
    category: 'Web Apps',
    status: 'Portfolio',
    color: '#6366F1',
    emoji: '⚡',
    href: '#',
    featured: false,
  },
  {
    title: 'Finance AI Assistant',
    desc: 'AI-powered personal finance assistant that helps users understand transactions, track spending, analyze financial patterns, and get intelligent insights through a conversational interface.',
    tags: ['Next.js', 'FastAPI', 'PostgreSQL', 'AI', 'LLM'],
    category: 'AI & ML',
    status: 'Live Demo',
    color: '#22C55E',
    emoji: '💰',
    href: 'https://finance-ai-assistant-seven.vercel.app/',
    featured: true,
  },
  {
    title: 'SupportAI Agent Builder',
    desc: 'Multi-tenant SaaS — businesses upload docs and get a RAG-powered chatbot embeddable on any site. Uses pgvector + Claude API.',
    tags: ['Claude API', 'pgvector', 'LangChain', 'Next.js', 'Stripe'],
    category: 'AI & ML',
    status: 'Portfolio',
    color: '#00C896',
    emoji: '🤖',
    href: '#',
    featured: false,
  },
  {
    title: 'Uraan AI',
    desc: 'Personalized AI career roadmaps with learning phases, tasks, and curated resources to help learners achieve their goals.',
    tags: ['Next.js', 'FastAPI', 'PostgreSQL'],
    category: 'AI & ML',
    status: 'Live Demo',
    color: '#F5A623',
    emoji: '🚀',
    href: '#',
    featured: true,
  },
  {
    title: 'Ravaan Labs',
    desc: 'Brand website and CRM for managing leads, clients and projects. Full business management platform.',
    tags: ['Next.js', 'FastAPI', 'Resend'],
    category: 'Web Apps',
    status: 'Live',
    color: '#EC4899',
    emoji: '🏢',
    href: 'https://www.ravaanlabs.com/',
    featured: true,
  },
  {
    title: 'E-commerce Store',
    desc: 'Full-stack e-commerce platform with cart, orders, admin dashboard, and payment integration.',
    tags: ['React', 'Node.js', 'MongoDB'],
    category: 'E-commerce',
    status: 'Portfolio',
    color: '#10B981',
    emoji: '🛒',
    href: '#',
    featured: false,
  },
  {
    title: 'Healthcare Translation',
    desc: 'Voice-to-text and real-time translation prototype for healthcare settings with audio playback.',
    tags: ['React', 'Python', 'OpenAI'],
    category: 'AI & ML',
    status: 'Prototype',
    color: '#06B6D4',
    emoji: '🏥',
    href: '#',
    featured: false,
  },
  {
    title: 'RIDEEZ',
    desc: 'React Native ride-sharing app with supply/demand balancing algorithm. Final year project at FAST-NUCES.',
    tags: ['React Native', 'Node.js', 'MongoDB'],
    category: 'Open Source',
    status: 'Portfolio',
    color: '#F59E0B',
    emoji: '🚗',
    href: '#',
    featured: false,
  },
  {
    title: 'Blockchain Bidding System',
    desc: 'Decentralized bidding platform built on Ethereum using Ganache and Truffle for smart contract testing.',
    tags: ['Solidity', 'React', 'Ganache', 'Truffle'],
    category: 'Open Source',
    status: 'Portfolio',
    color: '#EF4444',
    emoji: '⛓️',
    href: '#',
    featured: false,
  },
]

const CATEGORIES = ['All', 'AI & ML', 'Web Apps', 'E-commerce', 'Open Source']

export default function ProjectsPage() {
  const [active, setActive] = useState('All')

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.05 }
    )
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [active])

  const filtered = active === 'All' ? ALL_PROJECTS : ALL_PROJECTS.filter(p => p.category === active)

  return (
    <main className="pt-24 pb-20">
      <div className="container">
        {/* Header */}
        <div className="mb-12">
          <div className="gold-tag mb-4">02. Projects</div>
          <h1 className="font-display mb-4" style={{ fontSize: 'clamp(2.2rem,5vw,3.8rem)', color: '#fff' }}>
            Some Things I&apos;ve Built
          </h1>
          <p className="text-sm max-w-xl" style={{ color: 'var(--mist)' }}>
            A collection of projects that showcase my skills and passion for building useful products.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map(cat => (
            <button key={cat} onClick={() => setActive(cat)}
              className="px-4 py-1.5 rounded-lg text-sm font-medium transition-all"
              style={{
                background: active === cat ? 'var(--gold)' : 'rgba(255,255,255,0.05)',
                color: active === cat ? 'var(--ink)' : 'var(--mist)',
                border: `1px solid ${active === cat ? 'var(--gold)' : 'var(--line)'}`,
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map(({ title, desc, tags, status, color, emoji, href, featured }, i) => (
            <div key={title}
              className={`card reveal reveal-delay-${(i % 3) + 1} flex flex-col p-6 ${featured ? 'ring-1' : ''}`}
              style={featured ? { boxShadow: '0 0 0 1px rgba(245,166,35,0.2)' } : undefined}>
              {/* Top row */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{ background: color + '18', border: `1px solid ${color}30` }}>
                  {emoji}
                </div>
                <div className="flex items-center gap-2">
                  {featured && (
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full"
                      style={{ background: 'rgba(245,166,35,0.15)', color: 'var(--gold)', border: '1px solid rgba(245,166,35,0.3)' }}>
                      Featured
                    </span>
                  )}
                  <span className="text-xs px-2 py-0.5 rounded-full"
                    style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--mist)', border: '1px solid var(--line)' }}>
                    {status}
                  </span>
                </div>
              </div>

              <h3 className="font-display text-lg mb-2 text-white">{title}</h3>
              <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: 'var(--mist)' }}>{desc}</p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {tags.map(t => <span key={t} className="tech-tag">{t}</span>)}
              </div>
              
              <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid var(--line)' }}>
                {href && href !== '#' &&
                <a href={href}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm font-medium transition-colors"
                  style={{ color: 'var(--gold)' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = '0.7'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = '1'}
                >
                  Live Demo
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </a>
                }
                <a href="https://github.com/RohanSaeed0411" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm transition-colors"
                  style={{ color: 'var(--mist)' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#fff'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--mist)'}
                >
                  View Code
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
