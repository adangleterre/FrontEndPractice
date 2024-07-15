/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
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
        'hero-mobile': "url('/images/backgrounds/hero-mobile.jpg')",
        'hero-desktop': "url('/images/backgrounds/hero-desktop.png')",
        'partners': "url('/images/backgrounds/bg-partners.webp')"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}