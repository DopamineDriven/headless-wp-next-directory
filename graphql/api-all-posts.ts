import { gql } from '@apollo/client';
import { FRAGMENT_ALL_POSTS_FIELDS } from './postInfo-fragment';

export const ALL_POSTS = gql`
	query AllPosts($field: PostObjectsConnectionOrderbyEnum!, $order: OrderEnum!) {
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

export enum Field {
	TITLE = 'TITLE',
	MODIFIED = 'MODIFIED',
	DATE = 'DATE'
}

export enum Order {
	ASC = 'ASC',
	DESC = 'DESC'
}
