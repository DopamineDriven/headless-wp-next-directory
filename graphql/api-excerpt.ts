import gql from 'graphql-tag';

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
