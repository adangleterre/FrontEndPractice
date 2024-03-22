export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1600px',
		  },
		extend: {
			colors: {
				primary: '#000000',
				secondary: '#0100ff',
				accent: '#ff764d'
			},
			backgroundImage: {
				'hero': "url('assets/images/hero-header.jpg')",
			},
		},
		fontFamily:{
			futura: ['futura','sans-serif'],
		},
	},
	plugins: [],
}