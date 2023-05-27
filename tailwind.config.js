/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange-red': '#ff4500',
        'orange-flame': "#e25822",
        'orange-terra-cotta':"#e2725b",
        'orange-safety':"#ff6700",
        'orange-salmon' : "#ffa07a",
        'orange-tangerine':"#ffa089",
        'orange-header':"#FF5F15" 
      },
    },
  },
  plugins: [],
}