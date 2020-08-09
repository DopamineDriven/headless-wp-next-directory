import { CMS_NAME, CMS_URL } from '../lib/constants';
import Link from 'next/link';
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
	// const sortingMap = sorts.map(sorting => (
	// 	<button
	// 		key={sorting.title}
	// 		className='mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-500 transition-colors mb-6 lg:mb-0 rounded'
	// 		aria-label='Documentation'
	// 		onClick={() => sorting.sort}
	// 	>
	// 		{sorting.title}
	// 	</button>
	// ));
	return (
		<>
			<h1 className='text-6xl sm:text-6xl xs:text-5xl font-bold text-center justify-center font-body tracking-tight leading-tight mt-4'>
				<Link href='/'>
					<a
						className='hover:text-cimaRed cursor-text select-text text-black'
						aria-label='Chicago Independent Media Alliance'
					>
						Chicago Independent Media Alliance
					</a>
				</Link>
			</h1>
			<h2 className='text-center justify-center text-black text-lg mt-5 px-2'>
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
			{/* <hr className='border-accent-2 w-full mt-8' />
			<h2 className='text-2xl sm:text-2xl xs:text-2xl font-bold text-center justify-center font-body tracking-tight leading-tight mt-4'>
				Sort Directory by Company Title or Date Published
			</h2> */}
			{/* <div className='grid-cols-4 inline-block px-4 py-2 justify-center items-center align-middle'>
				{sortingMap}
			</div> */}
		</>
	);
}
