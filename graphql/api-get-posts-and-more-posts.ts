import { gql, TypedDocumentNode } from '@apollo/client';

export const AUTHORFIELDS: TypedDocumentNode = gql`
	fragment AuthorFields on User {
		name
		firstName
		lastName
		avatar {
			url
		}
	}
`;
export const POSTFIELDS: TypedDocumentNode = gql`
	fragment PostFields on Post {
		title
		excerpt
		slug
		date
		modified
		featuredImage {
			node {
				sourceUrl
			}
		}
		author {
			node {
				...AuthorFields
			}
		}
		social {
			facebook
			twitter
			instagram
			website
		}
		categories {
			edges {
				node {
					name
				}
			}
		}
		tags {
			edges {
				node {
					name
				}
			}
		}
	}
`;

const POSTS_AND_MORE_POSTS: TypedDocumentNode = gql`
	query PostSlugs($slug: ID!) {
		post(id: $slug, idType: SLUG) {
			...PostFields
			content
			revisions(first: 1, where: { orderby: { field: MODIFIED, order: DESC } }) {
				edges {
					node {
						title
						excerpt
						content
						author {
							node {
								...AuthorFields
							}
						}
					}
				}
			}
		}
		posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
			edges {
				node {
					...PostFields
				}
			}
		}
	}
`;

export default POSTS_AND_MORE_POSTS;
