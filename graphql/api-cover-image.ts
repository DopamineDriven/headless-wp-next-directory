import { gql } from '@apollo/client';

const POSTS_BY_ID_RETURN_IMAGE_SLUG = gql`
	query PostsByIdReturnImageSlug {
		posts(where: { in: [] }) {
			nodes {
				title
				featuredImage {
					node {
						slug
					}
				}
				id
			}
		}
	}
`;

export default POSTS_BY_ID_RETURN_IMAGE_SLUG;
