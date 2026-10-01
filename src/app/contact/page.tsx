'use client'
import { useState, useEffect } from 'react'

const CONTACTS = [
  { label: 'Email', value: 'rohan.saeed.638@gmail.com', href: 'mailto:rohan.saeed.638@gmail.com', icon: '✉️' },
  { label: 'LinkedIn', value: 'linkedin.com/in/rohan-saeed', href: 'https://linkedin.com/in/rohan-saeed-b54752227', icon: '💼' },
  { label: 'GitHub', value: 'github.com/RohanSaeed0411', href: 'https://github.com/RohanSaeed0411', icon: '🐙' },
  { label: 'Location', value: 'Islamabad, Pakistan', href: null, icon: '📍' },
]

const inputStyle = {
  width: '100%',
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '10px',
  padding: '11px 14px',
  fontSize: '14px',
  color: '#fff',
  outline: 'none',
  fontFamily: 'var(--font-inter)',
  transition: 'border-color 0.2s',
} as React.CSSProperties

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSent(true) }, 1200)
  }

  return (
    <main className="pt-24 pb-20">
      <div className="container">
        <div className="mb-14">
          <div className="gold-tag mb-4">06. Contact</div>
          <h1 className="font-display mb-4" style={{ fontSize: 'clamp(2.2rem,5vw,3.8rem)', color: '#fff' }}>
            Let&apos;s Work Together
          </h1>
          <p className="text-sm max-w-xl" style={{ color: 'var(--mist)' }}>
            I&apos;m always open to discussing new opportunities, interesting projects or just chatting about technology and ideas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — contact info */}
          <div className="space-y-4 reveal">
            {CONTACTS.map(({ label, value, href, icon }) => (
              <div key={label} className="card p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: 'rgba(245,166,35,0.1)', border: '1px solid rgba(245,166,35,0.2)' }}>
                  {icon}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-0.5" style={{ color: 'var(--gold)' }}>{label}</p>
                  {href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer"
                      className="text-sm transition-colors"
                      style={{ color: 'var(--silver)' }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--gold)'}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--silver)'}
                    >{value}</a>
                  ) : (
                    <span className="text-sm" style={{ color: 'var(--silver)' }}>{value}</span>
                  )}
                </div>
              </div>
            ))}

            {/* Availability note */}
            <div className="card p-5 mt-2" style={{ borderColor: 'rgba(0,200,150,0.2)', background: 'rgba(0,200,150,0.05)' }}>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#00C896' }} />
                <span className="text-sm font-semibold" style={{ color: '#00C896' }}>Available for work</span>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--mist)' }}>
                Currently open to freelance projects, full-time remote roles, and interesting collaboration opportunities.
                I typically respond within 24 hours.
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div className="reveal reveal-delay-2">
            {sent ? (
              <div className="card p-10 text-center h-full flex flex-col items-center justify-center gap-4"
                style={{ borderColor: 'rgba(245,166,35,0.2)', background: 'rgba(245,166,35,0.04)' }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl"
                  style={{ background: 'rgba(245,166,35,0.12)', border: '1px solid rgba(245,166,35,0.3)' }}>✓</div>
                <h3 className="font-display text-xl text-white">Message sent!</h3>
                <p className="text-sm" style={{ color: 'var(--mist)' }}>I&apos;ll get back to you within 24 hours.</p>
                <button onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }) }}
                  className="btn-outline text-sm mt-2">Send another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card p-6 space-y-4">
                <h3 className="font-display text-lg text-white mb-2">Send a Message</h3>
                <div>
                  <label className="block text-xs font-medium mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>Your name</label>
                  <input name="name" value={form.name} onChange={handleChange} required placeholder="Rohan Saeed"
                    style={inputStyle}
                    onFocus={e => (e.target.style.borderColor = 'var(--gold)')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>Your email</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="you@example.com"
                    style={inputStyle}
                    onFocus={e => (e.target.style.borderColor = 'var(--gold)')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                    placeholder="Tell me about your project or idea..."
                    style={{ ...inputStyle, resize: 'none', lineHeight: '1.6' }}
                    onFocus={e => (e.target.style.borderColor = 'var(--gold)')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                  />
                </div>
                <button type="submit" disabled={loading} className="btn-gold w-full justify-center"
                  style={{ opacity: loading ? 0.6 : 1 }}>
                  {loading ? 'Sending...' : 'Send Message →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
