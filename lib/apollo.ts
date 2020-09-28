import { useMemo } from 'react';
import {
	ApolloClient,
	HttpLink,
	InMemoryCache,
	NormalizedCacheObject
} from '@apollo/client';
import { concatPagination } from '@apollo/client/utilities';

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

function createApolloClient() {
	const headers = { 'Content-Type': 'application/json' };
	return new ApolloClient({
		ssrMode: typeof window === 'undefined',
		connectToDevTools: true,
		link: new HttpLink({
			uri: `${process.env.WORDPRESS_API_URL}`,
			credentials: `${headers}`
		}),
		cache: new InMemoryCache({
			addTypename: true,
			resultCaching: true,
			typePolicies: {
				Query: {
					fields: {
						posts: concatPagination()
					}
				}
			}
		})
	});
}

export function initializeApollo(initialState: any = null) {
	const _apolloClient = apolloClient ?? createApolloClient();
	if (initialState) {
		const existingCache = _apolloClient.extract();
		_apolloClient.cache.restore({ ...existingCache, ...initialState });
	}
	if (typeof window === 'undefined') return _apolloClient;
	if (!apolloClient) apolloClient = _apolloClient;
	return _apolloClient;
}
