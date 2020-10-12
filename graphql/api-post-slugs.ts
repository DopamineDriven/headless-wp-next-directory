import { gql } from '@apollo/client';
import { fetchAPI } from '../lib/api';

const GET_ALL_POSTS_WITH_SLUG = async () => {
	const postSlugs = await fetchAPI(
		gql`
			query getAllPostsWithSlug {
				posts(first: 10000) {
					edges {
						node {
							slug
						}
					}
				}
			}
		`
	);
	return postSlugs?.posts.edges.node?.slug;
};

export default GET_ALL_POSTS_WITH_SLUG;
