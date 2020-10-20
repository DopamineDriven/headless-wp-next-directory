/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_CATEGORIES
// ====================================================

export interface GET_CATEGORIES_categories_edges_node_posts_nodes_social {
	__typename: 'Post_Social';
	/**
	 * Facebook Url (optional)
	 */
	facebook: string | null;
	/**
	 * Instagram Url (optional)
	 */
	instagram: string | null;
	/**
	 * Twitter Url (optional)
	 */
	twitter: string | null;
	/**
	 * Company Website Url (optional)
	 */
	website: string | null;
}

export interface GET_CATEGORIES_categories_edges_node_posts_nodes_featuredImage_node {
	__typename: 'MediaItem';
	/**
	 * Url of the mediaItem
	 */
	sourceUrl: string | null;
}

export interface GET_CATEGORIES_categories_edges_node_posts_nodes_featuredImage {
	__typename: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
	/**
	 * The nodes of the connection, without the edges
	 */
	node: GET_CATEGORIES_categories_edges_node_posts_nodes_featuredImage_node | null;
}

export interface GET_CATEGORIES_categories_edges_node_posts_nodes_author_node_avatar {
	__typename: 'Avatar';
	/**
	 * URL for the gravatar image source.
	 */
	url: string | null;
}

export interface GET_CATEGORIES_categories_edges_node_posts_nodes_author_node {
	__typename: 'User';
	/**
	 * Display name of the user. This is equivalent to the WP_User-&gt;dispaly_name property.
	 */
	name: string | null;
	/**
	 * First name of the user. This is equivalent to the WP_User-&gt;user_first_name property.
	 */
	firstName: string | null;
	/**
	 * Last name of the user. This is equivalent to the WP_User-&gt;user_last_name property.
	 */
	lastName: string | null;
	/**
	 * Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument.
	 */
	avatar: GET_CATEGORIES_categories_edges_node_posts_nodes_author_node_avatar | null;
}

export interface GET_CATEGORIES_categories_edges_node_posts_nodes_author {
	__typename: 'NodeWithAuthorToUserConnectionEdge';
	/**
	 * The nodes of the connection, without the edges
	 */
	node: GET_CATEGORIES_categories_edges_node_posts_nodes_author_node | null;
}

export interface GET_CATEGORIES_categories_edges_node_posts_nodes {
	__typename: 'Post';
	/**
	 * The globally unique identifier of the post object.
	 */
	id: string;
	/**
	 * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
	 */
	title: string | null;
	/**
	 * Post publishing date.
	 */
	date: string | null;
	/**
	 * The excerpt of the post.
	 */
	excerpt: string | null;
	/**
	 * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
	 */
	slug: string | null;
	/**
	 * The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time.
	 */
	modified: string | null;
	social: GET_CATEGORIES_categories_edges_node_posts_nodes_social | null;
	/**
	 * Connection between the NodeWithFeaturedImage type and the MediaItem type
	 */
	featuredImage: GET_CATEGORIES_categories_edges_node_posts_nodes_featuredImage | null;
	/**
	 * Connection between the NodeWithAuthor type and the User type
	 */
	author: GET_CATEGORIES_categories_edges_node_posts_nodes_author | null;
}

export interface GET_CATEGORIES_categories_edges_node_posts {
	__typename: 'CategoryToPostConnection';
	/**
	 * The nodes of the connection, without the edges
	 */
	nodes: (GET_CATEGORIES_categories_edges_node_posts_nodes | null)[] | null;
}

export interface GET_CATEGORIES_categories_edges_node {
	__typename: 'Category';
	/**
	 * The globally unique ID for the object
	 */
	id: string;
	/**
	 * Identifies the primary key from the database.
	 */
	databaseId: number;
	/**
	 * The human friendly name of the object.
	 */
	name: string | null;
	/**
	 * Connection between the category type and the post type
	 */
	posts: GET_CATEGORIES_categories_edges_node_posts | null;
}

export interface GET_CATEGORIES_categories_edges {
	__typename: 'RootQueryToCategoryConnectionEdge';
	/**
	 * The item at the end of the edge
	 */
	node: GET_CATEGORIES_categories_edges_node | null;
}

export interface GET_CATEGORIES_categories {
	__typename: 'RootQueryToCategoryConnection';
	/**
	 * Edges for the RootQueryToCategoryConnection connection
	 */
	edges: (GET_CATEGORIES_categories_edges | null)[] | null;
}

export interface GET_CATEGORIES {
	/**
	 * Connection between the RootQuery type and the category type
	 */
	categories: GET_CATEGORIES_categories | null;
}
