import { gql } from '@apollo/client';
import {
	AllPostsForCategory_categories_edges_node_posts,
	AllPostsForCategory_categories_edges_node_posts_nodes
} from './__generated__/AllPostsForCategory';

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
							author {
								node {
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
							}
							title
							content
							date
							excerpt
							featuredImage {
								node {
									sourceUrl
								}
							}
							id
							modified
							slug
							social {
								facebook
								instagram
								twitter
								website
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
