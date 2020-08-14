import Head from 'next/head';
import Container from '../components/container';
import Intro from '../components/intro';
import Layout from '../components/layout';
import {
	getAllPostsForHomeAlphabetical,
	getTagAndPosts,
	getCategoriesAndPosts,
	getAllPostsForHomeSorted,
	getAllPostsTitleDesc
} from '../lib/api';
import {
	CMS_NAME,
	CLIENT_NAME,
	SELECT_DROPDOWN_OPTIONS
} from '../lib/constants';
import Header from '../components/header';
import SearchBox from '../components/search-box';
import Cards from '../components/more-cards';
// import CustomSelect, { Field } from '../components/custom-select';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export enum Field {
	TITLE = 'TITLE',
	MODIFIED = 'MODIFIED',
	DATE = 'DATE'
}

// enum Order {
// 	ASC = 'ASC',
// 	DESC = 'DESC'
// }

export interface CustomDropDown {
	field: Field;
	color: string;
}

const fieldVals: CustomDropDown[] = [
	{
		field: Field.DATE,
		color: 'white'
	},
	{
		field: Field.MODIFIED,
		color: 'white'
	},
	{
		field: Field.TITLE,
		color: 'white'
	}
];
interface IndexProps {
	allPosts: any;
	preview: boolean;
	props: string | number;
	tagsAndPosts: any;
	categoriesAndPosts: any;
	// slug: string | number;
	field: string;
	order: string;
	// setField: Promise<any>;
	// color: string;
}


export default function Index({
	allPosts: { edges },
	preview,
	tagsAndPosts,
	categoriesAndPosts,
	props,
	field,
	order
}: // field,
// setField,
// color
IndexProps) {
	let morePosts = edges.slice(0);
	console.log('tags:', tagsAndPosts);
	console.log('categories:', categoriesAndPosts);
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
					{/* <SearchBox
						allPosts={morePosts}
						dropdownOptions={SELECT_DROPDOWN_OPTIONS}
					/> */}
					<div className='max-w-5xl mt-5 mb-5 grid mx-auto content-center justify-center items-center text-center'>
						{morePosts.length > 0 && <Cards posts={morePosts} />}
					</div>
				</Container>
			</Layout>
		</>
	);
}

type StaticProps = {
	preview: boolean;
	field: string;
	order: string;
};

export async function getStaticProps({
	preview = false,
	field = 'TITLE',
	order = 'DESC'
}: StaticProps) {
	const allPosts = await getAllPostsForHomeAlphabetical(preview, field, order);
	const tagsAndPosts = await getTagAndPosts();
	const categoriesAndPosts = await getCategoriesAndPosts();
	// const userOptions = await getAllPostsForHomeSorted(preview, field);

	return {
		props: {
			allPosts,
			preview,
			tagsAndPosts,
			categoriesAndPosts,
			field,
			order,

		}
	};
}