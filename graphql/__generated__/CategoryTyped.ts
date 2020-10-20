/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CategoryIdType } from './../../types/graphql-global-types';

// ====================================================
// GraphQL query operation: CategoryTyped
// ====================================================

export interface CategoryTyped_category {
	__typename: 'Category';
	/**
	 * The human friendly name of the object.
	 */
	name: string | null;
}

export interface CategoryTyped_categories_edges_node {
	__typename: 'Category';
	/**
	 * The globally unique ID for the object
	 */
	id: string;
	/**
	 * The human friendly name of the object.
	 */
	name: string | null;
	/**
	 * Identifies the primary key from the database.
	 */
	databaseId: number;
	/**
	 * An alphanumeric identifier for the object unique to its type.
	 */
	slug: string | null;
}

export interface CategoryTyped_categories_edges {
	__typename: 'RootQueryToCategoryConnectionEdge';
	/**
	 * The item at the end of the edge
	 */
	node: CategoryTyped_categories_edges_node | null;
}

export interface CategoryTyped_categories {
	__typename: 'RootQueryToCategoryConnection';
	/**
	 * Edges for the RootQueryToCategoryConnection connection
	 */
	edges: (CategoryTyped_categories_edges | null)[] | null;
}

export interface CategoryTyped {
	/**
	 * A 0bject
	 */
	category: CategoryTyped_category | null;
	/**
	 * Connection between the RootQuery type and the category type
	 */
	categories: CategoryTyped_categories | null;
}

export interface CategoryTypedVariables {
	idType: CategoryIdType;
	id: string;
}
