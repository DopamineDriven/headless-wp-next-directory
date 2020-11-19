import { gql } from '@apollo/client';
import { FRAGMENT_AUTHOR_FIELDS } from './authorInfo-fragments';

const BY_AUTHOR = gql`
	query Author {
		users {
			edges {
				node {
					id
					slug
					...authorFields
				}
			}
		}
	}
	${FRAGMENT_AUTHOR_FIELDS}
`;

export default BY_AUTHOR;
