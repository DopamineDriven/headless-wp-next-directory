import { gql } from '@apollo/client';

const ALL_POSTS_FOR_CATEGORY = gql`
	query GET_CATEGORIES {
		categories {
			edges {
				node {
					id
					databaseId
					name
					posts {
						nodes {
							id
							title
							date
							excerpt
							slug
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
		}
	}
`;