/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import {
	PostObjectsConnectionOrderbyEnum,
	OrderEnum
} from './../../types/graphql-global-types';

// ====================================================
// GraphQL query operation: CardsCoalesced
// ====================================================

export interface CardsCoalesced_posts_edges_node_author_node_avatar {
	__typename: 'Avatar';
	/**
	 * URL for the gravatar image source.
	 */
	url: string | null;
}

export interface CardsCoalesced_posts_edges_node_author_node {
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
	avatar: CardsCoalesced_posts_edges_node_author_node_avatar | null;
}

export interface CardsCoalesced_posts_edges_node_author {
	__typename: 'NodeWithAuthorToUserConnectionEdge';
	/**
	 * The nodes of the connection, without the edges
	 */
	node: CardsCoalesced_posts_edges_node_author_node | null;
}

export interface CardsCoalesced_posts_edges_node_featuredImage_node {
	__typename: 'MediaItem';
	/**
	 * Url of the mediaItem
	 */
	sourceUrl: string | null;
}

export interface CardsCoalesced_posts_edges_node_featuredImage {
	__typename: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
	/**
	 * The nodes of the connection, without the edges
	 */
	node: CardsCoalesced_posts_edges_node_featuredImage_node | null;
}

export interface CardsCoalesced_posts_edges_node_social {
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

export interface CardsCoalesced_posts_edges_node {
	__typename: 'Post';
	/**
	 * Connection between the NodeWithAuthor type and the User type
	 */
	author: CardsCoalesced_posts_edges_node_author | null;
	/**
	 * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
	 */
	title: string | null;
	/**
	 * The content of the post.
	 */
	content: string | null;
	/**
	 * Post publishing date.
	 */
	date: string | null;
	/**
	 * The excerpt of the post.
	 */
	excerpt: string | null;
	/**
	 * Connection between the NodeWithFeaturedImage type and the MediaItem type
	 */
	featuredImage: CardsCoalesced_posts_edges_node_featuredImage | null;
	/**
	 * The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time.
	 */
	modified: string | null;
	/**
	 * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
	 */
	slug: string | null;
	social: CardsCoalesced_posts_edges_node_social | null;
}

export interface CardsCoalesced_posts_edges {
	__typename: 'RootQueryToPostConnectionEdge';
	/**
	 * The item at the end of the edge
	 */
	node: CardsCoalesced_posts_edges_node | null;
}

export interface CardsCoalesced_posts {
	__typename: 'RootQueryToPostConnection';
	/**
	 * Edges for the RootQueryToPostConnection connection
	 */
	edges: (CardsCoalesced_posts_edges | null)[] | null;
}

export interface CardsCoalesced {
	/**
	 * Connection between the RootQuery type and the post type
	 */
	posts: CardsCoalesced_posts | null;
}

export interface CardsCoalescedVariables {
	field: PostObjectsConnectionOrderbyEnum;
	order: OrderEnum;
}
