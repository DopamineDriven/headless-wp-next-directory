import { gql } from '@apollo/client';

const ALL_CATEGORIES = gql`
	query GET_CATEGORIES {
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
