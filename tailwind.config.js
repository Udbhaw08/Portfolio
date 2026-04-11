/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Clash Display'", "sans-serif"],
        heading: ["'Space Grotesk'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },

      fontSize: {
        'hero': ['clamp(3rem, 8vw, 8rem)', { lineHeight: '0.95' }],
        'hero-lg': ['clamp(4rem, 10vw, 12rem)', { lineHeight: '0.9' }],
        'display-sm': ['clamp(1.5rem, 3vw, 2.5rem)', { lineHeight: '1.1' }],
      },

      letterSpacing: {
        tighter: "-0.04em",
        tightest: "-0.06em",
      },

      colors: {
        background: "#0a0a0a",
        foreground: "#f0f0f0",
        muted: "#555",
        "muted-darker": "#333",
        "border-dark": "#1c1c1c",
        "dark-gray": "#2a2a2a",
        "medium-gray": "#3a3a3a",
        "light-gray": "#1e1e1e",
      },

      backgroundImage: {
        'text-gradient': 'linear-gradient(90deg, #ffffff, #666666)',
      },

      boxShadow: {
        'glow': '0 0 40px rgba(255,255,255,0.08)',
        'soft': '0 10px 40px rgba(0,0,0,0.6)',
      },

      spacing: {
        'section': 'clamp(4rem, 8vw, 8rem)',
        'hero-x': 'clamp(2rem, 6vw, 6rem)',
      },

      opacity: {
        15: '0.15',
        25: '0.25',
        85: '0.85',
      },

      animation: {
        'marquee': 'marquee 28s linear infinite',
        'marquee-slow': 'marquee 40s linear infinite',
        'marquee-fast': 'marquee 18s linear infinite',
        'fade-up': 'fadeUp 0.75s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
        'slide-left': 'slideInLeft 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'name-reveal': 'nameReveal 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'img-reveal': 'imgReveal 1.1s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'cursor-blink': 'cursorBlink 1s step-end infinite',
      },

      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideInLeft: {
          from: { opacity: '0', transform: 'translateX(-32px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        nameReveal: {
          from: { opacity: '0', transform: 'translateY(60px) skewY(2deg)' },
          to: { opacity: '1', transform: 'translateY(0) skewY(0deg)' },
        },
        imgReveal: {
          from: { opacity: '0', transform: 'scale(1.04)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        cursorBlink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
