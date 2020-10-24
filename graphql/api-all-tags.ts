import { gql } from '@apollo/client';

export const ALL_TAGS = gql`
	query AllTags($first: Int) {
		tags(first: $first) {
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

export const allTagQueryVariables = {
	first: 10
};

export const tagKeyNameForCache = `tags({"first":${allTagQueryVariables.first}})`;
