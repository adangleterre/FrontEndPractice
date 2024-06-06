/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				'primary-lobe': '#04DDB3',
			},
			boxShadow: {
				'thumbnail': '0 100px 140px -50px rgba(0, 0, 0, 0.25)',
				'CtaButton': '0 20px 40px -20px rgba(0, 0, 0, 0.15)'
			},
		},
	},
	plugins: [],
}