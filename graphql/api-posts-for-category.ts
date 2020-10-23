import { gql } from '@apollo/client';

export const ALL_POSTS_FOR_CATEGORY = gql`
	query AllPostsForCategory($first: Int, $name: [String]) {
		categories(first: $first, where: { name: $name }) {
			edges {
				node {
					id
					databaseId
					name
					posts {
						nodes {
							id
							title
							date
							excerpt
							slug
							modified
							social {
								facebook
								instagram
								twitter
								website
							}
							featuredImage {
								node {
									sourceUrl
								}
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
				}
			}
		}
	}
`;

export const allPostsForCategoryQueryVariables = {
	first: 10,
	name: 'Activism'
};

export const allPostsForCategoryKeyNameForCache = `categories({"first":${allPostsForCategoryQueryVariables.first},"where":{"name":${allPostsForCategoryQueryVariables.name}}})`;
