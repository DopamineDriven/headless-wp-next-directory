import { gql } from '@apollo/client';

export const ALL_POSTS = gql`
	query AllPosts($field: String, $order: String) {
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
								size
								height
								width
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
					id
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

export enum Field {
	TITLE = 'TITLE',
	MODIFIED = 'MODIFIED',
	DATE = 'DATE'
}

export enum Order {
	ASC = 'ASC',
	DESC = 'DESC'
}
