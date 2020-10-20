import { clientConfig } from 'client-config';

export async function getStandaloneApolloClient() {
	const { ApolloClient, InMemoryCache, HttpLink } = await import(
		'@apollo/client'
	);
	return new ApolloClient({
		link: new HttpLink({
			uri: `${clientConfig.graphqlUrl}`,
			headers: {
				'Content-Type': 'application/json',
				Authorization: process.env.WORDPRESS_AUTH_REFRESH_TOKEN
			},
			fetch
		}),
		cache: new InMemoryCache()
	});
}
// eloquent solution
// dynamic imports https://javascript.info/modules-dynamic-imports
// https://github.com/vercel/next.js/discussions/11957
