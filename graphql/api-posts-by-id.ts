import { gql } from '@apollo/client';

export const POSTS_BY_ID = gql`
	query PostsById {
		posts(where: { in: [] }) {
			nodes {
				id
			}
		}
	}
`;
