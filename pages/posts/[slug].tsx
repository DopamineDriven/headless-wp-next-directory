import { NextRouter, useRouter } from 'next/router';
import { GetStaticProps, GetStaticPaths } from 'next';
import ErrorPage from 'next/error';
import PostBody from '@components/SubPost/sub-post-body';
import Header from '@components/LeadSub/lead-sub';
import PostHeader from '@components/SubPost/sub-post-header';
import Layout from 'components/Layout/layout';
import { getAllPostsWithSlug, getPostAndMorePosts } from 'lib/api';
import PostTitle from '@components/SubPost/sub-post-title';
import Head from 'next/head';
import { CMS_NAME } from 'lib/constants';
import MoreCards from '@components/Card/card-coalescence';
import { Fragment } from 'react';
import { MediaContextProvider } from 'lib/window-width';
import {
	AllPostsForCategory_categories_edges_node_posts_nodes,
	AllPostsForCategory_categories
} from '../../graphql/__generated__/AllPostsForCategory';
import { CategoriesByEdges } from '../../graphql';

interface SlugProps {
	post: any;
	posts: AllPostsForCategory_categories_edges_node_posts_nodes[];
	preview: boolean;
}

export default function Post({
	post,
	posts,
	preview
}: SlugProps & { categories: any }): JSX.Element {
	const router: NextRouter = useRouter();

	if (!router.isFallback && !post?.slug) {
		return <ErrorPage statusCode={404} />;
	}

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
									category={post.category}
									__typename={post.__typename}
									title={post.title ?? post.title}
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
}

interface Params {
	params: {
		slug: string | null;
	};
	preview: boolean;
	previewData: any;
}

export const getStaticProps = async ({
	params,
	preview = false
}: Params & GetStaticProps) => {
	const data = await getPostAndMorePosts(params.slug, preview);
	return {
		props: {
			preview,
			post: data.post,
			posts: data.posts
		},
		revalidate: 10
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const allPosts = await getAllPostsWithSlug();

	return {
		paths: allPosts.edges.map(({ node }: any) => `/posts/${node.slug}`) || [],
		fallback: true
	};
};
