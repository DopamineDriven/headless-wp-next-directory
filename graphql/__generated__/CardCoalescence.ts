/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import {
	PostObjectsConnectionOrderbyEnum,
	OrderEnum
} from './../../types/graphql-global-types';

// ====================================================
// GraphQL query operation: CardCoalescence
// ====================================================

export interface CardCoalescence_posts_edges_node_social {
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

export interface CardCoalescence_posts_edges_node_featuredImage_node {
	__typename: 'MediaItem';
	/**
	 * Url of the mediaItem
	 */
	sourceUrl: string | null;
}

export interface CardCoalescence_posts_edges_node_featuredImage {
	__typename: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
	/**
	 * The nodes of the connection, without the edges
	 */
	node: CardCoalescence_posts_edges_node_featuredImage_node | null;
}

export interface CardCoalescence_posts_edges_node_author_node_avatar {
	__typename: 'Avatar';
	/**
	 * URL for the gravatar image source.
	 */
	url: string | null;
}

export interface CardCoalescence_posts_edges_node_author_node {
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
	avatar: CardCoalescence_posts_edges_node_author_node_avatar | null;
}

export interface CardCoalescence_posts_edges_node_author {
	__typename: 'NodeWithAuthorToUserConnectionEdge';
	/**
	 * The nodes of the connection, without the edges
	 */
	node: CardCoalescence_posts_edges_node_author_node | null;
}

export interface CardCoalescence_posts_edges_node {
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
	 * The excerpt of the post.
	 */
	excerpt: string | null;
	/**
	 * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
	 */
	slug: string | null;
	/**
	 * Post publishing date.
	 */
	date: string | null;
	/**
	 * The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time.
	 */
	modified: string | null;
	social: CardCoalescence_posts_edges_node_social | null;
	/**
	 * Connection between the NodeWithFeaturedImage type and the MediaItem type
	 */
	featuredImage: CardCoalescence_posts_edges_node_featuredImage | null;
	/**
	 * Connection between the NodeWithAuthor type and the User type
	 */
	author: CardCoalescence_posts_edges_node_author | null;
}

export interface CardCoalescence_posts_edges {
	__typename: 'RootQueryToPostConnectionEdge';
	/**
	 * The item at the end of the edge
	 */
	node: CardCoalescence_posts_edges_node | null;
}

export interface CardCoalescence_posts {
	__typename: 'RootQueryToPostConnection';
	/**
	 * Edges for the RootQueryToPostConnection connection
	 */
	edges: (CardCoalescence_posts_edges | null)[] | null;
}

export interface CardCoalescence {
	/**
	 * Connection between the RootQuery type and the post type
	 */
	posts: CardCoalescence_posts | null;
}

export interface CardCoalescenceVariables {
	first: number;
	field: PostObjectsConnectionOrderbyEnum;
	order: OrderEnum;
}
