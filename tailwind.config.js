/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
	purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['JetBrains Mono', ...fontFamily.sans],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
