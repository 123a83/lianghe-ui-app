/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'lianghe-bg': "url('/lianghe-bg.jpg')",
      },
      colors: {
        'lianghe': {
          'primary': '#007bff',
          'secondary': '#00ffff',
          'accent': '#8a2be2',
          'success': '#00ff88',
          'warning': '#ffc107',
        }
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 3s infinite',
        'flow': 'flow 3s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          'from': { 'text-shadow': '0 0 15px rgba(0, 255, 255, 0.6)' },
          'to': { 'text-shadow': '0 0 25px rgba(0, 255, 255, 0.9)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-3px)' },
        },
        'shimmer': {
          '0%': { left: '-100%' },
          '100%': { left: '100%' },
        },
        'flow': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
    },
  },
  plugins: [],
} 