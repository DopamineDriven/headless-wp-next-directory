import { useMemo } from 'react';
import {
	ApolloClient,
	HttpLink,
	InMemoryCache,
	NormalizedCacheObject
} from '@apollo/client';
import { concatPagination } from '@apollo/client/utilities';

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;
