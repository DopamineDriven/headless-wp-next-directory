const API_URL: any = process.env.WORDPRESS_API_URL; // should be of type RequestInfo or string or undefined...

const fetchAPI = async (query: any, { variables }: any = {}) => {
	const headers: any = { 'Content-Type': 'application/json' };

	if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
		headers[
			'Authorization'
		] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
	}

	const res: Response = await fetch(API_URL, {
		method: 'POST',
		headers,
		body: JSON.stringify({
			query,
			variables
		})
	});

	const json: any = await res.json();
	if (json.errors) {
		console.log(json.errors);
		throw new Error('Failed to fetch API');
	}
	return json.data;
};

export const getPreviewPost = async (
	id: string | number,
	idType: string = 'DATABASE_ID'
) => {
	const data = await fetchAPI(
		`
        query PreviewPost($id: ID!, $idType: PostIdType!) {
            post(id: $id, idType: $idType) {
                databaseId
                slug
                status
            }
        }
        `,
		{
			variables: { id, idType }
		}
	);
	return data.post;
};

export const getAllPostsWithSlug = async () => {
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
	return data?.posts;
};
