@jlovejo2

- https://graphql-code-generator.com/docs/getting-started/index
- https://dev.to/kendalmintcode/using-wordpress-as-a-headless-cms-with-next-js-2h5p

```tsx
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
import Cards from 'components/cards-coalesced';
import TagProps from 'types/tag';
import CategoryProps from 'types/category';
import { PostsProps, AllPostsProps } from 'types/posts';
import { MediaContextProvider } from 'lib/window-width';
// import Link from 'next/link';
import FieldEnum from 'types/enums/field-enum';
import OrderEnum from 'types/enums/order-enum';
import Footer from 'components/footer';

export type Field = 'TITLE' | 'MODIFIED' | 'DATE';

export type Order = 'ASC' | 'DESC';
interface IndexProps {
	allPosts: AllPostsProps;
	preview: boolean;
	tagsAndPosts: TagProps[];
	categories: CategoryProps[];
	field: Field;
	order: Order;
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
					tags={tagsAndPosts}
					allPosts={morePosts}
					dropdownOptions={['title', 'description']}
					categories={categories}
				/>
				<div className='items-center content-center justify-center block max-w-full mx-auto my-portfolioH2F'>
					{morePosts.length > 0 && <Cards posts={filteredCompanies} />}
				</div>

				<Footer />
			</MediaContextProvider>
		</Fragment>
	);
}

/*
type PostTypesListed =
	| 'title'
	| 'date'
	| 'slug'
	| 'featuredImage'
	| 'excerpt'
	| 'articleImage'
	| 'postTitle';
*/

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

export const getServerSideProps: GetServerSideProps = async props => {
	const { query, preview = false } = props;
	const field =
		query.field instanceof Array ? query.field.join(',') : query.field;
	const order =
		query.order instanceof Array ? query.order.join(',') : query.order;
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
```
