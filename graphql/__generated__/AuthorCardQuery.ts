/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AuthorCardQuery
// ====================================================

export interface AuthorCardQuery_users_nodes_avatar {
	__typename: 'Avatar';
	/**
	 * URL for the gravatar image source.
	 */
	url: string | null;
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

export interface AuthorCardQuery_users_nodes {
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
	avatar: AuthorCardQuery_users_nodes_avatar | null;
}

export interface AuthorCardQuery_users {
	__typename: 'RootQueryToUserConnection';
	/**
	 * The nodes of the connection, without the edges
	 */
	nodes: (AuthorCardQuery_users_nodes | null)[] | null;
}

export interface AuthorCardQuery {
	/**
	 * Connection between the RootQuery type and the User type
	 */
	users: AuthorCardQuery_users | null;
}
