import { CMS_NAME, CMS_URL } from '../lib/constants';
import Link from 'next/link';
import { link } from 'fs';
interface SortRef {
	href: string;
	label: string;
}

const links: SortRef[] = [
	{
		href: '/',
		label: 'Title Ascending'
	},
	{
		href: '/reverse-alphabetical',
		label: 'Title Descending'
	},
	{
		href: '/newest',
		label: 'Date Newest'
	},
	{
		href: '/oldest',
		label: 'Date Oldest'
	}
];

// import {
// 	getAllPostsForHomeDateAsc,
// 	getAllPostsForHomeDateDesc,
// 	getAllPostsForHomeAlphabetical,
// 	getAllPostsForHomeReverseAlphabetical
// } from '../lib/api';

// type Sorting = {
// 	sort: any;
// 	title: string;
// };

// const handleClick = (e: Event) => {
// 	e.preventDefault();
// };

// const sorts: Sorting[] = [
// 	{
// 		sort: getAllPostsForHomeDateAsc(),
// 		title: 'date ascending (most recent)'
// 	},
// 	{
// 		sort: getAllPostsForHomeDateDesc(),
// 		title: 'date descending (least recent)'
// 	},
// 	{
// 		sort: getAllPostsForHomeAlphabetical(),
// 		title: 'alphabetical order'
// 	},
// 	{
// 		sort: getAllPostsForHomeReverseAlphabetical(),
// 		title: 'reverse-alphabetical order'
// 	}
// ];

export default function Intro() {
	const sortingMap = links.map(sorting => (
		<div
			key={sorting.label}
			className='flex flex-row mx-3 mt-2 text-center items-center justify-center'
		>
			<Link href={sorting.href}>
				<button
					key={sorting.label}
					className='block bg-white px-2 hover:opacity-75 text-iconHover border-1 border-iconHover font-bold font-polished duration-300 transition-colors lg:mb-0 rounded'
					aria-label='Documentation'
					onClick={() => sorting}
				>
					{sorting.label}
				</button>
			</Link>
		</div>
	));
	return (
		<>
			<h1 className='text-6xl sm:text-6xl xs:text-5xl font-bold text-center justify-center font-polished tracking-tight leading-tight mt-50'>
				<Link href='/'>
					<a
						className='hover:text-cimaRed cursor-text select-text text-black'
						aria-label='Chicago Independent Media Alliance'
					>
						Chicago Independent Media Alliance
					</a>
				</Link>
			</h1>
			<h2 className='text-center justify-center text-black text-lg mt-5 px-2 font-polished'>
				Powered by{' '}
				<a
					href='https://nextjs.org/'
					className='underline hover:text-success duration-500 transition-colors'
					aria-label='Next JS'
					target='__blank'
				>
					Next.js
				</a>
				,{' '}
				<a
					href='https://www.typescriptlang.org/'
					className='underline hover:text-success duration-500 transition-colors'
					aria-label='TypeScript'
					target='__blank'
				>
					TypeScript
				</a>
				,{' '}
				<a
					href='https://graphql.org/'
					className='underline hover:text-success duration-500 transition-colors'
					aria-label='GraphQL'
					target='__blank'
				>
					GraphQL
				</a>
				,{' '}
				<a
					href='https://tailwindcss.com/'
					className='underline hover:text-success duration-500 transition-colors'
					aria-label='Tailwind CSS'
					target='__blank'
				>
					Tailwind&nbsp;CSS
				</a>
				,{' '}
				<a
					href={CMS_URL}
					className='underline hover:text-success duration-500 transition-colors'
					aria-label={`${CMS_NAME}`}
					target='__blank'
				>
					{CMS_NAME}
				</a>
				,&nbsp;and{' '}
				<a
					href='https://vercel.com/'
					className='underline hover:text-success duration-500 transition-colors'
					aria-label='Vercel'
					target='__blank'
				>
					Vercel
				</a>
				.
			</h2>
			<hr />
			<h2 className='text-2xl sm:text-2xl xs:text-2xl font-bold text-center justify-center font-polished tracking-tight leading-tight mt-4'>
				Sort Directory by Company Title or Date Published
			</h2>
			<div className='flex flex-row justify-center items-center align-middle'>
				{sortingMap}
			</div>
			<hr className='border-accent-2 w-full mt-8' />
		</>
	);
}
