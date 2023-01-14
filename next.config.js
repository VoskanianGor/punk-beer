/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.punkapi.com',
			},
		],
	},
	env: {
		API_URL: process.env.API_URL,
	},
}

module.exports = nextConfig
