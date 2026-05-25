/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f9f5ff',
          100: '#f3ebff',
          200: '#e8d5ff',
          300: '#d4a5ff',
          400: '#b870ff',
          500: '#9d4edd',
          600: '#8b5cff',
          700: '#7b2cbf',
          800: '#6d28ff',
          900: '#5a189a',
          950: '#240046',
        },
      },
      fontFamily: {
        sans: ['Sora', 'Inter', 'Satoshi', 'sans-serif'],
        display: ['Sora', 'Inter', 'Satoshi', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '3.5rem' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      boxShadow: {
        'glow-sm': '0 0 20px rgba(109, 40, 255, 0.3)',
        'glow': '0 0 40px rgba(109, 40, 255, 0.4)',
        'glow-lg': '0 0 60px rgba(109, 40, 255, 0.5)',
        'glow-xl': '0 0 80px rgba(109, 40, 255, 0.6)',
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '12px',
        'lg': '20px',
        'xl': '40px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 40px rgba(109, 40, 255, 0.3)' },
          '50%': { boxShadow: '0 0 60px rgba(109, 40, 255, 0.6)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
