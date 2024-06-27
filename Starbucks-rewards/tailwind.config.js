/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "starbucks-green": "#01754A",
        "covers-green": "#D4E8E3",
      },
      fontFamily: {
        sodo: ['sodo','sans-serif'],
      },
      backgroundImage: {
        'hero-mobile': "url('/images/hero-mobile.jpg')",
        'hero-desktop': "url('/images/hero-desktop.png')",
      }
    },
  },
  plugins: [],
}

