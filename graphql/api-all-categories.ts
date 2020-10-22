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
