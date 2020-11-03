/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: AuthorFields
// ====================================================

export interface AuthorFields_avatar {
	__typename: 'Avatar';
	/**
	 * URL for the gravatar image source.
	 */
	url: string | null;
}

export interface AuthorFields {
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
	avatar: AuthorFields_avatar | null;
}
