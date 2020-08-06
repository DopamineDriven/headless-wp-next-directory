import Head from 'next/head';
import Container from '../components/container';
import MoreStories from '../components/more-stories';
import HeroPost from '../components/hero-post';
import Intro from '../components/intro';
import Layout from '../components/layout';
import {
	getAllPostsForHome,
	getTagAndPosts,
	getCategoriesAndPosts
} from '../lib/api';
import {
	CMS_NAME,
	CLIENT_NAME,
	SELECT_DROPDOWN_OPTIONS
} from '../lib/constants';
import Header from '../components/header';
import SearchBox from '../components/search-box';
import Cards from "../components/more-cards";

interface IndexProps {
	allPosts: any;
	preview: boolean;
	props: string | number;
	tagsAndPosts: any;
	categoriesAndPosts: any;
}

export default function Index({
	allPosts: { edges },
	preview,
	tagsAndPosts,
	categoriesAndPosts,
	props
}: IndexProps) {
	const heroPost = edges[0]?.node;
	let morePosts = edges.slice(0);

	console.log(tagsAndPosts);
	console.log(categoriesAndPosts);

	return (
		<>
			<Header props={props} />
			<Layout preview={preview}>
				<Head>
					<title>
						{CLIENT_NAME} landing page via {CMS_NAME}
					</title>
				</Head>
				<Container>
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
}

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


/*
interface IndexProps {
	allPosts: any;
	preview: boolean;
	props: string | number;
	tagsAndPosts: any;
	categoriesAndPosts: any;
}

export default function Index({
	allPosts: { edges },
	preview,
	tagsAndPosts,
	categoriesAndPosts,
	props
}: IndexProps) {
	const heroPost = edges[0]?.node;
	let morePosts = edges.slice(0);

	console.log(tagsAndPosts);
	console.log(categoriesAndPosts);

	return (
		<>
			<Header props={props} />
			<Layout preview={preview}>
				<Head>
					<title>
						{CLIENT_NAME} landing page via {CMS_NAME}
					</title>
				</Head>
				<Container>
					<Intro />
					<SearchBox
						allPosts={morePosts}
						dropdownOptions={SELECT_DROPDOWN_OPTIONS}
					/>
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
					{morePosts.length > 0 && <Cards posts={morePosts} />}
				</Container>
			</Layout>
		</>
	);
}

*/