import gql from 'graphql-tag';

const TITLES = gql`
	query Title {
		posts {
			edges {
				node {
					title
				}
			}
		}
	}
`;

export default TITLES;
