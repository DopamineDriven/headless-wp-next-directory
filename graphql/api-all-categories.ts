import { gql } from '@apollo/client';

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
