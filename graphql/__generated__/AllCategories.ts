/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllCategories
// ====================================================

export interface AllCategories_categories_edges_node {
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
}

export interface AllCategories_categories_edges {
	__typename: 'RootQueryToCategoryConnectionEdge';
	/**
	 * The item at the end of the edge
	 */
	node: AllCategories_categories_edges_node | null;
}

export interface AllCategories_categories {
	__typename: 'RootQueryToCategoryConnection';
	/**
	 * Edges for the RootQueryToCategoryConnection connection
	 */
	edges: (AllCategories_categories_edges | null)[] | null;
}

export interface AllCategories {
	/**
	 * Connection between the RootQuery type and the category type
	 */
	categories: AllCategories_categories | null;
}
