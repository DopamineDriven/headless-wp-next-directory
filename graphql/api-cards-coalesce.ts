import { gql } from '@apollo/client';
import {
	OrderEnum,
	PostObjectsConnectionOrderbyEnum
} from '../types/graphql-global-types';
const CARDS_COALESCE = gql`
	query CardCoalescence(
		$first: Int!
		$field: PostObjectsConnectionOrderbyEnum!
		$order: OrderEnum!
	) {
		posts(first: $first, where: { orderby: { field: $field, order: $order } }) {
			edges {
				node {
					id
					title
					excerpt
					slug
					date
					modified
					social {
						facebook
						instagram
						twitter
						website
					}
					featuredImage {
						node {
							sourceUrl
						}
					}
					author {
						node {
							name
							firstName
							lastName
							avatar {
								url
							}
						}
					}
				}
			}
		}
	}
`;

export const allPostsQueryVars = {
	first: 10,
	field: PostObjectsConnectionOrderbyEnum.MODIFIED,
	order: OrderEnum.DESC
};

export default CARDS_COALESCE;
