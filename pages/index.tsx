import Head from 'next/head';
import { useState, useEffect, SyntheticEvent, Fragment } from 'react';
import { GetStaticProps } from 'next';
import {
	ApolloClient,
	ApolloQueryResult,
	InMemoryCache,
	NormalizedCacheObject,
	useQuery
} from '@apollo/client';
import { initializeApollo } from '@lib/apollo';
import {
	ALL_CATEGORIES,
	allCategoryQueryVariables
} from '@graphql/api-all-categories';
import { allTagQueryVariables, ALL_TAGS } from '@graphql/api-all-tags';
import {
	AllCategoriesVariables,
	AllCategories_categories_edges
} from '@graphql/__generated__/AllCategories';
import { CMS_NAME, CLIENT_NAME } from '@lib/constants';
import { Lead } from '@components/Lead';
import { SearchBox } from '@components/index';
import Cards from '@components/Card/card-coalescence';
import { MediaContextProvider } from '@lib/window-width';
import Footer from '@components/Footer/footer';
import {
	PostObjectsConnectionOrderbyEnum,
	OrderEnum
} from '../types/graphql-global-types';
import { ALL_POSTS, Field, Order } from '../graphql/api-all-posts';
import {
	AllPosts,
	AllPostsVariables,
	AllPosts_posts,
	AllPosts_posts_edges,
	AllPosts_posts_edges_node
} from '../graphql/__generated__/AllPosts';
import {
	AllCategories,
	AllCategories_categories
} from '../graphql/__generated__/AllCategories';
import {
	AllTags,
	AllTagsVariables,
	AllTags_tags,
	AllTags_tags_edges
} from '../graphql/__generated__/AllTags';

interface StaticProps extends GetStaticProps {
	preview: boolean;
	context: any;
	field: PostObjectsConnectionOrderbyEnum;
	order: OrderEnum;
	desiredCategory: string;
}

export const getStaticProps = async ({
	preview = false,
	// context,
	// field = TITLE || AUTHOR || DATE || MODIFIED,
	// order = ASC || DESC,
	desiredCategory
}: StaticProps) => {
	const apolloClient = initializeApollo();

	await apolloClient.query({
		query: ALL_POSTS,
		variables: { field: 'TITLE', order: 'ASC' }
	});

	await apolloClient.query({
		query: ALL_CATEGORIES,
		variables: allCategoryQueryVariables
	});

	await apolloClient.query({
		query: ALL_TAGS,
		variables: allTagQueryVariables
	});

	// IMPORTANT https://nextjs.org/blog/next-9-5#stable-incremental-static-regeneration
	return {
		props: {
			initializeApolloState: apolloClient.cache.extract(),
			// allPosts: allPostsCache?.edges,
			preview
			// tags: tagsQuery.cache.extract(),
			// field: TITLE || AUTHOR || DATE || MODIFIED,
			// order: ASC || DESC,
			// categories: categoriesCache?.edges
		},
		revalidate: 10
	};
};

interface IndexProps {
	initializeApollo: NormalizedCacheObject;
	preview: boolean;
	field: PostObjectsConnectionOrderbyEnum;
	order: OrderEnum;
}

const Index = ({ field, order, preview }: IndexProps): JSX.Element => {
	const { TITLE, AUTHOR, DATE, MODIFIED } = PostObjectsConnectionOrderbyEnum;
	const { ASC, DESC } = OrderEnum;

	//Using useQuery to query against the apollo cache and grab All the posts, categories, and tags
	const multipleQueries = (): [
		ApolloQueryResult<AllPosts | undefined>,
		ApolloQueryResult<AllCategories | undefined>,
		ApolloQueryResult<AllTags | undefined>
	] => {
		const query1 = useQuery<AllPosts, AllPostsVariables>(ALL_POSTS, {
			variables: { field: TITLE, order: ASC }
		});
		const query2 = useQuery<AllCategories, AllCategoriesVariables>(
			ALL_CATEGORIES,
			{ variables: allCategoryQueryVariables }
		);
		const query3 = useQuery<AllTags, AllTagsVariables>(ALL_TAGS, {
			variables: allTagQueryVariables
		});

		return [query1, query2, query3];
	};

	//destructring the data out of the queries and them navigating in it below to
	const queryArray = multipleQueries();
	const { data: postsData, error: postsDataError } = queryArray[0];
	const { data: categoriesData, error: categoriesDataError } = queryArray[1];
	const { data: tagsData, error: tagsDataError } = queryArray[2];

	const allPosts =
		postsData != null && postsData.posts != null ? postsData?.posts?.edges : null;
	const categories =
		categoriesData != null &&
		categoriesData.categories != null &&
		categoriesData.categories.edges != null
			? categoriesData.categories.edges
			: null;
	const tags = tagsData?.tags?.edges;

	const [filterQuery, setFilterQuery] = useState('title');
	const [allCompanies, setAllCompanies] = useState<
		(AllPosts_posts_edges | null)[] | null
	>(allPosts);
	const [filteredCompanies, setFilteredCompanies] = useState<
		(AllPosts_posts_edges | null)[] | null
	>(allPosts);
	const [search, setSearch] = useState<string | null>(null);
	const [searchCategory, setSearchedCategory] = useState<string | null>(null);
	const [filter, setFilter] = useState(TITLE);

	console.log('Posts in index: ', allPosts);
	console.log('Tags in index: ', tags);
	console.log('categories in index: ', categories);

	useEffect(() => {
		if (!search || allPosts === null) {
			setFilteredCompanies(allCompanies);
		} else {
			if (filterQuery === 'title') {
				const filterCompanies = allPosts.filter(
					(company: AllPosts_posts_edges | null) => {
						const companyTitle =
							company != null && company.node != null && company.node.title != null
								? company.node.title
								: '';
						if (companyTitle.toLowerCase().includes(search)) {
							return company;
						} else {
							return null;
						}
					}
				);
				setFilteredCompanies(filterCompanies);
			} else if (filterQuery === 'description') {
				const filterCompanies = allPosts.filter(
					(company: AllPosts_posts_edges | null) => {
						const companyDescription =
							company != null && company.node != null && company.node.excerpt != null
								? company.node.excerpt
								: '';
						if (companyDescription.toLowerCase().includes(search)) {
							return company;
						} else {
							return null;
						}
					}
				);
				setFilteredCompanies(filterCompanies);
			} else {
				setFilteredCompanies(allCompanies);
			}
		}
	}, [filterQuery, search]);

	return (
		<Fragment>
			<MediaContextProvider>
				<Lead />

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
					tags={tags}
					allPosts={allPosts}
					dropdownOptions={['title', 'description']}
					categories={categories}
				/>
				{/* {categoryData()}
				{/* <CardFilter filter={filter} setFilter={setFilter} /> */}
				<div className='items-center content-center justif y-center block max-w-full mx-auto my-portfolioH2F'>
					{allPosts != null && allPosts.length > 0 ? (
						<Cards posts={filteredCompanies} />
					) : (
						'No Posts Avaiable at this time'
					)}
					{/* <Cards /> */}
				</div>

				<Footer />
			</MediaContextProvider>
		</Fragment>
	);
};

export default Index;

// https://github.com/evgeny-t/test-get-static-props/blob/master/pages/index.tsx
// force invalidation
// https://getstarted.sh/with/nextjs-incremental-static-regeneration/4
