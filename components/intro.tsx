import { CMS_NAME, CMS_URL } from '../lib/constants';
import Link from 'next/link';

export default function Intro() {
	return (
		<>
			<h1 className='text-4xl sm:text-4xl xs:text-4xl font-bold text-center justify-center font-serif tracking-tight leading-tight mt-4'>
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
		</>
	);
}
