import { useMemo } from 'react';
import {
	ApolloClient,
	InMemoryCache,
	NormalizedCacheObject,
	HttpLink
} from '@apollo/client';
import { concatPagination } from '@apollo/client/utilities';
import merge from 'deepmerge';

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

function createApolloClient() {
	const token = process.env.WORDPRESS_AUTH_REFRESH_TOKEN;
	const authorization = `Bearer ${token}`; // page 63 of fullstack-graphql
	const headers = {
		'Content-Type': 'application/json',
		Authorization: authorization
	};
	return new ApolloClient({
		ssrMode: typeof window === 'undefined',
		link: new HttpLink({
			uri: process.env.WORDPRESS_API_URL,
			credentials: 'same-origin',
			headers: headers
		}),
		cache: new InMemoryCache({
			typePolicies: {
				Query: {
					fields: {
						allPosts: concatPagination()
					}
				}
			}
		})
	});
}

export function initializeApollo(initialState: any = null) {
	const _apolloClient = apolloClient ?? createApolloClient();
	// If your page has Next.js data fetching methods that use Apollo Client, the initial state
	// gets hydrated here
	if (initialState) {
		// Get existing cache, loaded during client side data fetching
		const existingCache = _apolloClient.extract();

		// Merge the existing cache into data passed from getStaticProps/getServerSideProps
		const data = merge(initialState, existingCache);

		// Restore the cache with the merged data
		_apolloClient.cache.restore(data);
	}
	// for SSG and SSR ALWAYS create a new Apollo Client
	if (typeof window === 'undefined') return _apolloClient;
	// Create the Apollo Client once in the client
	if (!apolloClient) apolloClient = _apolloClient;
	return _apolloClient;
}

export function useApollo(initialState: any) {
	const store = useMemo(() => initializeApollo(initialState), [initialState]);
	return store;
}

/*export type ResolverContext = {
	req?: IncomingMessage;
	res?: ServerResponse;
};

function createIsomorphLink(context: ResolverContext = {}) {
	if (typeof window === 'undefined') {
		const { SchemaLink } = require('@apollo/client/link/schema');
		const { schema } = require('./schema');
		return new SchemaLink({ schema, context });
	} else {
		const token = process.env.WORDPRESS_AUTH_REFRESH_TOKEN;
		const authorization = `Bearer ${token}`; // page 63 of fullstack-graphql
		const headers = {
			'Content-Type': 'application/json',
			Authorization: authorization
		};
		const { HttpLink } = require('@apollo/client');
		return new HttpLink({
			uri: `${process.env.WORDPRESS_API_URL}`,
			headers: headers,
			credentials: 'same-origin'
		});
	}
}

function createApolloClient(context?: ResolverContext) {
	return new ApolloClient({
		ssrMode: typeof window === 'undefined',
		link: createIsomorphLink(context),
		cache: new InMemoryCache()
	});
}

export function initializeApollo(
	initialState: any = null,
	// Pages with Next.js data fetching methods, like `getStaticProps`, can send
	// a custom context which will be used by `SchemaLink` to server render pages
	context?: ResolverContext
) {
	const _apolloClient = apolloClient ?? createApolloClient(context);

	// If your page has Next.js data fetching methods that use Apollo Client, the initial state
	// gets hydrated here
	if (initialState) {
		_apolloClient.cache.restore(initialState);
	}
	// For SSG and SSR always create a new Apollo Client
	if (typeof window === 'undefined') return _apolloClient;
	// Create the Apollo Client once in the client
	if (!apolloClient) apolloClient = _apolloClient;

	return _apolloClient;
}

export function useApollo(initialState: any) {
	const store = useMemo(() => initializeApollo(initialState), [initialState]);
	return store;
}

/*
import { useMemo } from 'react';
import {
	ApolloClient,
	HttpLink,
	InMemoryCache,
	defaultDataIdFromObject,
	NormalizedCacheObject,
	createHttpLink
} from '@apollo/client';
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
	// ssrMode ? link = createHttpLink({ headers })  : link = createWriteStream();
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
	initialState: any = null
): ApolloClient<NormalizedCacheObject> {
	console.log('initializing APOLLO......');
	// console.log(`initializing for ${consoleLogName}.....`);

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
*/
