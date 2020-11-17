import { useRouter, NextRouter } from 'next/router';
import {
	ApolloClient,
	ApolloQueryResult,
	NormalizedCacheObject,
	useQuery
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
import {
	AllPostsForCategory,
	AllPostsForCategoryVariables,
	AllPostsForCategory_categories_edges_node_posts_edges
} from '@graphql/__generated__/AllPostsForCategory';
import { Scalars } from '../../graphql';

type Required<T> = {
	[P in keyof T]-?: T[P];
};

interface SlugProps {
	posts: AllPostsForCategory_categories_edges_node_posts_edges[];
	preview: boolean;
}

const Category = ({ posts, preview }: SlugProps): JSX.Element => {
	const router: NextRouter = useRouter();

	let { name } = router.query;

	if (typeof name === 'string') {
		name = name;
	} else {
		name = '';
	}
	const { data, error } = useQuery<
		AllPostsForCategory,
		AllPostsForCategoryVariables
	>({
		query: ALL_POSTS_FOR_CATEGORY,
		variables: { first: 10, name: name }
	});

	console.log('graphql error: ', error);

	console.log('Router obj: ', router);
	if (router.isFallback) {
		return <ErrorPage statusCode={404} />;
	}

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
							{data != null &&
							data.categories != null &&
							data.categories.edges != null &&
							data.categories.edges[0] != null &&
							data.categories.edges[0].node != null &&
							data.categories.edges[0].node.posts != null &&
							data.categories.edges[0].node.posts.edges != null ? (
								data.categories.edges[0].node.posts.edges.length > 0 ? (
									<Cards posts={data.categories.edges[0].node.posts.edges} />
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
		name: Scalars['String'];
	};
	preview: boolean;
};

export const getStaticProps = async ({
	params,
	preview = false
}: Params & GetStaticProps) => {
	const apolloClient = initializeApollo();

	await apolloClient.query({
		query: ALL_POSTS_FOR_CATEGORY,
		variables: { first: 10, name: params.name }
	});

	return {
		props: {
			preview,
			initialApolloState: apolloClient.cache.extract()
		},
		revalidate: 10
	};
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
