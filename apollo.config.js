module.exports = {
	client: {
		service: {
			name: 'cima2020',
			url: process.env.WORDPRESS_API_URL,
			skipSSLValidation: true
		}
	}
};
