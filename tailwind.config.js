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
		underlineThickness: {
			thin: '2px',
			thick: '5px',
		},
		underlineOffset: {
			small: '2px',
			medium: '5px',
		},
	},
	variants: {
		extend: {
			underlineColors: ['hover', 'dark'],
			underlineStyle: ['hover', 'dark'],
			underlineOffset: ['hover', 'dark'],
			underlineThickness: ['hover', 'dark'],
		},
	},
	plugins: [require('@tailwindcss/typography'), require('tailwind-underline-utils')],
};
