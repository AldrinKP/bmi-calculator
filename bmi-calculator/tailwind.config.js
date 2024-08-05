/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		fontFamily: {
			inter: ['Inter', 'sans-serif'],
		},
		fontSize: {
			sm: '14px',
			base: '16px',
			lg: '20px',
			xl: '24px',
			'2xl': '48px',
			'3xl': '64px',
		},
	},
	plugins: [],
};
