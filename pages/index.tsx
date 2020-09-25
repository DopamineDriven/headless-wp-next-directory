import Head from 'next/head';
import {
	useState,
	useEffect,
	ChangeEvent,
	SyntheticEvent,
	Fragment
} from 'react';
import Container from 'components/container';
import Intro from 'components/intro';
import Layout from 'components/layout';
import {
	GetServerSideProps,
	GetStaticProps,
	InferGetServerSidePropsType
} from 'next';
import {
	getAllPostsForHomeAlphabetical,
	getTagAndPosts,
	getCategories
	// getAllPostsForHomeSorted,
	// getAllPostsTitleDesc
} from 'lib/api-ts';
import { CMS_NAME, CLIENT_NAME } from 'lib/constants';
import Header from 'components/lead';
// import HeroPost from '../components/hero-post';
import SearchBox from 'components/search-box';
import Cards from 'components/more-cards';
import TagProps from 'types/tag';
import CategoryProps from 'types/category';
import { PostsProps, AllPostsProps } from 'types/posts';
import { MediaContextProvider } from 'lib/window-width';
// import Link from 'next/link';
import FieldEnum from 'types/enums/field-enum';
import OrderEnum from 'types/enums/order-enum';

interface IndexProps {
	allPosts: AllPostsProps;
	preview: boolean;
	tagsAndPosts: TagProps[];
	categories: CategoryProps[];
}

export default function Index({
	allPosts: { edges },
	preview,
	tagsAndPosts,
	categories
}: IndexProps) {
	const heroPost = edges[0]?.node;
	let morePosts = edges.slice(0);

	const [filterQuery, setFilterQuery] = useState('title');
	const [allCompanies, setAllCompanies] = useState<PostsProps[]>(morePosts);
	const [filteredCompanies, setFilteredCompanies] = useState<PostsProps[]>(
		morePosts
	);
	const [search, setSearch] = useState<string | null>(null);
	const [searchCategory, setSearchedCategory] = useState<string | null>(null);

	// console.log('tags:', tagsAndPosts);
	// console.log('categories:', categoriesAndPosts);

	useEffect(() => {
		if (!search) {
			setFilteredCompanies(allCompanies);
		} else {
			if (filterQuery === 'title') {
				console.log(filteredCompanies);
				const filterCompanies = edges.filter((company: PostsProps) => {
					//following wp-graphql types, went into basePost type and performed a patch to change type of title from RawOrRender to string.
					//this was done so that toLowerCase() and includes() functions coudl work
					const companyTitle: any = company.node.title;
					if (companyTitle.toLowerCase().includes(search)) {
						console.log('company title: ', companyTitle);
						return company;
					} else {
						return null;
					}
				});
				setFilteredCompanies(filterCompanies);
			} else if (filterQuery === 'description') {
				const filterCompanies = edges.filter((company: PostsProps) => {
					//following wp-graphql types, went into basePost type and performed a patch to change type of title from RawOrRender to string.
					//this was done so that toLowerCase() and includes() functions coudl work
					const companyDescription: any = company.node.excerpt;
					if (companyDescription.toLowerCase().includes(search)) {
						console.log('company description: ', companyDescription);
						return company;
					} else {
						return null;
					}
				});
				setFilteredCompanies(filterCompanies);
			} else {
				console.log('not title');
				setFilteredCompanies(allCompanies);
			}
		}
	}, [filterQuery, search]);

	return (
		<Fragment>
			<MediaContextProvider>
				<Header />
				<Layout preview={preview}>
					<Head>
						<title>
							{CLIENT_NAME} landing page via {CMS_NAME}
						</title>
					</Head>
					<Container>
						<Intro />
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
							tags={tagsAndPosts}
							allPosts={morePosts}
							dropdownOptions={['title', 'description']}
							categories={categories}
						/>
						<div className='grid items-center content-center justify-center max-w-5xl mx-auto mt-5 mb-5 text-center'>
							{morePosts.length > 0 && <Cards posts={filteredCompanies} />}
						</div>
					</Container>
				</Layout>
			</MediaContextProvider>
		</Fragment>
	);
}

export enum Field {
	TITLE = 'TITLE',
	MODIFIED = 'MODIFIED',
	DATE = 'DATE'
}

export enum Order {
	ASC = 'ASC',
	DESC = 'DESC'
}

