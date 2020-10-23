import { useRouter, NextRouter } from 'next/router';
import {
	ApolloClient,
	ApolloQueryResult,
	NormalizedCacheObject,
	NormalizedCache,
	ApolloCache,
	StoreObject,
	StoreValue
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
import MoreCards from 'components/cards-coalesced';
import { Fragment } from 'react';
import { PostsProps, AllPostsProps } from 'types/posts';
import { GetStaticPaths, GetStaticPathsResult, GetStaticProps } from 'next';
import { MediaContextProvider } from 'lib/window-width';
import {
	ALL_POSTS_FOR_CATEGORY,
	allPostsForCategoryQueryVariables
} from 'graphql/api-posts-for-category';
import {
	ALL_CATEGORIES,
	allCategoryQueryVariables,
	categoryKeyNameForCache
} from 'graphql/api-all-categories';
import {
	AllCategoriesVariables,
	AllCategories_categories,
	AllCategories,
	AllCategories_categories_edges_node
} from 'graphql/__generated__/AllCategories';

interface SlugProps {
	posts: PostsProps[];
	preview: boolean;
}

const Category = ({ posts, preview }: SlugProps): JSX.Element => {
	const router: NextRouter = useRouter();

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
							{posts.length > 0 ? (
								<Cards posts={posts} />
							) : (
								'No posts for this category'
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

	await allPostsForCategory.query({
		query: ALL_POSTS_FOR_CATEGORY,
		variables: allPostsForCategoryQueryVariables
	});

	return {
		props: {
			preview,
			posts: await allPostsForCategory.cache.extract()
		},
		revalidate: 10
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
			// return {
			// 	paths: ,
			// 	fallback: true
			// };
		}
	} else {
		throw new Error('object null');
		// return {
		// 	paths:
		// 	fallback: true
		// };
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
