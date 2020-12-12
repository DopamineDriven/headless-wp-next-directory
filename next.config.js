const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true'
});
const withImages = {
	images: {
		domains: ['cima2020.wpengine.com', 'secure.gravatar.com']
	}
};

const GraphQL = {
	webpack: (config, options) => {
		config.module.rules.push({
			test: /\.(graphql|gql)$/,
			exclude: /node_modules/,
			use: [options.defaultLoaders.babel, { loader: 'graphql-tag/loader' }]
		});
		return config;
	},
	webpackDevMiddleware: config => {
		return config;
	}
};

const Yaml = {
	webpack(config, _options) {
		config.module.rules.push({
			test: /\.ya?ml$/,
			type: 'json',
			use: 'yaml-loader'
		});
		return config;
	}
};

module.exports = withPlugins([
	[withBundleAnalyzer({})],
	withImages,
	Yaml,
	GraphQL
]);
