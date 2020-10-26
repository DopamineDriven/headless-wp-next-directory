/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: WPSearchQuery
// ====================================================

export interface WPSearchQuery_Posts_nodes_categories_nodes {
	__typename: 'Category';
	/**
	 * The human friendly name of the object.
	 */
	name: string | null;
	/**
	 * The globally unique ID for the object
	 */
	id: string;
	/**
	 * The unique resource identifier path
	 */
	uri: string;
}

export interface WPSearchQuery_Posts_nodes_categories {
	__typename: 'PostToCategoryConnection';
	/**
	 * The nodes of the connection, without the edges
	 */
	nodes: (WPSearchQuery_Posts_nodes_categories_nodes | null)[] | null;
}

export interface WPSearchQuery_Posts_nodes {
	__typename: 'Post';
	/**
	 * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
	 */
	title: string | null;
	/**
	 * URI path for the resource
	 */
	uri: string;
	/**
	 * The globally unique identifier of the post object.
	 */
	id: string;
	/**
	 * Post publishing date.
	 */
	date: string | null;
	/**
	 * Connection between the post type and the category type
	 */
	categories: WPSearchQuery_Posts_nodes_categories | null;
}

export interface WPSearchQuery_Posts {
	__typename: 'RootQueryToPostConnection';
	/**
	 * The nodes of the connection, without the edges
	 */
	nodes: (WPSearchQuery_Posts_nodes | null)[] | null;
}

export interface WPSearchQuery {
	/**
	 * Connection between the RootQuery type and the post type
	 */
	Posts: WPSearchQuery_Posts | null;
}

export interface WPSearchQueryVariables {
	term: string;
}
