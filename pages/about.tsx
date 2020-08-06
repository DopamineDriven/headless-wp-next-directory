import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/header';
import Layout from '../components/layout';
import Container from '../components/container';
import { CLIENT_NAME, SELECT_DROPDOWN_OPTIONS } from '../lib/constants';
import Cards from '../components/more-cards';
import {
	getAllPostsForHome,
	getTagAndPosts,
	getCategoriesAndPosts
} from '../lib/api';
import Intro from '../components/intro';
import SearchBox from '../components/search-box';

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
	let morePosts = edges.slice(0);
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
					{/* <h2 className='text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mt-8'>
						<Link href='/'>
							<a className='hover:underline text-cimaRed px-8'>About</a>
						</Link>
					</h2> */}
					<Intro />
					<SearchBox
						allPosts={morePosts}
						dropdownOptions={SELECT_DROPDOWN_OPTIONS}
					/>
					{morePosts.length > 0 && <Cards posts={morePosts} />}
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
	const allPosts = await getAllPostsForHome(preview);
	const tagsAndPosts = await getTagAndPosts();
	const categoriesAndPosts = await getCategoriesAndPosts();

	return {
		props: { allPosts, preview, tagsAndPosts, categoriesAndPosts }
	};
}
