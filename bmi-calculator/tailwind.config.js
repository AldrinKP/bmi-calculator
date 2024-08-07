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
			'body-m': '16px',
			'heading-s': '20px',
			'heading-m': '24px',
			'heading-l': '48px',
			'heading-xl': '64px',
		},
		colors: {
			blue: '#345FF6',
			gunmetal: '#253347',
			deb: '#5E6E85',
			white: '#FFFFFF',
			'blue-opaque': 'rgba(52, 94, 246, 0.15)',
		},
		lineHeight: {
			heading: '1.1',
		},
		boxShadow: {
			'custom-shadow': '16px 32px 56px 0 rgba(143, 174, 207, 0.25)',
		},
	},
	plugins: [],
};
