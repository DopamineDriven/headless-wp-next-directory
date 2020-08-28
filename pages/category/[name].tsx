import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Container from '../../components/container';
import PostBody from '../../components/post-body';
// import MoreStories from '../../components/more-stories';
import Header from '../../components/header';
import PostHeader from '../../components/post-header';
// import SectionSeparator from '../../components/section-separator';
import Layout from '../../components/layout';
import { getAllPostsForCategory, getCategories } from '../../lib/api';
import PostTitle from '../../components/post-title';
import Cards from '../../components/more-cards';
import Head from 'next/head';
import { CMS_NAME } from '../../lib/constants';
// import Tags from '../../components/tags';
import MoreCards from '../../components/more-cards';
import { Fragment } from 'react';
import { PostsProps } from '../../types/posts';

interface SlugProps {
	props: string | number;
	posts: PostsProps[];
	preview: boolean;
}

export default function Post({ posts, preview, props }: SlugProps) {
	const router = useRouter();
	// const morePosts = posts?.edges;

	// if (!router.isFallback) {
	// 	return <ErrorPage statusCode={404} />;
	// }

	return (
		<>
			<Header props={props} />
			<Layout preview={preview}>
				<Container>
					{router.isFallback ? (
						<PostTitle>Loading…</PostTitle>
					) : (
						<Fragment>
							<div className='max-w-5xl mt-5 mb-5 grid mx-auto content-center justify-center items-center text-center'>
								{posts.length > 0 ? (
									<Cards posts={posts} />
								) : (
									'No posts for this category'
								)}
							</div>
						</Fragment>
					)}
				</Container>
			</Layout>
		</>
	);
}

type Params = {
	params: {
		name: string | number;
	};
	preview: boolean;
};

export async function getStaticProps({ params, preview = false }: Params) {
	console.log(params.name);
	const data = await getAllPostsForCategory(params.name);

	console.log('data: ', data);
	return {
		props: {
			preview,
			posts: data
		}
	};
}

export async function getStaticPaths() {
	const allCategories = await getCategories();

	return {
		paths:
			allCategories.map((category: any) => `/category/${category.node.name}`) ||
			[],
		fallback: true
	};
}