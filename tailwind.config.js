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
        primary: {
          DEFAULT: 'hsl(var(--color-primary) / <alpha-value>)',
          700: 'hsl(var(--color-primary-700) / <alpha-value>)',
          600: 'hsl(var(--color-primary-600) / <alpha-value>)',
          500: 'hsl(var(--color-primary-500) / <alpha-value>)',
          400: 'hsl(var(--color-primary-400) / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'hsl(var(--color-secondary) / <alpha-value>)',
          700: 'hsl(var(--color-secondary-700) / <alpha-value>)',
          600: 'hsl(var(--color-secondary-600) / <alpha-value>)',
          500: 'hsl(var(--color-secondary-500) / <alpha-value>)',
          400: 'hsl(var(--color-secondary-400) / <alpha-value>)',
        },
        white: {
          DEFAULT: 'hsl(240, 21%, 95%)',
          full: 'hsl(255, 100%,100%)',
        },
        dark: {
          DEFAULT: 'hsl(var(--color-dark) / <alpha-value>)',
          900: 'hsl(var(--color-dark-900) / <alpha-value>)',
          800: 'hsl(var(--color-dark-800) / <alpha-value>)',
          700: 'hsl(var(--color-dark-700) / <alpha-value>)',
          600: 'hsl(var(--color-dark-600) / <alpha-value>)',
          500: 'hsl(var(--color-dark-500) / <alpha-value>)',
          400: 'hsl(var(--color-dark-400) / <alpha-value>)',
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
          '0%': { opacity: 0, transform: 'scale(0.5)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
