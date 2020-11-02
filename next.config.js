const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true'
});
const withImages = {
	images: {
		domains: ['cima2020.wpengine.com']
	}
};

const GraphQL = {
	webpack: config => {
		config.module.rules.push({
			test: /\.(graphql|gql)$/,
			exclude: /node_modules/,
			loader: 'graphql-tag/loader'
		});
		return config;
	},
	webpackDevMiddleware: config => {
		return config;
	}
};

const Yaml = {
	webpack(config, options) {
		config.module.rules.push({
			test: /\.ya?ml$/,
			type: 'json',
			use: 'yaml-loader'
		});
	}
};

module.exports = withPlugins([
	[withBundleAnalyzer({})],
	withImages,
	Yaml,
	GraphQL
]);
