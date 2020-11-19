import { gql } from '@apollo/client';
import { FRAGMENT_AUTHOR_FIELDS } from './authorInfo-fragments';

export const FRAGMENT_ALL_POSTS_FIELDS = gql`
	fragment allPostsFields on Post {
		author {
			node {
				...authorFields
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
		categories {
			edges {
				node {
					name
				}
			}
		}
	}
	${FRAGMENT_AUTHOR_FIELDS}
`;
