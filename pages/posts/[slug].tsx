import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import Container from '../../components/container';
import Header from '../../components/fixed-header';
import Layout from '../../components/layout';
import SectionSeparator from '../../components/section-separator';
import PostBody from '../../components/post-body';
import PostHeader from '../../components/post-header';
import PostTitle from '../../components/post-title';
import MorePosts from '../../components/more-posts';
import Tags from '../../components/tags';
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api';
import { CLIENT_NAME } from '../../lib/constants';
import PostType from '../../types/post';
// import Posts from '../../types/posts';

type Props = {
	post: PostType;
	posts: any;
	props: string | number;
	preview?: boolean;
};

const Post = ({ post, posts, preview, props }: Props) => {
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
						<PostTitle>Loading...</PostTitle>
					) : (
						<>
							<article>
								<Head>
									<title>
										{post.title} | {CLIENT_NAME}
									</title>
									<meta
										property={'og:image'}
										content={post.featuredImage?.node?.sourceUrl}
									/>
								</Head>
								<PostHeader
									title={post.title}
									coverImage={post.featuredImage.node.sourceUrl}
									date={post.date}
									author={post.author}
									categories={post.categories}
								/>
								<PostBody content={post.content} />
								<footer>
									{post.tags.edges.length > 0 && <Tags tags={post.tags} />}
								</footer>
							</article>

							<SectionSeparator />
							{morePosts.length > 0 && <MorePosts posts={morePosts} />}
						</>
					)}
				</Container>
			</Layout>
		</>
	);
};

export default Post;

export async function getStaticProps({
	params,
	preview = false,
	previewData
}: any) {
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
