/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Rubik', 'sans-serif'],
      serif: ['PT Serif', 'serif'],
    },
    extend: {
      spacing: {
        base: '0.75rem',
      },
      colors: {
        dark: {
          900: 'hsl(240, 10%, 14%)',
          800: 'hsl(240, 10%, 20%)',
          700: 'hsl(240, 10%, 30%)',
          600: 'hsl(240, 10%, 40%)',
          500: 'hsl(240, 10%, 50%)',
        },
      },
      animation: {
        'wiggly-motion': 'wiggle 3s linear infinite alternate',
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'translate(10px, 10px)' },
          '50%': { transform: 'translate(0)' },
          '100%': { transform: 'translate(-10px, -10px)' },
        },
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
