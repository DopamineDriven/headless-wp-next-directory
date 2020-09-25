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
	posts: PostsProps[];
	preview: boolean;
}

export default function Post({ posts, preview }: SlugProps): JSX.Element {
	const router = useRouter();
	return (
		<>
			<Header />
			<Layout preview={preview}>
				<Container>
					{router.isFallback ? (
						<PostTitle>Loading…</PostTitle>
					) : (
						<Fragment>
							<div className='grid items-center content-center justify-center max-w-5xl mx-auto mt-5 mb-5 text-center'>
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
			posts: data,
			revalidate: 1
		}
	};
}



export async function getStaticPaths() {
	// const router = useRouter();
	// const hrefRedirect = (e: Event) => {
	// 	e.preventDefault();
	// 	router.push(`/category/${category.node.name}`)
		
	// }
	const allCategories = await getCategories();
	const absoluteURL = process.env.NODE_ENV === 'development' ? `${process.env.DEV_URL}` : `${process.env.WORDPRESS_URL}`;
	return {
		paths:
			allCategories.map((category: any) =>  `${absoluteURL}/category/${category.node.name}`) ||
			[],
		fallback: true
	};
}
