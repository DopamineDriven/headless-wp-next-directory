import { useRouter, NextRouter } from 'next/router';
import {
	ApolloClient,
	ApolloQueryResult,
	NormalizedCacheObject
} from '@apollo/client';
import { initializeApollo } from '@lib/apollo';
import Header from '@components/Header';
import Layout from '@components/Layout';
import PostTitle from '@components/SubPost/sub-post-title';
import Cards from '@components/Card/card-coalescence';
import ErrorPage from 'next/error';
import Head from 'next/head';
import { CMS_NAME, HOME_OG_IMAGE_URL } from '@lib/constants';
import { Fragment } from 'react';
import { GetStaticPaths, GetStaticPathsResult, GetStaticProps } from 'next';
import { ALL_POSTS_FOR_CATEGORY } from '@graphql/api-posts-for-category';
import {
	ALL_CATEGORIES,
	allCategoryQueryVariables
} from '@graphql/api-all-categories';
import {
	AllCategories_categories,
	AllCategories
} from '@graphql/__generated__/AllCategories';
import { AllPosts_posts_edges_node } from '@graphql/__generated__/AllPosts'
import {
	AllPostsForCategory,
	AllPostsForCategory_categories,
	AllPostsForCategory_categories_edges_node_posts_edges_node
} from '@graphql/__generated__/AllPostsForCategory';

type Required<T> = {
	[P in keyof T]-?: T[P];
};

interface SlugProps {
	posts: AllPosts_posts_edges_node[] | AllPostsForCategory_categories_edges_node_posts_edges_node[];
	preview: boolean;
}

// type Nullable<AllPostsForCategory_categories_edges_node_posts_nodes> = {
// 	[P in keyof AllPostsForCategory_categories_edges_node_posts_nodes]:
// 		| AllPostsForCategory_categories_edges_node_posts_nodes[P]
// 		| null;
// };

const Category = ({ posts, preview }: SlugProps): JSX.Element => {
	const router: NextRouter = useRouter();
	// type Required<T> = {
	// 	[P in keyof T]-?: T[P];
	// };

	console.log('Router obj: ', router);
	// if (router.isFallback === false ) {
	// 	return <ErrorPage statusCode={404} />;
	// }

	console.log('posts received: ', posts);

	return (
		<Fragment>
			<Header />
			<Layout preview={preview}>
				{router.isFallback ? (
					<PostTitle title={null}>Loading…</PostTitle>
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
	const allPostsForCategory: ApolloClient<NormalizedCacheObject> = initializeApollo();

	const queryResult: ApolloQueryResult<AllPostsForCategory> = await allPostsForCategory.query(
		{
			query: ALL_POSTS_FOR_CATEGORY,
			variables: { first: 10, name: params.name }
		}
	);

	//checks to see if query result at top level is null.  If it is sets a psuedoObj equal to data and returns that.
	const postsForCategoryCache: AllPostsForCategory_categories | null =
		queryResult.data.categories != null ? queryResult.data.categories : null;

	console.log('data and categories are not null', postsForCategoryCache);

	if (
		postsForCategoryCache &&
		postsForCategoryCache.edges &&
		postsForCategoryCache.edges[0] &&
		postsForCategoryCache.edges[0].node &&
		postsForCategoryCache.edges[0].node.posts &&
		postsForCategoryCache.edges[0].node.posts.edges
	) {
		return {
			props: {
				preview,
				posts: postsForCategoryCache.edges[0].node.posts.edges
			}
			// revalidate: 10
		};
	}
};

export const getStaticPaths: GetStaticPaths = async (): Promise<
	GetStaticPathsResult
> => {
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
			const dataArray: string[] = categoryCache.edges.map((category: any) => {
				return `/category/${category.node.name}`;
			});

			return {
				paths: dataArray || [],
				fallback: false
			};
		} else {
			throw new Error('edges in categories are null');
		}
	} else {
		throw new Error('object null');
	}
};

export default Category;
