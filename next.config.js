// next.config.js
const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true, swcMinify: true,
	async redirects() {
		return [
			{
				source: '/projects',
				destination: '/',
				permanent: true,
			},
			{
				source: '/posts',
				destination: '/',
				permanent: true,
			},
		]
	},

};

module.exports = withContentlayer(nextConfig);
