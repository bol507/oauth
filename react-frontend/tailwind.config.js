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
        },
        cinder: {
          50: 'f2f3fb',
          100: 'e7e9f8',
          200: 'd4d7f1',
          300: 'babd37',
          400: 'ad9edb',
          500: 'bc85cf',
          600: '7b6cbf',
          700: '6a5ba7',
          800: '564cb7',
          900: '49426d',
          950: '13111c'
        }
      }
    }
  },
  plugins: []
};
