import { gql } from '@apollo/client';

export const FRAGMENT_AUTHOR_FIELDS = gql`
	fragment authorFields on User {
		name
		firstName
		lastName
		avatar {
			url
			size
			height
			width
		}
	}
`;
