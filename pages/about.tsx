import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/header';
import Layout from '../components/layout';
import Container from '../components/container';
import { CLIENT_NAME } from '../lib/constants';
import {
	getAllPostsForHomeAlphabetical,
	getTagAndPosts,
	getCategoriesAndPosts
} from '../lib/api';
import Intro from '../components/intro';
import HeroPost from '../components/hero-post';

interface AboutProps {
	props: string | number;
	preview?: boolean;
	allPosts: any;
	tagsAndPosts: any;
	categoriesAndPosts: any;
}

const About = ({
	allPosts: { edges },
	preview,
	props,
	tagsAndPosts,
	categoriesAndPosts
}: AboutProps) => {
	const heroPost = edges[0]?.node;
	console.log(tagsAndPosts);
	console.log(categoriesAndPosts);
	return (
		<>
			<Header props={props} />
			<Layout preview={preview}>
				<Head>
					<title>{`${CLIENT_NAME} about page`}</title>
				</Head>
				<Container>
					<h2 className='text-6xl font-bold tracking-tight md:tracking-tighter text-center align-middle justify-center font-serif leading-tight mt-8'>
						<Link href='/'>
							<a
								className='text-black hover:text-cimaRed cursor-text select-text'
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
							coverImage={heroPost.featuredImage.node}
							date={heroPost.date}
							modified={heroPost.modified}
							author={heroPost.author.node}
							slug={heroPost.slug}
							excerpt={heroPost.excerpt}
						/>
					)}
				</Container>
			</Layout>
		</>
	);
};

export default About;

type StaticProps = {
	preview: boolean;
};

export async function getStaticProps({ preview = false }: StaticProps) {
	const allPosts = await getAllPostsForHomeAlphabetical(preview);
	const tagsAndPosts = await getTagAndPosts();
	const categoriesAndPosts = await getCategoriesAndPosts();

	return {
		props: { allPosts, preview, tagsAndPosts, categoriesAndPosts }
	};
}
