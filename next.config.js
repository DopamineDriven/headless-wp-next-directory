const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true'
});
const withImages = {
	images: {
		domains: ['cima2020.wpengine.com']
	}
};

module.exports = withPlugins([[withBundleAnalyzer({})], withImages]);
