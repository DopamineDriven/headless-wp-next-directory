/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Excerpt
// ====================================================

export interface Excerpt_posts_edges_node {
  __typename: "Post";
  /**
   * The excerpt of the post.
   */
  excerpt: string | null;
}

export interface Excerpt_posts_edges {
  __typename: "RootQueryToPostConnectionEdge";
  /**
   * The item at the end of the edge
   */
  node: Excerpt_posts_edges_node | null;
}

export interface Excerpt_posts {
  __typename: "RootQueryToPostConnection";
  /**
   * Edges for the RootQueryToPostConnection connection
   */
  edges: (Excerpt_posts_edges | null)[] | null;
}

export interface Excerpt {
  /**
   * Connection between the RootQuery type and the post type
   */
  posts: Excerpt_posts | null;
}
