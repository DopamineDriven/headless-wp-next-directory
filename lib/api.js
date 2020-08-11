const API_URL = process.env.WORDPRESS_API_URL;

async function fetchAPI(query, { variables } = {}) {
	const headers = { 'Content-Type': 'application/json' };

	if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
		headers[
			'Authorization'
		] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
	}

	const res = await fetch(API_URL, {
		method: 'POST',
		headers,
		body: JSON.stringify({
			query,
			variables
		})
	});

	const json = await res.json();
	if (json.errors) {
		console.error(json.errors);
		throw new Error('Failed to fetch API');
	}
	return json.data;
}

export async function getPreviewPost(id, idType = 'DATABASE_ID') {
	const data = await fetchAPI(
		`
    query PreviewPost($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        databaseId
        slug
        status
      }
    }`,
		{
			variables: { id, idType }
		}
	);
	return data.post;
}

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
	return data?.posts;
}

export async function getAllPostsForHomeAlphabetical(preview) {
	const data = await fetchAPI(
		`
    query AllPosts {
      posts(first: 20, where: { orderby: { field: TITLE, order: ASC } }) {
        edges {
          node {
            title
            excerpt
            slug
            date
            social {
              facebook
              instagram
              twitter
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
				preview
			}
		}
	);

	return data?.posts;
}

export async function getPostAndMorePosts(slug, preview, previewData) {
	const postPreview = preview && previewData?.post;
	// The slug may be the id of an unpublished post
	const isId = Number.isInteger(Number(slug));
	const isSamePost = isId
		? Number(slug) === postPreview.id
		: slug === postPreview.slug;
	const isDraft = isSamePost && postPreview?.status === 'draft';
	const isRevision = isSamePost && postPreview?.status === 'publish';
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
      social {
        facebook
        instagram
        twitter
      }
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
					// Only some of the fields of a revision are considered (there are some inconsistencies)
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
      posts(first: 20, where: { orderby: { field: TITLE, order: ASC } }) {
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

	// Draft posts may not have an slug
	if (isDraft) data.post.slug = postPreview.id;
	// Apply a revision (changes in a published post)
	if (isRevision && data.post.revisions) {
		const revision = data.post.revisions.edges[0]?.node;

		if (revision) Object.assign(data.post, revision);
		delete data.post.revisions;
	}

	// Filter out the main post
	data.posts.edges = data.posts.edges.filter(({ node }) => node.slug !== slug);
	// If there are still 3 posts, remove the last one
	if (data.posts.edges.length > 10) data.posts.edges.pop();

	return data;
}

export async function getTagAndPosts() {
	const data = await fetchAPI(
		`query GET_TAGS {
    tags {
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
            }
          }
        }
      }
    }
  }`
	);

	return data.tags.edges;
}

export async function getCategoriesAndPosts() {
	const data = await fetchAPI(
		`query GET_CATEGORIES {
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
            }
          }
        }
      }
    }
  }`
	);

	console.log(data);
	console.log(data.categories);
	return data.categories?.edges;
}

// fetching all types
export async function getAllTypes() {
  const types = await fetchAPI(`
    query GET_TYPES {
      __schema {
        types {
          name
          description
        }
      }
    }
  `
	);
	console.log(types);
	return types.__schema?.types;
}

// export async function getAllPostsForHomeReverseAlphabetical(preview) {
// 	const data = await fetchAPI(
// 		`
//     query AllPosts {
//       posts(first: 40, where: { orderby: { field: TITLE, order: DESC } }) {
//         edges {
//           node {
//             title
//             excerpt
//             slug
//             date
//             social {
//               facebook
//               instagram
//               twitter
//             }
//             featuredImage {
//               node {
//                 sourceUrl
//               }
//             }
//             author {
//               node {
//                 name
//                 firstName
//                 lastName
//                 avatar {
//                   url
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   `,
// 		{
// 			variables: {
// 				onlyEnabled: !preview,
// 				preview
// 			}
// 		}
// 	);

// 	return data?.posts;
// }

// export async function getAllPostsForHomeDateDesc(preview) {
// 	const data = await fetchAPI(
// 		`
//     query AllPosts {
//       posts(first: 40, where: { orderby: { field: DATE, order: DESC } }) {
//         edges {
//           node {
//             title
//             excerpt
//             slug
//             date
//             social {
//               facebook
//               instagram
//               twitter
//             }
//             featuredImage {
//               node {
//                 sourceUrl
//               }
//             }
//             author {
//               node {
//                 name
//                 firstName
//                 lastName
//                 avatar {
//                   url
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   `,
// 		{
// 			variables: {
// 				onlyEnabled: !preview,
// 				preview
// 			}
// 		}
// 	);

// 	return data?.posts;
// }

// export async function getAllPostsForHomeDateAsc(preview) {
// 	const data = await fetchAPI(
// 		`
//     query AllPosts {
//       posts(first: 40, where: { orderby: { field: DATE, order: ASC } }) {
//         edges {
//           node {
//             title
//             excerpt
//             slug
//             date
//             social {
//               facebook
//               instagram
//               twitter
//             }
//             featuredImage {
//               node {
//                 sourceUrl
//               }
//             }
//             author {
//               node {
//                 name
//                 firstName
//                 lastName
//                 avatar {
//                   url
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   `,
// 		{
// 			variables: {
// 				onlyEnabled: !preview,
// 				preview
// 			}
// 		}
// 	);

// 	return data?.posts;
// }

/*
export async function getPostAndMorePosts(slug, preview, previewData) {
	const postPreview = preview && previewData?.post;
	// The slug may be the id of an unpublished post
	const isId = Number.isInteger(Number(slug));
	const isSamePost = isId
		? Number(slug) === postPreview.id
		: slug === postPreview.slug;
	const isDraft = isSamePost && postPreview?.status === 'draft';
	const isRevision = isSamePost && postPreview?.status === 'publish';
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
      social {
        facebook
        instagram
        twitter
      }
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
					// Only some of the fields of a revision are considered (there are some inconsistencies)
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
      posts(first: 5, where: { orderby: { field: DATE, order: DESC } }) {
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
*/

// export async function getPlugins() {
// 	const data = await fetchAPI(
// 		`
//       query GET_PLUGINS {
//         plugins {
//           edges {
//             node {
//               name
//               path
//               id
//               author
//             }
//           }
//         }
//       }
//     `
// 	);
// 	console.log(`plugin data: ${data}`);
// 	console.log(`plugin edges ${data.plugins}`);
// 	return data?.plugins?.edges;
// }

