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
import { removeNode } from '@lib/utilFunctions';
import { AllPostsForCategory_categories_edges_node_posts_nodes } from '@graphql/__generated__/AllPostsForCategory';
import {
	CategoriesByEdges,
	GetAllPostsWithSlugQueryVariables,
	useGetAllPostsWithSlugQuery
} from '../../graphql';
import {
	PostSlugs,
	PostSlugsVariables,
	PostSlugs_posts,
	PostSlugs_posts_edges,
	PostSlugs_posts_edges_node
} from '@graphql/__generated__/PostSlugs';
import POST_SLUGS from '@graphql/api-post-slugs';
import GET_POST_BY_SLUG from '@graphql/api-post-by-slug';
import {
	GetAllPostsWithSlugQueryResult,
	PostSlugsQueryVariables
} from '../../graphql';
import { allSlugQueryVariables } from '../../graphql/api-post-by-slug';
import { Scalars } from '../../graphql';
import {
	GetPostBySlug,
	GetPostBySlug_post
} from '@graphql/__generated__/GetPostBySlug';
import { ALL_POSTS } from '@graphql/api-all-posts';
import {
	AllPosts,
	AllPosts_posts,
	AllPosts_posts_edges_node
} from '@graphql/__generated__/AllPosts';
import { useQuery } from '@apollo/client';
import POSTS_AND_MORE_POSTS from '../../graphql/api-get-posts-and-more-posts';

interface SlugProps {
	post: GetPostBySlug_post;
	posts: AllPostsForCategory_categories_edges_node_posts_nodes[];
	preview: boolean;
}

const Post = ({ post, posts, preview }: SlugProps): JSX.Element => {
	const router: NextRouter = useRouter();

	console.log('Router obj: ', router);

	console.log('Router fallback: ', !router.isFallback);
	console.log('Router fallback 1: ', router.isFallback);

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
										{post.title} | Next.js Directory with {CMS_NAME}
									</title>
									<meta
										property='og:image'
										content={
											post.featuredImage &&
											post.featuredImage.node &&
											post.featuredImage.node.sourceUrl
												? post.featuredImage.node.sourceUrl
												: 'ope'
										}
									/>
								</Head>
								<PostHeader
									excerpt={post.excerpt}
									categories={post.categories}
									// category={post.category}
									__typename={post.__typename}
									title={post.title}
									content={post.content}
									id={post.id}
									featuredImage={post.featuredImage}
									date={post.date}
									modified={post.modified}
									author={post.author}
									slug={post.slug}
									social={post.social}
								/>
								<PostBody content={post.content} />
								{/* <footer>
									{post.tags.edges.length > 0 && <Tags tags={post.tags} />}
								</footer> */}
							</article>
							<div className='items-center content-center justify-center block max-w-full mx-auto my-portfolioH2F'>
								{posts != null ? (
									posts.length > 0 ? (
										<MoreCards posts={posts} />
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

	// const allPostSlugs: ApolloClient<NormalizedCacheObject> = initializeApollo();
	// const { loading, error, data } = useQuery(POSTS_AND_MORE_POSTS, {variables: { slug }});
	// if (loading) return null;
	// if (error) return `Error! ${error}`;
	// const paths = data;

	const slugCache: PostSlugs_posts | null = slugQueryResult.data.posts;
	if (slugCache != null && slugCache.edges != null) {
		// console.log('slug cache: ', slugCache);
		const dataArray: string[] = slugCache.edges.map(post => {
			// console.log('Inside post map: ', post);
			return post != null && post.node != null && post.node.slug != null
				? `/posts/${post.node.slug}`
				: `/posts/${post?.node?.slug}`;
		});

		console.log('data array: ', dataArray);
		return {
			paths: dataArray || [],
			fallback: true
		};
	} else {
		throw new Error('slugs not returned in getStaticPaths, [slug].tsx');
	}
};

export const getStaticProps = async ({
	params,
	preview = false
}: Params & GetStaticProps) => {
	console.log('slug name: ', params.slug);
	const allPostsWP: ApolloClient<NormalizedCacheObject> = initializeApollo();
	const postBySlugWP: ApolloClient<NormalizedCacheObject> = initializeApollo();

	const allPostsQuery: ApolloQueryResult<AllPosts> = await allPostsWP.query({
		query: ALL_POSTS,
		variables: { field: 'TITLE', order: 'ASC' }
	});
	const queryGetPostBySlug: ApolloQueryResult<GetPostBySlug> = await postBySlugWP.query(
		{
			query: GET_POST_BY_SLUG,
			variables: { slug: params.slug }
		}
	);

	const getPostBySlugCache: GetPostBySlug_post | null =
		queryGetPostBySlug.data.post != null ? queryGetPostBySlug.data.post : null;

	const allPostsCache: AllPosts_posts | null =
		allPostsQuery.data.posts != null ? allPostsQuery.data.posts : null;

	console.log('Post by slug: ', getPostBySlugCache);

	const allPostsCacheNoNode: (AllPosts_posts_edges_node | null)[] | null =
		allPostsCache != null && allPostsCache.edges != null
			? removeNode(allPostsCache.edges)
			: null;

	if (getPostBySlugCache && allPostsCacheNoNode) {
		return {
			props: {
				preview,
				post: getPostBySlugCache,
				posts: allPostsCacheNoNode
			},
			revalidate: 1
		};
	} else {
		throw new Error('getPostBySlug and/or Allposts caches were null');
	}
};

export default Post;
