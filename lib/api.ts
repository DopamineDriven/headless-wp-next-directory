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

export const getAllPostsForHome = async (preview: boolean) => {
	const data = await fetchAPI(
		`
            query AllPosts {
                posts(first: 20, where { orderby: { field: DATE, order: DESC } }) {
                    edges {
                        node {
                            title
                            excerpt
                            slug
                            date
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
				preview
			}
		}
	);
	return data?.posts;
};

export const getPostAndMorePosts = async ({
	slug,
	preview,
	previewData
}: {
	slug: string | number;
	preview: boolean;
	previewData: any;
}) => {
	const postPreview = preview && previewData?.post;
	// slug may be ID of unpublished post (number)
	const isId: boolean = Number.isInteger(Number(slug));
	const isSamePost: boolean = isId
		? Number(slug) === postPreview.id
		: slug === postPreview.slug;
	const isDraft: boolean = isSamePost && postPreview?.status === 'draft';
	const isRevision: boolean = isSamePost && postPreview?.status === 'publish';
	const data = await fetchAPI(
		`
        fragment AuthorFields on User {
            name
            firstName
            lastName
            avatar {
                url
            }
        }
        fragment PostFields on Post {
            title
            excerpt
            slug
            date
            featuredImage {
                node {
                    sourceUrl
                }
            }
            author {
                node {
                    ...AuthorFields
                }
            }
            categories {
                edges {
                    node {
                        name
                    }
                }
            }
            tags {
                edges {
                    node {
                        name
                    }
                }
            }
        }
        query PostBySlug($id: ID!, $idType: PostIdType!) {
            post(id: $id, idType: $idType) {
                ...PostFields
                content
                ${
									// only some revision fields are considered due to inconsistencies
									isRevision
										? `
                        revisions(first: 1, where: { orderby: { field: MODIFIED, order: DESC } }) {
                            edges {
                                node {
                                    title
                                    excerpt
                                    content
                                    author {
                                        node {
                                            ...AuthorFields
                                        }
                                    }
                                }
                            }
                        }
                    `
										: ''
								}
            }
            posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
                edges {
                    node {
                        ...PostFields
                    }
                }
            }
        }
        `,
		{
			variables: {
				id: isDraft ? postPreview.id : slug,
				idType: isDraft ? 'DATABASE_ID' : 'SLUG'
			}
		}
	);

	// draft posts may not have a slug
	if (isDraft) data.post.slug = postPreview.id;

	// Apply a revision
	if (isRevision && data.post.revisions) {
		const revision = data.post.revisions.edges[0]?.node;

		if (revision) Object.assign(data.post, revision);
		delete data.post.revisions;
	}

	// Filter out the main post
	data.posts.edges = data.posts.edges.filter(
		({ node }: any) => node.slug !== slug
	);

	// if still 3 posts then remove the last post
	if (data.posts.edges.length > 2) data.posts.edges.pop();

	return data;
};
