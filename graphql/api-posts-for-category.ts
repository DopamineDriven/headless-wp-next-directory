import { gql } from '@apollo/client';
import { FRAGMENT_ALL_POSTS_FIELDS } from './postInfo-fragment'

export const ALL_POSTS_FOR_CATEGORY = gql`
	query AllPostsForCategory($first: Int, $name: [String]) {
		categories(first: $first, where: { name: $name }) {
			edges {
				node {
					id
					databaseId
					name
					posts {
						edges {
							node {
								...allPostsFields
							}
						}
					}
				}
			}
		}
	}
	${FRAGMENT_ALL_POSTS_FIELDS}
`;


