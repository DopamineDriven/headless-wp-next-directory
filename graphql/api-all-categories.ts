import { gql, TypedDocumentNode } from '@apollo/client';
// // import { DocumentNode, Location } from 'graphql';

// type Required<T extends DocumentNode> = {
// 	[DocumentNode in keyof T]-?: T[DocumentNode];
// };

// type HasLoc<T extends DocumentNode> = `loc` extends keyof T ? true : false;

export const ALL_CATEGORIES = gql`
	query AllCategories($first: Int) {
		categories(first: $first) {
			pageInfo {
				hasNextPage
				endCursor
			}
			edges {
				node {
					name
				}
			}
		}
	}
`;

export const allCategoryQueryVariables = {
	first: 10
};

export const categoryKeyNameForCache = `categories({"first":${allCategoryQueryVariables.first}})`;
