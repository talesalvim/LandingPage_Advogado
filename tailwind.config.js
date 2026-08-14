/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#0A0A0A',
        'gray-900': '#1A1A1A',
        'gray-800': '#2A2A2A',
        gold: '#C9A227',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
