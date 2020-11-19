import { gql } from '@apollo/client';
import { FRAGMENT_AUTHOR_FIELDS } from './authorInfo-fragments';

const AUTHOR_CARD_QUERY = gql`
	query AuthorCardQuery {
		users(where: { include: [] }) {
			nodes {
				...authorFields
			}
		}
	}
	${FRAGMENT_AUTHOR_FIELDS}
`;

export default AUTHOR_CARD_QUERY;
