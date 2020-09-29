import { useMemo } from 'react';
import {
	ApolloClient,
	HttpLink,
	InMemoryCache,
	NormalizedCacheObject
} from '@apollo/client';
import { concatPagination, Reference } from '@apollo/client/utilities';

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

function createApolloClient(): ApolloClient<NormalizedCacheObject> {
	const headers = { 'Content-Type': 'application/json' };
	return new ApolloClient<NormalizedCacheObject>({
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
						posts: concatPagination<Reference>(),
						categories: concatPagination<Reference>()
					}
				}
			}
		})
	});
}

export function initializeApollo(
	initialState: any = null
): ApolloClient<NormalizedCacheObject> {
	const _apolloClient = apolloClient ?? createApolloClient();
	if (initialState) {
		const existingCache = _apolloClient.extract();
		_apolloClient.cache.restore({ ...existingCache, ...initialState });
	}
	if (typeof window === 'undefined') return _apolloClient;
	if (!apolloClient) apolloClient = _apolloClient;
	return _apolloClient;
}

export function useApollo(
	initialState: any
): ApolloClient<NormalizedCacheObject> {
	const store = useMemo<ApolloClient<NormalizedCacheObject>>(
		() => initializeApollo(initialState),
		[initialState]
	);
	return store;
}

// https://nextjs-graphql-with-prisma-simple.vercel.app/api?
// https://github.com/vercel/next.js/blob/canary/examples/with-apollo/lib/apolloClient.js
// https://www.apollographql.com/docs/react/development-testing/static-typing/
// https://www.apollographql.com/docs/react/data/queries/
// https://www.apollographql.com/docs/react/caching/cache-configuration/
// https://www.apollographql.com/docs/react/caching/cache-configuration/#typepolicy-fields
// https://www.apollographql.com/blog/local-state-management-with-reactive-variables/
