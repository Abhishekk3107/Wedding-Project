/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        dancing: ['"Dancing Script"', 'cursive'],
      },
      colors: {
        gold: '#B8860B',
        maroon: '#800000',
        cream: '#FFFDD0',
      },
    },
  },
  plugins: [],
};