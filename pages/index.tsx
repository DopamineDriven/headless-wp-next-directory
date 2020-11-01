import Head from 'next/head';
import {
	useState,
	useEffect,
	ChangeEvent,
	SyntheticEvent,
	Fragment
} from 'react';
// import Container from 'components/contai/ner';
// import Intro from 'components/intro';
// import Layout from 'components/layout';
import {
	GetServerSideProps,
	GetStaticProps,
	InferGetServerSidePropsType,
	NextPage
} from 'next';
import { ApolloClient, ApolloQueryResult, NormalizedCacheObject, useQuery } from '@apollo/client';
import { initializeApollo } from '../lib/apollo';
import {
	ALL_CATEGORIES,
	allCategoryQueryVariables,
	categoryKeyNameForCache
} from '../graphql/api-all-categories';
import {
	allTagQueryVariables,
	ALL_TAGS,
	tagKeyNameForCache
} from '../graphql/api-all-tags';
import { AllCategories_categories_edges } from '../graphql/__generated__/AllCategories';
import { getAllPostsForHomeAlphabetical } from '../lib/api-ts';
import { CMS_NAME, CLIENT_NAME } from '../lib/constants';
import Header from '../components/lead';
// import HeroPost from '../components/hero-post';
import SearchBox from '../components/search-box';
import Cards from '../components/cards-coalesced';
import { MediaContextProvider } from '../lib/window-width';
// import Link from 'next/link';
// import FieldEnum from 'types/enums/field-enum';
// import OrderEnum from 'types/enums/order-enum';
import Footer from '../components/footer';
// import CardFilter from 'components/card-filter';
import {
	PostObjectsConnectionOrderbyEnum,
	OrderEnum
} from '../types/graphql-global-types';
import { ALL_POSTS, Field, Order } from '../graphql/api-all-posts';
import {
	AllPosts,
	AllPosts_posts,
	AllPosts_posts_edges,
	AllPosts_posts_edges_node
} from '../graphql/__generated__/AllPosts';
import { ALL_POSTS_FOR_CATEGORY } from '../graphql/api-posts-for-category';

interface IndexProps {
	allPosts: AllPosts_posts_edges_node[];
	preview: boolean;
	tagsAndPosts: any;
	// categories: AllCategories_categories_edges_node[];
	initializeApollo: any;
}

const Index = ({
	allPosts,
	preview,
	tagsAndPosts,
	// categories,
	initializeApollo
}: IndexProps): JSX.Element => {
	console.log('All Posts: ', allPosts);
	// console.log('tag prop: ', tagsAndPosts);
	// console.log('initializeApollo Prop: ', initializeApollo);
	// console.log(
	// 	'attempt at matching key: ',
	// 	initializeApollo.ROOT_QUERY.categoryKeyNameForCache
	// );
	// console.log('key name: ', categoryKeyNameForCache);

	// let morePosts: AllPosts_posts_edges[] = allPosts.slice(0);
	let categoriesTabs: AllCategories_categories_edges[] =
		initializeApollo.ROOT_QUERY[categoryKeyNameForCache].edges;
	let tagProps = tagsAndPosts.ROOT_QUERY[tagKeyNameForCache].edges;

	const [filterQuery, setFilterQuery] = useState('title');
	const [allCompanies, setAllCompanies] = useState<AllPosts_posts_edges_node[]>(
		allPosts
	);
	const [filteredCompanies, setFilteredCompanies] = useState<
		AllPosts_posts_edges_node[]
	>(allPosts);
	const [search, setSearch] = useState<string | null>(null);
	const [searchCategory, setSearchedCategory] = useState<string | null>(null);
	const { TITLE } = PostObjectsConnectionOrderbyEnum;
	// const [filter, setFilter] = useState(TITLE);

	useEffect(() => {
		if (!search) {
			setFilteredCompanies(allCompanies);
		} else {
			if (filterQuery === 'title') {
				const filterCompanies = allPosts.filter(
					(company: AllPosts_posts_edges_node) => {
						//following wp-graphql types, went into basePost type and performed a patch to change type of title from RawOrRender to string.
						//this was done so that toLowerCase() and includes() functions coudl work
						const companyTitle = company.title;
						if (companyTitle.toLowerCase().includes(search)) {
							console.log('company title: ', companyTitle);
							return company;
						} else {
							return null;
						}
					}
				);
				console.log('title filteredCompanies: ', filteredCompanies)
				setFilteredCompanies(filterCompanies);
			} else if (filterQuery === 'description') {
				const filterCompanies = allPosts.filter(
					(company: AllPosts_posts_edges_node) => {
						//following wp-graphql types, went into basePost type and performed a patch to change type of title from RawOrRender to string.
						//this was done so that toLowerCase() and includes() functions coudl work
						const companyDescription = company.excerpt;
						if (companyDescription.toLowerCase().includes(search)) {
							console.log('company description: ', companyDescription);
							return company;
						} else {
							return null;
						}
					}
				);
				setFilteredCompanies(filterCompanies);
			} else {
				console.log('not title');
				setFilteredCompanies(allCompanies);
			}
		}
	}, [filterQuery, search]);

	// const categoryData = () => {
	// 	if (data) {
	// 		console.log('data returned from useQuery: ', data)
	// 		return (<p>Data returned</p>)
	// 	}

	// 	if (loading) {
	// 		return <p>Wait for data</p>;
	// 	}

	// 		  return null;
	// }

	return (
		<Fragment>
			<MediaContextProvider>
				<Header />

				<Head>
					<title>
						{CLIENT_NAME} landing page via {CMS_NAME}
					</title>
				</Head>

				<SearchBox
					selectSearch={filterQuery}
					selectChange={(evt: SyntheticEvent): void => {
						const element = evt.currentTarget as HTMLSelectElement;
						console.log('select event: ', element.value);
						setFilterQuery(element.value);
					}}
					filterFunc={(evt: SyntheticEvent): void => {
						const element = evt.currentTarget as HTMLInputElement;
						const searchQuery = element.value.toLowerCase();
						setSearch(searchQuery);
					}}
					tags={tagProps}
					allPosts={allPosts}
					dropdownOptions={['title', 'description']}
					categories={categoriesTabs}
				/>
				{/* {categoryData()} */}
				{/* <CardFilter filter={filter} setFilter={setFilter} /> */}
				<div className='items-center content-center justify-center block max-w-full mx-auto my-portfolioH2F'>
					{allPosts.length > 0 && <Cards posts={filteredCompanies} />}
				</div>

				<Footer />
			</MediaContextProvider>
		</Fragment>
	);
};



