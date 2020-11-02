/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllTags
// ====================================================

export interface AllTags_tags_pageInfo {
  __typename: "WPPageInfo";
  /**
   * When paginating forwards, are there more items?
   */
  hasNextPage: boolean;
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: string | null;
}

export interface AllTags_tags_edges_node {
  __typename: "Tag";
  /**
   * The human friendly name of the object.
   */
  name: string | null;
}

export interface AllTags_tags_edges {
  __typename: "RootQueryToTagConnectionEdge";
  /**
   * The item at the end of the edge
   */
  node: AllTags_tags_edges_node | null;
}

export interface AllTags_tags {
  __typename: "RootQueryToTagConnection";
  /**
   * Information about pagination in a connection.
   */
  pageInfo: AllTags_tags_pageInfo | null;
  /**
   * Edges for the RootQueryToTagConnection connection
   */
  edges: (AllTags_tags_edges | null)[] | null;
}

export interface AllTags {
  /**
   * Connection between the RootQuery type and the tag type
   */
  tags: AllTags_tags | null;
}

export interface AllTagsVariables {
  first?: number | null;
}
