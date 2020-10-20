import { gql } from '@apollo/client';

const BY_AUTHOR = gql`
	query Author {
		users {
			edges {
				node {
					avatar {
						url
						size
					}
					firstName
					id
					lastName
					name
					slug
				}
			}
		}
	}
`;

export default BY_AUTHOR;
