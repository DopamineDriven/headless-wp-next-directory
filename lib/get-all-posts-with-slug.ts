import { fetchAPI } from 'lib/api';
import gql from 'graphql-tag';

export async function getAllPostsWithSlug() {
	const data = await fetchAPI(gql`
		{
			posts(first: 10000) {
				edges {
					node {
						slug
					}
				}
			}
		}
	`);
	console.log(typeof data, 'this is the type of data expected');
	return data?.posts;
}
