import { useMemo } from 'react';
import {
	ApolloClient,
	HttpLink,
	InMemoryCache,
	defaultDataIdFromObject,
	NormalizedCacheObject,
	createHttpLink
} from '@apollo/client';
import { categoryKeyNameForCache } from 'graphql/api-all-categories';
import { concatPagination, Reference } from '@apollo/client/utilities';
// import possibleTypes  from 'lib/possible-types';
import { createWriteStream } from 'fs';
// https://github.com/vercel/next.js/discussions/11957

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

function createApolloClient(): ApolloClient<NormalizedCacheObject> {
	const token = process.env.WORDPRESS_AUTH_REFRESH_TOKEN;
	const authorization = `Bearer ${token}`; // page 63 of fullstack-graphql
	const headers = {
		'Content-Type': 'application/json',
		Authorization: authorization
	};
	// https://hasura.io/learn/graphql/nextjs-fullstack-serverless/apollo-client/
	// const ssrMode = typeof window === 'undefined';
	// let link;
	// ssrMode ? link = createHttpLink({ headers }) /*executed serverside*/ : link = createWriteStream();
	return new ApolloClient({
		ssrMode: typeof window === 'undefined' ? true : false,
		connectToDevTools: true,
		link: new HttpLink({
			uri: `${process.env.WORDPRESS_API_URL}`,
			headers: headers
		}),
		cache: new InMemoryCache({
			addTypename: true,
			resultCaching: true
		})
	});
}

export function initializeApollo(
	initialState: any = null,
	consoleLogName?: string
): ApolloClient<NormalizedCacheObject> {
	console.log('initializing APOLLO......');
	console.log(`initializing for ${consoleLogName}.....`);

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
		() => initializeApollo(initialState, 'useApollo...'),
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
