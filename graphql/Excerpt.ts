import { gql } from '@apollo/client';

const EXCERPT = gql`
	query Excerpt {
		posts {
			edges {
				node {
					excerpt
				}
			}
		}
	}
`;

export default EXCERPT;
