// import { fallbackHttpConfig } from '@apollo/client';
// import WPGraphQL, {PostTypeList } from 'wp-graphql';
// import { postTypeList } from 'wp-graphql/lib/models/post-types/types/postTypeType';
// const defined = process.env.WORDPRESS_API_URL;

// let fallbackC
// const gql: WPGraphQL = new WPGraphQL(`${process.env.WORDPRESS_API_URL}`, { });
import { gql, useQuery, NetworkStatus } from '@apollo/client';
import { generateTypeScriptTypes } from 'graphql-schema-typescript';
import { DocumentNode } from 'graphql';
import { fetchAPI } from 'lib/api';

const ALL_POSTS_QUERY: DocumentNode = gql`
	query AllPosts($field: PostObjectsConnectionOrderbyEnum!, $order: OrderEnum!) {
		posts(first: 35, where: { orderby: { field: $field, order: $order } }) {
			edges {
				node {
					id
					title
					excerpt
					slug
					date
					modified
					social {
						facebook
						instagram
						twitter
						website
					}
					featuredImage {
						node {
							sourceUrl
						}
					}
					author {
						node {
							name
							firstName
							lastName
							avatar {
								url
							}
						}
					}
				}
			}
		}
	}
`;

export const allPostsQueryVars = {
	field: 'MODIFIED',
	order: 'ASC'
};
