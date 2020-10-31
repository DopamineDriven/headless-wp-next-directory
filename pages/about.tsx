import Head from 'next/head';
import Link from 'next/link';
import Header from 'components/lead';
import Layout from 'components/Layout/layout';
import Container from 'components/Container/container';
import { CLIENT_NAME } from 'lib/constants';
import { getAllPostsForAbout, getTagAndPosts, getCategories } from 'lib/api';
import Intro from 'components/intro';
import HeroPost from 'components/Hero/hero-post';
import { MediaContextProvider } from 'lib/window-width';
import { Fragment } from 'react';

interface AboutProps {
	preview?: boolean;
	allPosts: any;
	tagsAndPosts: any;
	categoriesAndPosts: any;
}

const About = ({
	allPosts: { edges },
	preview,
	tagsAndPosts,
	categoriesAndPosts
}: AboutProps) => {
	const heroPost = edges[0]?.node;
	console.log(tagsAndPosts);
	console.log(categoriesAndPosts);
	return (
		<Fragment>
			<MediaContextProvider>
				<Header />
				<Layout preview={preview}>
					<Head>
						<title>{`${CLIENT_NAME} about page`}</title>
					</Head>
					<Container>
						<h2 className='justify-center mt-8 font-serif text-6xl font-bold leading-tight tracking-tight text-center align-middle md:tracking-tighter'>
							<Link href='/'>
								<a
									className='text-black select-text hover:text-cimaRed cursor-text'
									aria-label='About Chicago Independent Media Alliance'
								>
									About
								</a>
							</Link>
						</h2>
						<Intro />
						{heroPost && (
							<HeroPost
								title={heroPost.title}
								featuredImage={heroPost.featuredImage.node}
								date={heroPost.date}
								modified={heroPost.modified}
								author={heroPost.author.node}
								slug={heroPost.slug}
								excerpt={heroPost.excerpt}
							/>
						)}
					</Container>
				</Layout>
			</MediaContextProvider>
		</Fragment>
	);
};

export default About;

type StaticProps = {
	preview: boolean;
};

export async function getStaticProps({ preview = false }: StaticProps) {
	const allPosts = await getAllPostsForAbout(preview);
	const tagsAndPosts = await getTagAndPosts();
	const categoriesAndPosts = await getCategories();

	return {
		props: { allPosts, preview, tagsAndPosts, categoriesAndPosts },
		revalidate: 1
	};
}
