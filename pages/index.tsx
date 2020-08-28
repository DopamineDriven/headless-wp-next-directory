import Head from 'next/head';
import { useState, useEffect, ChangeEvent, SyntheticEvent } from 'react';
import Container from '../components/container';
import Intro from '../components/intro';
import Layout from '../components/layout';
import {
	getAllPostsForHomeAlphabetical,
	getTagAndPosts,
	getCategories,
	getAllPostsForCategory
	// getAllPostsForHomeSorted,
	// getAllPostsTitleDesc
} from '../lib/api';
import { CMS_NAME, CLIENT_NAME } from '../lib/constants';
import Header from '../components/header';
import HeroPost from '../components/hero-post';
import SearchBox from '../components/search-box';
import Cards from '../components/more-cards';
import TagProps from '../types/tag';
import CategoryProps from '../types/category';
import { PostsProps } from '../types/posts';
// import CustomSelect, { Field } from '../components/custom-select';
// import Link from 'next/link';

interface IndexProps {
	allPosts: any;
	preview: boolean;
	props: string | number;
	tagsAndPosts: TagProps[];
	categories: CategoryProps[];
}

export default function Index({
	allPosts: { edges },
	preview,
	tagsAndPosts,
	categories,
	props
}: IndexProps) {
	const heroPost = edges[0]?.node;
	let morePosts = edges.slice(0);

	const [filterQuery, setFilterQuery] = useState('');
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
			} else {
				console.log('not title');
				setFilteredCompanies(allCompanies);
			}
		}
	}, [filterQuery, search]);

	const handleRerenderPostsForCategory = (evt: SyntheticEvent) => {
		//this is necessary because Element, document, and window can be an EventTarget and they do not support dataset.
		//So the if statement is looking specifically for an anchor tag element to exist as target.
		if (!(evt.target instanceof HTMLAnchorElement)) {
			return;
		}
		console.log('dataset value: ', evt.target.dataset['categoryname']);
		const categoryName = evt.target.dataset['categoryname'];

		if (!categoryName) {
			console.log('no category name in dataset...');
			return;
		}

		setSearchedCategory(categoryName);

		// const categoryObj = categories.filter((category, index) => {
		// 	console.log(category.node.posts);
		// 	category.node.name === categoryName;
		// });

		// console.log(categoryObj[0]);

		// const postsForCategory = categoryObj[0].nodes.posts
		// setFilteredCompanies(companiesBasedOnCategory);
	};

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
						dropdownOptions={['choose an option', 'title', '2222222']}
						categories={categories}
						handleCategoryClick={handleRerenderPostsForCategory}
					/>
					<div className='max-w-5xl mt-5 mb-5 grid mx-auto content-center justify-center items-center text-center'>
						{morePosts.length > 0 && <Cards posts={filteredCompanies} />}
					</div>
				</Container>
			</Layout>
		</>
	);
}

enum Field {
	TITLE = 'TITLE',
	MODIFIED = 'MODIFIED',
	DATE = 'DATE'
}

enum Order {
	ASC = 'ASC',
	DESC = 'DESC'
}

type StaticProps = {
	preview: boolean;
	context: any;
	field: any;
	order: any;
	desiredCategory: string;
};

export async function getServerSideProps({
	preview = false,
	context,
	field = 'TITLE',
	order = 'ASC',
	desiredCategory
}: StaticProps) {
	console.log(context);
	const allPosts = await getAllPostsForHomeAlphabetical(preview, field, order);
	const tagsAndPosts = await getTagAndPosts();
	const categories = await getCategories();
	// const postsForCategory = await getAllPostsForCategory(desiredCategory);
	// const userOptions = await getAllPostsForHomeSorted(preview, field);

	return {
		props: {
			allPosts,
			preview,
			tagsAndPosts,
			categories
			// postsForCategory
		}
	};
}

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
// 	// 		className='mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-500 transition-colors mb-6 lg:mb-0 rounded'
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
// 					{/* <hr className='border-accent-2 w-full mt-8' />
// 					<h2 className='text-2xl sm:text-2xl xs:text-2xl font-bold text-center justify-center font-body tracking-tight leading-tight mt-4'>
// 						Sort Directory by Title or Date Published
// 					</h2>
// 					<div className='grid-cols-4 inline-block px-4 py-2 justify-center items-center align-middle'>
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
