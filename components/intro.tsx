import { CMS_NAME, CMS_URL } from '../lib/constants';
import Link from 'next/link';

export default function Intro() {
	return (
		<>
			<h1 className='text-6xl sm:text-6xl xs:text-6xl font-bold text-center font-serif tracking-tight leading-tight mt-8'>
				<Link href='/'>
					<a className='hover:text-cimaRed cursor-text select-text text-black'>
						Chicago Independent Media Alliance
					</a>
				</Link>
			</h1>
			<h2 className='text-center justify-center text-black text-lg mt-5 px-2'>
				Powered by{' '}
				<a
					href='https://nextjs.org/'
					className='underline hover:text-success duration-500 transition-colors'
				>
					Next.js
				</a>
				,{' '}
				<a
					href='https://www.typescriptlang.org/'
					className='underline hover:text-success duration-500 transition-colors'
				>
					TypeScript
				</a>
				,{' '}
				<a
					href='https://graphql.org/'
					className='underline hover:text-success duration-500 transition-colors'
				>
					GraphQL
				</a>
				,{' '}
				<a
					href='https://tailwindcss.com/'
					className='underline hover:text-success duration-500 transition-colors'
				>
					Tailwind&nbsp;CSS
				</a>
				,{' '}
				<a
					href={CMS_URL}
					className='underline hover:text-success duration-500 transition-colors'
				>
					{CMS_NAME}
				</a>
				,&nbsp;and{' '}
				<a
					href='https://vercel.com/'
					className='underline hover:text-success duration-500 transition-colors'
				>
					Vercel
				</a>
				.
			</h2>
		</>
	);
}
