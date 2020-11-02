module.exports = {
	client: {
		service: {
			name: 'cima2020',
			url: process.env.WORDPRESS_API_URL,
			skipSSLValidation: true,
			includes: [
				'./graphql/**/*.ts',
				'./graphql/**/*.graphql',
				'./lib/apollo.ts',
				'./pages/**/*.tsx'
			]
		}
	}
};
