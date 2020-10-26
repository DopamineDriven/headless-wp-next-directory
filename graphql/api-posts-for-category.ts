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

export const PsuedoObj_AllPostsForCategory_categories_edges_node_posts: AllPostsForCategory_categories_edges_node_posts = {
	__typename: 'CategoryToPostConnection',
	nodes: []
};

export const PsuedoObj_AllPostsForCategory_categories__edges_node_posts_nodes: AllPostsForCategory_categories_edges_node_posts_nodes = {
	__typename: 'Post',
	id: 'nullObject',
	title: null,
	date: null,
	excerpt: null,
	slug: null,
	modified: null,
	social: null,
	featuredImage: null,
	author: null
};
