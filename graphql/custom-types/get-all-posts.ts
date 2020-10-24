/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import {
	PostObjectsConnectionOrderbyEnum,
	OrderEnum
} from './../../types/graphql-global-types';

// ====================================================
// GraphQL query operation: AllPosts
// ====================================================

export interface AllPosts_posts_edges_node_author_node_avatar {
	__typename: 'Avatar';
	/**
	 * URL for the gravatar image source.
	 */
	url: string;
	/**
	 * The size of the avatar in pixels. A value of 96 will match a 96px x 96px gravatar image.
	 */
	size: number | null;
	/**
	 * Height of the avatar image.
	 */
	height: number | null;
	/**
	 * Width of the avatar image.
	 */
	width: number | null;
}

export interface AllPosts_posts_edges_node_author_node {
	__typename: 'User';
	/**
	 * Display name of the user. This is equivalent to the WP_User-&gt;dispaly_name property.
	 */
	name: string;
	/**
	 * First name of the user. This is equivalent to the WP_User-&gt;user_first_name property.
	 */
	firstName: string;
	/**
	 * Last name of the user. This is equivalent to the WP_User-&gt;user_last_name property.
	 */
	lastName: string;
	/**
	 * Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument.
	 */
	avatar: AllPosts_posts_edges_node_author_node_avatar;
}

export interface AllPosts_posts_edges_node_author {
	__typename: 'NodeWithAuthorToUserConnectionEdge';
	/**
	 * The nodes of the connection, without the edges
	 */
	node: AllPosts_posts_edges_node_author_node;
}

export interface AllPosts_posts_edges_node_featuredImage_node {
	__typename: 'MediaItem';
	/**
	 * Url of the mediaItem
	 */
	sourceUrl: string;
}

export interface AllPosts_posts_edges_node_featuredImage {
	__typename: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
	/**
	 * The nodes of the connection, without the edges
	 */
	node: AllPosts_posts_edges_node_featuredImage_node;
}

export interface AllPosts_posts_edges_node_social {
	__typename: 'Post_Social';
	/**
	 * Facebook Url (optional)
	 */
	facebook: string;
	/**
	 * Instagram Url (optional)
	 */
	instagram: string;
	/**
	 * Twitter Url (optional)
	 */
	twitter: string;
	/**
	 * Company Website Url (optional)
	 */
	website: string;
}

export interface AllPosts_posts_edges_node {
	__typename: 'Post';
	/**
	 * Connection between the NodeWithAuthor type and the User type
	 */
	author: AllPosts_posts_edges_node_author;
	/**
	 * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
	 */
	title: string;
	/**
	 * The content of the post.
	 */
	content: string;
	/**
	 * Post publishing date.
	 */
	date: string;
	/**
	 * The excerpt of the post.
	 */
	excerpt: string;
	/**
	 * Connection between the NodeWithFeaturedImage type and the MediaItem type
	 */
	featuredImage: AllPosts_posts_edges_node_featuredImage;
	/**
	 * The globally unique identifier of the post object.
	 */
	id: string;
	/**
	 * The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time.
	 */
	modified: string;
	/**
	 * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
	 */
	slug: string;
	social: AllPosts_posts_edges_node_social;
}

export interface AllPosts_posts_edges {
	__typename: 'RootQueryToPostConnectionEdge';
	/**
	 * The item at the end of the edge
	 */
	node: AllPosts_posts_edges_node;
}

export interface AllPosts_posts {
	__typename: 'RootQueryToPostConnection';
	/**
	 * Edges for the RootQueryToPostConnection connection
	 */
	edges: AllPosts_posts_edges[];
}

export interface AllPosts {
	/**
	 * Connection between the RootQuery type and the post type
	 */
	posts: AllPosts_posts;
}

export interface AllPostsVariables {
	field: PostObjectsConnectionOrderbyEnum;
	order: OrderEnum;
}
