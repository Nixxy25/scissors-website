/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
   colors:{
    'blue': '#0065FE',
    "deep-blue":"#1E3448",
    "black":"#141414",
    "white":"#ffffff",
    "cyan":"#f0fdfa",
    "orange":"#fff7ed",
    "blues":"#dbeafe",   
    "ash":"#D6D6D6",
    }
  },
  backgroundColor: {
    'radial-gradient': 'radial-gradient(169.40% 89.55% at 94.76% 6.29%, rgba(0, 0, 0, 0.40) 0%, rgba(255, 255, 255, 0.00) 100%)',
  },
  extend: {},
  plugins: [],
}

