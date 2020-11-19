import { gql } from '@apollo/client';
import { FRAGMENT_ALL_POSTS_FIELDS } from './postInfo-fragment';

const SEARCH_CATEGORIES_RETURN_POSTS = gql`
	query SearchCategoriesReturnPosts(
		$name: [String!]
		$search: String
		$field: PostObjectsConnectionOrderbyEnum!
		$order: OrderEnum!
	) {
		categories(where: { name: $name, search: $search }) {
			edges {
				node {
					name
					count
					id
					posts(where: { orderby: { field: $field, order: $order } }) {
						edges {
							node {
								...allPostsFields
							}
						}
					}
				}
			}
		}
	}
	${FRAGMENT_ALL_POSTS_FIELDS}
`;

export default SEARCH_CATEGORIES_RETURN_POSTS;
