import { gql } from '@apollo/client';

export const ALL_TAGS = gql`
	query AllTags {
		categories {
			edges {
				node {
					name
				}
			}
		}
	}
`;
