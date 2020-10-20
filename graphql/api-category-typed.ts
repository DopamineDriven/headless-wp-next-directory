import { gql } from '@apollo/client';

const CATEGORY_TYPED = gql`
	query CategoryTyped($idType: CategoryIdType!, $id: ID!) {
		category(id: $id, idType: $idType) {
			name
		}
		__typename
		categories {
			__typename
			edges {
				__typename
				node {
					__typename
					id
					name
					databaseId
					slug
				}
			}
		}
	}
`;

export default CATEGORY_TYPED;
