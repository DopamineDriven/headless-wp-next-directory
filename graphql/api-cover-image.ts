import { gql } from '@apollo/client';
const typeDefs = gql`
	type PostsByIdReturnImageSlug {
		title: String!
		slug: String!
		uri: String!
		id: ID!
		sourceUrl: String!
	}
`;

const POSTS_BY_ID_RETURN_IMAGE_SLUG = gql`
	query PostsByIdReturnImageSlug {
		posts(where: { in: [] }) {
			nodes {
				title
				featuredImage {
					node {
						slug
						uri
						title
						sourceUrl
					}
				}
				id
			}
		}
	}
`;

export default POSTS_BY_ID_RETURN_IMAGE_SLUG;
