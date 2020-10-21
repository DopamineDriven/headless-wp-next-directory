import { gql } from '@apollo/client';

export const ALL_TAGS = gql`
	query AllTags {
		tags {
			edges {
				node {
					name
				}
			}
		}
	}
`;