interface StaticProps extends GetServerSideProps {
	preview: boolean;
	context: any;
	field: Field;
	order: Order;
	desiredCategory: string;
}

/*
type PostTypesListed =
	| 'title'
	| 'date'
	| 'slug'
	| 'coverImage'
	| 'excerpt'
	| 'articleImage'
	| 'postTitle';
*/

const { TITLE, MODIFIED, DATE } = Field;
const { ASC, DESC } = Order;

// 09/12/20 --- Note
// test ISR (incremental static regeneration)
// this uses revalidate in getStaticProps and is a hybrid method

// ISR usage -> replaced getServerSideProps with getStaticProps success

/*
IMPORTANT
@jlovejo2 check out this link...seems very promising for systematically deriving GQL types from lib/api
https://github.com/vercel/next.js/pull/11842/files
IMPORTANT
*/

export const getServerSideProps = async ({
	preview = false,
	// context,
	field = MODIFIED || TITLE || DATE,
	order = ASC || DESC,
	desiredCategory
}: StaticProps & GetServerSideProps) => {
	// console.log(context);
	const allPosts = await getAllPostsForHomeAlphabetical({
		preview,
		field,
		order
	});
	const tagsAndPosts = await getTagAndPosts();
	const categories = await getCategories();
	// const userOptions = await getAllPostsForHomeSorted(preview, field);
	// IMPORTANT https://nextjs.org/blog/next-9-5#stable-incremental-static-regeneration
	return {
		props: {
			allPosts,
			preview,
			tagsAndPosts,
			field,
			order,
			categories,
			revalidate: 1
		}
	};
};

// import Head from 'next/head';
// import Container from '../components/container';
// import Intro from '../components/intro';
// import Layout from '../components/layout';
// import {
// 	getTagAndPosts,
// 	getCategoriesAndPosts,
// 	// getAllPostsForHomeDateAsc,
// 	// getAllPostsForHomeDateDesc,
// 	getAllPostsForHomeAlphabetical,
// 	// getAllPostsForHomeReverseAlphabetical
// } from '../lib/api';
// import {
// 	CMS_NAME,
// 	CLIENT_NAME,
// 	SELECT_DROPDOWN_OPTIONS
// } from '../lib/constants';
// import Header from '../components/header';
// import SearchBox from '../components/search-box';
// import Cards from '../components/more-cards';
// import { GetStaticProps } from 'next';

// type Sorting = {
// 	sort: any;
// 	title: string;
// };

// // const sortArrayObjects: Sorting[] = [
// // 	{
// // 		sort: getAllPostsForHomeDateAsc(),
// // 		title: 'date ascending (most recent)'
// // 	},
// // 	{
// // 		sort: getAllPostsForHomeDateDesc(),
// // 		title: 'date descending (least recent)'
// // 	},
// // 	{
// // 		sort: getAllPostsForHomeAlphabetical(),
// // 		title: 'alphabetical order'
// // 	},
// // 	{
// // 		sort: getAllPostsForHomeReverseAlphabetical(),
// // 		title: 'reverse-alphabetical order'
// // 	}
// // ];

// interface IndexProps {
// 	allPosts: any;
// 	preview: boolean;
// 	props: string | number;
// 	tagsAndPosts: any;
// 	categoriesAndPosts: any;
// }

// export default function Index({
// 	allPosts: { edges },
// 	preview,
// 	tagsAndPosts,
// 	categoriesAndPosts,
// 	props
// }: IndexProps) {
// 	let morePosts = edges.slice(0);
// 	console.log(tagsAndPosts);
// 	console.log(categoriesAndPosts);

// 	// const sortingMap = sortArrayObjects.map(sorting => (
// 	// 	<button
// 	// 		key={sorting.title}
// 	// 		className='px-12 py-3 mx-3 mb-6 font-bold text-white transition-colors duration-500 bg-black border border-black rounded hover:bg-white hover:text-black lg:px-8 lg:mb-0'
// 	// 		aria-label='sorting-functions'
// 	// 		onClick={preventDefault => sorting.sort(preventDefault)}
// 	// 	>
// 	// 		{sorting.title}
// 	// 	</button>
// 	// ));

