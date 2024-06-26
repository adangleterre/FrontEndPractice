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
      },
      fontFamily: {
        sodo: ['sodo','sans-serif'],
      },
    },
  },
  plugins: [],
}
