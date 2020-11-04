import { gql } from '@apollo/client';

const POSTS_BY_ID = gql`
	query PostsById {
		posts(where: { in: [] }) {
			nodes {
				id
				title
				databaseId
			}
		}
	}
`;

export default POSTS_BY_ID;
