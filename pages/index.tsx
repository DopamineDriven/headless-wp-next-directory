import Head from 'next/head';
import Container from '../components/container';
import MoreStories from '../components/more-stories';
import HeroPost from '../components/hero-post';
import Intro from '../components/intro';
import Layout from '../components/layout';
import { getAllPostsForHome } from '../lib/api';
import { CMS_NAME } from '../lib/constants';
import Header from '../components/header';
import SearchBox from '../components/search-box';
import Link from 'next/link';

interface IndexProps {
	allPosts: any;
	preview: boolean;
	props: string | number;
}

export default function Index({
	allPosts: { edges },
	preview,
	props
}: IndexProps) {
	const heroPost = edges[0]?.node;
	const morePosts = edges.slice(1);

	return (
		<>
			<Header props={props} />
			<Layout preview={preview}>
				<Head>
					<title>Next.js and {CMS_NAME}</title>
				</Head>
				<Container>
					<Intro />
					<SearchBox />
					<h2 className='md:text-6xl font-bold text-center font-serif tracking-tight md:tracking-tighter leading-tight mb-8 mt-8'>
						<Link href='/'>
							<a className='hover:text-cimaRed cursor-text select-text text-black px-8'>
								Chicago Independent Media Alliance
							</a>
						</Link>
					</h2>
					{heroPost && (
						<HeroPost
							title={heroPost.title}
							coverImage={heroPost.featuredImage.node}
							date={heroPost.date}
							author={heroPost.author.node}
							slug={heroPost.slug}
							excerpt={heroPost.excerpt}
						/>
					)}
					{morePosts.length > 0 && <MoreStories posts={morePosts} />}
				</Container>
			</Layout>
		</>
	);
}

type StaticProps = {
	preview: boolean;
};

export async function getStaticProps({ preview = false }: StaticProps) {
	const allPosts = await getAllPostsForHome(preview);
	return {
		props: { allPosts, preview }
	};
}
