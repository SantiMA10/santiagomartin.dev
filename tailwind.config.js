/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
	mode: 'jit',
	purge: {
		content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
		options: {
			safelist: ['mt-6 mb-6'],
		},
	},
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['JetBrains Mono', ...fontFamily.sans],
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						img: {
							margin: 'auto',
							display: 'inline-block',
						},
					},
				},
				dark: {
					css: {
						'color': theme('colors.gray.200'),
						'a': {
							'color': theme('colors.blue.400'),
							'&:hover': {
								color: theme('colors.blue.600'),
							},
							'code': { color: theme('colors.blue.400') },
						},
						'blockquote': {
							borderLeftColor: theme('colors.gray.700'),
							color: theme('colors.gray.300'),
						},
						'h1,h2,h3,h4': {
							color: theme('colors.gray.100'),
						},
						'hr': { borderColor: theme('colors.gray.700') },
						'ol': {
							li: {
								'&:before': { color: theme('colors.gray.500') },
							},
						},
						'ul': {
							li: {
								'&:before': { backgroundColor: theme('colors.gray.500') },
							},
						},
						'strong': { color: theme('colors.gray.100') },
						'thead': {
							color: theme('colors.gray.100'),
							borderBottomColor: theme('colors.gray.600'),
						},
						'tbody': {
							tr: {
								borderBottomColor: theme('colors.gray.700'),
							},
						},
					},
				},
			}),
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
			typography: ['dark'],
		},
	},
	plugins: [require('@tailwindcss/typography'), require('tailwind-underline-utils')],
};
