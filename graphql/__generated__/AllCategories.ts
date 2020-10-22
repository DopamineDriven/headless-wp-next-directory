/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllCategories
// ====================================================

export interface AllCategories_categories_pageInfo {
	__typename: 'WPPageInfo';
	/**
	 * When paginating forwards, are there more items?
	 */
	hasNextPage: boolean;
	/**
	 * When paginating forwards, the cursor to continue.
	 */
	endCursor: string | null;
}

export interface AllCategories_categories_edges_node {
	__typename: 'Category';
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
	 * Information about pagination in a connection.
	 */
	pageInfo: AllCategories_categories_pageInfo | null;
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

export interface AllCategoriesVariables {
	first?: number | null;
	skip?: number | null;
}
