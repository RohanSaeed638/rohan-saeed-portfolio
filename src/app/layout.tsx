import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'

export const metadata: Metadata = {
  title: 'Rohan Saeed — Software Engineer & AI Enthusiast',
  description: 'Building scalable products powered by AI. Full-stack developer specialising in Next.js, Claude API, Supabase, and production AI systems.',
  icons: {
    icon: "/favicon.ico",
  },
  keywords: ['Rohan Saeed', 'Software Engineer', 'AI Developer', 'Next.js', 'Pakistan'],
  authors: [{ name: 'Rohan Saeed' }],
  openGraph: {
    title: 'Rohan Saeed — Software Engineer',
    description: 'Building scalable products powered by AI.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  )
}
