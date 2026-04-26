/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        snow: '#FAFAFA',
        zinc: {
          950: '#09090b',
        },
        accent: {
          DEFAULT: '#7c3aed',
          light: '#8b5cf6',
          dark: '#a78bfa',
        },
        fuchsia: {
          glow: '#e879f9',
        },
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mesh-dark': 'radial-gradient(at 40% 20%, hsla(280,70%,50%,0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189,80%,56%,0.1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(355,85%,63%,0.08) 0px, transparent 50%)',
      },
    },
  },
  plugins: [],
}
