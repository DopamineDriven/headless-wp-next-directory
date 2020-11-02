import { useRouter, NextRouter } from 'next/router';
import {
	ApolloClient,
	ApolloQueryResult,
	NormalizedCacheObject
} from '@apollo/client';
import { initializeApollo } from '../../lib/apollo';
import Header from 'components/header';
import Layout from 'components/Layout/layout';
import PostTitle from 'components/post-title';
import Cards from '@components/Card/card-coalescence';
import Head from 'next/head';
import { CMS_NAME, HOME_OG_IMAGE_URL } from '../../lib/constants';
// import Tags from 'components/tags';
import { Fragment } from 'react';
import { GetStaticPaths, GetStaticPathsResult, GetStaticProps } from 'next';
// import { MediaContextProvider } from 'lib/window-width';
import {
	ALL_POSTS_FOR_CATEGORY,
	allPostsForCategoryQueryVariables,
	PsuedoObj_AllPostsForCategory_categories_edges_node_posts
} from '../../graphql/api-posts-for-category';
import {
	ALL_CATEGORIES,
	allCategoryQueryVariables,
	categoryKeyNameForCache
} from '../../graphql/api-all-categories';
import {
	AllCategories_categories,
	AllCategories,
	AllCategories_categories_edges_node
} from '../../graphql/__generated__/AllCategories';
import {
	AllPostsForCategory,
	AllPostsForCategory_categories,
	AllPostsForCategory_categories_edges_node_posts,
	AllPostsForCategory_categories_edges_node_posts_nodes,
	AllPostsForCategory_categories_edges
} from '../../graphql/__generated__/AllPostsForCategory';
import { AllPosts_posts_edges } from '../../graphql/__generated__/AllPosts';

type Required<T> = {
	[P in keyof T]-?: T[P];
};

interface SlugProps {
	// AllPostsForCategory_categories_edges_node_posts
	posts: (AllPostsForCategory_categories_edges_node_posts_nodes | null)[] | null;
	preview: boolean;
}

const Category = ({ posts, preview }: SlugProps): JSX.Element => {
	const router: NextRouter = useRouter();

	// type Required<T> = {
	// 	[P in keyof T]-?: T[P];
	// };


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
							{posts != null ? (
								posts.length > 0 ? (
									<Cards posts={posts} />
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
	console.log('category name: ', params.name);

	const allPostsForCategory: ApolloClient<NormalizedCacheObject> = initializeApollo();

	const queryResult: ApolloQueryResult<AllPostsForCategory> = await allPostsForCategory.query(
		{
			query: ALL_POSTS_FOR_CATEGORY,
			variables: { first: 10, name: params.name }
		}
	)

	//checks to see if query result at top level is null.  If it is sets a psuedoObj equal to data and returns that.
	const postsForCategoryCache: AllPostsForCategory_categories | null = queryResult
		.data.categories !=null ? queryResult.data.categories : null;

	console.log( 'data and categories are not null', postsForCategoryCache)

		return {
			props: {
				preview,
				posts: postsForCategoryCache != null && postsForCategoryCache.edges != null ? postsForCategoryCache.edges[0]?.node?.posts?.nodes : null
			},
			// revalidate: 10
		}; 
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
