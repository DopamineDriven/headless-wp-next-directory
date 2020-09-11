import { fetchAPI } from 'lib/api';

export async function getAllPostsWithSlug() {
	const data = await fetchAPI(`
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
