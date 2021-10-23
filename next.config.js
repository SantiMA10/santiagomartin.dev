/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,

	async redirects() {
		return [
			{
				source: '/twitter',
				destination: 'https://twitter.com/SantiMA10b',
				permanent: false,
			},
			{
				source: '/twitch',
				destination: 'https://twitch.tv/SantiMA10',
				permanent: false,
			},
			{
				source: '/github',
				destination: 'https://github.com/SantiMA10',
				permanent: false,
			},
			{
				source: '/streamdeck-devops',
				destination: 'streamdeck://plugin/install/dev.santiagomartin.devops',
				permanent: false,
			},
		];
	},
};
