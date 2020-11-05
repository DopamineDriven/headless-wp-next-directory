import { gql, TypedDocumentNode } from '@apollo/client';
import { FRAGMENT_ALL_POSTS_FIELDS } from './postInfo-fragment';
import { GetPostBySlugQueryVariables, Scalars } from '../graphql';


const GET_POST_BY_SLUG: TypedDocumentNode = gql`
	query GetPostBySlug($slug: ID!) {
		post(id: $slug, idType: SLUG) {
			...allPostsFields
		}
	}
	${FRAGMENT_ALL_POSTS_FIELDS}
`;

export default GET_POST_BY_SLUG;

export let allSlugQueryVariables: {
	slug: Scalars['ID'];
};
