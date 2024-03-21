export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: '#000000',
				secondary: '#0100ff',
				accent: '#ff764d'
			},
		},
		fontFamily:{
			futura: ['futura','sans-serif'],
		},
	},
	plugins: [],
}