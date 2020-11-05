import { gql, TypedDocumentNode } from '@apollo/client';
import { FRAGMENT_AUTHOR_FIELDS } from './authorInfo-fragments';
import { FRAGMENT_ALL_POSTS_FIELDS } from './postInfo-fragment';

const POSTS_AND_MORE_POSTS: TypedDocumentNode = gql`
	query PostSlugs($slug: ID!) {
		post(id: $slug, idType: SLUG) {
			...allPostsFields
			content
			revisions(first: 1, where: { orderby: { field: MODIFIED, order: DESC } }) {
				edges {
					node {
						title
						excerpt
						content
						author {
							node {
								...authorFields
							}
						}
					}
				}
			}
		}
		posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
			edges {
				node {
					...allPostsFields
				}
			}
		}
	}
	${FRAGMENT_ALL_POSTS_FIELDS}
	${FRAGMENT_AUTHOR_FIELDS}
`;

export default POSTS_AND_MORE_POSTS;
