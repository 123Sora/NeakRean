/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
         kantumruyPro: ['"Kantumruy Pro"', 'sans-serif'],
         Koulen: ['"Koulen"', 'cursive'],
         Moulpali: ['"Moulpali"', 'serif'],
      },
      colors: {
      },
      letterSpacing: {
        'extra-wide': '5px',
      }
    },
  },
  plugins: [],
};
