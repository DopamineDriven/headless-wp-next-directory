import { gql } from '@apollo/client';
import { FRAGMENT_ALL_POSTS_FIELDS } from './postInfo-fragment';

const CARDS_COALESCED = gql`
	query CardsCoalesced(
		$field: PostObjectsConnectionOrderbyEnum!
		$order: OrderEnum!
	) {
		posts(first: 35, where: { orderby: { field: $field, order: $order } }) {
			edges {
				node {
					...allPostsFields
				}
			}
		}
	}
	${FRAGMENT_ALL_POSTS_FIELDS}
`;

export default CARDS_COALESCED;
