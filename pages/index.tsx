import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/fixed-header';
import Layout from '../components/layout';
import Container from '../components/container';
import { CLIENT_NAME } from '../lib/constants';
import SearchBox from '../components/search-box';
import HeroPost from '../components/hero-post';
import MorePosts from '../components/more-posts';
import { getAllPostsForHome } from '../lib/api';
import PostType from '../types/post';
import { AuthorProps } from '../components/avatar';

type Props = {
	props: string | number;
	preview?: boolean;
	allPosts: PostType[];
	author: AuthorProps;
};

const Index = ({ allPosts, preview, props, author }: Props) => {
	let edges: any;
	const heroPost = allPosts[0];
	const morePosts = edges.slice(1);
	return (
		<>
			<Header props={props} />
			<Layout preview={preview}>
				<Head>
					<title>{`${CLIENT_NAME} landing page`}</title>
				</Head>
				<Container>
					<SearchBox />
					<h2 className='md:text-5xl font-bold text-center font-serif tracking-tight md:tracking-tighter leading-tight mb-8 mt-2'>
						<Link href='/'>
							<a className='hover:text-cimaRed cursor-text select-text text-black px-8'>
								Chicago Independent Media Alliance
							</a>
						</Link>
					</h2>
					{heroPost && (
						<HeroPost
							title={heroPost.title}
							coverImage={heroPost.featuredImage.node.sourceUrl}
							date={heroPost.date}
							author={author}
							slug={heroPost.slug}
							excerpt={heroPost.excerpt}
						/>
					)}
					{morePosts.length > 0 && <MorePosts posts={morePosts} />}
				</Container>
			</Layout>
		</>
	);
};

export default Index;

// export async function getStaticProps({ preview = false }) {
// 	const allPosts = await getAllPostsForHome(preview);
// 	return {
// 		props: { allPosts, preview }
// 	};
// }
