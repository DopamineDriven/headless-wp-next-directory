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
	AllPostsVariables,
	AllPosts_posts,
	AllPosts_posts_edges_node
} from '../graphql/__generated__/AllPosts';
import {
	PostObjectsConnectionOrderbyEnum,
	OrderEnum
} from '../types/graphql-global-types';

interface AboutProps {
	preview?: boolean;
}

const About = ({ preview }: AboutProps) => {
	const { TITLE, AUTHOR, DATE, MODIFIED } = PostObjectsConnectionOrderbyEnum;
	const { ASC, DESC } = OrderEnum;

	const { data } = useQuery<AllPosts, AllPostsVariables>({
		query: ALL_POSTS,
		variables: { field: TITLE, order: ASC }
	});

	const heroPost =
		data && data.posts && data.posts.edges ? data.posts.edges[0]?.node : null;

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
						{/* {heroPost && (
							<HeroPost
								title={heroPost.title}
								featuredImage={heroPost.featuredImage.node}
								date={heroPost.date}
								modified={heroPost.modified}
								author={heroPost.author.node}
								slug={heroPost.slug}
								excerpt={heroPost.excerpt}
							/> */}
						{/* )} */}
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
	const apolloClient = initializeApollo();

	await apolloClient.query({
		query: ALL_POSTS,
		variables: { field: 'TITLE', order: 'ASC' }
	});

	return {
		props: {
			allPosts: apolloClient.cache.extract()
		},
		revalidate: 1
	};
}
