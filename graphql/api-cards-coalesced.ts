import { gql } from '@apollo/client';

const CARDS_COALESCED = gql`
	query CardsCoalesced(
		$field: PostObjectsConnectionOrderbyEnum!
		$order: OrderEnum!
	) {
		posts(first: 35, where: { orderby: { field: $field, order: $order } }) {
			edges {
				node {
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
					title
					content
					date
					excerpt
					featuredImage {
						node {
							sourceUrl
						}
					}
					modified
					slug
					social {
						facebook
						instagram
						twitter
						website
					}
				}
			}
		}
	}
`;

export default CARDS_COALESCED;
