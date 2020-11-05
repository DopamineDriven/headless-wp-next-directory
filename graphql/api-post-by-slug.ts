import { gql, TypedDocumentNode } from '@apollo/client';
import POST_SLUGS from './api-post-slugs';
import { GetPostBySlugQueryVariables, Scalars } from '../graphql';

const GET_POST_BY_SLUG: TypedDocumentNode = gql`
	query GetPostBySlug($slug: ID!) {
		post(id: $slug, idType: SLUG) {
			featuredImage {
				node {
					sourceUrl
				}
			}
			slug
			title
			date
			id
			modified
			excerpt
			content
			categories {
				nodes {
					name
				}
			}
			social {
				facebook
				instagram
				twitter
				website
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
`;

export default GET_POST_BY_SLUG;

export let allSlugQueryVariables: {
	slug: Scalars['ID'];
};