interface StaticProps extends GetStaticProps {
	preview: boolean;
	context: any;
	field: PostObjectsConnectionOrderbyEnum;
	order: OrderEnum;
	desiredCategory: string;
}

const { TITLE, AUTHOR, DATE, MODIFIED } = PostObjectsConnectionOrderbyEnum;
const { ASC, DESC } = OrderEnum;
export const getStaticProps = async ({
	preview = false,
	// context,
	field = TITLE || AUTHOR || DATE || MODIFIED,
	order = ASC || DESC,
	desiredCategory
}: StaticProps) => {
	// console.log(context);
	// const allPosts = await getAllPostsForHomeAlphabetical({
	// 	preview,
	// 	field,
	// 	order
	// });
	// const tagsAndPosts = await getTagAndPosts();
	// const categories = await getCategories();

	const allPostsWordPress: ApolloClient<NormalizedCacheObject> = initializeApollo();
	const categoriesWordPress: ApolloClient<NormalizedCacheObject> = initializeApollo();
	const tagsWordPress: ApolloClient<NormalizedCacheObject> = initializeApollo();

	const allPostsQuery: ApolloQueryResult<AllPosts> = await allPostsWordPress.query({
		query: ALL_POSTS,
		variables: { field: 'TITLE', order: 'ASC' }
	}) 

	try {
		await categoriesWordPress.query({
			query: ALL_CATEGORIES,
			variables: allCategoryQueryVariables
		});
	} catch (error) {
		console.log('Error with category query: ', error);
	}

	try {
	await tagsWordPress.query({
		query: ALL_TAGS,
		variables: allTagQueryVariables
	});
} catch (err) {
	console.log('error with tags query: ', err)
}

	const allPostsCache: AllPosts_posts | null = allPostsQuery.data.posts != null ? allPostsQuery.data.posts : null; 

	const removeNode = (array: AllPosts_posts_edges[]): AllPosts_posts_edges_node[] => {
		let newArray = [];

		for (let i of array ) {
			const arrayIndexData = i.node
			newArray.push(arrayIndexData)
		}
		return newArray
	}

	const allPostsCacheNoNode: AllPosts_posts_edges_node[] = removeNode(allPostsCache.edges)
	// const userOptions = await getAllPostsForHomeSorted(preview, field);
	// IMPORTANT https://nextjs.org/blog/next-9-5#stable-incremental-static-regeneration
	// console.log('identity of cache: ' cache.identify(categoriesWordPress))

	return {
		props: {
			// initialApolloState: apolloClient.cache.extract(),
			allPosts: await allPostsCacheNoNode,
			preview,
			tagsAndPosts: await tagsWordPress.cache.extract(),
			field,
			order,
			// categories: await apolloClient.cache.extract().ROOT_QUERY.categories,
			initializeApollo: await categoriesWordPress.cache.extract()
		},
		revalidate: 10
	};
};

export default Index;
// https://github.com/evgeny-t/test-get-static-props/blob/master/pages/index.tsx
// force invalidation
// https://getstarted.sh/with/nextjs-incremental-static-regeneration/4
