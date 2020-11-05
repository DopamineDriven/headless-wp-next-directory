/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: allPostsFields
// ====================================================

export interface allPostsFields_author_node_avatar {
  __typename: "Avatar";
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

export interface allPostsFields_author_node {
  __typename: "User";
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
  avatar: allPostsFields_author_node_avatar | null;
}

export interface allPostsFields_author {
  __typename: "NodeWithAuthorToUserConnectionEdge";
  /**
   * The nodes of the connection, without the edges
   */
  node: allPostsFields_author_node | null;
}

export interface allPostsFields_featuredImage_node {
  __typename: "MediaItem";
  /**
   * Url of the mediaItem
   */
  sourceUrl: string | null;
}

export interface allPostsFields_featuredImage {
  __typename: "NodeWithFeaturedImageToMediaItemConnectionEdge";
  /**
   * The nodes of the connection, without the edges
   */
  node: allPostsFields_featuredImage_node | null;
}

export interface allPostsFields_social {
  __typename: "Post_Social";
  /**
   * Facebook Url (optional)
   */
  facebook: string | null;
  /**
   * Instagram Url (optional)
   */
  instagram: string | null;
  /**
   * Twitter Url (optional)
   */
  twitter: string | null;
  /**
   * Company Website Url (optional)
   */
  website: string | null;
}

export interface allPostsFields_categories_edges_node {
  __typename: "Category";
  /**
   * The human friendly name of the object.
   */
  name: string | null;
}

export interface allPostsFields_categories_edges {
  __typename: "PostToCategoryConnectionEdge";
  /**
   * The item at the end of the edge
   */
  node: allPostsFields_categories_edges_node | null;
}

export interface allPostsFields_categories {
  __typename: "PostToCategoryConnection";
  /**
   * Edges for the PostToCategoryConnection connection
   */
  edges: (allPostsFields_categories_edges | null)[] | null;
}

export interface allPostsFields {
  __typename: "Post";
  /**
   * Connection between the NodeWithAuthor type and the User type
   */
  author: allPostsFields_author | null;
  /**
   * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
   */
  title: string | null;
  /**
   * The content of the post.
   */
  content: string | null;
  /**
   * Post publishing date.
   */
  date: string | null;
  /**
   * The excerpt of the post.
   */
  excerpt: string | null;
  /**
   * Connection between the NodeWithFeaturedImage type and the MediaItem type
   */
  featuredImage: allPostsFields_featuredImage | null;
  /**
   * The globally unique identifier of the post object.
   */
  id: string;
  /**
   * The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time.
   */
  modified: string | null;
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
   */
  slug: string | null;
  social: allPostsFields_social | null;
  /**
   * Connection between the post type and the category type
   */
  categories: allPostsFields_categories | null;
}