// 	return (
// 		<>
// 			<Header props={props} />
// 			<Layout preview={preview}>
// 				<Head>
// 					<title>
// 						{CLIENT_NAME} landing page via {CMS_NAME}
// 					</title>
// 				</Head>
// 				<Container>
// 					<Intro />
// 					<SearchBox
// 						allPosts={morePosts.edges.categories}
// 						dropdownOptions={SELECT_DROPDOWN_OPTIONS}
// 					/>
// 					{/* <hr className='w-full mt-8 border-accent-2' />
// 					<h2 className='justify-center mt-4 text-2xl font-bold leading-tight tracking-tight text-center sm:text-2xl xs:text-2xl font-body'>
// 						Sort Directory by Title or Date Published
// 					</h2>
// 					<div className='items-center justify-center inline-block grid-cols-4 px-4 py-2 align-middle'>
// 						{sortingMap}
// 					</div> */}
// 					{morePosts.length > 0 && <Cards posts={morePosts} />}
// 				</Container>
// 			</Layout>
// 		</>
// 	);
// }

// type StaticProps = {
// 	preview: boolean;
// };

// type Data = {
// 	res: Response;
// };

// export const getServerSideProps: GetServerSideProps = async ({
// 	preview = false
// }) => {
// 	const allPostsAlphabetized = await getAllPostsForHomeAlphabetical(preview);
// 	const allPostsReverseAlphabetized = await getAllPostsForHomeReverseAlphabetical(
// 		preview
// 	);
// 	const allPostsDateAsc = await getAllPostsForHomeDateAsc(preview);
// 	const allPostsDateDesc = await getAllPostsForHomeDateDesc(preview);
// 	const data: any = {
// 		allPostsAlphabetized,
// 		allPostsReverseAlphabetized,
// 		allPostsDateAsc,
// 		allPostsDateDesc
// 	};

// 	return {
// 		props: {
// 			data
// 		}
// 	};
// // };

// export async function getStaticProps({ preview = false }: StaticProps) {
// 	const tagsAndPosts = await getTagAndPosts();
// 	const categoriesAndPosts = await getCategoriesAndPosts();
// 	const allPostsAlphabetized = await getAllPostsForHomeAlphabetical(preview);
// 	// const allPostsReverseAlphabetized = await getAllPostsForHomeReverseAlphabetical(
// 	// 	preview
// 	// );
// 	// const allPostsDateAsc = await getAllPostsForHomeDateAsc(preview);
// 	// const allPostsDateDesc = await getAllPostsForHomeDateDesc(preview);
// 	const data: any = {
// 		allPostsAlphabetized
// 		// allPostsReverseAlphabetized,
// 		// allPostsDateAsc,
// 		// allPostsDateDesc
// 	};

// 	return {
// 		props: { allPostsAlphabetized, preview, tagsAndPosts, categoriesAndPosts }
// 	};
// }
// /*
// /*
// interface IndexProps {
// 	allPosts: any;
// 	preview: boolean;
// 	props: string | number;
// 	tagsAndPosts: any;
// 	categoriesAndPosts: any;
// }

// export default function Index({
// 	allPosts: { edges },
// 	preview,
// 	tagsAndPosts,
// 	categoriesAndPosts,
// 	props
// }: IndexProps) {
// 	const heroPost = edges[0]?.node;
// 	let morePosts = edges.slice(0);

// 	console.log(tagsAndPosts);
// 	console.log(categoriesAndPosts);

// 	return (
// 		<>
// 			<Header props={props} />
// 			<Layout preview={preview}>
// 				<Head>
// 					<title>
// 						{CLIENT_NAME} landing page via {CMS_NAME}
// 					</title>
// 				</Head>
// 				<Container>
// 					<Intro />
// 					<SearchBox
// 						allPosts={morePosts}
// 						dropdownOptions={SELECT_DROPDOWN_OPTIONS}
// 					/>
// 					{heroPost && (
// 						<HeroPost
// 							title={heroPost.title}
// 							coverImage={heroPost.featuredImage.node}
// 							date={heroPost.date}
// 							author={heroPost.author.node}
// 							slug={heroPost.slug}
// 							excerpt={heroPost.excerpt}
// 						/>
// 					)}
// 					{morePosts.length > 0 && <Cards posts={morePosts} />}
// 				</Container>
// 			</Layout>
// 		</>
// 	);
// }
// /*
// */
