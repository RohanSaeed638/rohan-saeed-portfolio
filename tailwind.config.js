/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        gold: '#F5A623',
        'gold-light': '#F7BE5A',
        'gold-dim': 'rgba(245,166,35,0.12)',
        ink: '#0A0A0C',
        ink2: '#13131A',
        ink3: '#1C1C26',
        mist: '#8B8B9A',
        silver: '#C8C8D4',
        'line': 'rgba(255,255,255,0.07)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-clash)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'glow': 'glow 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%,100%': { opacity: '0.5' },
          '50%':     { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
