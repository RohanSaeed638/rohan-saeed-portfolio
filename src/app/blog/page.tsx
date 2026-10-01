'use client'
import { useEffect } from 'react'
import Link from 'next/link'

const POSTS = [
  {
    title: 'How to Become a Job Ready Software Engineer in the Age of AI',
    excerpt: 'A practical roadmap to build in-demand skills, stand out in today\'s AI-driven world and land better opportunities.',
    category: 'Career',
    date: 'Aug 26, 2026',
    readTime: '6 min read',
    color: '#F5A623',
    featured: true,
    bg: 'from-amber-900/30 to-yellow-900/10',
  },
  {
    title: 'Your Business Probably Has an AI Opportunity Hiding in Plain Sight',
    excerpt: 'Most businesses already have the data and processes needed to benefit from AI — they just haven\'t made the connection yet.',
    category: 'AI',
    date: 'Aug 24, 2026',
    readTime: '6 min read',
    color: '#6366F1',
    featured: false,
    bg: 'from-violet-900/30 to-indigo-900/10',
  },
  {
    title: 'Next.js vs React — Key Differences and When to Use Which',
    excerpt: 'A clear breakdown of when you should reach for Next.js versus plain React, and the tradeoffs you\'ll face either way.',
    category: 'Development',
    date: 'Aug 18, 2026',
    readTime: '7 min read',
    color: '#00C896',
    featured: false,
    bg: 'from-emerald-900/30 to-teal-900/10',
  },
  {
    title: 'Building a RAG Pipeline That Actually Works in Production',
    excerpt: 'Most RAG demos look great. Most RAG systems in production fail silently. Here\'s how to close the gap.',
    category: 'AI',
    date: 'Aug 10, 2026',
    readTime: '9 min read',
    color: '#EC4899',
    featured: false,
    bg: 'from-pink-900/30 to-rose-900/10',
  },
  {
    title: 'Why I Chose Supabase Over Firebase for My SaaS Stack',
    excerpt: 'After building multiple SaaS products with both, here\'s my honest comparison and why Supabase won.',
    category: 'Development',
    date: 'Jul 30, 2026',
    readTime: '5 min read',
    color: '#06B6D4',
    featured: false,
    bg: 'from-cyan-900/30 to-blue-900/10',
  },
  {
    title: 'Freelancing on Fiverr as a Developer in Pakistan — What Actually Works',
    excerpt: 'After earning consistently on Fiverr as a developer from Pakistan, here\'s what separates profiles that get orders from those that don\'t.',
    category: 'Career',
    date: 'Jul 20, 2026',
    readTime: '8 min read',
    color: '#8B5CF6',
    featured: false,
    bg: 'from-purple-900/30 to-violet-900/10',
  },
]

export default function BlogPage() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const featured = POSTS.find(p => p.featured)
  const rest = POSTS.filter(p => !p.featured)

  return (
    <main className="pt-24 pb-20">
      <div className="container">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="gold-tag mb-4">05. Blog</div>
            <h1 className="font-display mb-2" style={{ fontSize: 'clamp(2.2rem,5vw,3.8rem)', color: '#fff' }}>
              Thoughts &amp; Insights
            </h1>
            <p className="text-sm" style={{ color: 'var(--mist)' }}>Sharing what I learn, build and find interesting.</p>
          </div>
          <button className="btn-outline text-sm">View All Posts →</button>
        </div>

        {/* Featured post */}
        {featured && (
          <div className="reveal mb-8">
            <div className={`card p-8 cursor-pointer group bg-gradient-to-br ${featured.bg} relative overflow-hidden`}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(245,166,35,0.3)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--line)' }}>
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at 80% 20%, rgba(245,166,35,0.08) 0%, transparent 60%)' }} />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{ background: 'rgba(245,166,35,0.15)', color: 'var(--gold)', border: '1px solid rgba(245,166,35,0.3)' }}>
                    {featured.category}
                  </span>
                  <span className="text-xs" style={{ color: 'var(--mist)' }}>{featured.date} · {featured.readTime}</span>
                </div>
                <h2 className="font-display text-2xl mb-3 group-hover:text-yellow-400 transition-colors" style={{ color: '#fff' }}>
                  {featured.title}
                </h2>
                <p className="text-sm leading-relaxed mb-6 max-w-2xl" style={{ color: 'var(--mist)' }}>
                  {featured.excerpt}
                </p>
                <span className="text-sm font-medium" style={{ color: 'var(--gold)' }}>Read article →</span>
              </div>
            </div>
          </div>
        )}

        {/* Post grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map(({ title, excerpt, category, date, readTime, color, bg }, i) => (
            <div key={title}
              className={`card reveal reveal-delay-${(i % 3) + 1} p-6 cursor-pointer group flex flex-col bg-gradient-to-br ${bg}`}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = color + '40' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--line)' }}>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full"
                  style={{ background: color + '18', color, border: `1px solid ${color}30` }}>
                  {category}
                </span>
                <span className="text-xs" style={{ color: 'var(--mist)' }}>{readTime}</span>
              </div>
              <h3 className="font-display text-base mb-2 leading-snug group-hover:text-yellow-400 transition-colors text-white">
                {title}
              </h3>
              <p className="text-xs leading-relaxed flex-1 mb-4" style={{ color: 'var(--mist)' }}>{excerpt}</p>
              <div className="flex items-center justify-between pt-3" style={{ borderTop: '1px solid var(--line)' }}>
                <span className="text-xs" style={{ color: 'var(--mist)' }}>{date}</span>
                <span className="text-xs font-medium" style={{ color }}>Read →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
