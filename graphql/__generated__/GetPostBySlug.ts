/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPostBySlug
// ====================================================

export interface GetPostBySlug_post_featuredImage_node {
	__typename: 'MediaItem';
	/**
	 * Url of the mediaItem
	 */
	sourceUrl: string | null;
}

export interface GetPostBySlug_post_featuredImage {
	__typename: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
	/**
	 * The nodes of the connection, without the edges
	 */
	node: GetPostBySlug_post_featuredImage_node | null;
}

export interface GetPostBySlug_post_categories_nodes {
	__typename: 'Category';
	/**
	 * The human friendly name of the object.
	 */
	name: string | null;
}

export interface GetPostBySlug_post_categories {
	__typename: 'PostToCategoryConnection';
	/**
	 * The nodes of the connection, without the edges
	 */
	nodes: (GetPostBySlug_post_categories_nodes | null)[] | null;
}

export interface GetPostBySlug_post_social {
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

export interface GetPostBySlug_post_author_node_avatar {
	__typename: 'Avatar';
	/**
	 * URL for the gravatar image source.
	 */
	url: string | null;
}

export interface GetPostBySlug_post_author_node {
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
	avatar: GetPostBySlug_post_author_node_avatar | null;
}

export interface GetPostBySlug_post_author {
	__typename: 'NodeWithAuthorToUserConnectionEdge';
	/**
	 * The nodes of the connection, without the edges
	 */
	node: GetPostBySlug_post_author_node | null;
}

export interface GetPostBySlug_post {
	__typename: 'Post';
	/**
	 * Connection between the NodeWithFeaturedImage type and the MediaItem type
	 */
	featuredImage: GetPostBySlug_post_featuredImage | null;
	/**
	 * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
	 */
	slug: string | null;
	/**
	 * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
	 */
	title: string | null;
	/**
	 * Post publishing date.
	 */
	date: string | null;
	/**
	 * The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time.
	 */
	modified: string | null;
	/**
	 * The content of the post.
	 */
	content: string | null;
	/**
	 * Connection between the post type and the category type
	 */
	categories: GetPostBySlug_post_categories | null;
	social: GetPostBySlug_post_social | null;
	/**
	 * Connection between the NodeWithAuthor type and the User type
	 */
	author: GetPostBySlug_post_author | null;
}

export interface GetPostBySlug {
	/**
	 * An object of the post Type.
	 */
	post: GetPostBySlug_post | null;
}

export interface GetPostBySlugVariables {
	slug: string;
}
