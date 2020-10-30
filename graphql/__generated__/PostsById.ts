/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PostsById
// ====================================================

export interface PostsById_posts_nodes {
  __typename: "Post";
  /**
   * The globally unique identifier of the post object.
   */
  id: string;
  /**
   * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
   */
  title: string | null;
  /**
   * The ID of the node in the database.
   */
  databaseId: number;
}

export interface PostsById_posts {
  __typename: "RootQueryToPostConnection";
  /**
   * The nodes of the connection, without the edges
   */
  nodes: (PostsById_posts_nodes | null)[] | null;
}

export interface PostsById {
  /**
   * Connection between the RootQuery type and the post type
   */
  posts: PostsById_posts | null;
}
