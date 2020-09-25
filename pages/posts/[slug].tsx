import { useRouter } from 'next/router';
import { GetStaticProps, GetStaticPaths } from 'next';
import ErrorPage from 'next/error';
import Container from 'components/container';
import PostBody from 'components/post-body';
import Header from 'components/lead-sub';
import PostHeader from 'components/post-header';
import Layout from 'components/layout';
import { getAllPostsWithSlug, getPostAndMorePosts } from 'lib/api';
import PostTitle from 'components/post-title';
import Head from 'next/head';
import { CMS_NAME } from 'lib/constants';
import MoreCards from 'components/more-cards';
import { Fragment } from 'react';

interface SlugProps {
	post: any;
	posts: any;
	preview: boolean;
}

export default function Post({ post, posts, preview }: SlugProps): JSX.Element {
	const router = useRouter();
	const morePosts = posts?.edges;

	if (!router.isFallback && !post?.slug) {
		return <ErrorPage statusCode={404} />;
	}

	return (
		<Fragment>
			<Header title={post.title} />
			<Layout preview={preview}>
				<Container>
					{router.isFallback ? (
						<PostTitle>Loading…</PostTitle>
					) : (
						<>
							<article>
								<Head>
									<title>
										{post.title} | Next.js Blog Example with {CMS_NAME}
									</title>
									<meta
										property='og:image'
										content={post.featuredImage?.node?.sourceUrl}
									/>
								</Head>
								<PostHeader
									title={post.title}
									coverImage={post.featuredImage.node}
									date={post.date}
									modified={post.modified}
									author={post.author.node}
									categories={post.categories}
									slug={post.slug}
									social={post.social}
								/>
								<PostBody content={post.content} />
								{/* <footer>
									{post.tags.edges.length > 0 && <Tags tags={post.tags} />}
								</footer> */}
							</article>
							<div className='grid items-center content-center justify-center max-w-5xl mx-auto text-center'>
								{morePosts.length > 0 && <MoreCards posts={morePosts} />}
							</div>
						</>
					)}
				</Container>
			</Layout>
		</Fragment>
	);
}

interface Params {
	params: {
		slug: string | number;
	};
	preview: boolean;
	previewData: any;
}

export const getStaticProps = async ({
	params,
	preview = false,
	previewData
}: Params & GetStaticProps) => {
	const data = await getPostAndMorePosts(params.slug, preview, previewData);
	return {
		props: {
			preview,
			post: data.post,
			posts: data.posts,
			revalidate: 1
		}
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const allPosts = await getAllPostsWithSlug();

	return {
		paths: allPosts.edges.map(({ node }: any) => `/posts/${node.slug}`) || [],
		fallback: true
	};
};
