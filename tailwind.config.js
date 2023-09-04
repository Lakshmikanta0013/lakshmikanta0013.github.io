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
        slideUp: 'slideUp 0.5s ease-in-out forwards',
        slideLeft: 'slideLeft 0.5s ease-in-out forwards',
        fadeIn: 'fadeIn 0.5s ease-in-out forwards',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(100px) scale(0.8)' },
          '100%': { transform: 'translateY(0) scale(1)' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(100px) scale(1.2, 1)' },
          '50%': { transform: 'translateX(0) scale(1.3, 1)' },
          '70%': { transform: 'translateX(0) scale(1.1, 1)' },
          '90%': { transform: 'translateX(0) scale(0.9, 1)' },
          '100%': { transform: 'translateX(0) scale(1)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
