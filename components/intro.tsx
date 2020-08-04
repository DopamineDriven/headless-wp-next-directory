import { CMS_NAME, CMS_URL } from '../lib/constants';
import Link from 'next/link';

export default function Intro() {
	return (
		<section className='flex-col md:flex-row flex items-center md:justify-between mt-8 mb-8 md:mb-12'>
			<h1 className='md:text-6xl font-bold text-center font-serif tracking-tight md:tracking-tighter leading-tight mb-8 mt-8'>
				<Link href='/'>
					<a className='hover:text-cimaRed cursor-text select-text text-black px-8'>
						Chicago Independent Media Alliance
					</a>
				</Link>
			</h1>
			<hr />
			<h2 className='text-center text-black md:text-left text-sm mt-5 md:pl-8'>
				A statically generated blog powered by{' '}
				<a
					href='https://nextjs.org/'
					className='underline hover:text-success duration-200 transition-colors'
				>
					Next.js
				</a>{' '}
				and{' '}
				<a
					href={CMS_URL}
					className='underline hover:text-success duration-200 transition-colors'
				>
					{CMS_NAME}
				</a>
				.
			</h2>
		</section>
	);
}
