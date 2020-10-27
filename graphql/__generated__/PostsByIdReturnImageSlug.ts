/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PostsByIdReturnImageSlug
// ====================================================

export interface PostsByIdReturnImageSlug_posts_nodes_featuredImage_node {
	__typename: 'MediaItem';
	/**
	 * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
	 */
	slug: string | null;
}

export interface PostsByIdReturnImageSlug_posts_nodes_featuredImage {
	__typename: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
	/**
	 * The nodes of the connection, without the edges
	 */
	node: PostsByIdReturnImageSlug_posts_nodes_featuredImage_node | null;
}

export interface PostsByIdReturnImageSlug_posts_nodes {
	__typename: 'Post';
	/**
	 * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
	 */
	title: string | null;
	/**
	 * Connection between the NodeWithFeaturedImage type and the MediaItem type
	 */
	featuredImage: PostsByIdReturnImageSlug_posts_nodes_featuredImage | null;
	/**
	 * The globally unique identifier of the post object.
	 */
	id: string;
}

export interface PostsByIdReturnImageSlug_posts {
	__typename: 'RootQueryToPostConnection';
	/**
	 * The nodes of the connection, without the edges
	 */
	nodes: (PostsByIdReturnImageSlug_posts_nodes | null)[] | null;
}

export interface PostsByIdReturnImageSlug {
	/**
	 * Connection between the RootQuery type and the post type
	 */
	posts: PostsByIdReturnImageSlug_posts | null;
}
