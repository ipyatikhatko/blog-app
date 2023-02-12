/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			mobile: { min: '320px', max: '425px' },
			tablet: { min: '425px', max: '1024' },
			desktop: { min: '1024px' },
		},
	},
	plugins: [require('@tailwindcss/line-clamp')],
};