/*
The plugin call should return the following for posts with social-icons 
{
  "node": {
    "name": "Simple Social Icons",
    "id": "cGx1Z2luOnNpbXBsZS1zb2NpYWwtaWNvbnMvc2ltcGxlLXNvY2lhbC1pY29ucy5waHA=",
    "author": "StudioPress"
  }
}
- NOTE
- Plugins are independent of posts
*/

/*
const API_URL: any = process.env.WORDPRESS_API_URL;

async function fetchAPI(query: any, { variables }: any = {}): Promise<any> {
	const headers: any = { 'Content-Type': 'application/json' };

	if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
		headers[
			'Authorization'
		] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
	}

	const res = await fetch(API_URL, {
		method: 'POST',
		headers,
		body: JSON.stringify({
			query,
			variables
		})
	});

	const json = await res.json();
	if (json.errors) {
		console.error(json.errors);
		throw new Error('Failed to fetch API');
	}
	return json.data;
}

type GetPreviewPost = {
	id: string;
};

export async function getPreviewPost(
	id: GetPreviewPost,
	idType: string = 'DATABASE_ID'
) {
	const data = await fetchAPI(
		`
    query PreviewPost($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        databaseId
        slug
        status
      }
    }`,
		{
			variables: { id, idType }
		}
	);
	return data.post;
}

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
	return data?.posts;
}

type GetAllPostsForHome = {
	preview: boolean;
};

export async function getAllPostsForHome(preview: GetAllPostsForHome) {
	const data = await fetchAPI(
		`
    query AllPosts {
      posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
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
}

type GetPostsAndMorePosts = {
	slug: any;
	preview: any;
	previewData: any;
};

export async function getPostAndMorePosts({
	slug,
	preview,
	previewData
}: GetPostsAndMorePosts) {
	const postPreview: any = preview && previewData?.post;
	// The slug may be the id of an unpublished post
	const isId: any = Number.isInteger(Number(slug));
	const isSamePost: any = isId
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
					// Only some of the fields of a revision are considered as there are some inconsistencies
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

	// Draft posts may not have an slug
	if (isDraft) data.post.slug = postPreview.id;
	// Apply a revision (changes in a published post)
	if (isRevision && data.post.revisions) {
		const revision = data.post.revisions.edges[0]?.node;

		if (revision) Object.assign(data.post, revision);
		delete data.post.revisions;
	}

	// Filter out the main post
	data.posts.edges = data.posts.edges.filter(
		({ node }: any) => node.slug !== slug
	);
	// If there are still 3 posts, remove the last one
	if (data.posts.edges.length > 2) data.posts.edges.pop();

	return data;
}

*/
