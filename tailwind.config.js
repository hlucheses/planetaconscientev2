/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        oxblood: {
          DEFAULT: '#8B1A1A',
          deep: '#5C0F0F',
          light: '#A93232',
        },
        gold: {
          DEFAULT: '#C9A961',
          light: '#E5D2A0',
          dark: '#9C8244',
        },
        ink: {
          DEFAULT: '#0A0A0A',
          soft: '#1A1A1A',
          mute: '#2D2D2D',
        },
        cream: {
          DEFAULT: '#F5EFE6',
          light: '#FAF7F2',
          warm: '#EFE7DA',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        widest: '0.25em',
        ultra: '0.4em',
      },
      animation: {
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'reveal': 'reveal 1.1s cubic-bezier(0.77, 0, 0.175, 1) forwards',
        'gold-shine': 'goldShine 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        reveal: {
          '0%': { opacity: '0', clipPath: 'inset(0 100% 0 0)' },
          '100%': { opacity: '1', clipPath: 'inset(0 0 0 0)' },
        },
        goldShine: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
