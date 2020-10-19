import { useRouter, NextRouter } from 'next/router';
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
import { GetStaticPaths, GetStaticProps } from 'next';
import { MediaContextProvider } from 'lib/window-width';

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
	const data = await getAllPostsForCategory(params.name);

	console.log('data: ', data);
	return {
		props: {
			preview,
			posts: data
		},
		revalidate: 10
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const allCategories = await getCategories();

	return {
		paths:
			allCategories.map((category: any) => `/category/${category.node.name}`) ||
			[],
		fallback: true
	};
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
