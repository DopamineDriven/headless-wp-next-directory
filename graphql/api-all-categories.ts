import { gql } from '@apollo/client';

export const ALL_CATEGORIES = gql`
	query AllCategories {
		categories {
			edges {
				node {
					id
					databaseId
					name
				}
			}
		}
	}
`;
