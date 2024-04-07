/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'mountain-meadow': {
          50: '#ecfdf7',
          100: '#d1faec',
          200: '#a7f3da',
          300: '#6ee7bf',
          400: '#34d39e',
          500: '#10b981',
          600: '#059666',
          700: '#047852',
          800: '#065f42',
          900: '#064e36',
          950: '#022c1e'
        }
      }
    }
  },
  plugins: []
};
