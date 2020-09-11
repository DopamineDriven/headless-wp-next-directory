import { fetchAPI } from 'lib/api';

interface GetAllPostsForHomeAlphabeticalProps {
	preview: boolean;
	field: string;
	order: string;
}

export default async function getAllPostsForHomeAlphabetical({
	preview,
	field,
	order
}: GetAllPostsForHomeAlphabeticalProps) {
	const data = await fetchAPI(
		`
    query AllPosts {
      posts(first: 35, where: { orderby: { field: ${field}, order: ${order} } }) {
        edges {
          node {
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
  `,
		{
			variables: {
				onlyEnabled: !preview,
				preview,
				field,
				order
			}
		}
	);
	console.log(typeof data, 'type of data.posts'); // data.posts: object, data: object, posts: undefined
	return data?.posts;
}
