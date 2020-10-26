import { useRouter, NextRouter } from 'next/router';
import {
	ApolloClient,
	ApolloQueryResult,
	NormalizedCacheObject
} from '@apollo/client';
import { initializeApollo } from '../../lib/apollo';
import Container from 'components/container';
import PostBody from 'components/post-body';
// import MoreStories from 'components/more-stories';
import Header from 'components/header';
import PostHeader from 'components/post-header';
// import SectionSeparator from 'components/section-separator';
import Layout from 'components/layout';
import { getAllPostsForCategory, getCategories } from 'lib/api';
import PostTitle from 'components/post-title';
import Cards from 'components/cards-coalesced';
import Head from 'next/head';
import { CMS_NAME, HOME_OG_IMAGE_URL } from 'lib/constants';
// import Tags from 'components/tags';
import { Fragment } from 'react';
import { PostsProps, AllPostsProps } from 'types/posts';
import { GetStaticPaths, GetStaticPathsResult, GetStaticProps } from 'next';
import { MediaContextProvider } from 'lib/window-width';
import {
	ALL_POSTS_FOR_CATEGORY,
	allPostsForCategoryQueryVariables,
	PsuedoObj_AllPostsForCategory_categories_edges_node_posts
} from 'graphql/api-posts-for-category';
import {
	ALL_CATEGORIES,
	allCategoryQueryVariables,
	categoryKeyNameForCache
} from 'graphql/api-all-categories';
import {
	AllCategories_categories,
	AllCategories,
	AllCategories_categories_edges_node
} from 'graphql/__generated__/AllCategories';
import {
	AllPostsForCategory,
	AllPostsForCategory_categories,
	AllPostsForCategory_categories_edges_node_posts,
	AllPostsForCategory_categories_edges
} from 'graphql/__generated__/AllPostsForCategory';

type Required<T> = {
	[P in keyof T]-?: T[P];
};
interface SlugProps {
	posts: AllPostsForCategory_categories_edges;
	// posts: Required<AllPostsForCategory_categories_edges>;
	preview: boolean;
}

const Category = ({ posts, preview }: SlugProps): JSX.Element => {
	const router: NextRouter = useRouter();

	// type Required<T> = {
	// 	[P in keyof T]-?: T[P];
	// };

	// let postData:
	// 	| Required<AllPostsForCategory_categories_edges_node_posts>
	// 	| any = posts.node.posts

	let postData: AllPostsForCategory_categories_edges_node_posts = PsuedoObj_AllPostsForCategory_categories_edges_node_posts;

	if (posts != null) {
		if (posts.node != null) {
			if (posts.node.posts != null) {
				// if (posts.node.posts.nodes !=null) {
				postData = posts.node.posts;
				// }
			}
		}
	}

	// 	if (posts !== null) {
	// 		if (posts.edges !== null) {
	// 			if (posts.edges[0] !== null) {
	// 				if (posts.edges[0].node !== null) {
	// 					if (posts.edges[0].node.posts !== null) {
	// 						postData = posts.edges[0]?.node.posts;
	// 					}
	// 				}
	// 			}
	// 		}
	// 	}

	console.log('posts received: ', posts);

	return (
		<Fragment>
			<Header />
			<Layout preview={preview}>
				{router.isFallback ? (
					<PostTitle>Loading…</PostTitle>
				) : (
					<>
						<article>
							<Head>
								<title>Category search {CMS_NAME}</title>
								<meta property='og:image' content={HOME_OG_IMAGE_URL} />
							</Head>
						</article>
						<div className='items-center content-center justify-center block max-w-full mx-auto my-portfolioH2F'>
							{postData.nodes !== null ? (
								postData.nodes.length > 0 ? (
									<Cards posts={postData} />
								) : (
									'No posts for this category'
								)
							) : (
								'An error occurred returning posts.  Sorry for the inconvenience, please try again later.'
							)}
						</div>
					</>
				)}
			</Layout>
		</Fragment>
	);
};

type Params = {
	params: {
		name: string | number;
	};
	preview: boolean;
};

export const getStaticProps = async ({
	params,
	preview = false
}: Params & GetStaticProps) => {
	console.log(params.name);

	const allPostsForCategory: ApolloClient<NormalizedCacheObject> = initializeApollo();

	const queryResult: ApolloQueryResult<AllPostsForCategory> = await allPostsForCategory.query(
		{
			query: ALL_POSTS_FOR_CATEGORY,
			variables: { first: 10, name: params.name }
		}
	);

	const postsForCategoryCache: AllPostsForCategory_categories | null = queryResult
		.data.categories ?? {
		__typename: 'RootQueryToCategoryConnection',
		edges: null
	};

	if (postsForCategoryCache.edges != null) {
		return {
			props: {
				preview,
				posts: postsForCategoryCache.edges
			},
			revalidate: 10
		};
	} else {
		throw new Error('posts for category data returned from query is null ');
	}
};

export const getStaticPaths: GetStaticPaths = async (): Promise<
	GetStaticPathsResult
> => {
	// const allCategories = await getCategories();

	const categoriesWordPress: ApolloClient<NormalizedCacheObject> = initializeApollo();

	const queryResult: ApolloQueryResult<AllCategories> = await categoriesWordPress.query(
		{
			query: ALL_CATEGORIES,
			variables: allCategoryQueryVariables
		}
	);

	const categoryCache: AllCategories_categories | null =
		queryResult.data.categories;

	if (categoryCache != null && categoryCache != undefined) {
		if (categoryCache.edges != null) {
			console.log('category cache', categoryCache);

			const dataArray: string[] = categoryCache.edges.map(
				(category: any) => `/category/${category.node.name}`
			);

			return {
				paths: dataArray || [],
				fallback: true
			};
		} else {
			throw new Error('edges in categories are null');
		}
	} else {
		throw new Error('object null');
	}
};

export default Category;
/*
const routerPushEvent = async (e: Event) => {
	const allCategories = await getCategories();
	const router = useRouter();

	useEffect(() => {
		e.preventDefault();
		const mappingCats = allCategories.map((category: any) =>
			category !== null ? `/?${category.node.name}` : `/`
		);
		router.push(mappingCats);
	}, [router.query.getCategories]);
};
*/
