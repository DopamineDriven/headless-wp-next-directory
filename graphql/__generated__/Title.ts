/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Title
// ====================================================

export interface Title_posts_edges_node {
  __typename: "Post";
  /**
   * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
   */
  title: string | null;
}

export interface Title_posts_edges {
  __typename: "RootQueryToPostConnectionEdge";
  /**
   * The item at the end of the edge
   */
  node: Title_posts_edges_node | null;
}

export interface Title_posts {
  __typename: "RootQueryToPostConnection";
  /**
   * Edges for the RootQueryToPostConnection connection
   */
  edges: (Title_posts_edges | null)[] | null;
}

export interface Title {
  /**
   * Connection between the RootQuery type and the post type
   */
  posts: Title_posts | null;
}
