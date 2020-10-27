import { gql } from '@apollo/client';

const AUTHOR_CARD_QUERY = gql`
	query AuthorCardQuery {
		users(where: { include: [] }) {
			nodes {
				name
				firstName
				lastName
				avatar {
					url
				}
			}
		}
	}
`;

export default AUTHOR_CARD_QUERY;
