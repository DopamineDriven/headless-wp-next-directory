import { Fragment } from 'react';
import { NextRouter, useRouter } from 'next/router';
import { GetStaticProps, GetStaticPaths, GetStaticPathsResult } from 'next';
import ErrorPage from 'next/error';
import Head from 'next/head';
import {
	ApolloClient,
	ApolloQueryResult,
	NormalizedCacheObject
} from '@apollo/client';
import PostBody from '@components/SubPost/sub-post-body';
import Header from '@components/LeadSub/lead-sub';
import PostHeader from '@components/SubPost/sub-post-header';
import Layout from 'components/Layout/layout';
import PostTitle from '@components/SubPost/sub-post-title';
import MoreCards from '@components/Card/card-coalescence';
import { initializeApollo } from '@lib/apollo';
import { MediaContextProvider } from '@lib/window-width';
import { CMS_NAME } from '@lib/constants';
import { PostSlugs, PostSlugs_posts } from '@graphql/__generated__/PostSlugs';
import POST_SLUGS from '@graphql/api-post-slugs';
import GET_POST_BY_SLUG from '@graphql/api-post-by-slug';
import {
	GetPostBySlug,
	GetPostBySlugVariables,
	GetPostBySlug_post
} from '@graphql/__generated__/GetPostBySlug';
import { ALL_POSTS } from '@graphql/api-all-posts';
import {
	AllPosts,
	AllPostsVariables,
	AllPosts_posts,
	AllPosts_posts_edges
} from '@graphql/__generated__/AllPosts';
import { allPostsFields } from '@graphql/__generated__/allPostsFields';
import { useQuery } from '@apollo/client';
import { AllCategoriesVariables } from '@graphql/__generated__/AllCategories';
import {
	PostObjectsConnectionOrderbyEnum,
	OrderEnum
} from '../../types/graphql-global-types';
import { Scalars } from '../../graphql';

interface SlugProps {
	// post: allPostsFields;
	// posts: AllPosts_posts_edges[];
	preview: boolean;
}

const { TITLE, AUTHOR, DATE, MODIFIED } = PostObjectsConnectionOrderbyEnum;
const { ASC, DESC } = OrderEnum;

const Post = ({ preview }: SlugProps): JSX.Element => {
	const router: NextRouter = useRouter();

	const { slug } = router.query;
	console.log('slug info: ', slug);
	console.log(typeof slug);
	const multipleQueries = (): [
		ApolloQueryResult<AllPosts | undefined>,
		ApolloQueryResult<GetPostBySlug | undefined>
	] => {
		if (typeof slug === 'string') {
			const query1 = useQuery<AllPosts, AllPostsVariables>(ALL_POSTS, {
				variables: { field: TITLE, order: ASC },
				notifyOnNetworkStatusChange: true
			});
			const query2 = useQuery<GetPostBySlug, GetPostBySlugVariables>(
				GET_POST_BY_SLUG,
				{ variables: { slug: slug }, notifyOnNetworkStatusChange: true }
			);

			return [query1, query2];
		} else {
			throw new Error('Slug was not a string');
		}
	};

	//destructring the data out of the queries and them navigating in it below to
	const queryArray = multipleQueries();
	const { data: postsData, error: postsDataError } = queryArray[0];
	const { data: selectedPostData, error: selectedPostError } = queryArray[1];

	console.log('posts in [slug]: ', selectedPostData);

	// if (router.isFallback === true) {
	// 	return <ErrorPage statusCode={404} />;
	// }

	const HeaderType = (post: any): JSX.Element => {
		return <Header title={post.title} />;
	};

	return (
		<Fragment>
			<MediaContextProvider>
				<HeaderType />
				<Layout preview={preview}>
					{router.isFallback ? (
						<PostTitle title={null}>Loading…</PostTitle>
					) : (
						<>
							<article>
								<Head>
									<title>
										{selectedPostData != null && selectedPostData.post != null
											? selectedPostData.post.title
											: ''}{' '}
										| Next.js Directory with {CMS_NAME}
									</title>
									<meta
										property='og:image'
										content={
											selectedPostData &&
											selectedPostData.post &&
											selectedPostData.post.featuredImage &&
											selectedPostData.post.featuredImage.node &&
											selectedPostData.post.featuredImage.node.sourceUrl
												? selectedPostData.post.featuredImage.node.sourceUrl
												: 'nope'
										}
									/>
								</Head>
								<PostHeader />
								<PostBody
									content={
										selectedPostData != null && selectedPostData.post != null
											? selectedPostData.post.content
											: null
									}
								/>
							</article>
							<div className='items-center content-center justify-center block max-w-full mx-auto my-portfolioH2F'>
								{postsData != null &&
								postsData.posts != null &&
								postsData.posts.edges != null ? (
									postsData.posts.edges.length > 0 ? (
										<MoreCards posts={postsData.posts.edges} />
									) : (
										'No posts'
									)
								) : (
									'An error occurred returning posts.  Sorry for the inconvenience, please try again later.'
								)}
							</div>
						</>
					)}
				</Layout>
			</MediaContextProvider>
		</Fragment>
	);
};

interface Params {
	params: {
		slug: Scalars['ID'];
	};
	preview: boolean;
	previewData: any;
}

export const getStaticPaths: GetStaticPaths = async (): Promise<
	GetStaticPathsResult
> => {
	const slugsWP: ApolloClient<NormalizedCacheObject> = initializeApollo();

	const slugQueryResult: ApolloQueryResult<PostSlugs> = await slugsWP.query({
		query: POST_SLUGS
	});

	const slugCache: PostSlugs_posts | null = slugQueryResult.data.posts;
	if (slugCache != null && slugCache.edges != null) {
		const dataArray: string[] = slugCache.edges.map(post => {
			return post != null && post.node != null && post.node.slug != null
				? `/posts/${post.node.slug}`
				: `/posts/${post?.node?.slug}`;
		});

		return {
			paths: dataArray || [],
			fallback: false
		};
	} else {
		throw new Error('slugs not returned in getStaticPaths, [slug].tsx');
	}
};

export const getStaticProps = async ({
	params,
	preview = false
}: Params & GetStaticProps) => {
	const apolloClient = initializeApollo();

	await apolloClient.query({
		query: ALL_POSTS,
		variables: { field: 'TITLE', order: 'ASC' }
	});

	await apolloClient.query({
		query: GET_POST_BY_SLUG,
		variables: { slug: params.slug }
	});
	return {
		props: {
			preview,
			initializeApolloState: apolloClient.cache.extract()
		},
		revalidate: 1
	};
};

export default Post;
