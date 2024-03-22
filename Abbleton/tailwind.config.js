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
			backgroundImage: {
				'hero': "url('assets/images/hero-header.jpg')",
			},
			screens: {
				'2xl': '1600px'
			  },
		},
		fontFamily:{
			futura: ['futura','sans-serif'],
		},
	},
	plugins: [],
}