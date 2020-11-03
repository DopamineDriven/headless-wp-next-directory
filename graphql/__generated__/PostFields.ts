/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: PostFields
// ====================================================

export interface PostFields_featuredImage_node {
	__typename: 'MediaItem';
	/**
	 * Url of the mediaItem
	 */
	sourceUrl: string | null;
}

export interface PostFields_featuredImage {
	__typename: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
	/**
	 * The nodes of the connection, without the edges
	 */
	node: PostFields_featuredImage_node | null;
}

export interface PostFields_author_node_avatar {
	__typename: 'Avatar';
	/**
	 * URL for the gravatar image source.
	 */
	url: string | null;
}

export interface PostFields_author_node {
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
	avatar: PostFields_author_node_avatar | null;
}

export interface PostFields_author {
	__typename: 'NodeWithAuthorToUserConnectionEdge';
	/**
	 * The nodes of the connection, without the edges
	 */
	node: PostFields_author_node | null;
}

export interface PostFields_social {
	__typename: 'Post_Social';
	/**
	 * Facebook Url (optional)
	 */
	facebook: string | null;
	/**
	 * Twitter Url (optional)
	 */
	twitter: string | null;
	/**
	 * Instagram Url (optional)
	 */
	instagram: string | null;
	/**
	 * Company Website Url (optional)
	 */
	website: string | null;
}

export interface PostFields_categories_edges_node {
	__typename: 'Category';
	/**
	 * The human friendly name of the object.
	 */
	name: string | null;
}

export interface PostFields_categories_edges {
	__typename: 'PostToCategoryConnectionEdge';
	/**
	 * The item at the end of the edge
	 */
	node: PostFields_categories_edges_node | null;
}

export interface PostFields_categories {
	__typename: 'PostToCategoryConnection';
	/**
	 * Edges for the PostToCategoryConnection connection
	 */
	edges: (PostFields_categories_edges | null)[] | null;
}

export interface PostFields_tags_edges_node {
	__typename: 'Tag';
	/**
	 * The human friendly name of the object.
	 */
	name: string | null;
}

export interface PostFields_tags_edges {
	__typename: 'PostToTagConnectionEdge';
	/**
	 * The item at the end of the edge
	 */
	node: PostFields_tags_edges_node | null;
}

export interface PostFields_tags {
	__typename: 'PostToTagConnection';
	/**
	 * Edges for the PostToTagConnection connection
	 */
	edges: (PostFields_tags_edges | null)[] | null;
}

export interface PostFields {
	__typename: 'Post';
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
	/**
	 * Connection between the NodeWithFeaturedImage type and the MediaItem type
	 */
	featuredImage: PostFields_featuredImage | null;
	/**
	 * Connection between the NodeWithAuthor type and the User type
	 */
	author: PostFields_author | null;
	social: PostFields_social | null;
	/**
	 * Connection between the post type and the category type
	 */
	categories: PostFields_categories | null;
	/**
	 * Connection between the post type and the tag type
	 */
	tags: PostFields_tags | null;
}
