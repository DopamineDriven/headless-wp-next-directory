import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Container from '../../components/container';
import PostBody from '../../components/post-body';
// import MoreStories from '../../components/more-stories';
import Header from '../../components/header';
import PostHeader from '../../components/post-header';
// import SectionSeparator from '../../components/section-separator';
import Layout from '../../components/layout';
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api';
import PostTitle from '../../components/post-title';
import Head from 'next/head';
import { CMS_NAME } from '../../lib/constants';
// import Tags from '../../components/tags';
import MoreCards from '../../components/more-cards';

interface SlugProps {
	props: string | number;
	post: any;
	posts: any;
	preview: boolean;
}

export default function Post({ post, posts, preview, props }: SlugProps) {
	const router = useRouter();
	const morePosts = posts?.edges;

	if (!router.isFallback && !post?.slug) {
		return <ErrorPage statusCode={404} />;
	}

	return (
		<>
			<Header props={props} />
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
							<div className='max-w-5xl grid mx-auto content-center justify-center items-center text-center'>
								{morePosts.length > 0 && <MoreCards posts={morePosts} />}
							</div>
						</>
					)}
				</Container>
			</Layout>
		</>
	);
}

type Params = {
	params: {
		slug: string | number;
	};
	preview: boolean;
	previewData: any;
};

export async function getStaticProps({
	params,
	preview = false,
	previewData
}: Params) {
	const data = await getPostAndMorePosts(params.slug, preview, previewData);
	return {
		props: {
			preview,
			post: data.post,
			posts: data.posts
		}
	};
}

export async function getStaticPaths() {
	const allPosts = await getAllPostsWithSlug();

	return {
		paths: allPosts.edges.map(({ node }: any) => `/posts/${node.slug}`) || [],
		fallback: true
	};
}
