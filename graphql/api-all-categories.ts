import { gql } from '@apollo/client';

export const ALL_CATEGORIES = gql`
	query AllCategories($first: Int, $skip: Int) {
		categories(first: $first, skip: $skip) {
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
	first: 10,
	skip: 0
};
