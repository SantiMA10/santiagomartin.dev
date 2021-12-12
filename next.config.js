/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	swcMinify: true,

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
			{
				source: '/dm',
				destination: 'https://twitter.com/messages/compose?recipient_id=1397520804959694849',
				permanent: false,
			},
			{
				source: '/1to1',
				destination: 'https://cal.com/santima10',
				permanent: false,
			},
		];
	},
};
