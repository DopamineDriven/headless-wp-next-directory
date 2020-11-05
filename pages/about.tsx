import { Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
	ApolloClient,
	ApolloQueryResult,
	NormalizedCacheObject,
	useQuery
} from '@apollo/client';
import { initializeApollo } from '@lib/apollo';
import { removeNode } from '@lib/utilFunctions';
import { CLIENT_NAME } from 'lib/constants';
import { ALL_POSTS } from '../graphql/api-all-posts';
import Lead from 'components/Lead/lead';
import Layout from 'components/Layout/layout';
import Container from 'components/Container/container';
import Intro from '@components/Intro/intro';
import HeroPost from 'components/Hero/hero-post';
import { MediaContextProvider } from 'lib/window-width';
import {
	AllPosts,
	AllPosts_posts,
	AllPosts_posts_edges_node
} from '../graphql/__generated__/AllPosts';

interface AboutProps {
	preview?: boolean;
	allPosts: any;
	tagsAndPosts: any;
	categoriesAndPosts: any;
}

const About = ({
	allPosts: { edges },
	preview,
}: AboutProps) => {
	const heroPost = edges[0]?.node;
	return (
		<Fragment>
			<MediaContextProvider>
				<Lead />
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

	const allPostsWordPress: ApolloClient<NormalizedCacheObject> = initializeApollo(
		null,
		'about: allposts'
	);

	const allPostsQuery: ApolloQueryResult<AllPosts> = await allPostsWordPress.query(
		{
			query: ALL_POSTS,
			variables: { field: 'TITLE', order: 'ASC' }
		}
	);

	const allPostsCache: AllPosts_posts | null =
		allPostsQuery.data.posts != null ? allPostsQuery.data.posts : null;

	//this function is necessary because structure of nodes for posts data is slightly different when you get posts by category or grab all posts
	const allPostsCacheNoNode: (AllPosts_posts_edges_node | null)[] | null =
		allPostsCache?.edges != null ? removeNode(allPostsCache.edges) : null;
	

	return {
		props: { 
			allPosts: allPostsCacheNoNode
		 },
		revalidate: 1
	};
}
