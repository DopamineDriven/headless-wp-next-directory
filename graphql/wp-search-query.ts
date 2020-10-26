import { gql } from '@apollo/client';

const WP_SEARCH_QUERY = gql`
	query WPSearchQuery($term: String!) {
		Posts: posts(first: 500, where: { search: $term }) {
			nodes {
				title
				uri
				id
				date
				categories {
					nodes {
						name
						id
						uri
					}
				}
			}
		}
	}
`;

export default WP_SEARCH_QUERY;
